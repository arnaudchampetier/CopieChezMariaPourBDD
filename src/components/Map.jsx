import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import markerIcon from "../assets/markergreen.png";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [45.7695103, 4.8519547];

  const icon = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });

  return (
    <div className="w-full h-96 relative rounded-xl mb-44 md:mb-44">
      <MapContainer center={position} zoom={16} className="w-full h-full">
        <TileLayer
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>
            21 cours Vitton <br /> 69006 Lyon
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
