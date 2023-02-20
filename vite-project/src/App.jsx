// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import icon1 from '../src/assets/icon1.png'
import icon2 from '../src/assets/icon2.png'
import icon3 from '../src/assets/icon3.png'
import icon4 from '../src/assets/icon4.png'
import ironhackLogo from '../src/assets/ironhack-logo-xs.png'
import menu from '../src/assets/menu-top-xs.png'

function App() {
  return <div className='App'>
     <div className='bigDiv'>
     <div className='navbar'>
     <img src={ironhackLogo} alt="ironhackLogo" />
     <img src={menu} alt="menu" />
     <div>
     <h1>Say hello to ReactJS</h1>
     <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
     </div>
     </div>
     </div>
     <div>
     <div>
     <img src={icon1} alt="icon1" />
     <h2>Declarative</h2>
     <p>React makes it painless to create interactice UIs.</p>
     </div>
     <div>
     <img src={icon2} alt="icon2" />
     <h2>Components</h2>
     <p>Build encapsulated components that manage their state.</p>
     </div>
     <div>
     <img src={icon3} alt="icon3" />
     <h2>Single-Way</h2>
     <p>A set of immutable values are passed to the component's.</p>
     </div>
     <div>
     <img src={icon4} alt="icon4" />
     <h2>JSX</h2>
     <p>Statically-typed, designed to run on modern browsers.</p>
     </div>
     </div>
  </div>
}
export default App
