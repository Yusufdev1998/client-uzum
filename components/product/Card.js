import Image from "next/image";
import Link from "next/link";

const Card = ({ title, images, id, price }) => {
  return (
    <Link href={`/product/${title.split(" ").join("-") + "-" + id}`}>
      <div className="hover:shadow-lg ">
        <div className="relative min-h-[232px]">
          <Image
            className="rounded-lg"
            fill
            alt=""
            src={images[0].slice(0, 4) == "http" ? images[0] : undefined}
          ></Image>
        </div>
        <h1>{title}</h1>
        <span>${price}</span>
      </div>
    </Link>
  );
};

export default Card;
