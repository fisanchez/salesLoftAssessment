import React from "react"
import styled from "styled-components"
import { useQuery } from "react-query"
import peopleClient from "../../helpers/apiHelper"

const TableCSS = styled.div`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`

// TODO Change people.people behavior
const RenderTable = people => {
  {
    return (
      <TableCSS>
        <table>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          {people.people.map(person => {
            return (
              <tr key={person.id}>
                <td> {person.display_name}</td>
                <td> {person.title} </td>
                <td> {person.email_address} </td>
              </tr>
            )
          })}
        </table>
      </TableCSS>
    )
  }
}

// Replace with react history or pull
const navToFrequency = () => {
  window.location.replace(window.location.href + "frequencies")
}

const PeopleTable = () => {
  const { data: peopleList, isLoading, isError } = useQuery(
    "fetchPeople",
    peopleClient.list
  )

  return (
    <div>
      {isLoading ? (
        <h1> Loading... </h1>
      ) : (
        <div>
          <button onClick={() => navToFrequency()}>
            {" "}
            Show email character frequency{" "}
          </button>
          <RenderTable people={peopleList.data} />
        </div>
      )}
    </div>
  )
}
export default PeopleTable
