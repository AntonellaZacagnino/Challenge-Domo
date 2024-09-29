import Menu from "./Menu"

function Header() {

    return(       
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
                    <Menu />
                </div>
            </nav>
      </header>
    )
}

export default Header