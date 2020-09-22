import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default Uselocation = () => {
  const [location, setLocation] = useState();

  const getlocation = async () => {
    const { granted } = await Location.requestPermissionsAsync();
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();
    setLocation({ latitude, longitude });
  };

  useEffect(() => {
    getlocation();
  }, []);

  return location;
};
