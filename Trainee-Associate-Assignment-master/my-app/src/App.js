import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import UserList from './components/UserList'

function App() {
  
  const isLogin =sessionStorage.getItem("isLoggin");

  return (
    <div className="App">
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <LoginPage/>

      <BrowserRouter>
      <Routes>
      (<Route path="/userList" element={<UserList/>}/>)
        
      (<Route exact path="/" element={<LoginPage/>}/>)
        
      

      </Routes>      
        
        
        
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
