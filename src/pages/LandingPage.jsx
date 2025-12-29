import { useEffect, useState } from 'react'
import API from '../services/api'
import ImageCard from '../components/gallery/ImageCard'

export default function LandingPage() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await API.get('/images')
        setImages(res.data)
      } catch (err) {
        setError('Failed to load images')
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>

  return (
    <div style={{ padding: '20px' }}>
      <h2>Discover Creative Memories</h2>

      <div className="masonry">
        {images.map((img) => (
          <ImageCard key={img._id} image={`https://creative-showcase-backend-43.onrender.com${img.imageUrl}`} />
        ))}
      </div>
    </div>
  )
}
