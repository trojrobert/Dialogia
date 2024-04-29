// import React from 'react';
// import { Link } from 'react-router-dom';
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
        {/* <p>
          Whether you're a beginner or an advanced learner, Dialogia offers a variety of dialogues
          tailored to your proficiency level. From everyday conversations to specific situational
          dialogues, you'll have access to a rich library of content that will enhance your
          language learning journey.
        </p>
        <h2>Key Features:</h2>
        <ul>
          <li>Engaging dialogues for immersive learning</li>
          <li>Contextual understanding of words and phrases</li>
          <li>Progress tracking to monitor your language skills</li>
          <li>Customizable learning paths based on your goals</li>
          <li>Available in multiple languages for diverse learners</li>
        </ul>
        <p>
          Join us on our mission to make language learning more enjoyable and effective. Sign up
          to receive updates and be notified when Dialogia launches!
        </p> */}
        {/* <Link to="/signup" className="cta-button">Sign Up for Updates</Link> */}
      </section>
      <footer>
        <p>© 2024 Dialogia. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;