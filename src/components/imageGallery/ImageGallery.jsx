import ImageCard from "./imageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <div onClick={() => openModal(image.url)}>
            <img 
              src={image.url} 
              alt={image.alt} 
              onClick={() => openModal(image.url)} // Hier hinzugefügt
            />
            <ImageCard src={image.urls.small} alt={image.alt_description} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
