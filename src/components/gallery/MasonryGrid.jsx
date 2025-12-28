import ImageCard from './ImageCard'
import '../../styles/gallery.css'

const dummyImages = [
  'https://picsum.photos/300/400',
  'https://picsum.photos/300/500',
  'https://picsum.photos/300/450',
  'https://picsum.photos/300/480',
  'https://picsum.photos/300/520',
]

export default function MasonryGrid() {
  return (
    <div className="masonry">
      {dummyImages.map((img, index) => (
        <ImageCard key={index} image={img} />
      ))}
    </div>
  )
}
