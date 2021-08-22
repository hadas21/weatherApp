// import React
import React, { useState, useEffect } from 'react'
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'
import { getWeather } from '../api/getWeather'



const input = {
	background: '#2b3746',
	marginRight: '1rem',
	borderTop: 'none',
	borderRight: 'none',
	borderLeft: 'none',
	borderBottom: '#8d5c66 1px solid',
	color:'white',
	padding: '7px'
}
const button = {
	// background: '#2b3746',
	// display: 'flex',
	// justifyContent: 'center',
	// flexDirection: 'column',
	backgroundColor: '#d25150',
	color: 'white',
	borderColor: '#d25150',
	padding: '5px 15px',
	borderRadius: '3px'
}
const Location = (props) => {


const { location, setLocation, setData } = props

useEffect(() => {
	getWeather(location.city, location.country)
	
}, [location.city, location.country])

const handleChange = (event) => {
	event.persist()

	setLocation((prevLocation) => {
		const updatedField = { [event.target.name]: event.target.value }
		console.log(updatedField)
		const editedLocation = Object.assign(
			{},
			prevLocation,
			updatedField
		)
		console.log('new' + updatedField)
		return editedLocation
	})
}
const handleSubmit = (e) => {
	e.preventDefault()
	getWeather(location.city, location.country)
		.then((res) => setData(res.data))
		.catch((err) => console.log('err: ', err))
}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					name='city'
					style={input}
					value={location.city}
					placeholder='City'
				/>
				<input
					onChange={handleChange}
					name='country'
					style={input}
					value={location.country}
					placeholder='Country'
				/>
				<Button type='submit' style={button}>
					Get Weather
				</Button>
			</form>
		</>
	)
}

export default Location
