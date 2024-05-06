import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modals from './Component/Modal/Modals'
import EmployeeTable from './Table/EmployeeTable'
import AllEmpolyeePage from './Pages/AllEmployeePage/AllEmpolyeePage'

function App() {

  return (
    <>
      <Modals />
      <AllEmpolyeePage />
    </>
  )
}

export default App
