import axios from "axios";
import { useEffect, useState } from "react";
import { LocationData } from "./LocationData";

const LocationApi = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [location, setLocation] = useState<LocationData>();

  useEffect(() => {
    const retryDelay = 1000; // 1 second delay before retrying
    const maxRetries = 5; // maximum number of retries
    let retryCount = 0;

    const getLocation = async () => {
      const url: string =
        "https://extreme-ip-lookup.com/json/?key=XyjcKh4Jb6gAcMbyqPRc";

      try {
        const res = await axios.get<LocationData>(url);
        setLocation(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);

        // retry the request if it fails
        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(getLocation, retryDelay);
        } else {
          setIsLoading(false);
        }
      }
    };

    setTimeout(() => {
      getLocation();
    }, 5000);
  }, []);

  return location ?? null;
};

export default LocationApi;
