import { useHistory } from "react-router";

import {
  Button,
  Header,
  Segment,
  Label,
  Grid,
  Icon,
  Divider,
} from "semantic-ui-react";
import Figure from "../components/Figure";

import "../css/App.css";

function App() {
  let history = useHistory();

  return (
    <div className="center">
      <Segment
        inverted
        padded
        style={{
          maxWidth: "75%",
          minWidth: "75%",
          minHeight: "75%",
          maxHeight: "75%",
          height: "75%",
          width: "75%",
        }}
      >
        {/* TOP BANNER */}
        <Label attached="top">
          <Grid columns="equal" verticalAlign="middle">
            <Grid.Column textAlign="left"></Grid.Column>
            <Grid.Column textAlign="center">
              <Label as="a" href="https://github.com/teobot/" target="_blank">
                <Icon name="github" />
                teobot
              </Label>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Label></Label>
            </Grid.Column>
          </Grid>
        </Label>
        <Grid columns="equal" className="h-100">
          <Grid.Column
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Header as="h1" inverted>
              Play Hangman
              <Header.Subheader>
                A game of Hangman with atwist.
              </Header.Subheader>
            </Header>
            <Button
              color="violet"
              onClick={() => {
                history.push("/play");
              }}
              size="large"
            >
              Play
            </Button>
          </Grid.Column>
          <Grid.Column
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Figure stage={7} scale={1.2} />
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}

export default App;
