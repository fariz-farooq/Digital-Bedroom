import { useState, useRef } from "react";
import { tracks } from "../data/tracks";

const MusicPlayer = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const audioRef = useRef(null);

    function handlePlay() {

        if (isPlaying === true) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    }

    function handleTrack(index) {
        setCurrentTrack(index);
        setIsPlaying(false);
    }

    return (
        <div>
            <audio
                controls
                src={tracks[currentTrack].src}
                ref={audioRef}
                loop
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            <p>Now Playing: {tracks[currentTrack].title}</p>

            <button onClick={handlePlay}>
                {isPlaying ? "Pause" : "Play"}
            </button>

            <div>
                {tracks.map((track, index) => (
                    <button key={track.title} onClick={() => handleTrack(index)}>
                        {track.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MusicPlayer;