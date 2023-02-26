// import React
import React, {useState} from 'react'
import Location from './Location'
import Weather from './Weather'

const info = {
	background: '#2b3746',
	display: 'flex',
	justifyContent: 'top',
	flexDirection: 'column',
	color: '#d2524f',
	padding: '6rem 2rem'
}

const Info = (props) => {

	const [location, setLocation] = useState({ city: '', country: '' })
	const [data, setData] = useState('')



	return (
		<section style={info}>
			<Location
				location={location}
				setLocation={setLocation}
				setData={setData}></Location>
			<Weather data={data}></Weather>
		</section>
	)
}

export default Info
