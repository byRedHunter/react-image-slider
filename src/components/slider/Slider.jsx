import React, { useState, useEffect } from 'react'

// hooks
import useFirestore from '../../hooks/useFirestore'

// statics
import './slider.scss'

const Slider = () => {
	const { docs } = useFirestore('images')
	const [images, setImages] = useState([])
	const [sliderActive, setSliderActive] = useState(null)

	useEffect(() => {
		let data = []

		docs.map(({ url }) => data.push(url))

		setImages(data)
		setSliderActive(data.length - 1)
	}, [docs])

	let amountSlider = images.length - 1

	const goPrev = () => {
		let pos = sliderActive
		if (pos === amountSlider) {
			pos = 0
		} else {
			pos += 1
		}
		setSliderActive(pos)
	}

	const goNext = () => {
		let pos = sliderActive
		if (pos === 0) {
			pos = amountSlider
		} else {
			pos -= 1
		}
		setSliderActive(pos)
	}

	return (
		<section className='slider'>
			<h2 className='slider__title'>Your images</h2>

			<div className='controls'>
				<div className='controls__item' onClick={goPrev}>
					<i className='arrow prev'></i>
				</div>

				<div className='controls__item' onClick={goNext}>
					<i className='arrow next'></i>
				</div>
			</div>

			{docs ? (
				<div className='slider__container'>
					<img src={images[sliderActive]} alt='Slider Item' />
				</div>
			) : (
				<p>You don't images.</p>
			)}
		</section>
	)
}

export default Slider
