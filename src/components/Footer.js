function Footer() {
    return (
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
                        <a href='https://github.com/AntonellaZacagnino'>
                            <img src="/github-logo.svg" className='github-logo' alt="github logo" />      
                        </a>
                    </div>
                </div>
            </div>
      </footer>

    )
}

export default Footer;