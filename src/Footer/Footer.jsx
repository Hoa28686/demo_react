import './Footer.css';
const Footer=({year})=>{
    console.log('footer props: ', {year});
    return(
        <footer className='flex'>copyrights 🍉fruit🥬 {year} </footer>
    )
}
export default Footer