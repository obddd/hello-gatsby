import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <div>Hello world!</div>
      <ul>
        <li>
          <Link to="/examples">Examples</Link>
        </li>
        <li>
          <Link to="/images">Images</Link>
        </li>
        <li>
          <Link to="/tours">Tours</Link>
        </li>
        <li>
          <Link to="/functions">Function</Link>
        </li>
        <li>
          <Link to="/apolloLambdaFunctions">GraphQl Lambda Function</Link>
        </li>
      </ul>
    </div>
  )
}
