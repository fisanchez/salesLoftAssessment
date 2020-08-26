import React from "react"
import ReactDOM from "react-dom"

const DuplicatesPage = () => {
  return (
    <div>
      <h2> Page Placeholder </h2>
    </div>
  )
}
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <DuplicatesPage />,
    document.body.appendChild(document.createElement("div"))
  )
})
