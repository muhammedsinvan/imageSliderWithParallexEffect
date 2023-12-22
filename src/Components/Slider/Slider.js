import React ,{useEffect}from 'react';
import './Slider.css';
import M from 'materialize-css';


const Slider = () => {

  useEffect(()=>{
    let ele = document.querySelector(".slider");
    M.Slider.init(ele);
  },[])
  
  return (
    <div className='slider'>
      <ul className='slides'>
        <li>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTut5Z3LY2MItO3y4wANSzZUHgx-rpo8SaYoSza00QqUQ&s' alt='image'/>
          <div className='caption center-align'>
            <h3 className='red-text text-lighten-1'>
              Flower with garder
            </h3>
            <h5 className='red-text'>
              Garden full of flower
            </h5>
          </div>
        </li>
        <li>
          <img src='https://hips.hearstapps.com/hmg-prod/images/vibrant-pink-and-white-summer-flowering-cosmos-royalty-free-image-1653499726.jpg' alt='image'/>
          <div className='caption center-align'>
            <h3>
              Flower with garder
            </h3>
            <h5 className='white-text'>
              Garden full of flower
            </h5>
          </div>
        </li>
        <li>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ik34gXDU9LKFJsejW3AsK4RvD_DHWuW1sbF4HZGGEZWzg4TSDOdJ_s7lbN8mZG6kJBs&usqp=CAU' alt='image'/>
          <div className='caption center-align'>
            <h3 className='blue-text text-lighten-1'>
              Flower with garder
            </h3>
            <h5 className='light grey-text text-lighten-2'>
              Garden full of flower
            </h5>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Slider


// https://medium.com/swlh/getting-started-with-7186a946f513