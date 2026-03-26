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
			.then((res) => {
				if (!res.ok) throw new Error("Failed to fetch");
				return res.json();
			})
			.then((data) => setData(data))
			.catch((err) => console.error(err));
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
