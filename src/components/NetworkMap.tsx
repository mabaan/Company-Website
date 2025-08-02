// src/components/NetworkMap.tsx
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { LocationRecord } from "../lib/airtable";
import Spinner from "./Spinner";

// Fix default Leaflet icon issue in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

interface Props {
  locations: LocationRecord[];
}

const getMarkerIcon = (type: string): L.Icon => {
  const normalized = type.trim().toLowerCase();
  const colorMap: Record<string, string> = {
    headquarters: "blue",
    headquarter: "blue",
    partner: "green",
    "end user": "orange",
  };

  const color = colorMap[normalized] || "grey";

  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

interface LegendItemProps {
  color: string;
  label: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <span
      className="inline-block w-3 h-3 rounded-full"
      style={{ backgroundColor: color }}
    ></span>
    <span className="font-medium">{label}</span>
  </div>
);

const NetworkMap: React.FC<Props> = ({ locations }) => {
  const center: [number, number] = [25.2048, 55.2708]; // Dubai default center
  const [hydrated, setHydrated] = useState(false);
  const [showMarkers, setShowMarkers] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setHydrated(true);
    setLoading(false);
    const timeout = setTimeout(() => setShowMarkers(true), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    // <-- margin and padding added here!
    <div className="relative w-full h-[300px] md:h-[600px] my-4 md:my-8 px-2 sm:px-6">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
          <Spinner />
        </div>
      )}

      {hydrated ? (
        <MapContainer
          center={center}
          zoom={2}
          scrollWheelZoom={true}
          className="h-full w-full z-0 rounded-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://openstreetmap.org">OpenStreetMap</a> | GC International'
            subdomains={["a", "b", "c"]}
          />

          {showMarkers &&
            locations.map((loc) => (
              <Marker
                key={loc.id}
                position={[loc.Latitude, loc.Longitude]}
                icon={getMarkerIcon(loc.Type)}
              >
                <Popup className="max-w-[260px] text-sm leading-snug">
                  {loc.Website ? (
                    <a
                      href={loc.Website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-700 underline"
                    >
                      {loc.Name}
                    </a>
                  ) : (
                    <strong>{loc.Name}</strong>
                  )}
                  {loc.Description && (
                    <>
                      <br />
                      <span className="font-semibold">Description:</span>{" "}
                      {loc.Description}
                    </>
                  )}
                  <br />
                  <span className="font-semibold">Type:</span> {loc.Type}
                  <br />
                  <span className="font-semibold">Location:</span> {loc.City},{" "}
                  {loc.Country}
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      ) : (
        <img
          src="/static-map-placeholder.jpg"
          alt="Map preview"
          className="w-full h-full rounded-lg object-cover"
        />
      )}

      <div className="mt-6 flex flex-wrap justify-center gap-4 text-md text-center">
        <LegendItem color="blue" label="Headquarters" />
        <LegendItem color="green" label="Partner" />
        <LegendItem color="orange" label="End User" />
      </div>
    </div>
  );
};

export default NetworkMap;
