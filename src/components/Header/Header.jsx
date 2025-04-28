import {Link} from 'react-router';
import './Header.css';
const Header=({logo})=>{
    // console.log("this is header props: ", {logo});
    return(
    <header>
        <div className="logo"><Link to='/'  className='link-style' >{logo}</Link> </div>
        <nav>
            <ul>
                <Link to='/' className='link-style' >Home</Link>
                <Link to='/about' className='link-style' >About</Link>
                <Link to='/book' className='link-style' >Book</Link>
                <Link to='/add-book' className='link-style' >Add</Link>
                
            </ul>
            
        </nav>
    </header>
    )
}

export default Header