"use client";

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { electionData } from '../lib/electionData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = electionData.india.faqs;

  return (
    <div className="glass-card" style={{ position: 'relative', overflow: 'hidden', animation: 'fadeInUp 0.4s forwards' }}>
      {/* Decorative gradient blob */}
      <div style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', width: '150px', height: '150px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '50%', filter: 'blur(30px)', pointerEvents: 'none' }}></div>

      <h3 className="comp-title" style={{ position: 'relative', zIndex: 10 }}>
        <div className="comp-icon-box" style={{ background: 'rgba(6, 182, 212, 0.2)', color: 'var(--accent-cyan)' }}>
          <HelpCircle size={20} />
        </div>
        Common Questions
      </h3>
      
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            style={{ 
              border: `1px solid ${openIndex === index ? 'rgba(6, 182, 212, 0.5)' : 'var(--glass-border)'}`,
              borderRadius: '1rem',
              overflow: 'hidden',
              background: openIndex === index ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
              transition: 'all 0.3s',
              boxShadow: openIndex === index ? '0 4px 20px rgba(6, 182, 212, 0.15)' : 'none'
            }}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              style={{
                width: '100%', textAlign: 'left', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer', color: openIndex === index ? 'var(--accent-cyan)' : 'var(--text-primary)', fontWeight: openIndex === index ? 600 : 500
              }}
            >
              <span style={{ paddingRight: '1rem' }}>
                {faq.question}
              </span>
              <div style={{ 
                padding: '0.25rem', borderRadius: '50%', 
                background: openIndex === index ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                color: openIndex === index ? 'var(--accent-cyan)' : 'var(--text-muted)'
              }}>
                {openIndex === index ? (
                  <ChevronUp size={16} style={{ flexShrink: 0 }} />
                ) : (
                  <ChevronDown size={16} style={{ flexShrink: 0 }} />
                )}
              </div>
            </button>
            
            <div 
              style={{
                maxHeight: openIndex === index ? '200px' : '0',
                opacity: openIndex === index ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <div style={{ padding: '0 1rem 1rem 1rem', fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)', borderTop: openIndex === index ? '1px solid rgba(255, 255, 255, 0.05)' : 'none', paddingTop: openIndex === index ? '1rem' : '0' }}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
