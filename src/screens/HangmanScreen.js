import React from "react";

import { Button, Header, Segment } from "semantic-ui-react";

import { useHistory } from "react-router";
import Figure from "../components/Figure";

export default function HangmanScreen() {
  let history = useHistory();

  return (
    <div className="center">
      <Segment inverted padded>
        <Figure stage={7}/>
        <Header size="large" inverted>
          Playing
        </Header>
      </Segment>
    </div>
  );
}
