import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import {BrowserRouter, Routes, Route,} from "react-router-dom";



function App() {
  return (
<div className="App">
      
      
      
    
  <BrowserRouter>
   <Header/>
   <Routes>
     
     <Route path='/form' element= { <Form/>}></Route>
   </Routes>
  
  </BrowserRouter>
  </div>
    
  );
}

export default App;
