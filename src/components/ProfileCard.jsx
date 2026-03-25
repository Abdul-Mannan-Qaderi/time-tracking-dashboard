import profile from "../assets/images/image-jeremy.png";
import { useEnv } from "../context/MyContext";

export default function ProfileCard() {
	const { timeFrame, setTimeFrame } = useEnv();

	return (
		<div className="profile-card bg-Navy-900 rounded-2xl md:col-span-2 lg:col-span-1 lg:row-span-2">
			<div className="bg-Purple-600 rounded-2xl p-8 lg:pb-22">
				<div className="flex justify-start items-center gap-5 lg:flex-col lg:items-start">
					<img
						src={profile}
						className="border-3 rounded-full h-20"
						alt="profile"
					/>
					<div>
						<p className="text-Navy-200 text-lg mb-0.5">Report for</p>
						<h1 className="text-2xl font-light md:text-3xl lg:text-5xl">Jeremy Robson</h1>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center px-8 py-6 text-lg lg:flex-col lg:items-start lg:gap-4">
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
