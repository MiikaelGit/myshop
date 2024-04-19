import Head from "next/head";
import Image from "next/image";
import { Header } from "@/components/Header/Header";
import { Content } from "@/components/Content/Content";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <Header />
      <Content />
    </div>
  );
}
