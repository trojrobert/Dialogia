"use client"; // This is a client component 👈🏽
import React, {useEffect, useState} from 'react';
// import DialogueForm from "./DialogueForm/DialogueForm";
import './LandingPage.css';
import * as dotenv from 'dotenv';
import Translator from "./Translator/Translator";


// Load environment variable from .env file
dotenv.config();
const LandingPage: React.FC = () => {
  
  const [prompt, setPrompt] = useState("");
  const [dialogue, setDialogue] = useState("");
  const [error, setError] = useState(false);
  const [showDialogueBox, setShowDialogueBox] = useState(false);
  const [loading, setLoading] = useState(false);

  const onCreateDialogue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (prompt.trim()) { // Check if prompt is not empty after trimming whitespace
      setError(false);
      setLoading(true);

      fetch(`https://pj5h74fp9f.execute-api.us-east-1.amazonaws.com/prod/get_dialogue?prompt=${encodeURIComponent(prompt.trim())}`)
        .then((res) => {
          if (!res.ok) { // Check if response is not OK
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(onResult)
        .catch((err) => {
          console.error('Error fetching data:', err);
          setError(true);
          setLoading(false);
          setShowDialogueBox(false);
        });
    }
  };

  useEffect(() => {
    // Typewriter effect for displaying dialogue
    if (dialogue) {
      let index = 0;
      let typewriter = document.getElementById('dialogue-box');

      const type = () => {
        if (typewriter) {
          if (index < dialogue.length) {
            typewriter.innerHTML = dialogue.slice(0, index) + '<span class="blinking-cursor">|</span>';
            index++;
            setTimeout(type, 50); // Decreased timeout for faster typing effect
          } else {
            typewriter.innerHTML = dialogue.slice(0, index) + '<span class="blinking-cursor">|</span>';
          }
        }
      }
          type();
    }},[dialogue])




  const onResult = (data: string) => {
    setDialogue(data);
    setPrompt('');
    setLoading(false);
    setShowDialogueBox(true);
  };

  const onPromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setPrompt(e.target.value);
  };

  return (
    <div className="landing-page">
      <header>
        <h1 className={'title'}>Dialogia AI</h1>
        <p>Learn languages through engaging dialogues and context</p>
      </header>

        {/*<DialogueForm onSubmit={onCreateDialogue} onPromptChange={onPromptChange} prompt={prompt} />*/}
      
      <Translator />
        {loading && <p className={'loading-text'}>Generating ....</p>}
        {
            showDialogueBox &&  <div id={'dialogue-box'}></div>
        }

        {error && (
            <div className={'error-description'}>
                <p>Please try again later</p>
            </div>
        )}

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
    </div>
  );
};

export default LandingPage;
