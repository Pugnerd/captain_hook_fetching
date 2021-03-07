import React from "react";
import { useFetch } from "./hooks";

// meghívunk egy függvénykomponenst
function Photos() { 
	// useFetch használatba vétele , kérje le a hook-ot és loadingot
  const [data, loading] = useFetch(
		// add át az URL-T a fetchnek
    "https://jsonplaceholder.typicode.com/photos?albumId=1"
  );
  return (
    <>
		{/* Címet adunk neki */}
      <h1>Photos</h1> 
			{/* Ha töltődik a fetch, írja ki azt, hogy Loading amennyiben true, ellenkező esetben mutassa a datát. */}
      {loading ? (
        "Loading..."
      ) : (
        <ul>
					{/* iterálja végig a kapott adatokat, adj nekik unique key-t, add át z image src-t */}
          {data.map(({ id, title, url }) => (
            <li key={`photo-${id}`}>
              <img alt={title} src={url} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Photos;