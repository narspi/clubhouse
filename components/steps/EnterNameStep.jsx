import { WhiteBlock } from "../WhiteBlock";
import { StepInfo } from "./StepInfo";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export const EnterNameStep = ({ setStepState }) => {
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
        />
        <button className="px-8 py-2 bg-blue-500 text-white text-lg rounded-full inline-flex items-center justify-center cursor-pointer whitespace-nowrap" onClick={()=>{setStepState(2)}}>
          Next
          <ArrowRightIcon className="w-4 ml-1 relative top-px"/>
        </button>
      </WhiteBlock>
    </div>
  );
};
