import '../Styles/persona.css'

function Persona(props){
    return (
        <>
          <div className="person">
            <img src={props.img} alt="" />
            <span className='name'>
                <span className='text member'>{props.name}</span>
                <span className='text career'>{props.career}</span>
            </span>
          </div>      
        </>
    )
}

export default Persona