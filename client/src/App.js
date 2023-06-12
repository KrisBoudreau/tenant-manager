import Navbar from "./pages/Navbar/Navbar"

import Home from "./pages/Home/Home"
import Buildings from "./pages/Buildings/Buildings"
import  Users from "./pages/Users/Users"
import { Route, Routes } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./pages/Loginpage/Login-button"
import LoginPage from "./pages/Loginpage/LoginPage"

function App() {

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading ...</div>
  if (!isAuthenticated) return <LoginPage /> 

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Buildings" element={<Buildings />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </div>
    </>
  )
}

export default App
