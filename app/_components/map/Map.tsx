"use client"

import NeshanMap from "@neshan-maps-platform/react-openlayers";

export default function CustomMap() {
  //   const handleInit = (map: Map) => {
  //     map.setMapType("osm-bright");
  //     map.switchTrafficLayer(true);
  //     // add Marker to the map
  //     const marker = new Feature({
  //       geometry: new Point(
  //         fromLonLat([59.672495, 36.307706]), // [lng, lat]
  //       ),
  //     });

  //     marker.setStyle(
  //       new Style({
  //         image: new Icon({
  //           anchor: [0.5, 1],
  //           scale: 0.7,
  //           src: "/marker.png", // داخل public بذار
  //         }),
  //       }),
  //     );

  //     const vectorSource = new VectorSource({
  //       features: [marker],
  //     });

  //     const vectorLayer = new VectorLayer({
  //       source: vectorSource,
  //     });

  //     map.addLayer(vectorLayer);
  //   };

  //   useEffect(() => {
  //     if (mapRef.current?.map) {
  //       mapRef.current?.map.switchTrafficLayer(true);
  //       mapRef.current?.map.setMapType("standard-night");
  //     }
  //   }, []);

  //   const mapRef = useRef<NeshanMapRef | null>(null);
  return (
    <NeshanMap
      mapKey="web.3a9b0b3fa3d7401aa946f6f11f09e86e"
      className="size-full"
      center={{ latitude: 36.307706, longitude: 59.672495 }}
      zoom={17}
      poi={true}
      traffic={false}
      //   onInit={handleInit}
    ></NeshanMap>
  );
}
