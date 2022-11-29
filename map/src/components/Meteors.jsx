import { useEffect, useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Meteors({ searchTerm }) {
	const [meteors, setMeteors] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json`)
			.then((response) => response.json())
			.then((data) => {
				setMeteors(data);
				setIsLoading(false);
			});
	}, [searchTerm]);

	if (isLoading) {
		return (
			<main>
				<p>Loading...</p>;
			</main>
		);
	}

	return (
		<main>
			<MapContainer id='map' center={[51.505, -0.09]} zoom={5} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>

				{meteors.map((meteor) => {
					if (meteor.geolocation && meteor.mass > +searchTerm) {
						return (
							<Marker key={meteor.id} position={[meteor.geolocation?.latitude, meteor.geolocation?.longitude]}>
								<Popup>
									{meteor.name} <br />
									{meteor.year} <br />
									{meteor.mass}g <br />
								</Popup>
							</Marker>
						);
					}
				})}
			</MapContainer>
		</main>
	);
}

export default Meteors;
