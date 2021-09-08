import React, { useRef, useState } from 'react'
import './Video.css'

function Video() {

    const [play, setPlay] = useState("false")

    const videoRef = useRef(null)

    const handleVideoPlay = () =>{
        //if video is playing
        //stop it...
        if(play){
            videoRef.current.pause();
            setPlay("false")
        }
            
        //if video is not playing
        //play it...
        else{
            videoRef.current.play();
            setPlay("true")
        }
            
    }

    return (
        <div className="video">
            <video className="video_player" 
                loop
                ref={videoRef} 
                onClick={handleVideoPlay}
                src="https://v77.tiktokcdn.com/f8c99653bdaa706ed178711fe6bbb1ce/6137dc3d/video/tos/alisg/tos-alisg-pve-0037/8864c8399a094c42886669ed4ae759a3/?a=1180&br=2688&bt=1344&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&ft=98CxdeMV4kag3&l=20210907153956010189066049415FC620&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3F1cjc6Zm1oNzMzODgzNEApOzM7Z2Q2N2U2N2lkOzY4NWc2ZXA1cjRnYmxgLS1kLy1zczAzMTA0LS9jNjI0Ly1eX2E6Yw%3D%3D&vl=&vr=">

            </video>
                
            {/* VideoFotter */}
            {/* VideoSideBar */}
        </div>
    )
}

export default Video
