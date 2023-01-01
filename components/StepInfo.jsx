import clsx from "clsx";
import Image from 'next/image';

export const StepInfo = ({ src,alt,title,descr }) => {
    return (
       <div className="flex flex-col items-center mb-10">
            <Image src={src} alt={alt} width={50} height={50} className="mb-4"/>
            <h1 className={clsx("font-bold text-2xl",{'mb-2':descr})}>{title}</h1>
            {descr && (<p>{descr}</p>)}
       </div> 
    )
}