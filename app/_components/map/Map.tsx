"use client";

import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function CustomMap() {
  function ResizeMap() {
    const map = useMap();

    useEffect(() => {
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    }, [map]);

    return null;
  }
  return (
    // <NeshanMap
    //   mapKey="web.3a9b0b3fa3d7401aa946f6f11f09e86e"
    //   className="size-full"
    //   center={{ latitude: 36.307706, longitude: 59.672495 }}
    //   zoom={17}
    //   poi={true}
    //   traffic={false}
    //   //   onInit={handleInit}
    // ></NeshanMap>
    <div className="size-full">
      <MapContainer
        className="size-full"
        center={[36.307706, 59.672495]}
        zoom={16}
        scrollWheelZoom={false}
      >
        <ResizeMap />
        <TileLayer
          className="size-full"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[36.307706, 59.672495]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
