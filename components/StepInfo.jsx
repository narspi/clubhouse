import clsx from "clsx";

export const StepInfo = ({ src,alt,title,descr }) => {
    return (
       <div className="flex flex-col items-center mb-10">
            <img src={src} alt={alt} width="50px" height="50px" className="mb-4"/>
            <h1 className={clsx("font-bold text-2xl",{'mb-2':descr})}>{title}</h1>
            {descr && (<p>{descr}</p>)}
       </div> 
    )
}