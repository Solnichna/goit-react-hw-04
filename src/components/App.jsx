import { useState } from 'react';
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
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState(null);

  const load = async (searchInput) => {
    try {
      setImages([]);
      setLoading(true);
      setSearchInput(searchInput);
      const resData = await fetchImages(searchInput);
      setImages(resData);
      onSearchSuccess(resData.length > 0);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const HandleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPage = Math.ceil(images.length / 10) + 1;
      const resData = await fetchImages(searchInput, nextPage);
      setImages([...images, ...resData]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onSearchSuccess = (hasResults) => {
    setLoadMoreBtn(hasResults);
  };

  const handleOpen = async (image) => {
    setSelectedImages(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <SearchBar onSearch={load} onSearchSuccess={onSearchSuccess} />
        {loading && <Loading />}
        {isError && <Error />}
        <ImageGallery images={images} openModal={handleOpen} />
        {loadMoreBtn && <LoadMoreBtn HandleClick={HandleLoadMore} />}
        {selectedImages && (
          <ImageModal
            isOpen={isOpen}
            onRequestClose={handleClose}
            image={selectedImages}
          />
        )}
      </div>
    </>
  );
}

export default App;