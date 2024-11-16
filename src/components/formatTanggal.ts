export function formatTanggal(isoDate: string): string {
  const date = new Date(isoDate);

  // Ekstrak tanggal, bulan, dan tahun
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  // Array nama bulan
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Dapatkan nama bulan berdasarkan indeks
  const monthName = months[date.getMonth()]; // Bulan dimulai dari 0

  // Gabungkan menjadi format dd/NamaBulan/yyyy
  const formattedDate = `${day} ${monthName} ${year}`;
  return formattedDate;
}
