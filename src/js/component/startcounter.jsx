import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
const StartCounter = props => {
	const [myNumber, setMyNumber] = useState(0);

	useEffect(() => {
		setInterval(() => {
			if (myNumber !== 9) {
				setMyNumber(myNumber => myNumber + 1);
			}
		}, props.time * 1000);
	}, []);

	return <div className="one">{myNumber % 10}</div>;
};
StartCounter.propTypes = {
	time: PropTypes.number
};
export default StartCounter;
