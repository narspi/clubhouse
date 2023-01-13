import { useRef, useEffect, useState, useContext } from "react";
import { MainContext } from "../../pages";
import { WhiteBlock } from "../WhiteBlock";
import { StepInfo } from "./StepInfo";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from 'next/image';

export const ChooseAvatarStep = () => {
  const inputFileRef = useRef();
  const [avatarUrl,setAvatarUrl] = useState('');
  const { onNextStep } = useContext(MainContext);

  const handleChangeImage = e => {
    const file = e.target.files[0];
    console.log(file)
    const blob = URL.createObjectURL(file);
    setAvatarUrl(blob);
  };

  useEffect(() => {
    inputFileRef.current.addEventListener("change", handleChangeImage);
  }, []);

  return (
    <div className="m-auto">
      <StepInfo
        src="/selebration-icon.png"
        alt="salute"
        title="Ok, Alexandr"
        descr="How's this photo?"
      />
      <WhiteBlock classes="min-w-[300px]">
        <Image width={100} height={100} className="mb-2" src={avatarUrl? avatarUrl :"/anknown.svg"} alt="avatar" />
        <label
          className="text-xs opacity-75 hover:underline cursor-pointer mb-2"
          htmlFor="image"
        >
          Choose a different photo
        </label>
        <input id="image" ref={inputFileRef} hidden type="file" />
        <button
          className="px-10 py-2 bg-blue-500 text-white text-lg rounded-full inline-flex items-center justify-center cursor-pointer mb-2 whitespace-nowrap"
          onClick={onNextStep}
        >
          Next
          <ArrowRightIcon className="w-4 ml-1 relative top-px"/>
        </button>
      </WhiteBlock>
    </div>
  );
};
