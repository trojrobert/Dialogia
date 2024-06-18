import React from "react";
import { useState } from 'react';
import styles from '../styles/Translator.module.css';

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
      <main className={styles.main}>
      <h2 className={styles.subtitle}>Create a Dialogue</h2>
      <div className={styles.inputGroup}>
        <input type="text" className={styles.input} placeholder="Type a word or topic" />
        <select value={inputLanguage} onChange={handleInputLanguageChange} className={styles.select}>
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
        <select value={outputLanguage} onChange={handleOutputLanguageChange} className={styles.select}>
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
      </div>
      <button className={styles.button}>Create Dialogue</button>
    </main>

  );
};
