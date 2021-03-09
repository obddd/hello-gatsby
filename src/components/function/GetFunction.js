import React, { useState, useEffect } from "react"

const GetFunction = () => {
  const [data, setData] = useState("")
  useEffect(() => {
    (async () => {
      const response = await fetch(".netlify/functions/hello")
      const tempData = await response.json()
      setData(tempData)
    })();
  }, [])
  return <div>{data.message}</div>
}

export default GetFunction
