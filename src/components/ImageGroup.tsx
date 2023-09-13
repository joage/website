import Image from 'next/image'
import Link from 'next/link'

type CaptionedImage = {
    path: string;
    caption?: string;
    link?: string;
};

interface ImageGroupProps {
    images: Array<CaptionedImage>;
}

const ImageGroup = ({images}: ImageGroupProps) => {
    return (
        <div className="flex gap-4">
          {images.map((image, i) => (
          <Link href={image.link ?? ':'} key={i} className="flex flex-col place-items-center gap-1">
            <Image
              src={image.path}
              alt={image.path}
              width={800}
              height={800}
            />
            <p className="text-sm opacity-50">
              {image.caption}
            </p>
          </Link>
          ))}
        </div>
    );
};

export default ImageGroup;
