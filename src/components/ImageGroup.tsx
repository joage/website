import Image from "next/image";

type CaptionedImage = {
  path: string;
  caption?: string;
};

interface ImageGroupProps {
  images: Array<CaptionedImage>;
}

const ImageGroup = ({ images }: ImageGroupProps) => {
  return (
    <div className="flex gap-4">
      {images.map((image, i) => (
        <div key={i} className="flex flex-col place-items-center gap-1">
          <Image src={image.path} alt={image.path} width={800} height={800} />
          <p className="text-sm opacity-50">{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGroup;
