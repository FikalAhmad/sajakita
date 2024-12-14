const team = [
  {
    nama: "Ahmad Fikri Haikal",
    jabatan: "Pemimpin Redaksi",
  },
  {
    nama: "Iqbal Ramadan",
    jabatan: "Penulis",
  },
];

const redaksi = () => {
  return (
    <div className="py-10">
      <h2 className="text-center text-xl font-bold">Redaksi</h2>
      <div className="w-full">
        <ul>
          {team.map((item, index) => (
            <li key={index} className="mb-5">
              <p>{item.jabatan}</p>
              <h3 className="font-semibold">{item.nama}</h3>
            </li>
          ))}
        </ul>
        <div className="">
          <p>Kontak</p>
          <h3 className="font-semibold">fikaalm26@gmail.com</h3>
        </div>
      </div>
    </div>
  );
};

export default redaksi;
