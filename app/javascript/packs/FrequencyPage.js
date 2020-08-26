import React from "react"
import ReactDOM from "react-dom"
import FrequencyTable from "../components/FrequenciesTable"

const FrequencyPage = () => {
  return (
    <div>
      <FrequencyTable />
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <FrequencyPage />,
    document.body.appendChild(document.createElement("div"))
  )
})
