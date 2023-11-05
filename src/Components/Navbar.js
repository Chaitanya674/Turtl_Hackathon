import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 >Turtle</h1>
        </Link>
        <Link to="/feed">
          <h3 style={{color : '#0E5E6F'}}>Feed</h3>
        </Link>
        <Link to="/event">
          <h3 style={{color : '#0E5E6F'}}>Events</h3>
        </Link>
        <Link to="/store">
          <h3 style={{color : '#0E5E6F'}}>Store</h3>
        </Link>
      </div>
    </header>
  )
}

export default Navbar