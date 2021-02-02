import React, { useEffect, useState } from "react";
import "./App.css";

const IPDATA_KEY = "dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e";
const GOOGLE_MAPS_KEY = "AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.ipdata.co/?api-key=${IPDATA_KEY}`)
        .then((response) => response.json())
        .then((responseJson) => setLocation(responseJson));
      console.log(location);
    };
    fetchData();
  }, []);

  return (
    <div>
      {!location ? (
        "loading..."
      ) : (
        <>
          <iframe
            title="Google_Maps"
            width="600"
            height="450"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_KEY}&q=${location.city}+${location.country_name}`}
          ></iframe>
          <div>
            <h4>
              {location.city
                ? `City:  ${location.city}`
                : "City: No City detected"}
            </h4>
          </div>
          <div>
            <h4>
              {location.country_name
                ? `Country: ${location.country_name}`
                : "Country: No Country detected"}
            </h4>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
