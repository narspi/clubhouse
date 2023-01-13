import { clsx } from 'clsx';

export const WhiteBlock = ({classes,children})=> {
    return (
        <div className={clsx("bg-white px-8 py-12 rounded-3xl text-center flex flex-col items-center", classes)}>
            {children}
        </div>
    )
}