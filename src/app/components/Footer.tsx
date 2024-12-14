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
            <Link href={"/tentang"}>
              <li>Tentang Sajakita</li>
            </Link>
            <Link href={"/redaksi"}>
              <li>Redaksi</li>
            </Link>
            <Link href={"/pedoman"}>
              <li>Pedoman Media Siber</li>
            </Link>
            <Link href={"/spw"}>
              <li>Standar Perlindungan Wartawan</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
