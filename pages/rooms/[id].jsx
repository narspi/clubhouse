import { Wrapper } from "../../components/Wrapper";
import { Header } from "../../components/Header";
import Link from 'next/link';
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Room } from "../../components/Room";
import coreAxios from "../../core/axios";

export const RoomPage = ({room}) => {

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
          <Room data={room}/>
        </div>
      </div>
    </Wrapper>
  );
};

export default RoomPage;

export const getServerSideProps = async (ctx) => {
  const id = ctx.query.id;
  let data = {};
  try {
    const res = await coreAxios.get("/data.json");
    data = res.data.find(obj => obj.id === id);
    return {
      props: {
        room: data,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        room: {},
      },
    };
  }
};
