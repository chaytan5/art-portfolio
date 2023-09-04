import Image from "next/image";
import React from "react";
import SecondaryButton from "./SecondaryButton";
import Link from "next/link";

const CollectionCard = ({ title, description, image }) => {
  return (
    <div className="relative mx-auto mb-14 mt-8 max-w-[350px] cursor-grab border border-gold-40 bg-black text-center before:absolute before:-inset-x-5 before:-inset-y-2.5 before:border before:border-gold-40 after:absolute after:-inset-x-2.5 after:-inset-y-5 after:border after:border-gold-40 active:cursor-grabbing xl:ml-10">
      <div className="h-[200px] max-w-full">
        <Image
          width={500}
          height={300}
          src={`/images/${image}`}
          className="h-[200px] max-w-full bg-black object-cover object-center"
          alt={title}
        />
      </div>
      <div className="space-y-6 px-5 py-8">
        <h2 className="text-2xl">{title}</h2>
        <p>{description}</p>
        <div className="relative z-10 w-full pt-2 text-center">
          <Link href="/work">
            <SecondaryButton>View Artwork</SecondaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
