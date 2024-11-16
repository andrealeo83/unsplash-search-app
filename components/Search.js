import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Search = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const searchPhotos = async (event, page = 1) => {
    if (event) {
      event.preventDefault();
    }
    
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query, page },
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
      }
    });
    setPhotos(response.data.results);
    setTotalPages(response.data.total_pages);
    setPage(page);
  };

  const goToNextPage = () => {
    searchPhotos(null, page + 1);
  };

  const goToPreviousPage = () => {
    searchPhotos(null, page - 1);
  };

  

  return (
    <div>
      <form onSubmit={searchPhotos}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Cerca immagini..." 
        />
        <button type="submit">Cerca</button>
      </form>
      <div>
        {photos.map(photo => (
          <div key={photo.id}>
            <Link href={`/${photo.id}`}>
                <img src={photo.urls.small} alt={photo.alt_description} />
            </Link>
          </div>
        ))}
      </div>
      <div>
        {page > 1 && <button onClick={goToPreviousPage}>Precedente</button>}
        {page < totalPages && <button onClick={goToNextPage}>Successivo</button>}
      </div>
    </div>
  );
};

export default Search;
