
import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onRequestClose}>
      <div className="modal-content">
        <img src={image.url} alt={image.alt} />
        <button onClick={onRequestClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
