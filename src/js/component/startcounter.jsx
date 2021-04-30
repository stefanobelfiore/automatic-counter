import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
const StartCounter = props => {
	const [myNumber, setMyNumber] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (myNumber !== 9) {
				setMyNumber(myNumber + 1);
			} else {
				setMyNumber(0);
			}
		}, props.time * 1000);
		return () => clearInterval(interval);
	}, [myNumber]);

	return <div className="one">{myNumber}</div>;
};
StartCounter.propTypes = {
	time: PropTypes.number
};
export default StartCounter;
