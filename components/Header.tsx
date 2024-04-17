import Image from "next/image";
import Link from 'next/link';

export const Header = ()=> {
    return (
        <div className="p-4 border-b-2">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/rooms">
                    <Image src="/logo.png" width={200} height={32} alt="logo"/>
                    <span></span>
                </Link>
                <div className="flex items-center">
                    <span className="mr-2 font-bold">Archackov denis</span>
                    <Image src="/anknown.svg" width={50} height={50} alt="avatar"/>
                </div>
            </div>
        </div>
    )
}