import { useState } from "react";
import { WhiteBlock } from "../WhiteBlock";
import { StepInfo } from "./StepInfo";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import coreAxios from '../../core/axios';
import { useRouter } from "next/router";

export const EnterCodeStep = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [codes, setCodes] = useState(["", "", "", ""]);
  const nextDisabled = codes.some((v) => !v);


  const handleChangeInput = (e) => {
    const id = Number(e.target.getAttribute("id")) - 1;
    const value = e.target.value;
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[id] = value;
      return newArr;
    });
    if (e.target.nextSibling && value) e.target.nextSibling.focus();
  };

  const fooOnSubmit = async () => {
    try {
      setIsLoading(true);
      await coreAxios.get('todos').then(data=>console.log(data));
      router.push('/rooms')
    } catch (error) {
      alert('Ошибка при активации')
      setIsLoading(false);
    }
  }

  return (
    <div className="m-auto">
      {!isLoading ? (
        <>
          <StepInfo
            src="/code-icon.png"
            alt="code icon"
            title="Enter your activate code"
          />
          <WhiteBlock classes="min-w-[300px]">
            <div className="flex mb-4">
              <input
                className="w-11 py-2 px-4 rounded border mr-2 font-bold"
                type="tel"
                placeholder="X"
                maxLength={1}
                id="1"
                value={codes[0]}
                onChange={handleChangeInput}
              />
              <input
                className="w-11 py-2 px-4 rounded border mr-2 font-bold"
                type="tel"
                placeholder="X"
                maxLength={1}
                id="2"
                value={codes[1]}
                onChange={handleChangeInput}
              />
              <input
                className="w-11 py-2 px-4 rounded border mr-2 font-bold"
                type="tel"
                placeholder="X"
                maxLength={1}
                value={codes[2]}
                id="3"
                onChange={handleChangeInput}
              />
              <input
                className="w-11 py-2 px-4 rounded border font-bold"
                type="tel"
                placeholder="X"
                maxLength={1}
                id="4"
                value={codes[3]}
                onChange={handleChangeInput}
              />
            </div>
            <button
              className="mb-4 px-10 py-2 bg-blue-500 text-white text-lg rounded-full inline-flex items-center justify-center cursor-pointer whitespace-nowrap disabled:bg-slate-300"
              onClick={fooOnSubmit}
              disabled={nextDisabled}
            >
              Next
              <ArrowRightIcon className="w-4 ml-1 relative top-px" />
            </button>
          </WhiteBlock>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center mb-2">
            <div
              className="animate-spin inline-block w-6 h-6 border-[3px] border-black border-t-transparent rounded-full"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <p>Activation in progress ...</p>
        </>
      )}
    </div>
  );
};
