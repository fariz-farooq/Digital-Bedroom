import Window from "./Window"
import Journal from "./Journal"
import MusicPlayer from "./MusicPlayer"
import Cat from "./Cat"

const Bedroom = () => {
    return (
        <div className="Bedroom">
            <div className="Wall">
                <Window />
            </div>
            <div className="Desk">
                <Journal />
                <MusicPlayer />
            </div>
            <div className="Floor">
                <Cat />
            </div>
        </div>
    );
};

export default Bedroom;