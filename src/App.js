import './App.css';
function App() {

  function openModal() {
    document.getElementById('modal').style.display = 'block';
  }

  function closeModal(){
    document.getElementById('modal').style.display = 'none'
  }

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <div className='social-logos'>
              <a href='/'>
                <img src="/x-logo.svg" className='x-logo' alt="x logo" />
              </a>
              <a href='/'>
                <img src="/instagram-logo.png" className='instagram-logo' alt="instagram logo" />      
              </a>
              <a href='/'>
                <img src="/linkedin-logo.svg" className='linkedin-logo' alt="linkedin logo" />      
              </a>
              <a href='/'>
                <img src="/regate-icon.png" className='regate-icon' alt="regate logo" />      
              </a>
            </div>
            <img src="/logo.png" className='comet-logo' alt="comet logo" />      
        
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <div className='toggle-button'></div>
              <div className='toggle-button'></div>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </nav>
      </header>


      <div className='container-info col-md-12'>
        <div className='info-section'>
          <div className='secondary-title'>
            <h6>Core features</h6>
          </div>
          <div className='principal-title'>
            <h1>Develop systematically with Comet</h1>
          </div>
          <b className='subtitle'><span>Adaptable sections are ideal </span>for crafting versatile layouts</b>
          
          <div className='services col-md-12'>
            <div className='analyze col-md-6'>
              <img src="/analyze-icon.png" alt="analyze icon" />
              <h3>System analyze your data</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className='learn-more'>
                <a onClick={openModal} href="/" className='learn-more'>
                  Learn more
                  <span className="material-symbols-outlined">arrow_outward</span>
                </a>
                <div className='btn-line'></div>
              </div>
            </div>

            <div className='management col-md-6'>
              <img src='/management-icon.png' alt="management icon" />
              <h3>Direct system management</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className='learn-more'>
                <a onClick={openModal} href='/' className='learn-more'>
                  Learn more
                  <span className="material-symbols-outlined">arrow_outward</span>
                </a>
                <div className='btn-line'></div>
              </div>
            </div>

          </div>
        </div>

        <div id="modal" className="modal">
          <div className="content">
            <div class="header">
              <h4>Modal Title</h4>
              <span onClick={closeModal} className="close">&times;</span>
            </div>
            <div className='body'>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </div>
        </div>

        <img src='/image.png' className='image' alt="side"/>
      </div>
      <hr />
      <footer className='footer'>
        <div className='footer-content'>
          <div className='credits'>
            <h6>Developed by Antonella Zacagnino</h6>
            <p>Challenge realizado para DOMO. Utilizando herramientas tales como React.js, CSS, Boostrap y Javascript.</p>
          </div>
          <div className='contact'>
            <h6>Contacto</h6>
            <div className='icons'>
              <a href="mailto:antonellazacagnino@gmail.com">
                <span class="material-symbols-outlined">mail</span>
              </a>
              <a href='https://www.linkedin.com/in/antonella-zacagnino'>
                <img src="/linkedin-logo.svg" className='linkedin-logo' alt="linkedin logo" />      
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
