export default function ImageCard({ image, onDelete }) {
  return (
    <div className="image-card">
      <img src={image} alt="uploaded artwork" />

      {onDelete && (
        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      )}
    </div>
  )
}
