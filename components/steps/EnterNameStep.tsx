import { useContext, useState, ChangeEvent } from "react";
import { MainContext } from "../../pages";
import { WhiteBlock } from "../WhiteBlock";
import { StepInfo } from "./StepInfo";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export const EnterNameStep = () => {
  const { onNextStep, userData, setUserData } = useContext(MainContext);
  const [inputValue, setInputValue] = useState(
    userData.fullName ? userData.fullName : ""
  );

  const handlerChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setUserData(
      ({ fullName }: { fullName?: string }) => (fullName = e.target.value)
    );
  };

  const nextDisabled = inputValue.length > 0 ? false : true;

  return (
    <div className="m-auto text-center">
      <StepInfo
        src="/anknown.svg"
        alt="hand"
        title="What's your full name?"
        descr="People use real name on Clubhouse :) Thnx!"
      />
      <WhiteBlock>
        <input
          className="mb-8 border w-full px-4 py-2"
          type="text"
          placeholder="Enter full name"
          onChange={handlerChangeInput}
          value={inputValue}
        />
        <button
          className="px-8 py-2 bg-blue-500 text-white text-lg rounded-full inline-flex items-center justify-center cursor-pointer whitespace-nowrap disabled:bg-slate-300"
          onClick={onNextStep}
          disabled={nextDisabled}
        >
          Next
          <ArrowRightIcon className="w-4 ml-1 relative top-px" />
        </button>
      </WhiteBlock>
    </div>
  );
};
