import { useContext } from "react";
import { MainContext } from "../../pages";
import { WhiteBlock } from "../WhiteBlock";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export const WelcomeStep = () => {
  const { onNextStep } = useContext(MainContext);

  return (
    <WhiteBlock classes="m-auto  max-w-xl">
      <h1 className="mb-2 text-2xl font-bold flex items-center">
        <Image
          src="/hand.png"
          width={50}
          height={41}
          alt="logo hand"
          className="mr-2"
        />
        Welcome to Clubhouse
      </h1>
      <p className="mb-4">
        {
          "We're working hard to get Clubhouse ready for everyone! While we wrap up the finishing youches, we're adding people gradually to make sure nothing breaks :)"
        }
      </p>
      <button
        className="px-10 py-4 bg-blue-500 text-white text-lg rounded-full inline-flex items-center justify-center cursor-pointer mb-2 whitespace-nowrap"
        onClick={onNextStep}
      >
        Get you username
        <ArrowRightIcon className="w-4 ml-2 relative top-px" />
      </button>
      <button className="text-xs opacity-75 hover:underline">
        Have an invate text? Sign in
      </button>
    </WhiteBlock>
  );
};
