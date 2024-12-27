import './Advantage.css'

export function Advantage ({ Img, Title, Descripcion }) {
  return (
    <li className='advantage-container'>
      <img src={Img} alt='' />
      <h3>{Title}</h3>
      <p>{Descripcion}</p>
    </li>
  )
}
