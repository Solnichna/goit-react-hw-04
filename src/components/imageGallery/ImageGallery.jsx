import ImageCard from "./imageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <div onClick={() => openModal(image.url)}>
            <img src={image.url} alt={image.alt} />
            <ImageCard src={image.urls.small} alt={image.alt_description} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
