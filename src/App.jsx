import { useState, useEffect } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
  const [showModal , setShowModal] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const localKey = new Date().toLocaleDateString().replaceAll('/','-')
    const cachedData = localStorage.getItem(localKey)
    if (cachedData) {
      setData(JSON.parse(cachedData))
      return
    }
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`)
      .then(response => response.json())
      .then(data => {
        localStorage.clear()
        localStorage.setItem(localKey, JSON.stringify(data))
        setData(data)
      })
      .catch(error => {
        console.error('Error fetching data from NASA API:', error.message)
      })
  }, [])
  return (
    <>
      { data ? (<Main data={data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear" ></i>
        </div>
      )}
      { showModal && (
        <SideBar setShowModal={setShowModal} data={data} /> )
      }
      {data && <Footer setShowModal={setShowModal} data={data} /> }
    </>
  )
}

export default App
