import React from "react";

import ProductCard from "@/components/product-card/ProductCard";


import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});





export default function ProductList() {

const productList = [
  {
    "id": "001",
    "name": "Wireless Bluetooth Headphones",
    "description": "Over-ear headphones with noise cancellation and a 20-hour battery life.",
    "image": "https://images.pexels.com/photos/3394656/pexels-photo-3394656.jpeg",
    "price": "$89.99"
  },
  {
    "id": "002",
    "name": "Smart LED Desk Lamp",
    "description": "Adjustable brightness lamp with touch controls and USB charging port.",
    "image": "https://images.pexels.com/photos/6320075/pexels-photo-6320075.jpeg",
    "price": "$89.99"
  },
  {
    "id": "003",
    "name": "Ergonomic Office Chair",
    "description": "Mesh chair with lumbar support, perfect for long working hours.",
    "image": "https://images.pexels.com/photos/8132691/pexels-photo-8132691.jpeg",
    "price": "$89.99"
  },
  {
    "id": "004",
    "name": "Portable Power Bank",
    "description": "10,000mAh power bank with fast charging and dual USB outputs.",
    "image": "https://images.pexels.com/photos/4042806/pexels-photo-4042806.jpeg",
    "price": "$89.99"
  },
  {
    "id": "005",
    "name": "Stainless Steel Water Bottle",
    "description": "Insulated bottle that keeps drinks cold for 24 hours or hot for 12.",
    "image": "https://images.pexels.com/photos/3651617/pexels-photo-3651617.jpeg",
    "price": "$89.99"
  },
  {
    "id": "006",
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse with adjustable DPI and silent clicks.",
    "image": "https://images.pexels.com/photos/5082560/pexels-photo-5082560.jpeg",
    "price": "$89.99"
  },
  {
    "id": "007",
    "name": "Laptop Stand",
    "description": "Aluminum adjustable stand that supports proper posture and cooling.",
    "image": "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg",
    "price": "$89.99"
  },
  {
    "id": "008",
    "name": "Bluetooth Speaker",
    "description": "Compact speaker with rich bass, waterproof design, and 10-hour playtime.",
    "image": "https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg",
    "price": "$89.99"
  },
  {
    "id": "009",
    "name": "Digital Alarm Clock",
    "description": "LED alarm clock with FM radio, snooze function, and ambient night light.",
    "image": "https://images.pexels.com/photos/4042805/pexels-photo-4042805.jpeg",
    "price": "$89.99"
  },
  {
    "id": "010",
    "name": "USB-C Hub Adapter",
    "description": "6-in-1 hub with HDMI, USB 3.0 ports, SD card reader, and charging support.",
    "image": "https://images.pexels.com/photos/5082561/pexels-photo-5082561.jpeg",
    "price": "$89.99"
  }
]











  return (
    <div className="container mx-auto p-4">
      <h1 className={`${geistSans.variable} text-3xl font-bold mb-6`}>Product List</h1>
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}



