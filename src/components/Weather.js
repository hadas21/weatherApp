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
	return (
		<>
			<Table bordered variant='dark' responsive size='lg' style={weather}>
				<tbody>
					<tr>
						<td style={tr}>Location:</td>
					</tr>
					<tr>
						<td style={tr}>Temperature:</td>
					</tr>
					<tr>
						<td style={tr}>Humidity:</td>
					</tr>
					<tr>
						<td style={tr}>Conditions:</td>
					</tr>
				</tbody>
			</Table>
		</>
	)
}

export default Weather
