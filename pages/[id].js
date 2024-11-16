// pages/[id].js
import ImageDetail from '../components/ImageDetail';
import CommentSection from '../components/CommentSection';
import { useRouter } from 'next/router';

const PhotoDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <ImageDetail />
      {id && <CommentSection imageId={id} />}
    </div>
  );
};

export default PhotoDetailPage;

