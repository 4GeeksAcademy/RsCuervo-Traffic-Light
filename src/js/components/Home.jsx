import React, {useState} from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState(null);
	return (
		<>
        <div className="stick"></div>
		<div className="trafficLight">
            <div className={`lightRed ${color == "Red" ? "glow" : null}`}
				onClick={() => {
                    setColor("Red")
				}}
			></div>
			<div className={`lightYellow ${color == "Yellow" ? "glow" : null}`}
			onClick={() => {
				setColor("Yellow")
			}}
			></div>
			<div className={`lightGreen ${color == "Green" ? "glow" : null}`}
			onClick={() => {
				setColor("Green")
			}}
			></div>
		</div>
		</>
	);
};

export default Home;