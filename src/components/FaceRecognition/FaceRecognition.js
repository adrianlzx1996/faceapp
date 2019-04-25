import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({imageUrl, box}) => {
	console.log(imageUrl);
	return (
		<div className="center ma">
			<div className="absolute mt2">
				<img
					id="inputimage"
					src={imageUrl}
					alt=""
					width="500px"
					height="auto"
				/>
				<div
					className="bounding_box"
					style={{
						top: box.topRow,
						right: box.rightCol,
						bottom: box.bottomRow,
						left: box.leftCol
					}}
				/>
			</div>
		</div>
	);
};

export default FaceRecognition;
