import React, { useRef } from 'react'
import './Videoplayer.css'
import college_video from '../../assets/college-video.mp4'
function Videoplayer({playState , setPlayState}) {

    const player = useRef(null);
    const closePLayer = (e) =>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePLayer}>
        <video src={college_video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
