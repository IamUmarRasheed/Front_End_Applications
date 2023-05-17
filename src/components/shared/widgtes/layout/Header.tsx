import Image from "next/image";
import Link from "next/link";
import Wrapper from "../../Wrapper";

const Header = () => {
  return (
    <header className="bg-gradient-to-l from-slate-700 to-purple-600  w-full shadow-lg  fixed shadow-slate-800">
      <Wrapper>
        <div className="flex  basis-1/4 justify-between text-white">
          <div className=" py-5   ">
            <Image
              className="rounded-full"
              src={"/pic2.webp"}
              alt="myimage"
              width={80}
              height={80}
            />
          </div>
          <div className="pt-8   basis-1/2   hidden  lg:flex  ">
            <ul className="flex  gap-10 pr-30  basisi">
              <li className=" hover:text-red-600">
                <Link href={"/"}>Home</Link>{" "}
              </li>
              <li className=" hover:text-red-600">
                <Link href={"/"}>About</Link>{" "}
              </li>
              <li className=" hover:text-red-600">
                <Link href={"/"}>Next.js</Link>{" "}
              </li>
              <li className=" hover:text-red-600 ">
                <Link href={"/"}>Tailwind</Link>{" "}
              </li>
            </ul>
          </div>

          {/* <h1 className='text-2xl  first-letter:font-serif first-letter:font-bold first-line:font-mono hover: cursor-pointer hover:bg-slate-100'>hello what are you doing</h1>
<p>hello <span><a href='/'>im fine</a></span></p> */}

          <div
            className=" pt-4   pl-40  hidden lg:block sm:block basis-1/4
         "
          >
            <button className=" bg-red-800 py-3 px-5 rounded-lg   ring-inset ring-2     hover:bg-slate-500  focus:bg-green-600">
              Apply
            </button>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
export default Header;
