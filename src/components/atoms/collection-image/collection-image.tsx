import clsx from 'clsx';

export interface CollectionImageProps {
  className?: string;
  image: {
    alt: string;
    url: string;
    width: number;
    height: number;
  };
}

export const CollectionImage = ({ className, image }: CollectionImageProps) => (
  <img
    alt={image.alt}
    src={image.url}
    className={clsx(
      className,
      'aspect-[3/2] w-full object-cover object-center',
    )}
    width={image.width}
    height={image.height}
  />
);
