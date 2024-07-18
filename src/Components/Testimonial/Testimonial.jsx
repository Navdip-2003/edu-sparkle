import React, { useRef } from 'react'
import './Testimonial.css'
import nextIcon from '../../assets/next-icon.png'
import backIcon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'


function Testimonial() {
    const slider = useRef()
    let tx = 0;
    const slideForward = () =>{
        if(tx > -60){
            tx -=20;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const backForward = () =>{
        if(tx < 0){
            tx += 20;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='testimonial'> 
        <img src={nextIcon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={backIcon} alt="" className='back-btn' onClick={backForward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'> 
                        <div className="user-info">
                            <img src={user1} alt="" />
                                <div>
                                    <h3>Willean Jackson</h3>
                                    <span>Educity , USA</span>
                                </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas voluptate aliquam aperiam neque in rem molestiae consequatur dolor, sunt, similique distinctio praesentium suscipit saepe, atque tempore excepturi aliquid illum nesciunt! lore</p>
                    </div>
                </li>
                <li>
                    <div className='slide'> 
                        <div className="user-info">
                            <img src={user2} alt="" />
                                <div>
                                    <h3>Robert Junial</h3>
                                    <span>Kelifonia , USA</span>
                                </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas voluptate aliquam aperiam neque in rem molestiae consequatur dolor, sunt, similique distinctio praesentium suscipit saepe, atque tempore excepturi aliquid illum nesciunt!</p>
                    </div>
                </li>
                <li>
                    <div className='slide'> 
                        <div className="user-info">
                            <img src={user3} alt="" />
                                <div>
                                    <h3>Tony Stark</h3>
                                    <span>Chicago , UK</span>
                                </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas voluptate aliquam aperiam neque in rem molestiae consequatur dolor, sunt, similique distinctio praesentium suscipit saepe, atque tempore excepturi aliquid illum nesciunt!</p>
                    </div>
                </li>
                <li>
                    <div className='slide'> 
                        <div className="user-info">
                            <img src={user1} alt="" />
                                <div>
                                    <h3>Caption Laliya</h3>
                                    <span>Educity , USA</span>
                                </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas voluptate aliquam aperiam neque in rem molestiae consequatur dolor, sunt, similique distinctio praesentium suscipit saepe, atque tempore excepturi aliquid illum nesciunt!</p>
                    </div>
                </li>
                <li>
                    <div className='slide'> 
                        <div className="user-info">
                            <img src={user4} alt="" />
                                <div>
                                    <h3>Caption Laliya</h3>
                                    <span>Educity , USA</span>
                                </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas voluptate aliquam aperiam neque in rem molestiae consequatur dolor, sunt, similique distinctio praesentium suscipit saepe, atque tempore excepturi aliquid illum nesciunt!</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial
