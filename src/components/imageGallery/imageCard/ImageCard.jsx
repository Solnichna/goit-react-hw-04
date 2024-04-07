const ImageCard = ({ alt, src }) => {
    return (
      <div>
        <img src={src} alt={alt} width="100%" height="100%" />
      </div>
    );
  };

  export default ImageCard;