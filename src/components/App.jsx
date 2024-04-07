import { useState } from "react";
import "./App.module.css";

import { fetchImages } from "../components/api.js";
import SearchBar from "../components/searchBar/SearchBar.jsx";
import Loading from "../components/loader/Loader.jsx";
import Error from "../components/errorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "../components/loadMoreBtn/LoadMoreBtn.jsx";
import ImageGallery from "../components/imageGallery/ImageGallery.jsx";
import ImageModal from "../components/imageModal/ImageModal.jsx"; 

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [page, setPage] = useState(1); // Neue State für die Seitenzahl

  const load = async (searchInput) => {
    try {
      setLoading(true);
      const resData = await fetchImages(searchInput);
      setImages(resData);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const resData = await fetchImages(searchInput, nextPage); // Annahme: fetchImages muss auch die Seitenzahl berücksichtigen
      setImages([...images, ...resData]);
      setPage(nextPage);
    } catch (error) {
      console.error("Fehler beim Laden zusätzlicher Bilder:", error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
  };

  const closeModal = () => {
    setSelectedImageUrl(null);
  };

  return (
    <>
      <div>
        <SearchBar onSearch={load} />
        {loading && <Loading />}
        {isError && <Error />}
        <ImageGallery images={images} openModal={openModal} />
        {images.length > 0 && <LoadMoreBtn HandleClick={handleLoadMore} />}
        {selectedImageUrl && (
          <ImageModal
            imageUrl={selectedImageUrl}
            onRequestClose={closeModal}
          />
        )}
      </div>
    </>
  );
}

export default App;
