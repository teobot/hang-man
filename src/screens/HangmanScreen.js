import React from "react";

import {
  Button,
  Header,
  Segment,
  Label,
  Rating,
  Divider,
  Dimmer,
  Icon,
  Grid,
} from "semantic-ui-react";

import { useHistory } from "react-router";

import Figure from "../components/Figure";

import HangmanController from "../controllers/Hangman.controller";

export default function HangmanScreen() {
  let history = useHistory();

  let {
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
  } = HangmanController();

  let finished = gameWon || gameLost;

  return (
    <Dimmer.Dimmable blurring dimmed={finished} className="center">
      <Segment
        inverted
        padded
        style={{
          maxWidth: "75%",
          minWidth: "75%",
          minHeight: "75%",
          maxHeight: "75%",
        }}
      >
        {/* TOP BANNER */}
        <Label attached="top">
          <Grid columns="equal" verticalAlign="middle">
            <Grid.Column textAlign="left">
              <Rating icon="heart" disabled rating={lives} maxRating={7} />
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Label as="a" href="https://github.com/teobot/" target="_blank">
                <Icon name="github" />
                teobot
              </Label>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Label>
                <Icon name="star" color="yellow" /> {score}
              </Label>
            </Grid.Column>
          </Grid>
        </Label>
        {/* STICK MAN FIGURE */}
        <div className="center">
          <Figure stage={7 - lives} />
        </div>
        <Segment basic>
          {/* WRONG LETTERS */}
          <Header size="huge" inverted textAlign="center">
            {wrongLetters.length > 0 && (
              <Header.Subheader>
                <Icon name="remove circle" color="red" />
                {wrongLetters.join(", ")}
              </Header.Subheader>
            )}
            {wrongLetters.length === 0 && (
              <Header.Subheader>
                <Icon name="remove circle" color="red" />
                No wrong letters
              </Header.Subheader>
            )}
          </Header>
          {/* WORD GUESSING */}
          <Header size="huge" inverted textAlign="center">
            {currentWord.split("").map((letter, index) => {
              if (correctLetters.includes(letter)) {
                return letter;
              } else {
                return " _ ";
              }
            })}
          </Header>
          <Divider />
          {/* LETTER BUTTONS */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ textAlign: "center", width: "60%" }}>
              {alphabet.split("").map((letter, index) => {
                return (
                  <Button
                    style={{ margin: 2 }}
                    key={index}
                    color={
                      !guessedLetters.includes(letter) ? "violet" : "black"
                    }
                    onClick={() => {
                      if (!guessedLetters.includes(letter)) {
                        guessLetter(letter);
                      }
                    }}
                    disabled={guessedLetters.includes(letter)}
                  >
                    {letter}
                  </Button>
                );
              })}
            </div>
          </div>
        </Segment>
      </Segment>
      {/* END SCREEN DIMMER */}
      <Dimmer active={finished}>
        <Header as="h2" icon inverted>
          {gameLost && (
            <>
              <span style={{ fontSize: 12, color: "lightgrey" }}>
                THE WORD WAS
              </span>
              <Divider fitted hidden />
              {currentWord.split("").map((letter, index) => {
                return (
                  <span
                    style={{
                      fontSize: 32,
                      fontWeight: "bolder",
                      color: guessedLetters.includes(letter)
                        ? "white"
                        : "orange",
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
              .
              <Divider />
            </>
          )}

          <Header.Subheader>
            <Icon name="star" color="yellow" /> {score}
          </Header.Subheader>

          <Divider />
          {gameWon && (
            <Button color="green" onClick={handleUserNextLevel}>
              Keep playing
            </Button>
          )}
          {gameLost && (
            <Button
              color="red"
              onClick={() => {
                history.push("/");
              }}
            >
              Back to menu
            </Button>
          )}
        </Header>
      </Dimmer>
    </Dimmer.Dimmable>
  );
}
