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
      </ul>
    </div>
  )
}
