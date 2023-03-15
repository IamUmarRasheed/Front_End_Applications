import { perdata } from "@/app/utils/data";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../../Wrapper";

export default function Header() {
  const { name, degi, conlink, conhid, contiitle } = perdata;
  return (
    <header className="bg-black ">
      <Wrapper>
        <div className="bg-regal-blue flex w-full justify-between  items-center flex-wrap sm:flex-auto rounded-lg px-10 py-5">
          <div className=" flex  flex-col sm:flex-row  items-center  ">
            <div className=" pr-24 sm:pr-0 ">
              <Image
                src="/profile.jpg"
                alt="profile"
                width={100}
                height={100}
                className="rounded-full  ring-offset-blue-800 ring-2     border "
              ></Image>
            </div>
            <div className="pl-4">
              <p className="pt-2 text-slate-400 ">{perdata.degi}</p>
              <h1 className="text-3xl font-bold ">{perdata.name}</h1>
            </div>
          </div>

          <div className=" pl-4 sm:pl-0">
            <h3 className=" text-xl sm:text-2xl font-body font-bold pt-2 ">{contiitle}</h3>
            {conlink.map((lik ,index) => (
              <div key={index} className="flex-col   ">
              
                <Link href={lik.contct} target="_blank">
                  {lik.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
