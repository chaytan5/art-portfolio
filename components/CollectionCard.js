import Image from "next/image";
import SecondaryButton from "./SecondaryButton";
import Link from "next/link";
import { useTabsContext } from "@/contexts/tab-context";

const CollectionCard = ({ title, description, image, tab }) => {
  const { setCurrentTab } = useTabsContext();

  return (
    <div className="grid place-items-center">
      <div className="relative mx-8 mb-14 mt-8 flex min-h-[420px] max-w-[360px] cursor-grab flex-col border border-gold-40 bg-black text-center before:absolute before:-inset-x-5 before:-inset-y-2.5 before:border before:border-gold-40 after:absolute after:-inset-x-2.5 after:-inset-y-5 after:border after:border-gold-40 active:cursor-grabbing md:mx-auto md:min-h-[500px] xl:ml-10">
        <div className="h-[200px] w-full bg-gray-300">
          <Image
            width={350}
            height={200}
            src={`/images/collections/${image}`}
            className="h-full w-full max-w-full bg-black object-cover object-center"
            alt={title}
            quality={95}
            priority
          />
        </div>
        <div className="flex grow flex-col justify-between px-2 py-4 md:px-5 md:py-8">
          <h2 className="text-2xl">{title}</h2>
          <p className="text-sm md:text-base">{description}</p>
          <div className="relative z-10 w-full pt-2 text-center">
            <Link
              onClick={() => {
                setCurrentTab(tab);
              }}
              href="/work"
            >
              <SecondaryButton>View Artwork</SecondaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
