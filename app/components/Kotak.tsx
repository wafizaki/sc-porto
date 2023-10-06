import React from "react";
import {
  FaAtom,
  FaJava,
  FaHtml5,
  FaCss3,
  FaPython,
  FaCode,
} from "react-icons/fa";

export default function Kotak() {
  // CSS untuk mengatur kotak di tengah halaman
  const kotakStyle: React.CSSProperties = {
    margin: "auto",
    padding: "40px 0 0 5px",
    width: "270px", // Lebar dan tinggi diperbarui untuk 3x3 grid
    height: "200px",
    backgroundColor: "rgb(72, 84, 108)",
    color: "white",
    textAlign: "center",
    display: "grid", // Menjadikan kotak sebagai grid container
    gridTemplateColumns: "repeat(3, 1fr)", // Membuat 3 kolom yang sama lebar
    gridTemplateRows: "repeat(3, 1fr)", // Membuat 3 baris yang sama tinggi
    gap: "30px", // Spasi antara ikon-ikon
    alignItems: "center",
    justifyContent: "center",
  };

  // CSS untuk mengatur ukuran ikon
  const iconStyle: React.CSSProperties = {
    width: "80%", // Menggunakan 100% lebar untuk ikon
    height: "auto", // Menyesuaikan tinggi sesuai aspek rasio ikon
  };

  return (
    <div style={kotakStyle}>
      <FaAtom style={iconStyle} />
      <FaJava style={iconStyle} />
      <FaCss3 style={iconStyle} />
      <FaHtml5 style={iconStyle} />
      <FaPython style={iconStyle} />
      <FaCode style={iconStyle} />
      {/* Tambahkan ikon-ikon lainnya sesuai kebutuhan */}
    </div>
  );
}
