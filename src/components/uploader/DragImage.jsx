import React, { useState, useRef, useEffect } from 'react'

// statics
import './dragImage.scss'

const DragImage = ({ setMedia, setLoading }) => {
	const [file, setFile] = useState(null)
	const [error, setError] = useState(false)
	const [messageError, setMessageError] = useState('')

	const [image, setImage] = useState(null)
	const [classDrag, setClassDrag] = useState('drag__image')

	const refInputFile = useRef(null)

	const typesImages = ['image/png', 'image/jpeg', 'image/jpg']

	const isImageValid = (file) => {
		if (file && typesImages.includes(file.type)) {
			setError(false)
			return true
		} else {
			setError(true)
			setMessageError('File is incorrect')
			return false
		}
	}

	const handleSave = () => {
		const valid = isImageValid(file)

		if (valid && file) {
			setLoading(true)
		} else {
			setError(true)
			setMessageError('First, upload an image')
		}
	}

	const selectImage = (e) => {
		refInputFile.current.click()
	}

	const showImage = (file) => {
		const fileReader = new FileReader()
		fileReader.readAsDataURL(file)

		fileReader.addEventListener('load', (e) => {
			setImage(e.target.result)
		})

		setFile(file)
		setMedia(file)
	}

	const addImage = (e) => {
		e.preventDefault()
		refInputFile.current.files = e.dataTransfer.files
		const file = refInputFile.current.files[0]

		showImage(file)
	}

	const uploadImage = (e) => {
		const files = e.target.files
		const file = files[0]

		const valid = isImageValid(file)

		if (valid) {
			showImage(file)
		} else {
			setFile(null)
		}
	}

	useEffect(() => {
		setTimeout(() => {
			setError(false)
		}, 5000)
	}, [error])

	return (
		<div className='drag'>
			<h2 className='drag__title'>Upload your image</h2>

			<div className='drat__info'>Fire should be Jpeg, Png...</div>

			{error && <div className='drag__message'>{messageError}</div>}

			<input
				ref={refInputFile}
				type='file'
				name='file'
				onChange={uploadImage}
			/>

			<div
				className={classDrag}
				onDragOver={(e) => {
					e.preventDefault()
					setClassDrag('drag__image active')
				}}
				onDragLeave={(e) => {
					e.preventDefault()
					setClassDrag('drag__image')
				}}
				onDrop={addImage}
				onClick={selectImage}
			>
				<img src={image} alt='' className='drag__image--preview' />
				<span className='drag__image--message'>
					Clic or Drag & Drop your image here
				</span>
			</div>

			<button className='drag__action' onClick={handleSave}>
				Save Image
			</button>
		</div>
	)
}

export default DragImage
