import './App.scss';
import SignIn from './components/pages/SignIn'  
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'

function App() {
  return (
      <>
      <Router>
       
        <Routes> 
          <Route exact path = "/" element={<SignIn />}/>
          <Route path ='/dashboard'  element={<Dashboard />}/>
        </Routes>
      </Router>
      </>

    );
}

export default App;
