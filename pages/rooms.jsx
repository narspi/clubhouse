import { Wrapper } from "../components/Wrapper";
import { Header } from "../components/Header";
import { PlusIcon } from "@heroicons/react/20/solid";
import { ConversationCard } from "../components/ConversationCard";

const Rooms = () => {
  return (
    <Wrapper>
      <Header />
      <div className="p-4">
        <div className="container m-auto">
          <div className="flex justify-between items-center  mt-8">
            <h1 className="font-bold text-3xl">All conversation</h1>
            <button className="px-8 py-4 rounded-full bg-green-500 text-white flex items-center text-base font-bold">
              <PlusIcon className="w-5 h-5" />
              <span className="ml-1">
                <span className="align-middle">Start a rooms</span>
              </span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4 gap-4">
            <ConversationCard />
            <ConversationCard />
            <ConversationCard />
            <ConversationCard />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Rooms;
