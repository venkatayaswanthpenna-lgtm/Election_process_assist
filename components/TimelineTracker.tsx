import React from 'react';
import { CheckCircle2, Circle, Milestone } from 'lucide-react';
import { electionData } from '../lib/electionData';

export default function TimelineTracker() {
  const { timeline } = electionData.india;

  return (
    <div className="glass-card" style={{ position: 'relative', overflow: 'hidden', animation: 'fadeInUp 0.4s forwards' }}>
      {/* Decorative gradient blob */}
      <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '150px', height: '150px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', filter: 'blur(30px)' }}></div>
      
      <h3 className="comp-title" style={{ position: 'relative', zIndex: 10 }}>
        <div className="comp-icon-box" style={{ background: 'rgba(139, 92, 246, 0.2)', color: 'var(--accent-purple)' }}>
          <Milestone size={20} />
        </div>
        Election Timeline
      </h3>
      
      <div style={{ position: 'relative', marginLeft: '1rem', marginTop: '1.5rem', zIndex: 10 }}>
        {/* Continuous Line Background */}
        <div className="timeline-line"></div>
        {/* Animated Progress Line */}
        <div className="timeline-line" style={{ bottom: '50%', background: 'linear-gradient(to bottom, var(--accent-blue), var(--accent-purple))' }}></div>

        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            {/* Status Indicator */}
            <span className="timeline-indicator">
              {item.status === 'completed' ? (
                <CheckCircle2 size={24} color="var(--accent-cyan)" fill="var(--bg-primary)" />
              ) : item.status === 'current' ? (
                <span style={{ display: 'flex', width: '24px', height: '24px', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)', border: '2px solid var(--bg-primary)' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-blue)', boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)', animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite', position: 'absolute' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-blue)', boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)' }}></span>
                </span>
              ) : (
                <Circle size={24} color="var(--text-muted)" fill="var(--bg-primary)" />
              )}
            </span>
            
            <div style={{ 
              transition: 'transform 0.3s', 
              color: item.status === 'completed' ? 'var(--text-primary)' : item.status === 'current' ? 'var(--accent-cyan)' : 'var(--text-muted)'
            }}>
              <h4 style={{ fontSize: '1rem', fontWeight: item.status === 'current' ? 700 : 600, fontFamily: 'var(--font-display)' }}>
                {item.step}
              </h4>
              <p style={{ fontSize: '0.875rem', marginTop: '0.375rem', lineHeight: 1.6, opacity: 0.9 }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
