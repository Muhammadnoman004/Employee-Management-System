import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modals from './Component/Modal/Modals'
import EmployeeTable from './Table/EmployeeTable'

function App() {

  return (
    <>
      <Modals />
      <EmployeeTable />
    </>
  )
}

export default App
