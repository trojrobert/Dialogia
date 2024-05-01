"use client"; // This is a client component 👈🏽
import React, {useEffect, useState} from 'react';
import DialogueForm from "./DialogueForm/DialogueForm";
import './Styles/LandingPage.css';

const LandingPage: React.FC = () => {
  
  const [prompt, setPrompt] = useState("");
  const [dialogue, setDialogue] = useState("");
  const [error, setError] = useState(false);
  const [showDialogueBox, setShowDialogueBox] = useState(false)
  const [loading,setLoading] = useState(false)


  const onCreateDialogue = (e:any) => {
    if(prompt) {
        const promptValue = prompt.trim()
        setError(false)
        setLoading(true)
        try{
            setShowDialogueBox(true)
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_dialogue?prompt=${promptValue}`)
                .then((res) => res.json())
                .then(onResult);
            setLoading(false)
        }catch (err){
            if(err){
                setLoading(false)
                setError(true)
                setShowDialogueBox(false)
            }
        }

    }
      e.preventDefault()
  };



    useEffect(()=>{
        if(dialogue){
            let index = 0;
            const typewriter = document.getElementById('dialogue-box');
            const type =()=>{
                if (index < dialogue.length) {
                    typewriter?.innerHTML = dialogue.slice(0, index) + '<span class="blinking-cursor">|</span>';
                    index++;
                    setTimeout(type, 2000);
                } else {
                    typewriter?.innerHTML = dialogue.slice(0, index) + '<span class="blinking-cursor">|</span>';
                }
            }
            type()
        }
    },[dialogue])





  const onResult = (data: any) => {
    setDialogue(data);
   setPrompt('')
  };

  const onPromptChange =(e)=>{
      setError(false)
      let val = e.target.value
     setPrompt(val)
  }

  return (
    <div className="landing-page">
      <header>
        <h1 className={'header-text'}>Dialogia AI</h1>
        <p>Learn languages through engaging dialogues and context</p>
      </header>

        <DialogueForm onSubmit={onCreateDialogue} onPromptChange={onPromptChange} prompt={prompt} />
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
