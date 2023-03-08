import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Loginform from './components/Loginform'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className=" ">
      <Loginform />
      <div className='-mt-[410px] '>
        <svg
          width="100%"
          height="0%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 136.26666666666665,155.13333333333333 272.5333333333333,177.26666666666668 419,171 C 565.4666666666667,164.73333333333332 722.1333333333334,130.06666666666666 894,119 C 1065.8666666666666,107.93333333333334 1252.9333333333334,120.46666666666667 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#0693e3"
            fill-opacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 161.2,287.8666666666667 322.4,309.7333333333333 461,297 C 599.6,284.2666666666667 715.5999999999999,236.93333333333337 875,226 C 1034.4,215.06666666666663 1237.2,240.5333333333333 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#0693e3"
            fill-opacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
        </svg>
      </div>
    </section>
  );
}
