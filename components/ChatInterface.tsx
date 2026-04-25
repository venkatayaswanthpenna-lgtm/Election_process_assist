"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, ListChecks, Sparkles } from 'lucide-react';
import { electionData } from '../lib/electionData';
import EligibilityChecker from './EligibilityChecker';
import TimelineTracker from './TimelineTracker';
import FAQSection from './FAQSection';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  component?: 'eligibility' | 'timeline' | 'faq' | 'registration';
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "Namaste! I am your Election Guidance Assistant. I'm here to simplify the election process in India for you. What would you like to know about today?",
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Process intent
    setTimeout(() => {
      const query = userMsg.text.toLowerCase();
      let botResponse: Message = { id: (Date.now() + 1).toString(), sender: 'bot', text: '' };

      if (query.includes('eligibl') || query.includes('can i vote') || query.includes('age')) {
        botResponse.text = "Let's check if you are eligible to vote in India. Please fill out this quick form:";
        botResponse.component = 'eligibility';
      } else if (query.includes('timeline') || query.includes('date') || query.includes('when')) {
        botResponse.text = "Here is the general timeline for the upcoming elections:";
        botResponse.component = 'timeline';
      } else if (query.includes('register') || query.includes('form') || query.includes('voter id')) {
        botResponse.text = "To register to vote in India, you need to be an eligible citizen and follow these steps:";
        botResponse.component = 'registration';
      } else if (query.includes('faq') || query.includes('doubt') || query.includes('question')) {
        botResponse.text = "Here are some common questions citizens ask about voting:";
        botResponse.component = 'faq';
      } else if (query.includes('what is') && query.includes('election')) {
        botResponse.text = `${electionData.generalInfo.definition} ${electionData.generalInfo.importance}`;
      } else {
        botResponse.text = "I can help you check your eligibility, understand the registration process, view the election timeline, or answer FAQs. What would you like to do?";
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const QuickReply = ({ text, onClick }: { text: string, onClick: () => void }) => (
    <button onClick={onClick} className="quick-reply-btn">
      {text}
    </button>
  );

  return (
    <div className="chat-window glass">
      {/* Header */}
      <div className="chat-header">
        <div className="chat-header-line"></div>
        <div className="chat-header-icon">
          <div className="chat-header-icon-inner">
            <Sparkles size={24} color="var(--accent-cyan)" />
          </div>
          <div className="chat-status-dot"></div>
        </div>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.025em' }}>Civic Guide Assistant</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            India Elections Edition <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-muted)' }}></span> Online
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-body">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-message-row ${msg.sender}`}>
            {msg.sender === 'bot' && (
              <div className="chat-avatar bot">
                <Bot size={20} color="var(--accent-cyan)" />
              </div>
            )}
            
            <div style={{ maxWidth: '85%', order: msg.sender === 'user' ? 1 : 2 }}>
              <div className={`chat-bubble ${msg.sender}`}>
                <p style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{msg.text}</p>
              </div>

              {/* Dynamic Components based on intent */}
              {msg.component === 'eligibility' && <EligibilityChecker />}
              {msg.component === 'timeline' && <TimelineTracker />}
              {msg.component === 'faq' && <FAQSection />}
              {msg.component === 'registration' && (
                <div className="glass-card" style={{ animation: 'fadeInUp 0.4s forwards' }}>
                  <h4 className="comp-title" style={{ color: 'var(--accent-cyan)' }}>
                    <ListChecks size={20} /> Registration Steps
                  </h4>
                  <ul className="reg-list">
                    {electionData.india.registrationSteps.map((step, idx) => (
                      <li key={idx} className="reg-list-item">
                        <span className="reg-list-num">{idx + 1}</span>
                        <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Suggestions for the first message */}
              {msg.id === '1' && (
                <div className="quick-replies">
                  <QuickReply text="Am I eligible?" onClick={() => { setInput("Am I eligible?"); setTimeout(handleSend, 100); }} />
                  <QuickReply text="How to register?" onClick={() => { setInput("How to register?"); setTimeout(handleSend, 100); }} />
                  <QuickReply text="Show timeline" onClick={() => { setInput("Show timeline"); setTimeout(handleSend, 100); }} />
                </div>
              )}
            </div>

            {msg.sender === 'user' && (
              <div className="chat-avatar user" style={{ order: 2 }}>
                <User size={20} color="white" />
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="chat-message-row bot">
            <div className="chat-avatar bot">
              <Bot size={20} color="var(--accent-cyan)" />
            </div>
            <div className="chat-bubble bot" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', height: '48px', order: 2 }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)', animation: 'float 1s infinite' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)', animation: 'float 1s infinite 0.2s' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)', animation: 'float 1s infinite 0.4s' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="chat-input-area">
        <div className="chat-input-wrapper">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything about voting..."
            className="chat-input"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim()}
            className="chat-send-btn"
          >
            <Send size={20} />
          </button>
        </div>
        <p style={{ fontSize: '0.6875rem', fontWeight: 500, color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Non-political Educational Guide
        </p>
      </div>
    </div>
  );
}
