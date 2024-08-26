import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from '../images/mapicon.png';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer } from 'react-leaflet';
import { useQuery } from 'react-query';
const WorldMap = () => {
  const { isLoading, data } = useQuery('worldmap', () =>
    fetch('https://disease.sh/v3/covid-19/countries').then((response) =>
      response.json()
    )
  );

  const customMarker = L.icon({
    iconUrl: markerIcon,
    iconSize: [20, 25],
    iconAnchor: [15, 30],
  });
  return isLoading ? (
    <div className="flex justify-center items-center mt-6">
      <i className="fa fa-spinner fa-spin text-[24px]"></i>
    </div>
  ) : (
    <div className="rounded-xl mt-2 shadow-xl min-h-[300px]">
      <MapContainer center={[28.53, 77.39]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.map((country: any, index: number) => (
          <Marker
            icon={customMarker}
            key={index}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h2 className="text-center">
                  {country.country} ({country.continent})
                </h2>
                <p>
                  Active Cases: {country.active} <br />
                  Recovered Cases: {country.recovered} <br />
                  Deaths: {country.deaths}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WorldMap;
