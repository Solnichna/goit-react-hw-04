const ImageCard = ({ alt, src, openModal }) => {
  return (
    <div>
      <img onClick={()=>openModal(src)} src={src} alt={alt} width="100%" height="100%" />
    </div>
  );
};

  export default ImageCard;