import React from "react";
import { Column50 } from "../layout/Grids";
import { birdSVG } from "../layout/svg";

const Discover = () => {
	return (
		<>
			<Column50>
				{birdSVG}
				<h1>Based on you tastes we recommend....</h1>
			</Column50>
		</>
	);
};

export default Discover;
