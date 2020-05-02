import React, {useState, useEffect} from "react";
import Container from "../components/container";
import Row from "../components/row";
import Column from "../components/column";
import Table from "../components/table";
import Textbox from "../components/textbox";
import API from "../utils/Api"

export default function Homepage(props) {
  const [employeeListState, setEmployeeListState] = useState({
    results: [],
    original: []
  })
  
const [search,setSearch] = useState("")

  useEffect(() => {

    API.search().then(API => {
      console.log(API.data.results)
    })
    
  },[search])

  return (
    <Container>
      <Row>
        <Column size="col-sm-6">
          <Textbox/>
          <Table />

          
        </Column>
        <Column size="col-sm-6"></Column>
      </Row>
    </Container>
  );
}
