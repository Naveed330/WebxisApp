import React from 'react'
import thirdimg from '../../Assets/thirdimg.jpg'
import twoimg from '../../Assets/twoimg.jpg'
import oneimg from '../../Assets/oneimg.jpg'
import "./slider.css"
const Slides = () => {
  return (
    <div style={{ height: "70vh" }} className='w-sm-auto '>
      <div id="carouselExampleControls" style={{ position: 'absolute', top: '0px', zIndex: '0', width:"100%" }} className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
        <div className="carousel-inner ">
          <div className="carousel-item active ">
            <div className='d-flex align-items-center container-fluid' style={{
              backgroundImage: `url(${thirdimg})`,
              backgroundColor: '#cccccc',
              height: '500px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              position: 'relative',
              width : "99vw"
            }}>
              <div className='col-md-1'>

              </div>
              <div className='col-md-5 ms-5  '>
                <p className='text-uppercase fw-bolder' style={{color:"white"}} >Welcome to Webix </p>
                <h1 style={{color:"white"}} >Make digital Piplines that your bussiness love</h1>
                <p className='fw-bold text-monospace fst-italic' style={{color:"white"}}>We do all things 3d virtual reality ,Augmented Reality,Apps and Web </p>
                <button type="button" class="btn btn-outline-info px-lg-4 btn_style me-2"  style={{color:"white"}}> <strong> Get started</strong> </button>
                <button type="button" class="btn btn-outline-info px-lg-4 btn_style me-2"  style={{color:"white"}}> <strong>Learn More</strong>  </button>
                {/* <button className='btn btn-sm bg-success me-2 btn_style'>Get started </button> */}
                {/* <button className='btn btn-sm bg-success btn_style'>Leartn More </button> */}
              </div>
              <div className='col-md-6'>

              </div>
            </div>

          </div>
          <div className="carousel-item w-auto">
            <div className='d-flex align-items-center ' style={{
              backgroundImage: `url(${thirdimg})`,
              backgroundColor: '#cccccc',
              height: '500px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              position: 'relative',
              width : "99vw"

            }}>
              <div className='col-md-1'>
              </div>

              <div className='col-md-5 ms-5  '>
                <p className='text-uppercase fw-bolder' style={{color:"white"}}>Welcome to Webix </p>
                <h1 style={{color:"white"}} >Make digital Piplines that your bussiness love</h1>
                <p className='fw-bold text-monospace fst-italic'  style={{color:"white"}}>We do all things 3d virtual reality ,Augmented Reality,Apps and Web </p>

                <button type="button" class="btn btn-outline-info px-lg-4 btn_style me-2"  style={{color:"white"}}> <strong> Get started</strong> </button>
                <button type="button" class="btn btn-outline-info px-lg-4 btn_style me-2"  style={{color:"white"}}> <strong>Learn More</strong>  </button>
              </div>
              <div className='col-md-6'>
              </div>
            </div>

          </div>
          <div className="carousel-item w-auto">
            <div className='d-flex align-items-center ' style={{
              backgroundImage: `url(${thirdimg})`,
              backgroundColor: '#cccccc',
              height: '500px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              position: 'relative',
              width : "99vw"

            }}>
              <div className='col-md-1'>
              </div>

              <div className='col-md-5 ms-5  '>
                <p className='text-uppercase fw-bolder' style={{color:"white"}} >Welcome to Webix </p>
                <h1 style={{color:"white"}} >Make digital Piplines that your bussiness love</h1>
                <p className='fw-bold text-monospace fst-italic'  style={{color:"white"}}>We do all things 3d virtual reality ,Augmented Reality,Apps and Web </p>

                <button type="button" class="btn btn-outline-info px-lg-4 me-2 btn_style"  style={{color:"white"}}> <strong> Get started</strong> </button>
                <button type="button" class="btn btn-outline-info px-lg-4 btn_style me-2"  style={{color:"white"}}> <strong>Learn More</strong>  </button>
              </div>
              <div className='col-md-6'>
              </div>
            </div>

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"  >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" d >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}
export default Slides




