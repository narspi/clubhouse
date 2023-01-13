import Image from "next/image";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/20/solid";
import { UserIcon } from "@heroicons/react/20/solid";
import Link from 'next/link';

export const ConversationCard = ({
  title,
  avatars,
  guests,
  guestsCount,
  speakersCount,
}) => {
  return (
    <Link className="bg-white rounded-3xl p-6" href='/profile/12'>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <div className="flex items-start">
        <div className="relative w-10 h-10">
          <div className="absolute w-10 h-10">
            <Image
              src={avatars[0]}
              fill
              alt="one"
              className="object-cover object-center rounded-full"
            />
          </div>
          <div className="absolute w-10 h-10 top-6 left-4">
            <Image
              src={avatars[1]}
              fill
              alt="one"
              className="object-cover object-center rounded-full"
            />
          </div>
        </div>
        <div className="ml-8">
          {guests && (
            <ul>
              {guests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <div className="opacity-50">
            <span className="inline-block mr-2">
              <span className="inline-block align-middle">{speakersCount}</span>
              <UserIcon className="w-4 h-4 inline-block align-middle" />
            </span>
            <span className="inline-block">
              <span className="inline-block align-middle">{guestsCount}</span>
              <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4 inline-block align-middle" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
