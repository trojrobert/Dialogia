import React from "react";
import { useState } from 'react';
import './Translator.css'

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    // Add more languages as needed
  ];

export default function Translator() {
    
  const [inputLanguage, setInputLanguage] = useState('en');
  const [outputLanguage, setOutputLanguage] = useState('de');

  const handleInputLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputLanguage(e.target.value);
  };

  const handleOutputLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOutputLanguage(e.target.value);
  };
    return (
        <main className={"main"}>
      <h2 className={"subtitle"}>Create a Dialogue</h2>
      <div className={"inputGroup"}>
        <input type="text" className={"input"} placeholder="Type a word or topic" />
        <select value={inputLanguage} onChange={handleInputLanguageChange} className={"select"}>
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
        <select value={outputLanguage} onChange={handleOutputLanguageChange} className={"select"}>
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
        <button className={"button"}>Create Dialogue</button>
      </div>
    </main>
    )
}
