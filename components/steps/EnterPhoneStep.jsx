import { useState } from "react";
import clsx from "clsx";
import { WhiteBlock } from "../WhiteBlock";
import { StepInfo } from "./StepInfo";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { PatternFormat } from "react-number-format";

export const EnterPhoneStep = ({setStepState}) => {
  const [values, setInputValues] = useState({});
  const [inputOutline, setInputOutline] = useState(false);
  const nextDisabled = !values.formattedValue || values.formattedValue.includes('_');
  
  return (
    <div className="m-auto">
      <StepInfo
        src="/phone-icon.png"
        alt="salute"
        title="Enter your phone #"
        descr="We will send you a confirmation code"
      />
      <WhiteBlock classes="min-w-[300px]">
        <label className={clsx("flex items-center mb-4 border rounded p-2", {'border-black':inputOutline})} >
          <Image
            src="/russian-flag.png"
            alt="decor flag"
            width={30}
            height={30}
          />
          <PatternFormat
            format="+# (###) ###-##-##"
            mask="_"
            placeholder="+7 (999) 333-22-11"
            className="ml-2 outline-none"
            onFocus={()=>{setInputOutline(true)}}
            onBlur={()=>{setInputOutline(false)}}
            onValueChange={({formattedValue,value})=> setInputValues({formattedValue,value})}
          />
        </label>
        <button
          className="mb-4 px-10 py-2 bg-blue-500 text-white text-lg rounded-full inline-flex items-center justify-center cursor-pointer whitespace-nowrap disabled:bg-slate-300"
          onClick={() => {
            setStepState(5);
          }}
          disabled={nextDisabled}
        >
          Next
          <ArrowRightIcon className="w-4 ml-1 relative top-px" />
        </button>
        <p className="text-xs opacity-75 w-60">
          By enteryng your number, you're agreeing to you Terms of service and
          Privacy Policy. Thanks!
        </p>
      </WhiteBlock>
    </div>
  );
};
