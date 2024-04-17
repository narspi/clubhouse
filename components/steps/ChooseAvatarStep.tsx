import { useState, useContext, ChangeEvent } from "react";
import { MainContext } from "../../pages";
import { WhiteBlock } from "../WhiteBlock";
import { StepInfo } from "./StepInfo";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import coreAxios from "../../core/axios";

export const ChooseAvatarStep = () => {
  const { onNextStep, userData } = useContext(MainContext);
  const [avatarUrl, setAvatarUrl] = useState(
    userData.avatarUrl ? userData.avatarUrl : ""
  );

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    const data = await uploadFile(file);
    console.log(data)
    setAvatarUrl(data.url);
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("photo", file);
    const { data } = await coreAxios({
      method: "POST",
      url: "/upload",
      data: formData,
      headers: {
        "Content-Type": "multypart/form-data",
      },
    });
    return data;
  };

  return (
    <div className="m-auto">
      <StepInfo
        src="/selebration-icon.png"
        alt="salute"
        title={`Ok, ${userData.fullName ? userData.fullName : "unkwown"}`}
        descr="How's this photo?"
      />
      <WhiteBlock classes="min-w-[300px]">
        <div className="relative w-28 h-28 mb-2">
          <Image
            src={avatarUrl ? avatarUrl : "/avatar-anknown.svg"}
            fill
            alt="avatar"
            className="object-cover object-center rounded-full"
          />
        </div>
        <label
          className="text-xs opacity-75 hover:underline cursor-pointer mb-2"
          htmlFor="image"
        >
          Choose a different photo
        </label>
        <input id="image" onChange={handleChangeImage} hidden type="file" />
        <button
          className="px-10 py-2 bg-blue-500 text-white text-lg rounded-full inline-flex items-center justify-center cursor-pointer whitespace-nowrap"
          onClick={onNextStep}
        >
          Next
          <ArrowRightIcon className="w-4 ml-1 relative top-px" />
        </button>
      </WhiteBlock>
    </div>
  );
};
