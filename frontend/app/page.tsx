import React from "react";
import './index.css'
import Header from '../components/Header';
import Translator from '../components/Translator';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className="main-content flex min-h-screen flex-col items-center p-24 ">

      <head>
        <title>
          Dialogia AI
        </title>
        <meta
          name="description"
          content="Learn language with dialogue and context"
        />
      </head>
      <div className={styles.container}>
        <Header />
        <Translator />
        <footer className={styles.footer}>
          <p>© John Robert</p>
        </footer>
      </div>
    </main>
  );
}
