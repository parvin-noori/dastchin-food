"use client";

import axios from "axios";
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

export default function CustomMap() {
  const [location, setLocation] = useState<null | string>(null);

  function LocationMarker() {
    const [position, setPosition] = useState<null | LatLng>(null);
    const map = useMapEvents({
      // get user location
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, 16);
      },
      locationerror(e) {
        console.log("Location access denied:", e.message);
      },

      //ReverseGeocoding
      move(e) {
        const center = map.getCenter();
        setPosition(center);
      },
      moveend() {
        const center = map.getCenter();
        reverseGeocode(center.lat, center.lng);
      },
    });

    useEffect(() => {
      map.locate({
        setView: false,
        enableHighAccuracy: true,
      });
    }, [map]);

    const reverseGeocode = async (lat: number, lng: number) => {
      try {
        const { data } = await axios.get(`https://api.neshan.org/v5/reverse`, {
          params: { lat, lng },
          headers: {
            "Api-Key": "service.91ad489e6b5d488599ddce8a0db049e0",
          },
        });

        setLocation(data.formatted_address);
        // console.log("Reverse Result:", result.formatted_address);
      } catch (error) {
        console.error("Reverse Error:", error);
      }
    };

    return position === null ? null : (
      <Marker position={position}>
        <Popup>شما اینجا هستید</Popup>
      </Marker>
    );
  }

  return (
    <>
      <input defaultValue={location ?? ""} className="w-full" />
      <MapContainer
        className="size-full"
        center={{ lat: 36.307706, lng: 59.672495 }}
        zoom={16}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        {/* <Marker>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </>
  );
}
