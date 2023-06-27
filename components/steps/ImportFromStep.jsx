import { useContext,useEffect } from "react";
import { MainContext } from "../../pages";
import { WhiteBlock } from "../WhiteBlock";
import { StepInfo } from "./StepInfo";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export const ImportFromStep = () => {
  const { setStepState,onNextStep,userData,setUserData } = useContext(MainContext);

  const fooOpenWindow = () => {
    window.open("http://localhost:3001/auth/google","name", "width=500,height=500,location=false,resizable=false,toolbar=false");
  }

  useEffect(()=>{
    window.addEventListener("message", (event) => {
      const data = event.data;
      if (typeof data === 'object' && data.hasOwnProperty("avatarUrl")) {
        setUserData(event.data);
        setStepState(2);
      }
    });
  },[]);

  return (
    <div className="m-auto">
      <StepInfo
        src="/plug.svg"
        alt="plug"
        title="Do you want import info from Google?"
      />
      <WhiteBlock>
        {/* <div className="relative mb-2">
          <div className="absolute inset-0 flex items-center justify-center">
            <b className="uppercase font-extrabold text-xl">ai</b>
          </div>
          <div className="h-24 w-24 bg-neutral-200 rounded-[40%]"></div>
        </div>
        <h2 className="mb-2 font-bold text-xl">
          Alexander Ivanov
        </h2> */}
        <button
          className="px-10 py-2 bg-blue-500 text-white text-lg rounded-full inline-flex items-center justify-center cursor-pointer mb-2 whitespace-nowrap"
          onClick={fooOpenWindow}
        >
          <Image src='/google.png' width={20} height={20} alt='google icon' className="mr-2"/>
          Import from google
          <ArrowRightIcon className="w-4 ml-1 relative top-px"/>
        </button>
        <button onClick={onNextStep} className="text-xs opacity-75 hover:underline">Enter my into manyally</button>
      </WhiteBlock>
    </div>
  );
};
