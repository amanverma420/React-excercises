import { useState } from "react";

function ColorChange() {
    const [color, setColor] = useState(false);
    const handleChangeColor = () => {
        setColor(!color);
    };
    return (
        <>
            <div style={{ backgroundColor: color ? "blue" : "red", height: "100px", width: "100px", margin: "20px auto" }}></div>
            <button onClick={handleChangeColor}>Change Color</button>
        </>
    );
}
export default ColorChange;
