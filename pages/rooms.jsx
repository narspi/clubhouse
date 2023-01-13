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
            <ConversationCard
              title="Создаю клон клабхауз"
              avatars={[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              ]}
              guests={[
                'Клаудиа шифер',
                'Старый бог',
                'Матумба мен'
              ]}
              guestsCount={12}
              speakersCount={3}
            />
            <ConversationCard
              title="Создаю клон клабхауз"
              avatars={[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              ]}
              guests={[
                'Клаудиа шифер',
                'Старый бог',
                'Матумба мен'
              ]}
              guestsCount={12}
              speakersCount={3}
            />
            <ConversationCard
              title="Создаю клон клабхауз"
              avatars={[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              ]}
              guests={[
                'Клаудиа шифер',
                'Старый бог',
                'Матумба мен'
              ]}
              guestsCount={12}
              speakersCount={3}
            />
            <ConversationCard
              title="Создаю клон клабхауз"
              avatars={[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              ]}
              guests={[
                'Клаудиа шифер',
                'Старый бог',
                'Матумба мен'
              ]}
              guestsCount={12}
              speakersCount={3}
            />
            <ConversationCard
              title="Создаю клон клабхауз"
              avatars={[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              ]}
              guests={[
                'Клаудиа шифер',
                'Старый бог',
                'Матумба мен'
              ]}
              guestsCount={12}
              speakersCount={3}
            />
            <ConversationCard
              title="Создаю клон клабхауз"
              avatars={[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              ]}
              guests={[
                'Клаудиа шифер',
                'Старый бог',
                'Матумба мен'
              ]}
              guestsCount={12}
              speakersCount={3}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Rooms;
