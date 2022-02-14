import React, { useEffect } from 'react'
import './App.css';
import Sidelist from './components/Sidebar'
import data from './components/data'
import Details from './components/Details'
import DetailsData from './components/detailsData'
import { useState } from 'react';



function App() {

  const [sidelist, setsidelist] = useState(data);
  const [idparam, setidparam] = useState(0);
  

  const changeID = (id) => {
    setidparam(id);
  }


  const setList = (i,tk) =>
  {
    setsidelist([ {id: i, task: tk},...sidelist])
  }
 

  const maindelete = (id) => 
  {
    const newli = sidelist.filter((item) => item.id !== id)
    setsidelist(newli)
    setidparam(sidelist[0].id)
  }

  useEffect(()=>{

    if(sidelist.length > 0)
    {
      setidparam(sidelist[0].id)
    } else 
    {
      setidparam(0)
    }

  },[sidelist])
  
  
  return (
    <div className="App">
      <header className="logo">
        <span>BUCKET</span>LIST
      </header>

      <div className="body-div">
        <div className="sidebar">
          <Sidelist sidelist={sidelist} setList={setList} changeid = {changeID} maindelete={maindelete} />
        </div>
        <div className="content">
          <Details data={DetailsData} id={idparam} sidelistdata={data}/>
        </div>
      </div>

    </div>

  );
}

export default App;
