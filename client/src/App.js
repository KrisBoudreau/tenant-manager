import Navbar from "./pages/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Buildings from "./pages/Buildings/Buildings"
import  Users from "./pages/Users/Users"
import { Route, Routes } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import LoginPage from "./pages/Loginpage/LoginPage"
import { useEffect, useState } from "react"
import axios from "axios"
import getUser from "./actions/users"
import LogoutButton from "./pages/Navbar/Logout-button"



const App = () => {

  const { isAuthenticated, isLoading, user } = useAuth0();

  const [role, setRole] = useState('none');
  const [name, setName] = useState('none');
  const [email, setEmail] = useState('none');


  // gets user info
  useEffect(() => {
    async function fetchData() {
      if (isLoading) return null;
      if (!isAuthenticated) return <LoginPage />;
      const request = await
        axios.get(`http://localhost:3001/users/${user.email}`)
        .then(res => {
          if (res.data.length == 0){
            console.log('no such email');
            axios({
              method: 'post',
              url: 'http://localhost:3001/users',
              data: {
                name: 'no name',
                email: user.email,
                role: 'blocked'
              }
            });
          }
          else {
            setName(n => res.data[0].name);
            setRole(r => res.data[0].role);
            setEmail(e => res.data[0].email);
            return;
          }
        });
    }
    fetchData();
  }, [isLoading]);


  if (isLoading) return <div>Loading ...</div>
  if (!isAuthenticated) return <LoginPage />
  if (role === 'blocked') 
    return <div>you dont have access pls hit someone up lol<LogoutButton/></div>
 

  return (
    <>
      <Navbar />      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home name={name} role={role} email={email} />} />
          <Route path="/Buildings" element={<Buildings name={name} role={role} email={email} />} />
          <Route path="/Users" element={<Users name={name} role={role} email={email} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
