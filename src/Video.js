// import React, { useRef, useState } from 'react'
import React from 'react'
import './Video.css'

function Video() {

    // const [play, setPlay] = useState("false")

    // const videoRef = useRef(null)

    // const handleVideoPlay = () =>{
    //     //if video is playing
    //     //stop it...
    //     if(play){
    //         videoRef.current.pause();
    //         setPlay("false")
    //     }
            
    //     //if video is not playing
    //     //play it...
    //     else{
    //         videoRef.current.play();
    //         setPlay("true")
    //     }
            
    // }

    return (
        <div className="video">
            {/* <video className="video_player" 
                loop
                ref={videoRef} 
                onClick={handleVideoPlay}
                src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg">

            </video> */}

            <iframe 
                className="video_player" 
                width="640" 
                height="360" 
                src="https://www.youtube.com/embed/FStLNdW2OMY" 
                title="YouTube video player" 
                frameborder="0" 
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe> 

            {/* VideoFotter */}
            {/* VideoSideBar */}
        </div>
    )
}

export default Video
