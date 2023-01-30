import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Content from './components/Content'
import SideBar from './components/SideBar'
import { useEffect } from 'react'

function App() {
  const [sideBarActive, setSideBarActive] = useState(false)

  useEffect(() => {
    setTimeout(() => setSideBarActive(true), 10000)
  }, [])

  return (
    <div className="App">
      <Header />
      <Menu />
      {sideBarActive && <SideBar setSideBarActive={setSideBarActive} />}
      <Content />
    </div>
  )
}

export default App
