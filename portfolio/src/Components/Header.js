import React, { Component } from 'react';


class Header extends Component {
    render(){
        return(
            <div>
                <header class ="main-head">
        <nav>
            <h1 class="logo">Start BootStrap</h1>
            <ul>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
               <li><a href="#">Contact</a></li>
               
            </ul>
        </nav>
    </header>
    
            </div>
        )
    }
}

export default Header;