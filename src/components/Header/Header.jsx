import {NavLink,Link} from 'react-router';
import './Header.css';
const Header=({logo})=>{
    // console.log("this is header props: ", {logo});
    return(
    <header>
        <div className="logo"><Link to='/'  className='NavLink-style' >{logo}</Link> </div>
        <nav>
            <ul>
                <NavLink to='/' className='NavLink-style' >Home</NavLink>
                <NavLink to='/about' className='NavLink-style' >About</NavLink>
                <NavLink to='/book' className='NavLink-style' >Book</NavLink>
                <NavLink to='/add-book' className='NavLink-style' >Add</NavLink>
                
            </ul>
            
        </nav>
    </header>
    )
}

export default Header