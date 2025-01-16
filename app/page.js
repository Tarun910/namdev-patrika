"use client"; // This marks the file as a client component

import { Button } from "@/components/ui/button";
import Typed from "typed.js";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ:",
        "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const [cards, setCards] = useState([
    {
      id: 1,
      name: "John Doe",
      profession: "Software Developer",
      age: 28,
      gender: "male",
      image: "/images/download (4).jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      profession: "Designer",
      age: 24,
      gender: "female",
      image: "/images/download (1).jpg",
    },
    {
      id: 3,
      name: "Sam Smith",
      profession: "Manager",
      age: 35,
      gender: "male",
      image: "/images/download (2).jpg",
    },
    {
      id: 4,
      name: "Sarah Lee",
      profession: "Developer",
      age: 30,
      gender: "female",
      image: "/images/4.jpg",
    },
  ]);

  const [filteredCards, setFilteredCards] = useState(cards);
  const [gender, setGender] = useState("");
  const [ageFrom, setAgeFrom] = useState(18);
  const [ageTo, setAgeTo] = useState(100);

  const handleFind = () => {
    const filtered = cards.filter(
      (card) =>
        (gender ? card.gender === gender : true) &&
        card.age >= ageFrom &&
        card.age <= ageTo
    );
    setFilteredCards(filtered);
  };

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1
            className="text-2xl leading-snug text-gray-800 dark:text-gray-200 md:text-2xl"
            style={{ fontFamily: "'Samarkan', serif" }}
          >
            <span ref={el} />
          </h1>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="/download.jpg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col sm:flex-row sm:gap-8 mb-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center">
                <label
                  htmlFor="gender"
                  className="block text-gray-800 dark:text-gray-200 font-semibold mb-2"
                >
                  Select Gender
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                >
                  <option value="">All</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center">
                <label
                  htmlFor="age-from"
                  className="block text-gray-800 dark:text-gray-200 font-semibold mb-2"
                >
                  Age From
                </label>
                <select
                  id="age-from"
                  value={ageFrom}
                  onChange={(e) => setAgeFrom(Number(e.target.value))}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                >
                  {Array.from({ length: 83 }, (_, i) => (
                    <option key={i} value={18 + i}>
                      {18 + i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center">
                <label
                  htmlFor="age-to"
                  className="block text-gray-800 dark:text-gray-200 font-semibold mb-2"
                >
                  Age To
                </label>
                <select
                  id="age-to"
                  value={ageTo}
                  onChange={(e) => setAgeTo(Number(e.target.value))}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                >
                  {Array.from({ length: 83 }, (_, i) => (
                    <option key={i} value={18 + i}>
                      {18 + i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <Button
              onClick={handleFind}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg mt-4 sm:mt-0"
            >
              Find
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCards.map((card) => (
              <div
                key={card.id}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
              >
                <Link href={`/profile/${card.id}`} passHref>
                  <div className="relative w-full overflow-hidden rounded-lg cursor-pointer">
                    <Image
                      src={card.image}
                      alt={card.name}
                      width={500}
                      height={500}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </Link>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-4">
                  {card.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  {card.profession}
                </p>
                <p className="text-gray-500 dark:text-gray-300">
                  {card.age} years old
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
