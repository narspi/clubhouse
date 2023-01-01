import { WhiteBlock } from "./WhiteBlock";
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

export const WelcomeStep = ({setStepState}) => {
    return (
        <WhiteBlock classes="m-auto">
            <h1 className="mb-2 text-2xl font-bold flex items-center">
                <img className="w-10 mr-2" src="/hand.png" alt="logo hand" />
                Welcome to Clubhouse
            </h1>
            <p className="mb-4">
                {"We're working hard to get Clubhouse ready for everyone! While we wrap up the finishing youches, we're adding people gradually to make sure nothing breaks :)"}
            </p>
            <button className="px-10 py-4 bg-blue-500 text-white text-lg rounded-full inline-flex items-center justify-center cursor-pointer mb-2 whitespace-nowrap" onClick={()=>{setStepState(1)}}>
                Get you username    
                <ArrowRightIcon className="w-4 ml-2 relative top-px"/>
            </button>
            <button className="text-xs opacity-75 hover:underline">Have an invate text? Sign in</button>
        </WhiteBlock>
    )
}