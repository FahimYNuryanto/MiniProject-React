import React, { useEffect } from 'react'
import { getAllProducts} from "../../services/api"

const Home = () => {

  useEffect(() => {
    getAllProducts().then((response) => console.log(response))
  }, [])
  return (
    <div>Home</div>
  )
}

export default Home