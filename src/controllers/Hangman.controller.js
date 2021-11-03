/* eslint-disable import/no-anonymous-default-export */

import React from "react";

import axios from "axios";

let alphabet = "abcdefghijklmnopqrstuvwxyz";

export default () => {
  // hangman game controller
  const [currentWord, setCurrentWord] = React.useState("");

  const [wrongLetters, setWrongLetters] = React.useState([]);
  const [correctLetters, setCorrectLetters] = React.useState([]);
  const [guessedLetters, setGuessedLetters] = React.useState([]);

  const [lives, setLives] = React.useState(7);

  const [gameWon, setGameWon] = React.useState(false);
  const [gameLost, setGameLost] = React.useState(false);

  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    getWord();
  }, []);

  const getWord = async () => {
    try {
      const response = await axios.get(
        "https://random-word-api.herokuapp.com/word"
      );
      setCurrentWord(response.data[0].toLowerCase());
    } catch (error) {}
  };

  const guessLetter = (letter) => {
    let newLives = lives - 1;

    if (currentWord.includes(letter)) {
      setCorrectLetters([...correctLetters, letter]);
    } else {
      setWrongLetters([...wrongLetters, letter]);
      setLives(newLives);
    }
    guessedLetters.push(letter);

    if (newLives === 0) {
      setGameLost(true);
    } else if (checkIfWordComplete()) {
      // user has won the game
      // go to next level
      progressGame(true);
    }
  };

  const progressGame = () => {
    setGameWon(true);
    setScore(score + calculateWordScore(currentWord));
  };

  const checkIfWordComplete = () => {
    let wordComplete = true;
    currentWord.split("").forEach((letter) => {
      if (!guessedLetters.includes(letter)) {
        wordComplete = false;
      }
    });
    return wordComplete;
  };

  const calculateWordScore = (word) => {
    return word.length;
  };

  const handleUserNextLevel = () => {
    getWord();
    setGameWon(false);
    setGameLost(false);
    setLives(7);
    setCorrectLetters([]);
    setWrongLetters([]);
    setGuessedLetters([]);
  };

  return {
    currentWord,
    wrongLetters,
    correctLetters,
    guessedLetters,
    lives,
    guessLetter,
    alphabet,
    gameWon,
    gameLost,
    score,
    handleUserNextLevel,
  };
};
