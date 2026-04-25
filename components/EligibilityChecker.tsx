"use client";

import React, { useState } from 'react';
import { ShieldCheck, XCircle, UserCheck } from 'lucide-react';
import { electionData } from '../lib/electionData';

export default function EligibilityChecker() {
  const [age, setAge] = useState<string>('');
  const [isCitizen, setIsCitizen] = useState<boolean | null>(null);
  const [result, setResult] = useState<'eligible' | 'ineligible' | null>(null);

  const checkEligibility = () => {
    const ageNum = parseInt(age);
    if (isNaN(ageNum)) return;

    if (ageNum >= electionData.india.eligibility.age && isCitizen) {
      setResult('eligible');
    } else {
      setResult('ineligible');
    }
  };

  return (
    <div className="glass-card" style={{ position: 'relative', overflow: 'hidden', animation: 'fadeInUp 0.4s forwards' }}>
      {/* Decorative gradient blob */}
      <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '120px', height: '120px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', filter: 'blur(30px)' }}></div>
      
      <h3 className="comp-title" style={{ position: 'relative', zIndex: 10 }}>
        <div className="comp-icon-box" style={{ background: 'rgba(59, 130, 246, 0.2)', color: 'var(--accent-blue)' }}>
          <UserCheck size={20} />
        </div>
        Voter Eligibility
      </h3>
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <div className="form-group">
          <label className="form-label">Are you an Indian Citizen?</label>
          <div className="flex-row">
            <button 
              className={`eligibility-btn ${isCitizen === true ? 'active-yes' : ''}`}
              onClick={() => setIsCitizen(true)}
            >
              Yes
            </button>
            <button 
              className={`eligibility-btn ${isCitizen === false ? 'active-no' : ''}`}
              onClick={() => setIsCitizen(false)}
            >
              No
            </button>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Your Age</label>
          <input 
            type="number" 
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="chat-input"
            style={{ padding: '0.875rem 1.25rem', fontSize: '1.125rem' }}
            placeholder="e.g. 21"
          />
        </div>

        <button 
          className="btn-primary"
          onClick={checkEligibility}
          disabled={!age || isCitizen === null}
          style={{ opacity: (!age || isCitizen === null) ? 0.5 : 1, cursor: (!age || isCitizen === null) ? 'not-allowed' : 'pointer' }}
        >
          Verify Status
        </button>

        {result === 'eligible' && (
          <div style={{ marginTop: '1.25rem', padding: '1rem', borderRadius: '0.75rem', background: 'linear-gradient(to right, rgba(16, 185, 129, 0.15), transparent)', border: '1px solid rgba(16, 185, 129, 0.2)', color: 'var(--accent-emerald)', display: 'flex', gap: '0.75rem', animation: 'fadeInUp 0.4s forwards' }}>
            <ShieldCheck size={24} style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.25rem' }}>Eligible to Vote!</strong>
              <p style={{ fontSize: '0.875rem', opacity: 0.9, lineHeight: 1.5 }}>
                Ensure your name is registered on the electoral roll. If not, you need to fill Form 6.
              </p>
            </div>
          </div>
        )}

        {result === 'ineligible' && (
          <div style={{ marginTop: '1.25rem', padding: '1rem', borderRadius: '0.75rem', background: 'linear-gradient(to right, rgba(239, 68, 68, 0.15), transparent)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#f87171', display: 'flex', gap: '0.75rem', animation: 'fadeInUp 0.4s forwards' }}>
            <XCircle size={24} style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.25rem' }}>Currently Ineligible</strong>
              <p style={{ fontSize: '0.875rem', opacity: 0.9, lineHeight: 1.5 }}>
                You must be an Indian citizen and at least {electionData.india.eligibility.age} years old.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
