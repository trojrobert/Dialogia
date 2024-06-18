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
        <div className={"container"}>
            <main className={"main"}>
                <div className={"inputGroup"}>
                    <input type="text" className={"input"} placeholder="type a word or topic" />
                    <div className={"selectGroup"}>
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
                    </div>
                </div>
                <button className={"button"}>Create Dialogue</button>
            </main>
        </div>
    )
}
