import React, {useState, useEffect} from "react";
import Container from "../components/container";
import Row from "../components/row";
import Column from "../components/column";
import Table from "../components/table";
import Textbox from "../components/textbox";
import API from "../utils/Api"
import EmployeeContext from "../utils/EmployeeContext"

export default function Homepage(props) {
  const [employeeListState, setEmployeeListState] = useState({
    results: [],
    original: []
  })
  
const [search,setSearch] = useState("")

  useEffect(() => {

    API.search().then(API => {
      console.log(API.data.results)

      setEmployeeListState({
        results: API.data.results,
        original: API.data.results
      })
    })
    
  }, [])
  
  const handleChange = (event) => {
    const { value } = event.target
    setSearch(value)

    console.log(value)

    let newEmployeeList = employeeListState.original.filter(employee => {
        return employee.name.first.toLowerCase().indexOf(value.toLowerCase()) > -1 || employee.name.last.toLowerCase().indexOf(value.toLowerCase()) > -1
    })

    setEmployeeListState({
      
      results: newEmployeeList,
      original: employeeListState.original
    })
}
  return (
    <EmployeeContext.Provider value={employeeListState}>
     <Container>
      <Row>
        <Column size="col-sm-6">
          <Textbox search={search} handleChange={handleChange}  />
          <Table />

          
        </Column>
        <Column size="col-sm-6"></Column>
      </Row>
    </Container> 
   </EmployeeContext.Provider>


    
  );
}
