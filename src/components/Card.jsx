import ellipsis from "../assets/images/icon-ellipsis.svg";
import { useEnv } from "../context/MyContext";
export default function Card({ bg, img, title, hours, prev_hours }) {
	const { timeFrame } = useEnv();
	let label = "Last Week";
	if (timeFrame == "daily") {
		label = "Yesterday";
	} else if (timeFrame == "monthly") {
		label = "Last Month";
	}
	return (
		<div className={`${bg} rounded-2xl overflow-hidden`}>
			<div className="flex justify-end px-6 pt-10 relative">
				<img src={img} alt="background image" className="absolute -top-1" />
			</div>
			<div className="bg-Navy-900 px-6 py-8 rounded-2xl hover:bg-Purple-900 relative z-10">
				<div className="top flex justify-between items-center mb-2">
					<h2 className="text-lg font-semibold">{title}</h2>
					<span>
						<img
							src={ellipsis}
							className="hover:cursor-pointer"
							alt="ellipsis icon"
						/>
					</span>
				</div>
				<div className="bottom flex justify-between items-center">
					<p className="text-3xl font-light">{hours}hrs</p>
					<p className="text-Navy-200">
						{label} - {prev_hours}hrs
					</p>
				</div>
			</div>
		</div>
	);
}
