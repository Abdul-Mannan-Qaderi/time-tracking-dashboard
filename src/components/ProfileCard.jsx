import profile from "../assets/images/image-jeremy.png";
import { useEnv } from "../context/MyContext";

export default function ProfileCard() {
	const { timeFrame, setTimeFrame } = useEnv();

	return (
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
				<button
					onClick={() => setTimeFrame("daily")}
					className={`${timeFrame === "daily" ? "text-white" : " text-Purple-500"} hover:text-white hover:cursor-pointer`}
				>
					Daily
				</button>
				<button
					className={`${timeFrame === "weekly" ? "text-white" : " text-Purple-500"} hover:text-white hover:cursor-pointer`}
					onClick={() => setTimeFrame("weekly")}
				>
					Weekly
				</button>
				<button
					onClick={() => setTimeFrame("monthly")}
					className={`${timeFrame === "monthly" ? "text-white" : " text-Purple-500"} hover:text-white hover:cursor-pointer`}
				>
					Monthly
				</button>
			</div>
		</div>
	);
}
