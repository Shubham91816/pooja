import React, { Component } from 'react';
import './main.css'
import Morning from './Morning';
 import Dashboard from './Dashboard';
import Department from './Department';
import Patient from './Patient';
import Piecharts from './Piecharts';

export default function Main() {
  
    return (
      <div className='head'>
        <Morning/>
        <Dashboard/>
        <Department/>
        <Piecharts/>
        {/* <Patient/> */}
      </div>
    )

}
