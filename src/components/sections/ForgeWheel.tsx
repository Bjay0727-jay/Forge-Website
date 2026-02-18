'use client';

import { useEffect, useRef } from 'react';

const nodes = [
  { cls: 'n-identify', label: 'Identify', tip: 'Identify threats, vulnerabilities, and assets across your environment.',
    icon: <><circle cx="11" cy="11" r="7"/><line x1="16" y1="16" x2="22" y2="22"/></> },
  { cls: 'n-test', label: 'Test', tip: 'Rigorous testing to verify controls meet federal compliance standards.',
    icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/><line x1="9" y1="11" x2="13" y2="11"/></> },
  { cls: 'n-monitor', label: 'Monitor', tip: 'Continuous monitoring with real-time security posture visibility.',
    icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></> },
  { cls: 'n-evaluate', label: 'Evaluate', tip: 'Evaluate control effectiveness against NIST, FedRAMP, and CMMC.',
    icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></> },
  { cls: 'n-protect', label: 'Protect', tip: 'Implement safeguards to protect critical assets and sensitive data.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
  { cls: 'n-plan', label: 'Plan', tip: 'Strategic planning and roadmap for security program milestones.',
    icon: <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></> },
  { cls: 'n-recover', label: 'Recover', tip: 'Incident response and recovery to restore operations rapidly.',
    icon: <><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></> },
  { cls: 'n-implement', label: 'Implement', tip: 'Deploy security solutions and compliant applications.',
    icon: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></> },
];

export default function ForgeWheel() {
  const wheelRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wheel = wheelRef.current;
    const tip = tipRef.current;
    if (!wheel || !tip) return;

    const nodeEls = wheel.querySelectorAll<HTMLDivElement>('.forge-wheel-node');
    const tipTitle = tip.querySelector('b');
    const tipText = tip.querySelector('span');

    nodeEls.forEach((n, i) => {
      n.style.opacity = '0';
      setTimeout(() => {
        n.style.transition = 'opacity .4s, transform .3s';
        n.style.opacity = '1';
      }, 300 + i * 70);

      n.addEventListener('mouseenter', () => {
        if (tipTitle) tipTitle.textContent = n.dataset.label || '';
        if (tipText) tipText.textContent = n.dataset.tip || '';
        tip.classList.add('forge-tip-on');
      });
      n.addEventListener('mousemove', (e: MouseEvent) => {
        let x = e.clientX + 14;
        const y = e.clientY - 8;
        const r = tip.getBoundingClientRect();
        if (x + r.width > window.innerWidth) x = e.clientX - r.width - 14;
        tip.style.left = x + 'px';
        tip.style.top = y + 'px';
      });
      n.addEventListener('mouseleave', () => {
        tip.classList.remove('forge-tip-on');
      });
    });
  }, []);

  return (
    <>
      <div ref={wheelRef} className="forge-wheel">
        <svg className="forge-wheel-svg" viewBox="0 0 680 680">
          <defs>
            <linearGradient id="tG" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(45,212,168,0.55)"/>
              <stop offset="50%" stopColor="rgba(45,212,168,0.15)"/>
              <stop offset="100%" stopColor="rgba(45,212,168,0.55)"/>
            </linearGradient>
            <linearGradient id="gG" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(232,168,56,0.45)"/>
              <stop offset="50%" stopColor="rgba(232,168,56,0.1)"/>
              <stop offset="100%" stopColor="rgba(232,168,56,0.45)"/>
            </linearGradient>
            <linearGradient id="bG" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(91,164,217,0.45)"/>
              <stop offset="50%" stopColor="rgba(91,164,217,0.1)"/>
              <stop offset="100%" stopColor="rgba(91,164,217,0.45)"/>
            </linearGradient>
          </defs>
          {/* Background circle */}
          <circle cx="340" cy="340" r="300" fill="none" stroke="rgba(45,212,168,0.03)" strokeWidth="44"/>
          {/* Top arc - Assessment & Authorization (teal) */}
          <path d="M 140 140 A 300 300 0 0 1 540 140" fill="none" stroke="url(#tG)" strokeWidth="44" strokeLinecap="round"/>
          <path d="M 145 145 A 295 295 0 0 1 535 145" fill="none" stroke="rgba(45,212,168,0.12)" strokeWidth="1.5" className="forge-arc-flow"/>
          {/* Right arc - Vulnerability Assessment (gold) */}
          <path d="M 570 200 A 300 300 0 0 1 500 560" fill="none" stroke="url(#gG)" strokeWidth="44" strokeLinecap="round"/>
          <path d="M 565 205 A 295 295 0 0 1 495 555" fill="none" stroke="rgba(232,168,56,0.12)" strokeWidth="1.5" className="forge-arc-flow"/>
          {/* Left arc - Risk Management (blue) */}
          <path d="M 180 560 A 300 300 0 0 1 110 200" fill="none" stroke="url(#bG)" strokeWidth="44" strokeLinecap="round"/>
          <path d="M 185 555 A 295 295 0 0 1 115 205" fill="none" stroke="rgba(91,164,217,0.12)" strokeWidth="1.5" className="forge-arc-flow"/>
          {/* Spoke lines */}
          <g stroke="rgba(45,212,168,0.04)" strokeWidth="0.8">
            <line x1="340" y1="340" x2="340" y2="80"/>
            <line x1="340" y1="340" x2="560" y2="160"/>
            <line x1="340" y1="340" x2="600" y2="340"/>
            <line x1="340" y1="340" x2="520" y2="530"/>
            <line x1="340" y1="340" x2="340" y2="600"/>
            <line x1="340" y1="340" x2="160" y2="530"/>
            <line x1="340" y1="340" x2="80" y2="340"/>
            <line x1="340" y1="340" x2="120" y2="160"/>
          </g>
        </svg>

        {/* Ring labels */}
        <div className="forge-rl forge-rl-top">Assessment &amp; Authorization</div>
        <div className="forge-rl forge-rl-right">Vulnerability Assessment</div>
        <div className="forge-rl forge-rl-left">Risk Management &amp; Awareness</div>

        {/* Center hub */}
        <div className="forge-hub">
          <div className="forge-glow" />
          <svg viewBox="0 0 40 44" fill="none">
            <path d="M20 2L4 10v12c0 11 16 18 16 18s16-7 16-18V10L20 2z" stroke="#2dd4a8" strokeWidth="2" fill="rgba(45,212,168,0.08)"/>
            <rect x="16" y="18" width="8" height="8" rx="1" stroke="#2dd4a8" strokeWidth="1.5" fill="none"/>
            <circle cx="20" cy="22" r="1.5" fill="#2dd4a8"/>
            <line x1="20" y1="23.5" x2="20" y2="25" stroke="#2dd4a8" strokeWidth="1.5"/>
          </svg>
          <div className="forge-hub-title">IT Program<br/>Management</div>
          <div className="forge-hub-sub">Forge</div>
        </div>

        {/* Nodes */}
        {nodes.map((node) => (
          <div key={node.cls} className={`forge-wheel-node forge-${node.cls}`} data-label={node.label} data-tip={node.tip}>
            <div className="forge-ico">
              <svg viewBox="0 0 24 24">{node.icon}</svg>
            </div>
            <div className="forge-lbl">{node.label}</div>
          </div>
        ))}
      </div>

      {/* Tooltip */}
      <div ref={tipRef} className="forge-tip" style={{ position: 'fixed', pointerEvents: 'none' }}>
        <b></b><span></span>
      </div>
    </>
  );
}
