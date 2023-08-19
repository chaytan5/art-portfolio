import Image from "next/image";
import React from "react";

const CollectionCard = ({ title, description, image }) => {
  return (
    <div className="border-gold-40 before:border-gold-40 after:border-gold-40 relative mx-auto mb-14 mt-8 max-w-[500px] cursor-grab border bg-black before:absolute before:-inset-x-5 before:-inset-y-2.5 before:border after:absolute after:-inset-x-2.5 after:-inset-y-5 after:border xl:ml-10">
      <div className="min-h-[250px] max-w-full">
        <Image
          width={500}
          height={300}
          src={`/images/${image}`}
          className="h-[300px] max-w-full bg-black object-cover object-center"
          alt={title}
        />
      </div>
      <div className="space-y-6 px-5 py-8">
        <h2 className="text-2xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CollectionCard;
