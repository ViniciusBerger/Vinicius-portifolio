"use client";

import { useMemo, useState } from "react";
import { FiCheck, FiLock, FiZap } from "react-icons/fi";
import { achievements } from "../data/portfolio";

export default function EngineerProfile() {
  const [unlocked, setUnlocked] = useState([]);
  const unlockedSet = useMemo(() => new Set(unlocked), [unlocked]);

  const toggleAchievement = (id) => {
    setUnlocked((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  return (
    <section id="profile" className="section profile-section">
      <div className="shell profile-layout">
        <div className="profile-console">
          <p className="eyebrow">ENGINEER PROFILE</p>
          <div className="profile-player-card">
            <div className="profile-avatar">VB</div>
            <div>
              <small>PLAYER 01</small>
              <h2>Vini Berger</h2>
              <p>Full-Stack Software Developer</p>
            </div>
          </div>

          <div className="profile-progress">
            <div>
              <span>Achievements explored</span>
              <strong>{unlocked.length}/{achievements.length}</strong>
            </div>
            <div className="profile-progress-track">
              <span style={{ width: `${(unlocked.length / achievements.length) * 100}%` }} />
            </div>
          </div>

          <div className="profile-status-list">
            <span><i className="status-dot" /> available for software roles</span>
            <span><FiZap /> backend + full-stack focus</span>
          </div>
        </div>

        <div className="achievement-grid" aria-label="Engineering achievements">
          {achievements.map((achievement) => {
            const isUnlocked = unlockedSet.has(achievement.id);
            return (
              <button
                className={`achievement-card ${isUnlocked ? "achievement-card--unlocked" : ""}`}
                type="button"
                key={achievement.id}
                onClick={() => toggleAchievement(achievement.id)}
                aria-pressed={isUnlocked}
              >
                <div className="achievement-card-top">
                  <span>{achievement.code}</span>
                  <span>{isUnlocked ? <FiCheck /> : <FiLock />}</span>
                </div>
                <small>{achievement.signal}</small>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <div className="achievement-card-action">{isUnlocked ? "Unlocked" : "Tap to inspect"}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
