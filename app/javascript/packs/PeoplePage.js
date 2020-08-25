import React from "react"
import ReactDOM from "react-dom"
import PeopleTable from "../components/PeopleTable"

const PeoplePage = () => {
  return (
    <div>
      <PeopleTable />
    </div>
  )
}
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <PeoplePage />,
    document.body.appendChild(document.createElement("div"))
  )
})
