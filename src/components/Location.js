// import React
import React from 'react'
// import Form from 'react-bootstrap/Form'
 import Button from 'react-bootstrap/Button'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'



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
	return (
		<>
			<form>
				{/* <Form>
					<Container>
						<Row className='align-items-center'>
							<Col sm={3} className='my-1'>
								<Form.Control id='inlineFormInputName' placeholder='Jane Doe' />
							</Col>
							<Col sm={3} className='my-1'>
								<Form.Control id='inlineFormInputName' placeholder='Jane Doe' />
							</Col>

							<Col xs='auto' className='my-1'>
								<Button type='submit'>Submit</Button>
							</Col>
						</Row>
					</Container>
				</Form> */}

				<input style={input} placeholder='City' />
				<input style={input} placeholder='Country' />
				<Button type='submit' style={button}>
					Get Weather
				</Button>
			</form>
		</>
	)
}

export default Location
