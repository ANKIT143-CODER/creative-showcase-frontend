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

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Dashboard</h2>

      {/* Upload Form */}
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
              />
            ))
          )}
        </div>
      )}
    </div>
  )
}
