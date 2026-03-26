import { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

export default function ContextProvider({ children }) {
	const [isDark, setIsDark] = useState(false);
	const [data, setData] = useState([]);
	const [timeFrame, setTimeFrame] = useState("weekly");

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDark);
	}, [isDark]);

	useEffect(() => {
		fetch(`${import.meta.env.BASE_URL}data.json`)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	const value = {
		data,
		setData,
		timeFrame,
		setTimeFrame,
		setIsDark,
	};

	return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export const useEnv = () => useContext(MyContext);
