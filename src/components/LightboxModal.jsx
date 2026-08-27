export function LightboxModal({ modalImage, onClose }) {
  if (!modalImage) return null

  return (
    <div className="screenshot-lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close image preview"
        >
          ✕
        </button>
        <div className="lightbox-phone-frame">
          <div className="phone-dynamic-island">
            <span className="camera-lens"></span>
          </div>
          <img
            src={modalImage.img}
            alt={modalImage.name}
            className="lightbox-img"
          />
        </div>
        <div className="lightbox-caption">
          <h4>{modalImage.name}</h4>
          {modalImage.nameAr && (
            <span className="arabic-text" dir="rtl">
              {modalImage.nameAr}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
