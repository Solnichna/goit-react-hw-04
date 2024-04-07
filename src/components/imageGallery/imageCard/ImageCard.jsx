const ImageCard = ({ alt, src }) => {
    return (
      <div>
        <img src={src} alt={alt} width="300" height="300" />
      </div>
    );
  };

  export default ImageCard;