import logo from './logo.svg';
import './App.css';
import Customers from './components/Customers';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">   
      <img src="https://pacechronicle.com/wp-content/uploads/2021/01/IMG_2804.jpeg" alt="Logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Customers Orders
        </a>
      </header>
      
      <div  className='customers'><Customers /></div>
      <div  className='searchdiv'><Search /></div>
       
      
    </div>
  );
}

export default App;
