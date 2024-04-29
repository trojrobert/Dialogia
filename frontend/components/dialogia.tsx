import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header>
        <h1 className={'header-text'}>Dialogia AI</h1>
        <p>Learn languages through engaging dialogues and context</p>
      </header>
      <section className="main-content">
        <h2 className={'sub-header'}>Why Dialogia ?</h2>
        <p className={'description-text'}>
          Learning a new language can be challenging, especially when it comes to understanding
          context and natural conversation flow. Dialogia bridges this gap by providing learners
          with real-life dialogues that showcase how words and phrases are used in different
          scenarios.
        </p>
        
        <p className="coming-soon">Coming Soon</p>
      </section>
      <footer>
        <p>© John Robert.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
