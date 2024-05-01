"use client"; // This is a client component 👈🏽

import React from 'react';
import './landingPage.css';


const LandingPage: React.FC = () => {
  const ENDPOINT: string =
    "https://pj5h74fp9f.execute-api.us-east-1.amazonaws.com/prod/get_dialogue";
  
  const [prompt, setPrompt] = React.useState("");
  const [dialogue, setDialogue] = React.useState("");
  const [hasResult, setHasResult] = React.useState(false);


  const onCreateDialogue = () => {
    console.log("Creating Dialogue for: " + prompt);
    fetch(`${ENDPOINT}?prompt=${prompt}`)
      .then((res) => res.json())
      .then(onResult);
  
  };

  const onResult = (data: any) => {
    setDialogue(data);
    setHasResult(true);
  };
  
  let resultsElement = null;

  if (hasResult) {
    resultsElement = <div>
      Dialogue:
      <div>{dialogue}</div>
    </div>
  };

  return (
    <div className="landing-page">
      <header>
        <h1 className={'header-text'}>Dialogia AI</h1>
        <p>Learn languages through engaging dialogues and context</p>
      </header>

      <input
        type="text"
        placeholder='please'
        value={prompt}
        onChange={(e) => setPrompt(e.currentTarget.value)}>
        
      </input>
      <button onClick={onCreateDialogue}>Create Dialogue</button>
      {resultsElement}

      {/* <section className="main-content">
        <h2 className={'sub-header'}>Why Dialogia ?</h2>
        <p className={'description-text'}>
          Learning a new language can be challenging, especially when it comes to understanding
          context and natural conversation flow. Dialogia bridges this gap by providing learners
          with real-life dialogues that showcase how words and phrases are used in different
          scenarios.
        </p>
        
        <p className="coming-soon">Coming Soon</p>
      </section> */}
      <footer>
        <p>© John Robert</p>
      </footer>
    </div>
  );
};

export default LandingPage;
