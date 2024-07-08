import React, {useState} from "react";
// import { Modal } from "react-bootstrap";
import { Button } from 'components/UI/Button';

const ATGDBusiness = () => {

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      <div className="breadcrumbbar">
        <h2>
          Business & Investment: <p>Access to Geological Data</p>
        </h2>
      </div>
      <div className="wrapper">
        <div className="wrapper__head">
          <h3></h3>
        </div>
        <div className="wrapper__container">
          <div className="wrapper__form">
            {/** Next section */}
            <div className="geospatialhead__wrapp">
              <div className="geospatialhead__container">
                <h1 style={{ textAlign: "center" }}>
                  Welcome to <p>GIS Portal of Pakistan</p>
                </h1>

                {/* <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                  <Modal.Header closeButton>
                  </Modal.Header>
                  <Modal.Body><iframe
                  id="gis1"
                  title="GIS IFrame"
                  className="gis__ifrmae"
                  src="https://arcg.is/GuCL90"
                  loading="eager"
                ></iframe></Modal.Body>
                </Modal> */}
    
                <p>
                  The portal acts as a centralized repository for geological
                  data, housing a vast collection of information related to
                  Pakistan’s geology. This includes data on mineral occurrences,
                  geological structures, licensed or available sites, economic
                  zones, infrastructure, administrative boundaries,
                  environmental features, and other relevant geological
                  parameters.
                </p>
                        <div>
                          <span style={{ paddingRight: "5px" }}>
                          <Button
                              className='btns'
                              path='https://arcg.is/GuCL90'
                              target='_blank'
                              buttonStyle='hbtn--primary'
                              buttonSize='hbtn--medium'
                              style={{ gap: '4px'}}
                              >
                              New Window <i className='far fa-paper-plane' />
                          </Button>
                          </span>
                          <Button
                              className='btns'
                              onClick={() => handleShow(true)}
                              buttonStyle='hbtn--primary'
                              buttonSize='hbtn--medium'
                              style={{ gap: '4px'}}
                              >
                              Full Screen <i className='fa fa-expand' />
                          </Button>
                        </div>
                        {/*<div className='hero-btns'>
                        </div>
                         <button className="me-2 mb-2" onClick={() => handleShow(true)}>
                          Full screen
                        </button> */}

                <iframe
                  id="gis1"
                  title="GIS IFrame"
                  className="gis__ifrmae"
                  src="https://arcg.is/GuCL90"
                  loading="eager"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ATGDBusiness;
