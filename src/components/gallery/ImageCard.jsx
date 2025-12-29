import '../../styles/gallery.css'
export default function ImageCard({ image, title, onDelete }) {
  return (
    <div className="image-card">
      <div className="image-wrapper">
        <img src={image} alt={title || 'artwork'} />

        {/* Overlay */}
        <div className="image-overlay">
          <p>{title}</p>
        </div>
      </div>

      {/* Delete only for dashboard */}
      {onDelete && (
        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      )}
    </div>
  )
}
