import React from "react";
import StartCounter from "./startcounter.jsx";
export function Home() {
	return (
		<div className="counter text-center mt-5">
			<StartCounter time={1000} />
			<StartCounter time={100} />
			<StartCounter time={10} />
			<StartCounter time={1} />
		</div>
	);
}
