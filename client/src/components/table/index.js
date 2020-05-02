import React from "react";
export default function Table(props) {
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
          <tr>
            <th scope="row">1</th>
            <td><img src="https://randomuser.me/api/portraits/men/95.jpg"/></td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
