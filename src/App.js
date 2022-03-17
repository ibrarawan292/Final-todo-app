import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Details from './Components/Details';



function App() {
  return (
<div className="App">
      
      
      
    
  <BrowserRouter>
   <Header/>
   <Routes>
     <Route path='/detail/:title' element={<Details/>}/>
     <Route path='/form' element= { <Form/>}/>
   </Routes>
  
  </BrowserRouter>
  </div>
    
  );
}

export default App;
