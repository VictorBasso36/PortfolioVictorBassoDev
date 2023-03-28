import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from "react";


const phrases = [  "Desenvolvedor de software <span>Fullstack</span>","Web designer <span>UI/UX</span>","",""];


export default function typing() {


  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0].slice(0, 1));

  useEffect(() => {
    const interval = setInterval(() => {
      const phrase = phrases[phraseIndex];
      setCurrentPhrase(phrase.slice(0, charIndex + 1));
      setCharIndex(charIndex + 1);
      if (charIndex >= phrase.length) {
        setCharIndex(0);
        setPhraseIndex(phraseIndex === phrases.length - 1 ? 0 : phraseIndex + 1);
      }
    }, charIndex === phrases.length ? 2000 : 100);
    return () => clearInterval(interval);
  }, [charIndex, phraseIndex]);

  return (
    <>
        <p dangerouslySetInnerHTML={{ __html: currentPhrase }}></p>
    </>
  )
}
