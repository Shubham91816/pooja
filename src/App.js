
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainWrapper from './Screens/MainWrappper/Home/MainWrapper';
import Login from './sidebar/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Login/>}/>
       <Route path='/MainWrapper' element={<MainWrapper/>}/>
        
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
