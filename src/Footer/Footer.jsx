import './Footer.css';
const Footer=(props)=>{
    console.log('footer props: ', props);
    return(
        <footer className='flex'>copyrights 🍉fruit🥬 {props.year} </footer>
    )
}
export default Footer