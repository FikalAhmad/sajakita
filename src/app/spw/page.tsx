const contentSPW = [
  {
    title: "1. Hak atas Keselamatan",
    content:
      "Wartawan berhak bekerja di lingkungan yang aman, bebas dari ancaman fisik, kekerasan, atau intimidasi. Jika wartawan bekerja di wilayah konflik atau situasi berisiko tinggi, mereka harus mendapatkan pelatihan dan perlengkapan yang memadai, seperti rompi antipeluru atau helm pelindung.",
  },
  {
    title: "2. Kerahasiaan Sumber Informasi",
    content:
      "Wartawan berhak menjaga kerahasiaan sumber informasi sebagai bagian dari integritas jurnalistik. Hak ini harus dihormati oleh semua pihak, termasuk otoritas hukum, untuk memastikan kepercayaan antara wartawan dan sumbernya tetap terjaga.",
  },
  {
    title: "3. Perlindungan Hukum",
    content:
      "Wartawan harus dilindungi dari ancaman hukum yang berlebihan, seperti kriminalisasi atau tuntutan hukum yang tidak proporsional atas laporan yang mereka buat. Mereka berhak atas bantuan hukum dan advokasi jika menghadapi permasalahan hukum terkait pekerjaan mereka",
  },
  {
    title: "4. Kebebasan dari Sensor dan Intimidasi",
    content:
      "Tidak ada pihak yang boleh memaksa wartawan untuk mengubah, menahan, atau menghapus informasi yang telah diverifikasi. Wartawan juga tidak boleh menjadi sasaran intimidasi, baik secara langsung maupun melalui tekanan ekonomi, politik, atau sosial.",
  },
  {
    title: "5. Kesejahteraan dan Dukungan Psikologis",
    content:
      "Perusahaan media bertanggung jawab untuk memastikan kesejahteraan fisik dan mental wartawannya, terutama yang terlibat dalam peliputan di situasi ekstrem. Akses terhadap konseling atau dukungan psikologis harus tersedia untuk membantu wartawan mengatasi dampak trauma yang mungkin timbul.",
  },
  {
    title: "6. Perlindungan Digital",
    content:
      "Wartawan harus dilindungi dari ancaman keamanan digital, seperti peretasan atau pengawasan ilegal. Media dan organisasi terkait harus menyediakan pelatihan dan alat yang memadai untuk melindungi data dan komunikasi wartawan.",
  },
  {
    title: "7. Kolaborasi dengan Organisasi Independen",
    content:
      "Pemerintah, media, dan masyarakat harus mendukung keberadaan organisasi independen yang memantau pelanggaran terhadap kebebasan pers dan memberikan bantuan kepada wartawan yang menghadapi ancaman.",
  },
  {
    title: "8. Komitmen Pemerintah dan Institusi",
    content:
      "Pemerintah dan institusi terkait harus berkomitmen melindungi wartawan dan menjamin kebebasan pers. Penyelidikan yang cepat dan transparan harus dilakukan terhadap setiap kasus kekerasan atau intimidasi terhadap wartawan.",
  },
  {
    title: "9. Partisipasi dalam Penentuan Kebijakan",
    content:
      "Wartawan dan organisasi media harus dilibatkan dalam proses pembuatan kebijakan yang memengaruhi kebebasan pers, keselamatan, dan hak-hak mereka sebagai pekerja jurnalistik.",
  },
];

const spw = () => {
  return (
    <div className="py-10">
      <h2 className="text-center text-xl font-bold">
        Standar Perlindungan Wartawan
      </h2>
      <p className="mt-5">
        Sebagai elemen penting dalam kebebasan pers dan demokrasi, wartawan
        memiliki hak atas perlindungan fisik, psikologis, dan hukum dalam
        menjalankan tugasnya. Standar perlindungan wartawan ini dirancang untuk
        memastikan keselamatan, kesejahteraan, dan kebebasan mereka dalam
        melaksanakan fungsi jurnalistik tanpa tekanan, ancaman, atau risiko
        berlebihan.
      </p>
      {contentSPW.map((item, index) => (
        <div key={index} className="mt-5">
          <h3 className="font-semibold">{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default spw;
