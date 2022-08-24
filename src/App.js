import * as React from 'react';
import "./App.css";
import NavBar from './components/NavBar';



class App extends React.Component {
  render() {
    return(
      <div className='App'>      
        <NavBar/>
    

        <div>
          <h2>Ofertas</h2>
        </div>

      </div>
  
    );
  }
}
export default App;



