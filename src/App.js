import './App.css';
import NavBar from './Component/NavBar';
import Main from './Component/Main';
function App() {
  return (
    <div className="App">
       <div className="navWrapper">
       <NavBar/>
       </div>
       <div className="Heading ps-4">
         <div>
              Blogs....
         </div>
       </div>
       <div className="mainWrapper">
            <Main/>
       </div>
    </div>
  );
}

export default App;
