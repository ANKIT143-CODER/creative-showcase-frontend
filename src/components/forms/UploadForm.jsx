import { useState } from 'react'
import API from '../../services/api'
import '../../styles/upload.css'


export default function UploadForm() {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!image) {
      setError('Please select an image')
      return
    }

    const formData = new FormData()
    formData.append('title', title)
    formData.append('image', image)

    try {
      const token = localStorage.getItem('token')

      await API.post('/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })

      setSuccess('Image uploaded successfully!')
      setTitle('')
      setImage(null)
    } catch (err) {
      setError('Image upload failed')
    }
  }

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <input
        type="text"
        placeholder="Image title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />

      <button type="submit">Upload</button>
    </form>
  )
}

