import ImageCard from "./imageCard/ImageCard";

const ImageGallery = ({images}) => {
  return (
    <ul className="image-gallery">
      {images.length > 0 &&
        images.map((image) => (
          <li key={image.id} className="image-gallery-item">
            <ImageCard src={image.urls.small} alt={image.alt_description} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;