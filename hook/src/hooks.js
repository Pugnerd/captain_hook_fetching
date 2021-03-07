import { useState, useEffect } from "react";

function useFetch(url) {
	// useState defaultja egy üres tömb, a data useState alkalmazása
	const [data, setData] = useState([]);
	// 2. useState defaultja egy true , addig állítunk ameddig loading van. true= éppen tölt
	const [loading, setLoading] = useState(true);
	

  async function fetchUrl() {
		// response-nak add át a fetch-t (blokkold a futást míg nincs itt az adat)
		const response = await fetch(url);
		// adja át a response-nak, visszakaptunk egy response-t és json fájllá formázzuk (soros await)
		const json = await response.json();
		// beálltíja a datának a JSON értékét
		setData(json);
		// jelzi hogy betöltött -> hibakezelés
    setLoading(false);
  }
  useEffect(() => {
		// file betöltődésekor futtasd le a fetchURL-t
    fetchUrl();
	}, []);
	// térjen vissza a data és a loading értékkel
  return [data, loading];
}
export { useFetch };