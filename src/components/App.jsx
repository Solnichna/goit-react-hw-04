import { useState } from "react";
import "./App.module.css";

import { fetchImages } from "../components/api.js";
import SearchBar from "../components/searchBar/SearchBar.jsx";
import Loading from "../components/loader/Loader.jsx";
import Error from "../components/errorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "../components/loadMoreBtn/LoadMoreBtn.jsx";
import ImageGallery from "../components/imageGallery/ImageGallery.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const load = async (searchInput) => {
    try {
      setImages([]);
      setLoading(true);
      const resData = await fetchImages(searchInput);
      console.log(resData);
      setImages(resData);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const HandleClick = () => {
    console.log("work");
  };

  return (
    <>
      <div>
        <SearchBar onSearch={load} />
        {loading && <Loading />}
        {isError && <Error />}
        <ImageGellary images={images} />
        <LoadMoreBtn HandleClick={HandleClick} />
      </div>
    </>
  );
}

export default App;

