import { useState } from "react"

const Cat = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    function handleCat() {
        if (isPlaying) return;
        setIsPlaying(true)
        setTimeout(() => {
            setIsPlaying(false)
        }, 3000)
    }

    return (
        <div className="Cat" onClick={handleCat}>
            <div>{isPlaying ? `🐈` : `😴🐈`} </div>
        </div>
    );
};

export default Cat;