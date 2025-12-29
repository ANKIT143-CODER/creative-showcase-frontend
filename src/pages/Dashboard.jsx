import { useEffect, useState } from 'react'
import UploadForm from '../components/forms/UploadForm'
import ImageCard from '../components/gallery/ImageCard'
import API from '../services/api'

export default function Dashboard() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchMyImages = async () => {
      try {
        const token = localStorage.getItem('token')

        const res = await API.get('/images/my-images', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setImages(res.data)
      } catch (err) {
        setError('Failed to load your images')
      } finally {
        setLoading(false)
      }
    }

    fetchMyImages()
  }, [])

  // 🗑 Delete handler
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this image?'
    )
    if (!confirmDelete) return

    try {
      const token = localStorage.getItem('token')

      await API.delete(`/images/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      // Remove image from UI
      setImages(images.filter((img) => img._id !== id))
    } catch (error) {
      alert('Failed to delete image')
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Dashboard</h2>

      {/* Upload */}
      <UploadForm />

      <h3 style={{ marginTop: '30px' }}>Your Uploads</h3>

      {/* Loading / Error */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Images */}
      {!loading && !error && (
        <div className="masonry">
          {images.length === 0 ? (
            <p>No images uploaded yet.</p>
          ) : (
            images.map((img) => (
              <ImageCard
                key={img._id}
                image={`https://creative-showcase-backend-43.onrender.com${img.imageUrl}`}
                onDelete={() => handleDelete(img._id)}
              />
            ))
          )}
        </div>
      )}
    </div>
  )
}
