import Link from "next/link";
import Image from "next/image";

export const Room = () => {
  return (
    <div className="bg-white px-8 py-12 rounded-3xl mt-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">Новая комната типа заголовок</h1>
        <Link href='/rooms' className="px-6 py-4 rounded-full bg-gray-200 text-red-500 flex items-center text-base font-bold">
          <Image src="/goodbye-icon.png" width={25} height={25} alt='goodbye icon' className="mr-2"/>
          <span className="ml-1">
            <span className="align-middle">Leave quietly</span>
          </span>
        </Link>
      </div>
    </div>
  );
};
