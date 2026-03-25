import React, { useEffect } from "react";
import { useState } from "react";

export default function App() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDark);
	}, [isDark]);

	return (
		<div className="dark:bg-black">
			Report for Jeremy Robson Daily Weekly Monthly{" "}
			<button
				className="bg-amber-900 p-4 rounded-full text-white hover:cursor-pointer"
				onClick={() => setIsDark((prev) => !prev)}
			>
				Toggle
			</button>
		</div>
	);
}
