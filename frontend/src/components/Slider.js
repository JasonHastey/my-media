import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Slider.css'

const Slider = ({ mediaArray }) => {
	const [idx, set_idx] = useState(0)

	const imgSrc = `http://image.tmdb.org/t/p/w185/${mediaArray[idx].backdrop_path}`

	const handleNavClick = num => {
		set_idx(idx + num)
	}

	return (
		<Container>
			<Row className='slider'>
				<Col lg={8}>
					<Row className='main'>
						<Col
							lg={1}
							className='main-nav'
							onClick={() => {
								if (idx !== 0) {
									handleNavClick(-1)
								}
							}}>
							<h1>{'<'}</h1>
						</Col>
						<Col lg={10} className='main-center'>
							<div
								className='main-center_top'
								style={{
									backgroundImage: `url('http://image.tmdb.org/t/p/w185/${mediaArray[idx].backdrop_path}')`,
								}}></div>
							<div className='main-center_bottom'>
								<img
									src={`http://image.tmdb.org/t/p/w185/${mediaArray[idx].poster_path}`}
									alt={mediaArray[idx].title}
								/>
								<h3>
									{mediaArray[idx].name || mediaArray[idx].title}
									{` (${mediaArray[idx].release_date.slice(0, 4)})`}
								</h3>
							</div>
						</Col>
						<Col
							lg={1}
							className='main-nav'
							onClick={() => {
								if (idx !== mediaArray.length - 1) {
									handleNavClick(1)
								}
							}}>
							<h1>{'>'}</h1>
						</Col>
					</Row>
				</Col>
				<Col lg={4} className='slider-nav' as='ul'>
					{mediaArray.map((media, indx) => {
						const ref = React.createRef()
						const handleClick = () => {
							set_idx(indx)
							ref.current.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							})
						}

						return (
							<li onClick={handleClick}>
								<img
									src={`http://image.tmdb.org/t/p/w185/${media.poster_path}`}
									alt={media.title || media.name}
									ref={ref}
								/>
								<h3>{media.title || media.name}</h3>
							</li>
						)
					})}
				</Col>
			</Row>
		</Container>
	)
}

export default Slider
