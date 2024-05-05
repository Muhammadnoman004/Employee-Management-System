import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Forms from './Component/Form/Forms.jsx';
import Modals from './Component/Modal/Modals.jsx';
import EmployeeTable from './Table/EmployeeTable.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Modals />
    <EmployeeTable />
  </React.StrictMode>,
)
