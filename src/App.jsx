import { useEffect } from "react";
import { useState } from "react";
import profile from "./assets/images/image-jeremy.png";

export default function App() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDark);
	}, [isDark]);

	return (
		<main className="bg-Navy-950 text-white p-6 min-h-dvh">
			<div className="profile-card bg-Navy-900 rounded-2xl">
				<div className="bg-Purple-600 rounded-2xl p-8">
					<div className="flex justify-start items-center gap-5">
						<img
							src={profile}
							className="border-3 rounded-full h-20"
							alt="profile"
						/>
						<div>
							<p className="text-Navy-200 text-lg mb-0.5">Report for</p>
							<h1 className="text-2xl font-light">Jeremy Robson</h1>
						</div>
					</div>
				</div>
				<div className="flex justify-between items-center px-8 py-6 text-lg">
					<button className="text-Purple-500 hover:text-white">Daily</button>
					<button>Weekly</button>
					<button className="text-Purple-500 hover:text-white">Monthly</button>
				</div>
			</div>
			{/* <button
				className="bg-amber-900 p-4 rounded-full text-white hover:cursor-pointer"
				onClick={() => setIsDark((prev) => !prev)}
			>
				Toggle
			</button> */}
		</main>
	);
}
