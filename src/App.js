import './styling/App.css';
import Row from './Row.js'
import requests from './requests'
import Banner from './Banner.js'
import React, {useState} from 'react'
import axios from './axios'
import Results from './Results.js'
import Popup from './Popup.js'

require('dotenv').config();
 const api_key= process.env.REACT_APP_API;

function App() {

  const[state, setState]=useState({
    search: "",
    results:[],
    selected: {},
    openPopup: false
})

const handleInputChange=(evt)=>{
  let s=evt.target.value;
   setState(prevState=>{
      return{...prevState, search: s}
  });
};

const search=(evt)=>{
  if(evt.key==="Enter"){
   axios.get(requests.search + state.search).then((res)=>{
     let result=res.data.results
     setState(prevState=>{
       return{...prevState, results: result}
     })
   })
  }
}


const popup=(id)=>{
  axios.get("/movie/"+id+"?api_key=" + api_key +"&language=en-US").then((res)=>{  
    let result=res.data

   setState(prevState=>{
     return{...prevState, selected: result, openPopup: true}
   })
  })
}

const closePopup=()=>{
  setState(prevState=>{
    return{...prevState, openPopup: false}
  })
}


  return (
    <div className="App">
      <Banner handleInputChange={handleInputChange} search={search}/>
      <Results results={state.results} popup={popup}/>
      <Row popup={popup} fetchUrl={requests.fetchTrending}/>
      <Row popup={popup} fetchUrl={requests.fetchTrending1}/>
      <Row popup={popup} fetchUrl={requests.fetchTrending2}/>
      <Row popup={popup} fetchUrl={requests.fetchTrending3}/>
      <Row popup={popup} fetchUrl={requests.fetchTrending4}/>
      {state.openPopup ? <Popup selected={state.selected} closePopup={closePopup}/> : false}
    </div>
  );
}

export default App;
