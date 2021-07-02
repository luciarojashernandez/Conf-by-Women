import React, { Fragment } from 'react';
import logoConf from '../images/logoConf.png'
import './styles/Navbar.css'


class Navbar extends React.Component {
    render(  ){
        return (
           <div className='Navbar'>
               {/* redirige a la página principal */}
             <div className='container-fluid'>
             <a className='Navbar__brand' href='/'>
                   <img className='Navbar__brand-logo'  src={logoConf} alt='logo'/>
                   <span className='font-weight-light'>Conf</span>
                   <span className='font-weight-light'>byWomen</span>

               </a>
             </div>
           </div>
        )
    }
}
 
export default Navbar 
