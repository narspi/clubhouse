import { useRouter } from "next/router";
import { Wrapper } from "../../components/Wrapper";
import { Header } from "../../components/Header";
import Link from 'next/link';
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Room } from "../../components/Room";

export const RoomPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Wrapper>
      <Header />
      <div className="p-4">
        <div className="container m-auto">
          <Link
            href="/rooms"
            className="flex font-bold text-xl items-center w-fit mt-8"
          >
            <ArrowLeftIcon className="w-4 mr-1" />
            All rooms
          </Link>
          <Room />
        </div>
      </div>
    </Wrapper>
  );
};

export default RoomPage;
