import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Slider.css'

const Slider = ({ mediaArray }) => {
	// <img
	// 	src={`http://image.tmdb.org/t/p/w185/${mediaArray[0].poster_path}`}
	// 	alt={mediaArray[0].poster_path}
	// />
	// <img
	// 	src={`http://image.tmdb.org/t/p/w185/${mediaArray[0].backdrop_path}`}
	// 	alt={mediaArray[0].poster_path}
	// />
	const [ind, set_ind] = useState(0)
	const imgSrc = `http://image.tmdb.org/t/p/w185/${mediaArray[0].backdrop_path}`
	return (
		<Container>
			<Row as='div' className='slider'>
				<Col
					lg={8}
					className='slider-main'
					style={{
						backgroundImage: `url('http://image.tmdb.org/t/p/w185/${mediaArray[5].backdrop_path}')`,
					}}>
					<div className='slider-main_info'>
						<img
							src={`http://image.tmdb.org/t/p/w185/${mediaArray[0].poster_path}`}
							alt={mediaArray[0].title}
						/>
						<div className='slider-main_info-text'>
							<h3>
								{mediaArray[0].name || mediaArray[0].title}
								{` (${mediaArray[0].release_date.slice(0, 4)})`}
							</h3>
							<span>{mediaArray[0].rating}</span>
						</div>
					</div>
				</Col>
				<Col style={{ border: 'solid purple 1px' }} lg={4}>
					b
				</Col>
			</Row>
		</Container>
	)
}

export default Slider
