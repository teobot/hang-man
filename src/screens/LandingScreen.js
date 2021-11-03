import { useHistory } from "react-router";
import { Button, Header, Segment } from "semantic-ui-react";

import "../css/App.css";

function App() {
  let history = useHistory();

  return (
    <div className="center">
      <Segment inverted padded>
        <Header size="large" inverted>
          Play Hangman
        </Header>
        <Button
          fluid
          color="violet"
          onClick={() => {
            history.push("/play");
          }}
        >
          play
        </Button>
      </Segment>
    </div>
  );
}

export default App;
