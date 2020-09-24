import React, { useState } from 'react'

// statics
import './uploader.scss'

// components
import DragImage from './DragImage'
import LoaderImage from './LoaderImage'

const Uploader = () => {
	const [file, setFile] = useState(null)
	const [loading, setLoading] = useState(false)

	return (
		<section className='uploader'>
			{loading ? (
				<LoaderImage file={file} setFile={setFile} setLoading={setLoading} />
			) : (
				<DragImage setMedia={setFile} setLoading={setLoading} />
			)}
		</section>
	)
}

export default Uploader
