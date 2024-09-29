function Modal(){
    
    function closeModal(){
        document.getElementById('modal').style.display = 'none'
    }
    
    return(
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
    )
}

export default Modal;