import { LoadingSpinner } from '@/components/atoms/loading-spinner';

const Loading = () => (
  <div aria-busy className="pt-14 text-center">
    <LoadingSpinner />
  </div>
);

export default Loading;
