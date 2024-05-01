"use client"; // This is a client component 👈🏽 This line is a comment, so I'll omit it here.
import React, { useEffect, useState } from 'react';
import DialogueForm from "./DialogueForm/DialogueForm";
// import './Styles/LandingPage.css';

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

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_dialogue?prompt=${encodeURIComponent(prompt.trim())}`)
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
      const typewriter = document.getElementById('dialogue-box');

      const type = () => {
        if (index < dialogue.length) {
          typewriter.innerHTML = dialogue.slice(0, index) + '<span class="blinking-cursor">|</span>';
          index++;
          setTimeout(type, 50); // Decreased timeout for faster typing effect
        } else {
          typewriter.innerHTML = dialogue.slice(0, index) + '<span class="blinking-cursor">|</span>';
        }
      };

      type();
    }
  }, [dialogue]);

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
        <h1 className="header-text">Dialogia AI</h1>
        <p>Learn languages through engaging dialogues and context</p>
      </header>

      <DialogueForm onSubmit={onCreateDialogue} onPromptChange={onPromptChange} prompt={prompt} />
      {loading && <p className="loading-text">Generating ....</p>}
      {showDialogueBox && <div id="dialogue-box"></div>}

      {error && (
        <div className="error-description">
          <p>Please try again later</p>
        </div>
      )}
    </div>
  );
};

export default LandingPage;