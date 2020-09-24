import React from 'react'

// statics
import './App.scss'

// components
import Slider from './components/slider/Slider'
import Uploader from './components/uploader/Uploader'

function App() {
	return (
		<main className='main'>
			<div className='main__container'>
				<Uploader />

				<Slider />
			</div>
		</main>
	)
}

export default App
