
import logo from './images/logo.png'
import {Link} from 'react-router-dom';

function Navbar() {
  const clickHome = () => {
      document.getElementById('home').classList.add('active');
      document.getElementById('about').classList.remove('active');
  }

  const clickAbout = () => {
    document.getElementById('home').classList.remove('active');
    document.getElementById('about').classList.add('active');
}

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/"><img src={logo} alt="" width="40" height="40"/>CloneSpotify</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
          <li class="nav-item">
            <Link class="nav-link active" id="home" aria-current="page" to="/" onClick={clickHome}>Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about" id="about" onClick={clickAbout}>About</Link>
          </li>
      </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar