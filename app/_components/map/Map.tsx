"use client";

import axios from "axios";
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { mapData } from "./map.types";



type CustomMapProps = {
  setMapData: Dispatch<SetStateAction<mapData>>;
};

export default function CustomMap({ setMapData }: CustomMapProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const API_KEY = "service.91ad489e6b5d488599ddce8a0db049e0";

  function LocationMarker() {
    const map = useMap();
    const center = map.getCenter();
    const [position, setPosition] = useState<null | LatLng>(null);

    useMapEvents({
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
        setPosition(center);
      },
      moveend() {
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
            "Api-Key": API_KEY,
          },
        });

        if (inputRef.current) {
          inputRef.current.value = data.formatted_address;
          // setMapData(prev=>({...prev,address:data.formatted_address}))
        }
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

  // const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
  //   const map = useMap();
  //   const center = map.getCenter();
  //   const value = e.target.value;
  //   try {
  //     const { data } = await axios.get(`https://api.neshan.org/v1/search`, {
  //       params: { term: value, lat: center.lat, lng: center.lng },
  //       headers: {
  //         "Api-Key": "service.91ad489e6b5d488599ddce8a0db049e0",
  //       },
  //     });
  //     console.log("Reverse Result:", data);
  //   } catch (error) {
  //     console.error("Reverse Error:", error);
  //   }
  // };

  // const SearchControl = () => {
  //   const map = useMap();
  //   const [search, setSearch] = useState<string>("");

  //   const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
  //     const center = map.getCenter();
  //     const value = e.target.value;
  //     try {
  //       const { data } = await axios.get(`https://api.neshan.org/v1/search`, {
  //         params: { term: value, lat: center.lat, lng: center.lng },
  //         headers: {
  //           "Api-Key": API_key,
  //         },
  //       });

  //       console.log("search:", data);
  //     } catch (error) {
  //       console.error("Reverse Error:", error);
  //     }
  //   };

  //   return (
  //     <input
  //       className="border border-gray-300 rounded-lg w-full p-2 bg-white z-[1000] relative"
  //       ref={inputRef}
  //       type="text"
  //       onChange={handleSearch}
  //     />
  //   );
  // };

  return (
    <>
      <input
        className="border border-gray-300 rounded-lg w-full p-2"
        ref={inputRef}
        type="text"
        // onChange={handleSearch}
      />
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
      </MapContainer>
    </>
  );
}
