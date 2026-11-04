import { useState } from "react";

const Journal = () => {
    const [write, setWrite] = useState("");
    function handleWrite(e) {
        setWrite(e.target.value)
    }
    return (
        <div className="Journal">
            <h3>My Digital Bedroom</h3>
            <textarea
                placeholder="What is on your Mind Today"
                value={write}
                onChange={handleWrite}
            />
        </div>
    );
};

export default Journal;