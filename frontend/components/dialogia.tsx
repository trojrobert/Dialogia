import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Dialogia AI</h1>
        <p>Learn languages through engaging dialogues and context</p>
      </header>
      <section className="main-content">
        <h2>Why Dialogia?</h2>
        <p>
          Learning a new language can be challenging, especially when it comes to understanding
          context and natural conversation flow. Dialogia bridges this gap by providing learners
          with real-life dialogues that showcase how words and phrases are used in different
          scenarios. Instead of just memorizing vocabulary, you'll gain a deeper understanding
          of language nuances and cultural context.
        </p>
        
        <p className="coming-soon">Coming Soon</p>
      </section>
      <footer>
        <p>© 2024 Dialogia. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;