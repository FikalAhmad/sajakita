import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-72 bg-black mt-10 text-white">
      <div className="h-full gap-5 flex flex-col md:flex-row justify-center md:justify-between items-center mx-5 md:mx-10 lg:mx-20">
        <div className="font-bold text-4xl">Sajakita</div>
        <hr className="block md:hidden text-light w-full" />
        <div>
          <ul className="flex gap-5 flex-wrap md:w-[500px] justify-center md:justify-start">
            <li>Tentang Sajakita</li>
            <li>Redaksi</li>
            <li>Pedoman Media Siber</li>
            <li>Standar Perlindungan Wartawan</li>
            <li>Kontak Sajakita</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
