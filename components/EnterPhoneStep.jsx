import { WhiteBlock } from "./WhiteBlock";
import { StepInfo } from "./StepInfo";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export const EnterPhoneStep = () => {
    return (
        <div className="m-auto">
      <StepInfo
        src="/phone-icon.png"
        alt="salute"
        title="Enter your phone #"
        descr="We will send you a confirmation code"
      />
      <WhiteBlock classes="min-w-[300px]">
        <input className="border w-full mb-10" type="tel" />
        <button
          className="mb-10 px-10 py-2 bg-blue-500 text-white text-lg rounded-full inline-flex items-center justify-center cursor-pointer whitespace-nowrap"
          onClick={() => {
            setStepState(0);
          }}
          disabled
        >
          Next
          <ArrowRightIcon className="w-4 ml-1 relative top-px"/>
        </button>
        <p className="text-xs opacity-75">
            By enteryng your number, you're agreeing to you Terms of service and Privacy Policy. Thanks!
        </p>
      </WhiteBlock>
    </div>
    )
}