import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Eagerly loaded components (critical for initial render)
import Welcome from './Headers/Welcome.jsx';
import Dropdown from './dropdown list/Dropdown.jsx';

// Lazy loaded components (non-critical or below-the-fold content)
const CardSection = lazy(() => import('./Cards/Card section'));
const Teams = lazy(() => import('./Team/Team container.jsx'));
const ContactBtn = lazy(() => import('./btns/CTA-Contact.jsx'));
const Counter = lazy(() => import('./btns/Counter.jsx'));
const Tasks = lazy(() => import('./Tasks/Tasks.jsx'));
const TasksV2 = lazy(() => import('./Tasks/TasksV2.jsx'));
const StarterPokemon = lazy(() => import('./Pokedex/Starter veiw.jsx'));

// this wasn't used because we like our defaults more.
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
];

const options = [
  "Team Alpha",
  "Team Bravo",
  "Team Charlie",
  "Team Delta",
  "Team Echo"
];
function addCompondent(component) {
  <Suspense fallback={component.name}>
      <div className='spacer'/>
      {component.body}
    </Suspense>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='spacer'/>
    <Welcome name="Oj Spiceman"/>
    <div className='spacer'/>
    
    
    <Suspense fallback={<div>Loading Cards...</div>}>
      <div className='spacer'/>
      <CardSection/>
    </Suspense>

    <Suspense fallback={<div>Loading Teams...</div>}>
      <div className='spacer'/>
      <Teams/>
    </Suspense>

    <Suspense fallback={<div>Loading Contact Button...</div>}>
      <div className='spacer'/>
      <h2> I'd love to speak with you. </h2>
      <ContactBtn/>
    </Suspense>

    <Suspense fallback={<div>Loading Counter...</div>}>
      <div className='spacer'/>
      <Counter/>
    </Suspense>
    
    <Suspense fallback={<div>Loading Dropdown...</div>}>
      <div className='spacer'/>
      <h2> Chose your team.</h2>
      <Dropdown options = {options}/>
    </Suspense>
    
    <Suspense fallback={<div>Loading Manager...</div>}>
      <div className='spacer'/>
      <h2> Updating an Array in State </h2>
      <Tasks/>
    </Suspense>
    
    <Suspense fallback={<div>Loading Manager 2.0...</div>}>
      <div className='spacer'/>
      <h2> Updating an Array of Objects in State </h2>
      <TasksV2/>
    </Suspense>
    
    <Suspense fallback={<div>Loading Pokemon...</div>}>
      <div className='spacer'/>
      <h2> {`UseEffect(), useRef()`}  </h2> {/* i just didn't want the () to cause an escape. */}
      <StarterPokemon/>
    </Suspense>

    <Suspense fallback={null}>
      <div className='spacer'/>
      
    </Suspense>


    <div className='spacer'/>
    </>
);

// reportWebVitals(console.log);
