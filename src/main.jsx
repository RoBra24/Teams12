import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import App2 from './App2'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <Router>
        <Routes>
          <Route exact path="/" element={<App/>} />
          <Route path="/index" element={<App2/>} />
        </Routes>
      </Router>

  </React.StrictMode>
)
