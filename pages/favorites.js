// pages/favorites.js
import { useFavorites } from '../context/FavoriteContext';
import Link from 'next/link';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Immagini Preferite</h1>
      <div>
        {favorites.map((photo) => (
          <div key={photo.id}>
            <Link href={`/${photo.id}`}>
              <a>
                <img src={photo.urls.small} alt={photo.alt_description} />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
