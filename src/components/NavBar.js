import * as React from 'react';
import Cardwiget from './CardWiget';

const NavBar = () => {
  return(
      
        <nav>
              <div className="logo">
                  <h1>Mi App</h1>
              </div>
              <ul>
              <li><a href="#">Index</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Productos</a>
                  <ul>
                      <li><a href="#">Ofertas</a></li>
                      <li><a href="#">Combos</a></li>
                      <li><a href="#">--------</a></li>
                  </ul>
              </li>
              <li><a href="#">Contáctanos</a></li>
              <li><a href="#"><Cardwiget/></a></li>
          
              </ul>
      </nav>
      
  );
}
export default NavBar;

