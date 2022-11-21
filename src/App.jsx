import { Nav } from "./componentes/nav"
import { Footer } from "./componentes/Footer";
import { TabLogin } from "./componentes/TabLogin";

import './styles.css';
import './js.js';

function App() {

  return (
    <div className="App">
        <Nav/>
        <TabLogin/>
        <Footer/>

    </div>
  )
}

export default App
