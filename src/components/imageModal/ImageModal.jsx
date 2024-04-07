
import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <div className="image-modal-content">
        <img src={imageUrl} alt="Image" />
        <button onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
