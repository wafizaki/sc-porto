import "./globals.css";
import Navbar from "./components/Navbar";
import Foto from "./components/Foto";
import Kotak from "./components/Kotak";

export const metadata = {
  title: "Wafi's Blog",
  description: "Created by Wafi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <Foto />
        {children}
        <Kotak />
      </body>
    </html>
  );
}
