import React from 'react';
import './App.css';
import DashboardHotels from "../dashboard/DashboardHotels";
import Header from '../header/Header';

export default class App extends React.Component{

  render(){
    return (
      <div className="App">
  
        <Header />
        <DashboardHotels />
  
      </div>
    );
  }
}

