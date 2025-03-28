import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-72 bg-black mt-10 text-white">
      <div className="h-full gap-5 flex flex-col md:flex-row justify-center md:justify-between items-center mx-5 md:mx-10 lg:mx-20">
        <div className="font-bold text-4xl">Sajakita</div>
        <hr className="block md:hidden text-light w-full" />
        <div>
          <ul className="flex gap-5 flex-wrap md:w-[500px] justify-center md:justify-start">
            <li>
              <Link href={"/tentang"}>Tentang Sajakita</Link>
            </li>
            <li>
              <Link href={"/redaksi"}>Redaksi</Link>
            </li>
            <li>
              <Link href={"/pedoman"}>Pedoman Media Siber</Link>
            </li>
            <li>
              <Link href={"/spw"}>Standar Perlindungan Wartawan</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
