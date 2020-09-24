import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

// hooks
import useStorage from '../../hooks/useStorage'

// statics
import './loaderImage.scss'

const LoaderImage = ({ file, setFile, setLoading }) => {
	const { url, progress } = useStorage(file)

	useEffect(() => {
		if (url) {
			setFile(null)
			setLoading(false)
		}
	}, [url, setFile, setLoading])

	return (
		<div className='loader'>
			<h3 className='loader__title'>Uploading...</h3>

			<div className='loader__progress'>
				<motion.div
					initial={{ width: 0 }}
					animate={{ width: progress + '%' }}
					className='loader__progress--bar'
				></motion.div>
			</div>
		</div>
	)
}

export default LoaderImage
