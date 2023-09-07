import React from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Dashboard from './views/Dashboard'
import Loginpage from './views/Loginpage'
import Navbar from './views/Navbar'
import Footer from './views/Footer'


function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar/>
        <Switch>
          <PrivateRoute component={Dashboard} path="/dashboard" exact/>
          <Route component={Loginpage} path="/login" />
          <Route component={Registerpage} path="/register" />
          <Route component={Homepage} path="/"/>
        </Switch>
        <Footer/>
      </AuthProvider>
    </Router>
  )
}

export default App