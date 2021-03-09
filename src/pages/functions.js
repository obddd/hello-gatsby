import React from "react"
import AddFunction from "../components/function/AddFunction"
import GetFunction from "../components/function/GetFunction"

const functions = () => {
  return (
    <div>
      this message is coming from netlify functions
      <GetFunction />
      <AddFunction/>
    </div>
  )
}

export default functions
