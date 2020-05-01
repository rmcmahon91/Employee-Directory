import React from "react";
import Container from "../components/container";
import Row from "../components/row";
import Column from "../components/column";
import Image from "../components/image";

export default function Homepage(props) {
  return (
    <Container>
      <Row>
        <Column size="col-sm-6">
          <Image
            class=""
            source="https://upload.wikimedia.org/wikipedia/en/1/1e/Baseball_%28crop%29.jpg"
          />
        </Column>
        <Column size="col-sm-6"></Column>
      </Row>
    </Container>
  );
}
