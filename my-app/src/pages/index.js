import React from "react";
import Counter from "@/components/count/count";
import Authen from "../components/auth/auth";
import PostsList from "@/components/list/postList";
import Header from "@/components/header/header";
import { Geist, Geist_Mono } from "next/font/google";
import List from "@/components/list/list";
import ProductList from "./product-list";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      
    >

      <Header/>
      
      {/* <List/>
      <Counter/>
       <Authen/> 

       <PostsList/> */}
      <ProductList/>

    </div>
  );
}
