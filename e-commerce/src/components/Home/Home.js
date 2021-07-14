import React from 'react';
import '../../App.css';

import video from '../../assets/videos/video-1.mp4';

function Home() {
    return (
        <div className="homeContainer">
            <video src={video} autoPlay loop muted />
            <h1><i>Discover The Products With Us</i></h1>
            <p><i>Take Action Now !</i></p>
        </div>
    )
}

export default Home;