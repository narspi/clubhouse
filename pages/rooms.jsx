const file = require('../public/data.json');

import { Wrapper } from "../components/Wrapper";
import { Header } from "../components/Header";
import { PlusIcon } from "@heroicons/react/20/solid";
import { ConversationCard } from "../components/ConversationCard";
import coreAxios from "../core/axios";
import { useEffect, useState } from "react";

const Rooms = (props) => {
  const [rooms, setRooms] = useState(props.obj);

  return (
    <Wrapper>
      <Header />
      <div className="p-4">
        <div className="container m-auto">
          <div className="flex justify-between items-center mt-8">
            <h1 className="font-bold text-3xl">All conversation</h1>
            <button className="px-8 py-4 rounded-full bg-green-500 text-white flex items-center text-base font-bold">
              <PlusIcon className="w-5 h-5" />
              <span className="ml-1">
                <span className="align-middle">Start a rooms</span>
              </span>
            </button>
          </div>
          {rooms.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4 gap-4">
              {rooms.map(
                ({
                  id,
                  title,
                  avatars,
                  guests,
                  guestsCount,
                  speakersCount,
                }) => (
                  <ConversationCard
                    key={id}
                    id={id}
                    title={title}
                    avatars={avatars}
                    guests={guests}
                    guestsCount={guestsCount}
                    speakersCount={speakersCount}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Rooms;

export const getServerSideProps = async () => {
  let data = file;
  // try {
  //   const res = await coreAxios.get("/data.json");
  //   data = res.data;
  //   return {
  //     props: {
  //       obj: data,
  //     },
  //   };
  // } catch (e) {
    
  //   return {
  //     props: {
  //       obj: [],
  //     },
  //   };
  // }
  return {
    props: {
      obj: file
    }
  }
};
