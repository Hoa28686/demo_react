import './Header.css';
const Header=({logo})=>{
    // console.log("this is header props: ", {logo});
    return(
    <header>
        <div className="logo">{logo} </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            
        </nav>
    </header>
    )
}

export default Header