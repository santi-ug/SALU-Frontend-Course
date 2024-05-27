import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

// import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = ({
  img,
  title,
  desc,
  // rating,
  price,
}) => {

  
  const navigate = useRouter();

  return (
    <div onClick={() => navigate.push('/product')} className="px-4 border border-gray-200 rounded-xl max-w-[400px] hover:cursor-pointer">
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        {/* <div>{generateRating(rating)}</div> */}

        <div className="font-bold flex gap-4">
          ${price}
          <del className="text-gray-500 font-normal">
            ${parseInt(price) + 50}.00
          </del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;