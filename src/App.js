import * as React from 'react';
import "./App.css";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


class App extends React.Component {
  render() {
    return(
      <>      
        <NavBar/>
        <ItemListContainer texto = "Jagermeister" price= "$6990.00"/>
        <ItemListContainer texto = "fernet" price="1300.00"/>
        <ItemListContainer texto = "Campari" price= "800.00"/>
      
      </>
  
    );
  }
}
export default App;



