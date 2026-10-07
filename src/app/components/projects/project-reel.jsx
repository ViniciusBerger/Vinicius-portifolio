"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

export default function ProjectReel({ project }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [captionIndex, setCaptionIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const updatePreference = () => setMotionAllowed(!preference.matches && !connection?.saveData);

    updatePreference();
    preference.addEventListener?.("change", updatePreference);
    connection?.addEventListener?.("change", updatePreference);
    return () => {
      preference.removeEventListener?.("change", updatePreference);
      connection?.removeEventListener?.("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.15),
      { threshold: [0, 0.15, 0.35] }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const sync = () => {
      if (!motionAllowed || !inView || document.hidden) {
        video.pause();
        return;
      }
      video.play().catch(() => {
        // Mobile browsers may require the visitor to press Play.
      });
    };

    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, [motionAllowed, inView, videoFailed]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video || videoFailed) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }

  function updateScene(event) {
    const video = event.currentTarget;
    const time = video.currentTime;
    const index = (project.captions || []).reduce(
      (latest, caption, current) => time >= caption.at ? current : latest, 0
    );
    setCaptionIndex(index);
    if (video.duration && Number.isFinite(video.duration)) {
      setProgress(Math.min(100, time / video.duration * 100));
    }
  }

  const captions = project.captions || [];
  const caption = captions[captionIndex] || captions[0];
  const hasVideo = Boolean(project.video) && !videoFailed;

  return (
    <div
      className={"project-reel project-reel--" + project.motion + (hasVideo ? " project-reel--has-video" : "") + (playing ? " project-reel--playing" : "")}
      ref={containerRef}
      aria-label={project.title + " portfolio preview"}
    >
      <div className="project-reel-topbar">
        <span /><span /><span />
        <small>{project.sceneLabel}</small>
      </div>

      <div className="project-reel-stage">
        <Image
          className="project-reel-image"
          src={project.poster || project.image}
          alt={project.title + " product preview still"}
          fill
          sizes="(max-width: 1040px) 94vw, 58vw"
        />
        {hasVideo && (
          <video
            ref={videoRef}
            className="project-reel-video"
            poster={project.poster || project.image}
            muted
            loop
            playsInline
            preload="none"
            aria-label={project.title + " silent product preview"}
            onTimeUpdate={updateScene}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => { setCaptionIndex(0); setProgress(0); }}
            onError={() => setVideoFailed(true)}
          >
            <source src={project.video} type="video/mp4" />
          </video>
        )}
        {!project.video && <div className="project-reel-scan" aria-hidden="true" />}

        {caption && (
          <div className="project-reel-caption" aria-live="off">
            <span className="project-reel-caption-eyebrow">{project.title.toUpperCase()} / PRODUCT STORY</span>
            <strong key={project.title + "-" + captionIndex}>{caption.title}</strong>
            <small>{caption.detail}</small>
          </div>
        )}

        {project.isRecreation && (
          <span className="project-reel-concept">UI concept recreation · not app footage</span>
        )}

        {hasVideo && (
          <button
            className="project-reel-playback"
            type="button"
            onClick={togglePlayback}
            aria-label={(playing ? "Pause " : "Play ") + project.title + " preview"}
            aria-pressed={playing}
          >
            {playing ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" />}
            <span>{playing ? "Pause" : "Play"}</span>
          </button>
        )}
        {!hasVideo && <span className="project-reel-playback project-reel-playback--static">Preview still</span>}
      </div>
      {caption && (
        <div className="project-reel-mobile-caption" aria-hidden="true">
          <strong>{caption.title}</strong>
          <small>{caption.detail}</small>
        </div>
      )}
      <div className="project-reel-progress" aria-hidden="true">
        <span style={{ width: String(progress) + "%" }} />
      </div>
    </div>
  );
}
