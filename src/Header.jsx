const Header=(props)=>{
    console.log("this is header props: ", props);
    return(
    <header>
        <div id="logo">{props.logo} </div>
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