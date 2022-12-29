import clsx from "clsx"

export const Wrapper = ({ classes,children })=> {
    return (
        <div className={clsx("bg-brown p-4 min-h-screen",classes)}>
            {children}
        </div>
    )
}