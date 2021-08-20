// import React
import React from 'react'
// import styled from 'styled-components'

const imgUrl =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg9N2tu3yQmgJ86Gl7moHxTT-CPkTc6eLNVqk1XSCDNpuLMydsCVIRv19Q-FXikZO20_c&usqp=CAU'

const poster = {
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	backgroundImage: `url(${imgUrl})`,
	backgroundPosition: 'center',
	height: '100vh',
	width: '70vh',
	fontFamily: 'Roboto Slab, serif'
}

const Poster = (props) => {
	return (
		<section style={poster}>
			<h1>Weather Finder</h1>
			<p>Find out the temperature, <br></br>weather conditions and more...
			</p>
		</section>
	)
}

export default Poster
