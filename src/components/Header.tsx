import './Header.css'

type Props = {
  title: string
  instruction: string
}

const Header = ({ instruction, title }: Props) => {
  return (
    <div className='header'>
      <h1 className='title'>{title}</h1>
      <p className='instruction'>{instruction}</p>
    </div>
  )
}

export default Header
