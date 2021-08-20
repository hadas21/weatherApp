// import React
import React from 'react'
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
	return (
		<section style={info}>
			<Location></Location>
			<Weather></Weather>
		</section>
	)
}

export default Info
