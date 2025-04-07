const Box=(props)=>{
    return(
      <div className='box'>

        <p>Id: {props.id} </p>
        <p>Name: {props.name} </p>
        <p>Title: {props.title} </p>
        <p>Age: {props.age} </p>
        <p>Animal: {props.animal} </p>
        <p>Salary: {props.salary} </p>
      </div>
    )
    }
export default Box

export function Orange(){
  return(
    <div className='box'>
      <p>Orange</p>
      <p>Fruit</p>
      <p>🍊</p>
    </div>
  )
}

export function Grape(){
  return(
    <div className='box'>
      <p>Grape</p>
      <p>Fruit</p>
      <p>🍇</p>
    </div>
  )
}