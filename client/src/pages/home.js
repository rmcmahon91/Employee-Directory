import React from "react";
import Container from "../components/container";
import Row from "../components/row";
import Column from "../components/column";
import Table from "../components/table";

export default function Homepage(props) {
  return (
    <Container>
      <Row>
        <Column size="col-sm-6">
          <Table>

          </Table>
        </Column>
        <Column size="col-sm-6"></Column>
      </Row>
    </Container>
  );
}
