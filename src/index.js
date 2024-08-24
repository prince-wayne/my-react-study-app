import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Welcome from './Welcome';
import CardSection from './Cards/Card section';
import Teams from './Team/Team container.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='spacer'/> {/* tbh this was simply to seperate them faster */}
    <Welcome name = "Oj Spiceman"/> {/* if we remove the name it will say guest */}

    <div className='spacer'/> {/* tbh this was simply to seperate them faster */}
    <CardSection/>

    <div className='spacer'/> {/* tbh this was simply to seperate them faster */}
    <Teams/> 

    <div className='spacer'/> {/* tbh this was simply to seperate them faster */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
