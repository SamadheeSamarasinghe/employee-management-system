import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<EmployeeList />} />
        <Route path="/edit/:empId" element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
