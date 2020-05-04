import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
export default function Table(props) {
  const employeeStateList = useContext(EmployeeContext);
  console.log("hello", employeeStateList.results);
  return (
    <div className="table">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">picture</th>
            <th scope="col">first</th>
            <th scope="col">last</th>
            <th scope="col">email</th>
            <th scope="col">dob</th>
            <th scope="col">phone</th>
            <th scope="col">cell</th>
          </tr>
        </thead>
        <tbody>
          {employeeStateList.results.length > 0
            ? employeeStateList.results.map((employee) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <img src={employee.picture.thumbnail} />
                    </td>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dob.age}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.cell}</td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </div>
  );
}
