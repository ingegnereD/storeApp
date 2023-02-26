import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, redirect } from 'react-router-dom'
import WelcomePage from './pages/welcomePage'
import LoginPage from './pages/loginPage'
import Dashboard from './pages/dashboard'
import './index.css'
import AddNewProduct from './pages/addProduct'
import ListProduct from './pages/listProduct'
import RestockProduct from './pages/restockProduct'
import NewSale from './pages/newSale'
import AllSales from './pages/allSales'
import ListReturn from './pages/listReturnSale'
import RecoverAct from './pages/recoverAct'

const App = () => {
  const [access, setAccess] = useState(false)

  useEffect(()=>{
    if (!access) {
      let account;
      let userInfo;
      if (localStorage.getItem('userInfo') === null) {
        // redirect Navigate('/')
      }
      }
  },[access])

  return (
    <section className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage setAccess={setAccess} />}/>
          <Route path='login' element ={<LoginPage setAccess={setAccess}/>}/>
          <Route path='signup' element ={<WelcomePage access={access} setAccess={setAccess}/>}/>
          <Route path='dashboard' element ={<Dashboard access={access} setAccess={setAccess}/>}/>
          <Route path='newproduct' element ={<AddNewProduct access={access} setAccess={setAccess}/>}/>
          <Route path='listproduct' element ={<ListProduct access={access} setAccess={setAccess}/>}/>
          <Route path='restockproduct' element ={<RestockProduct access={access} setAccess={setAccess}/>}/>
          <Route path='newsale' element ={<NewSale access={access} setAccess={setAccess}/>}/>
          <Route path='allsales' element ={<AllSales access={access} setAccess={setAccess}/>}/>
          <Route path='returnsales' element ={<ListReturn access={access} setAccess={setAccess}/>}/>
          <Route path='passwordrecovery' element={<RecoverAct />} />
          <Route path='*' element ={<LoginPage setAccess={setAccess}/>}/>
        </Routes>
      </BrowserRouter>
    </section>
    
  )
}

export default App
