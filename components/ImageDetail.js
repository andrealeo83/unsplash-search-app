// components/ImageDetail.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFavorites } from '../context/FavoriteContext';

const ImageDetail = () => {
  const router = useRouter();
  const [photo, setPhoto] = useState(null);
  const { addFavorite, removeFavorite, favorites } = useFavorites();

  useEffect(() => {
    if (router.isReady && router.query.id) {
      const fetchPhoto = async () => {
        try {
          const response = await axios.get(`https://api.unsplash.com/photos/${router.query.id}`, {
            headers: {
              Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
            }
          });
          setPhoto(response.data);
        } catch (error) {
          console.error('Errore nel recupero dell\'immagine:', error);
        }
      };
      fetchPhoto();
    }
  }, [router.isReady, router.query.id]);

  const isFavorite = favorites.some((fav) => fav.id === photo?.id);

  if (!router.isReady) {
    return <div>Caricamento...</div>;
  }

  if (!photo) {
    return <div>Immagine non trovata</div>;
  }

  return (
    <div>
      <h1>{photo.description || 'Senza Descrizione'}</h1>
      <img src={photo.urls.regular} alt={photo.alt_description} />
      <p>Autore: {photo.user.name}</p>
      <p>Likes: {photo.likes}</p>
      <button onClick={() => isFavorite ? removeFavorite(photo.id) : addFavorite(photo)}>
        {isFavorite ? 'Rimuovi dai Preferiti' : 'Aggiungi ai Preferiti'}
      </button>
    </div>
  );
};

export default ImageDetail;
