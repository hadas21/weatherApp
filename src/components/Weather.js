// import React
import React from 'react'
import Table from 'react-bootstrap/Table'

const weather = {
	textAlign: 'start',
    lineHeight: '4rem'
	

}

const tr = {
	borderTop: 'none',
	borderRight: 'none',
	borderLeft: 'none',
	borderBottom: '#646467 0.000001rem solid',
}

const Weather = (props) => {
	const {data} = props
	return (
		<>
			<Table bordered variant='dark' responsive size='lg' style={weather}>
				<tbody>
					<tr>
						<td style={tr}>Location: {data.name}, {data.sys.country}</td>
					</tr>
					<tr>
						<td style={tr}>Temperature: {data.main.temp}</td>
					</tr>
					<tr>
						<td style={tr}>Humidity: {data.main.humidity}</td>
					</tr>
					<tr>
						<td style={tr}>Conditions: {data.weather[0].description}</td>
					</tr>
				</tbody>
			</Table>
		</>
	)
}

export default Weather
