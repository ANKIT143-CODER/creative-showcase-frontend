import { useEffect, useState } from 'react'
import API from '../services/api'
import ImageCard from '../components/gallery/ImageCard'

export default function LandingPage() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await API.get('/images')
        setImages(res.data)
      } catch (err) {
        console.error('Failed to load images')
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Discover Creative Memories
      </h2>

      <div className="masonry">
        {images.map((img) => (
          <ImageCard
            key={img._id}
            image={img.imageUrl}
            title={img.title}
          />
        ))}
      </div>
    </div>
  )
}
