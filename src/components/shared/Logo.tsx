import Link from "next/link";
import Image from "next/image";

export default function Logo(){
    return(
       <Link href={"/"} className="flex  items-center p-4 ">
          <Image src="/alien2.png" height={60} width={60} alt={"Alien"}  />
          <div className="flex mx-4 ">
              <h2 className="text-white text-xl font-semibold">Alien</h2> <span className="text-green-300 text-xl">Store</span>
          </div>
       </Link>
    )
}