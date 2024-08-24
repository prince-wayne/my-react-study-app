import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Welcome from './Welcome';
import CardSection from './Cards/Card section';
import Teams from './Team/Team container.jsx';

const teams = [
  {
    name: "Team 1",
    members: ["Mello", "Bj", "Mari"]
  },
  {
    name: "Team 2",
    members: ["Bill", "Charles", "Wayne"]
  },
  {
    name: "Team 3",
    members: ["Daniel", "Meena", "Tindle"]
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<React.StrictMode >
  <div className = 'spacer'/>
  <Welcome name = "Oj Spiceman"/> 
  <div className='spacer'/>

  <div className = 'spacer'/>
  <CardSection/>

  <div className = 'spacer'/> 
  <Teams/>

  <div className= 'spacer'/>
  <Teams teams = {teams}/>

  <div className = 'spacer'/> 
  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);