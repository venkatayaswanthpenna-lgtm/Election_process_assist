import ChatInterface from '../components/ChatInterface';

export default function Home() {
  return (
    <main className="app-main">
      {/* Background Decorative Orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />
      
      <div className="app-container">
        {/* Header section */}
        <div className="app-header">
          <div className="app-badge">
            ELECTION GUIDANCE ASSISTANT
          </div>
          <h1 className="app-title">
            Democracy Simplified
          </h1>
          <p className="app-description">
            Your friendly, interactive guide to understanding the election process in India. Check eligibility, learn how to register, and track timelines easily.
          </p>
        </div>

        {/* Chat Interface Container */}
        <div className="chat-container-wrapper">
          <div className="chat-glow-bg"></div>
          <ChatInterface />
        </div>
      </div>
    </main>
  );
}
