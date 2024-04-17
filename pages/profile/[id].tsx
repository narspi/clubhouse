import { useRouter } from "next/router";
import { Wrapper } from "../../components/Wrapper";
import { Header } from "../../components/Header";
import Link from 'next/link';
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Wrapper>
      <Header />
      <div className="p-4">
        <div className="container mx-auto">
            <Link href='/rooms' className="flex font-bold text-xl items-center w-fit">
                <ArrowLeftIcon className="w-4 mr-1"/>
                Back
            </Link>
            <div className="flex items-center mt-4">
                <Image width={100} height={100} className="mr-6" src="/anknown.svg" alt="avatar" />
                <div className="font-bold mr-6 text-xl">
                    <div>Alexsander Ivanov</div>
                    <div className="opacity-75 text-sm">@alexander</div>
                </div>
                <button className="border-2 border-blue-500 px-6 py-2 rounded-full font-bold hover:bg-blue-500 hover:text-white">
                    Follow
                </button>
            </div>
            <div className="mt-6">
                info user Id: {id}
            </div>
        </div>
      </div>
    </Wrapper>
  );
}
