import React from 'react'

// hooks
import useFirestore from '../../hooks/useFirestore'

// statics
import './slider.scss'

// components

const Slider = () => {
	const { docs } = useFirestore('images')
	console.log(docs)

	return <div>Slider</div>
}

export default Slider
