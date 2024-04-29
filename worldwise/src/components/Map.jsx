import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [mapPosition, setMapPosition] = useState([40, 0]);

  const { isLoading, position, error, getPosition } = useGeolocation();

  const { cities } = useCities();
  const navigate = useNavigate();

  function ClickEventHandler() {
    // 使用useMapEvents钩子监听地图的点击事件
    useMapEvents({
      click(e) {
        // 在点击事件处理程序中，获取点击位置的经纬度信息
        console.log("Clicked location:", e.latlng);
        const { lat, lng } = e.latlng;
        navigate(`form?lat=${lat}&lng=${lng}`);
        // 这里可以将经纬度信息存储到状态中，或者执行其他操作
      },
    });

    // 由于useMapEvents是一个自定义组件，因此不需要返回任何内容
    return null;
  }

  // const map = useMapEvents({
  //   click(e) {
  //     // map.locate()
  //     console.log("location info", e.latlng);
  //   },
  //   // locationfound(e) {
  //   //   setPosition(e.latlng)
  //   //   map.flyTo(e.latlng, map.getZoom())
  //   // },
  // });

  useEffect(() => {
    if (position) {
      setMapPosition([position.lat, position.lng]);
    }
  }, [position]);

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <Button type="position" onClick={getPosition}>
        {isLoading ? "loading..." : "Use your position"}
      </Button>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ClickEventHandler />
      </MapContainer>
    </div>
  );
};

export default Map;
