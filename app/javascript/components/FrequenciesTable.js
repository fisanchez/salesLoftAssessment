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

const FrequencyTable = props => {
  return (
    <div>
      <h1> Displaying frequency count of the first 25 emails </h1>
      <p> Showing the character count for each</p>
      <TableCSS>
        <table>
          <tr>
            <th> Character </th>
            <th> Frequency </th>
          </tr>
          {Object.keys(props.frequency).map(character => {
            if (props.frequency[character] != 0) {
              return (
                <tr key={character}>
                  <td> {character} </td>
                  <td> {props.frequency[character]} </td>
                </tr>
              )
            }
          })}
        </table>
      </TableCSS>
    </div>
  )
}

// Responsible for showing the character count for emails on a table
// TODO: Include the option to pass peopleList on redirect from peopleTable
const FrequencyPage = () => {
  const { data: frequencyHash, isLoading, isError } = useQuery(
    "fetchPeople",
    async () => {
      const peopleList = await peopleClient.list()
      const emails = peopleList.data.map(person => {
        return person.email_address
      })
      const frequency = await peopleClient.frequency(emails)
      return frequency
    }
  )
  return (
    <div>
      {isLoading ? (
        <h1> Loading... </h1>
      ) : (
        <FrequencyTable frequency={frequencyHash} />
      )}
    </div>
  )
}

export default FrequencyPage
