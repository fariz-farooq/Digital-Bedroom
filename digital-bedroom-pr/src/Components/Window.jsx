import { useState } from "react";

const Window = () => {
    const view = ["Sunny", "Cloudy", "Rainy"];
    const [currentView, setCurrentView] = useState(0);
    function handleView() {
        setCurrentView((prev) => (prev + 1) % view.length)
    }
    return (
        <div className="Window">
            <div className="pane" onClick={handleView}>
                <p>{view[currentView]}</p>
            </div>
        </div>
    );
};

export default Window;