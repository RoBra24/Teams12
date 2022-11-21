import React from 'react';
import { Nav } from './componentes/nav';
import { Footer } from './componentes/Footer';
import { TabsUser } from './componentes/TabsUser';


import './styles.css';
import './js.js';

function App2() {

  return (
    <div className="App">
        
        <Nav/>
        <TabsUser/>
        <Footer/>
        
    </div>
  )
}

export default App2