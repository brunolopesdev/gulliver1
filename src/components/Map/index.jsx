import { useEffect, useRef, useState } from "react";

export const Map = ({center, zoom, style}) => {
    const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
      setMap(newMap);
      
      new window.google.maps.Marker({
        position: center,
        map: newMap,
      });
    }
  }, [ref, map, center, zoom]);

  return <div ref={ref} style={style} />;
}