import Modal from './Modal';

function MainContainer(){

    function openModal() {
        document.getElementById('modal').style.display = 'block';
    }


    return (
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
                            <button onClick={openModal} href="/" className='learn-more'>
                                Learn more
                                <span className="material-symbols-outlined">arrow_outward</span>
                            </button>
                            <div className='btn-line'></div>
                        </div>
                    </div>
                    <div className='management col-md-6'>
                        <img src='/management-icon.png' alt="management icon" />
                        <h3>Direct system management</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className='learn-more'>
                            <button onClick={openModal} className='learn-more'>
                                Learn more
                                <span className="material-symbols-outlined">arrow_outward</span>
                            </button>
                            <div className='btn-line'></div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal />
            <img src='/image.png' className='image' alt="side"/>
        </div>
    )
}

export default MainContainer;