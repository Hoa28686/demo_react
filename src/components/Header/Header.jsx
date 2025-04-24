import {Link} from 'react-router';
import './Header.css';
const Header=({logo})=>{
    // console.log("this is header props: ", {logo});
    return(
    <header>
        <div className="logo">{logo} </div>
        <nav>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/book'>Book</Link>
                
            </ul>
            
        </nav>
    </header>
    )
}

export default Header