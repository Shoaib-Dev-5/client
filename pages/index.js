import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { BiSearch } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });

import Home from "../components/Home";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Feed from "@/components/Feed";
import Premium from "@/components/Premium";
export default function App() {
  return (
    <>
      <Head>
        <title>Reddit Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full flex space-x-2 justify-between">
        <div className="flex-1">
          <Home />
          <div className="my-4">
            <Category />
          </div>
          <div>
            <Feed />
          </div>
        </div>
        {/* RightSide */}
        <div className="w-1/4 space-y-4 hidden lg:block">
          <Premium />
          <div className="sticky top-16 ">
          <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
