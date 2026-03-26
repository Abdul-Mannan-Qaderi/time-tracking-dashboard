import { useEffect } from "react";
import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import Card from "./components/Card";

import play from "./assets/images/icon-play.svg";
import exercise from "./assets/images/icon-exercise.svg";
import self_care from "./assets/images/icon-self-care.svg";
import social from "./assets/images/icon-social.svg";
import study from "./assets/images/icon-study.svg";
import work from "./assets/images/icon-work.svg";
import { useEnv } from "./context/MyContext";

const icons = [work, play, study, exercise, social, self_care];

export default function App() {
	const { data, timeFrame } = useEnv();
	return (
		<main className="bg-Navy-950 text-white p-6 min-h-dvh flex justify-center items-center">
			<div className="grid grid-cols-1 w-5xl max-w-[1440px] m-auto gap-8 md:grid-cols-2 lg:grid-cols-4">
				<ProfileCard />
				{data.map((item, index) => (
					<Card
						key={index}
						bg={item.bg}
						img={icons[index]}
						title={item.title}
						hours={item.timeframes[timeFrame].current}
						prev_hours={item.timeframes[timeFrame].previous}
					/>
				))}
			</div>
		</main>
	);
}
