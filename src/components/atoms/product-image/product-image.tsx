interface ProductImageProps {
  alt: string;
  src: string;
}

export const ProductImage = ({ alt, src }: ProductImageProps) => (
  <img
    alt={alt}
    src={src}
    className="aspect-square w-full rounded-t-lg object-cover object-center"
    width={400}
    height={400}
  />
);
