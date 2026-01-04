import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import API from '../services/api'
import ImageCard from '../components/gallery/ImageCard'

export default function PublicProfile() {
  const { username } = useParams()
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProfileImages = async () => {
      try {
        const res = await API.get(`/users/${username}/images`)
        setImages(res.data)
      } catch (err) {
        setError('Profile not found')
      } finally {
        setLoading(false)
      }
    }

    fetchProfileImages()
  }, [username])

  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <div style={{ padding: '20px' }}>
      <h2>{username}'s Gallery</h2>

      <div className="masonry">
        {images.length === 0 ? (
          <p>No images uploaded yet.</p>
        ) : (
          images.map((img) => (
            <ImageCard
              key={img._id}
              image={img.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  )
}
