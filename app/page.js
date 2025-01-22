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
    // {
    //   id: 1,
    //   name: "John Doe",
    //   profession: "Software Developer",
    //   age: 28,
    //   gender: "male",
    //   image: "/images/download (4).jpg",
    // },
    {
      id: 64,
      name: "अंकित नामदेव",
      profession: "वरिष्ठ प्रबंधक, टाटा मोटर्स लिमिटेड, पुणे",
      age: 29,
      gender: "male",
      image: "/images/imagedata/ankit_namdev_id_64.jpg", // Update the image path if required
    },

    {
      id: 63,
      name: "Rohit Namdev",
      profession: "International marketing, Arvind Mills Ltd (Ahmedabad)",
      age: 28,
      gender: "male",
      image: "/images/imagedata/rohit_namdev_id_63.jpg",
    },

    {
      id: 62,
      name: "AYUR SHANDILKAR (NAMDEO)",
      profession: "OWNER BOMBAY CAR SHRINGAR SHOWROOM",
      age: 27,
      gender: "male",
      image: "/images/imagedata/ayur_shandilkar_namdeo_id_62.jpg",
    },

    {
      id: 61,
      name: "SOURABH SHANDILKAR (namdeo)",
      profession: "OWNER OF BOMBAY CAR SHRINGAR",
      age: 30,
      gender: "male",
      image: "/images/imagedata/sourabh_shandilkar_namdeo_id_61.jpg",
    },

    {
      id: 60,
      name: "प्रिंस नामदेव",
      profession: "सीआईएसएफ पद प्रधान आरक्षक",
      age: 28,
      gender: "male",
      image: "/images/imagedata/prince_namdev_id_60.jpg",
    },

    {
      id: 59,
      name: "आकाश नामदेव (हिमांशु)",
      profession: "डायॅमन्ड एण्ड ज्वेलर्स में कार्यरत",
      age: 25,
      gender: "male",
      image: "/images/imagedata/akash_namdev_himanshu_id_59.jpg",
    },

    {
      id: 58,
      name: "अमन नामदेव",
      profession: "Self-employed",
      age: 25,
      gender: "male",
      image: "/images/imagedata/aman_namdev_id_58.jpg",
    },

    {
      id: 57,
      name: "Himanshi Namdev",
      profession: "Currently preparing for UGC NET",
      age: 26,
      gender: "female",
      image: "/images/imagedata/himanshi_namdev_id_57.jpg",
    },

    {
      id: 56,
      name: "Lavkush Namdev",
      profession: "Branch Manager at Maruti Suzuki Pvt Ltd",
      age: 31,
      gender: "male",
      image: "/images/imagedata/lavkush_namdev_id_56.jpg",
    },

    {
      id: 55,
      name: "पीयूष शांडिलकर(नामदेव)",
      profession: "माइन मेट (मैंगनीज माइंस)",
      salary: "₹20000",
      age: 36,
      gender: "male",
      image: "/images/imagedata/piyush_shandilkar_id_55.jpg",
    },

    {
      id: 54,
      name: "कु.सोनम (नामदेव)",
      profession:
        "नर्सिंग आफीसर/क्वालिटी आफीसर जिला चिकित्सालय मण्डला (मध्यप्रदेश) सरकारी नौकरी",
      age: 38,
      gender: "female",
      image: "/images/imagedata/sonam_namdev_id_54.jpg",
    },

    {
      id: 53,
      name: "राजराजेश्वर नामदेव",
      profession: "प्राइवेट नौकरी",
      age: 29, // Calculated based on DOB (2024 - 1995)
      gender: "male",
      image: "/images/imagedata/rajrajeshwar_namdev_id_53.jpg",
    },
    {
      id: 52,
      name: "विकास नामदेव",
      profession: "ऑनलाईन फ्लिपकार्ट सर्विस",
      age: 25, // Calculated based on DOB (2024 - 1999)
      gender: "male",
      image: "/images/imagedata/vikas_namdev_id_52.jpg",
    },

    {
      id: 51,
      name: "भुपेंद्र नामदेव (जितेन्द्र)",
      profession: "मोटर इलेक्ट्रॉनिक",
      age: 26, // Calculated based on DOB (2024 - 1998)
      gender: "male",
      image: "/images/imagedata/bhupendra_namdev_id_51.jpg",
    },

    {
      id: 50,
      name: "अरुण नामदेव",
      profession: "सिलाई मशीन टेरिग मटेरियल थोक फुटकर",
      age: 27, // Calculated based on DOB (2024 - 1996)
      gender: "male",
      image: "/images/imagedata/arun_namdev_id_50.jpg",
    },

    {
      id: 49,
      name: "Shivani Namdev",
      profession: "N/A", // Self-occupation not specified
      age: 23, // Calculated based on DOB (2024 - 2000)
      gender: "female",
      image: "/images/imagedata/shivani_namdev_id_49.jpg",
    },

    {
      id: 48,
      name: "चिरंजीव / वरुण नामदेव",
      profession:
        "लीगल मैनेजर (कैप्री ग्लोबल हाउसिंग फाइनेंस लिमिटेड) एवं अधिवक्ता डिस्ट्रिक्ट कोर्ट जिला छिंदवाड़ा।",
      age: 30, // Calculated dynamically based on birth year (2024 - 1994)
      gender: "male",
      image: "/images/imagedata/varun_namdev_id_48.jpg",
    },

    {
      id: 47,
      name: "रक्षा (नामदेव)",
      profession: "Guest Faculty at Govt. High School",
      age: 27,
      gender: "female",
      image: "/images/imagedata/raksha_namdev_id_47.jpg",
    },

    {
      id: 46,
      name: "Paras Namdev",
      profession: "Artist and Musician Including Electronic Repairing",
      age: 24,
      gender: "male",
      image: "/images/imagedata/paras_namdev_id_46.jpg",
    },

    {
      id: 45,
      name: "मनिष भामरे",
      profession: "District Manager at AXIS BANK",
      age: 25,
      gender: "male",
      image: "/images/imagedata/manish_bhamre_id_45.jpg",
    },

    {
      id: 44,
      name: "कोमल कुमारी (नामदेव)",
      profession: "private school teacher",
      age: 27,
      gender: "female",
      image: "/images/imagedata/komal_kumari_namdev_id_44.jpg",
    },

    {
      id: 43,
      name: "Palak Chittora",
      profession:
        "Dentist, Fellowship in Cosmetology - Practicing in Hyderabad",
      age: 28,
      gender: "female",
      image: "/images/imagedata/palak_chittora_id_43.jpg",
    },

    {
      id: 42,
      name: "Milan Namdev",
      profession:
        "Nursing Officer - Arvindo Medical College Hospital, Indore (MP)",
      age: 29,
      gender: "male",
      image: "/images/imagedata/milan_namdev_id_42.jpg",
    },

    {
      id: 41,
      name: "Mansi Namdeo",
      profession:
        "Nursing Officer - Government District Hospital Jabalpur (M.P)",
      age: 25,
      gender: "female",
      image: "/images/imagedata/mansi_namdeo_id_41.jpg",
    },

    {
      id: 40,
      name: "Pavan Rajput (Chhipa)",
      profession: "Deputy Manager, Bajaj Finance Limited, Gwalior",
      age: 27,
      gender: "male",
      image: "/images/imagedata/pavan_rajput_chhipa_id_40.jpg",
    },

    {
      id: 39,
      name: "कपिल कुमार नामदेव वर्मा",
      profession: "Software Engineer, Krindle Software (American Company)",
      age: 28,
      gender: "male",
      image: "/images/imagedata/कपिल_कुमार_नामदेव_वर्मा_id_39.jpg",
    },

    {
      id: 38,
      name: "शिवानी नामदेव",
      profession: "Sr. Accountant",
      age: 25,
      gender: "female",
      image: "/images/imagedata/शिवानी_नामदेव_id_38.jpg",
    },

    {
      id: 37,
      name: "Jitendra Namdev",
      profession: "Nominated Project Director",
      age: 28,
      gender: "male",
      image: "/images/imagedata/jitendra_namdev_id_37.jpg",
    },

    {
      id: 36,
      name: "Shivam Namdev",
      profession: "Sr. Engineer",
      age: 28,
      gender: "male",
      image: "/images/imagedata/shivam_namdev_id_36.jpg",
    },

    {
      id: 35,
      name: "Ayushi Rohilla",
      profession: "Teacher, Scottish International School, Shamli (UP)",
      age: 29,
      gender: "female",
      image: "/images/imagedata/ayushi_rohilla_id_35.jpg",
    },
    {
      id: 34,
      name: "Ankit Namdeo",
      profession: "Software Engineer, TCS",
      age: 32,
      gender: "male",
      image: "/images/imagedata/ankit_namdeo_id_34.jpg",
    },
    {
      id: 33,
      name: "Ashish Verma",
      profession:
        "Architect & Civil Engineer, SAI CONSULTANTS Bhopal (Building Planning & Designing)",
      age: 33,
      gender: "male",
      image: "/images/imagedata/ashish_verma_id_33.jpg",
    },

    {
      id: 32,
      name: "आनंद सरबरिया",
      profession: "पारले नमकीन",
      age: 37,
      gender: "male",
      image: "/images/imagedata/aanand_sarvariya_id_32.jpg",
    },

    {
      id: 31,
      name: "विकास नामदेव",
      profession: "private job- Lab technician",
      age: 28,
      gender: "male",
      image: "/images/imagedata/vikas_namdev_id_31.jpg",
    },

    {
      id: 30,
      name: "दीपांशु नामदेव",
      profession: "स्वयं का नोकरी/व्यव.",
      age: 24,
      gender: "male",
      image: "/images/imagedata/deepanshu_namdev_id_30.jpg",
    },

    {
      id: 29,
      name: "चिरंजीव/ सु.श्री... यश चौहान (नामदेव)",
      profession:
        "Working As Tex Consultant And Accounts Executive In CA Firm, पुणे, महाराष्ट्र",
      age: 36,
      gender: "male",
      image: "/images/imagedata/chiranjeev_yash_chauhan_id_29.jpg",
    },

    {
      id: 28,
      name: "अभिषेक नामदेव",
      profession: "teleperformance, indore",
      age: 29,
      gender: "male",
      image: "/images/imagedata/abhishek_namdev_id_28.jpg",
    },
    {
      id: 27,
      name: "जय प्रकाश छिंपा",
      profession:
        "प्राईवेट नौकरी एवं व्यवसाय (मेडीकल दुकान में एकाउंटेंट का कार्य) एवम् जिम का कार्य",
      age: 32,
      gender: "male",
      image: "/images/imagedata/jay_prakash_chimpa_id_27.jpg",
    },

    {
      id: 26,
      name: "Sourabh Namdev",
      profession: "Police Department Bhopal",
      age: 27,
      gender: "male",
      image: "/images/imagedata/sourabh_namdev_id_26.jpg",
    },

    {
      id: 25,
      name: "गगन नामदेव",
      profession: "प्रायवेट जॉब",
      age: 30,
      gender: "male",
      image: "/images/imagedata/gagan_namdev_id_25.jpg",
    },

    {
      id: 24,
      name: "Shivani Bhardwaj (Namdeo)",
      profession: "Assistant Manager at Central Bank of India",
      age: 26,
      gender: "female",
      image: "/images/imagedata/shivani_bhardwaj_namdeo_id_24.jpg",
    },

    {
      id: 23,
      name: "उमा नामदेव",
      profession: "HR Trainee, दैनिक भास्कर, भोपाल",
      age: 28, // Calculated dynamically if required
      gender: "female",
      image: "/images/imagedata/uma_namdev_id_23.jpg",
    },

    {
      id: 22,
      name: "शानू नामदेव",
      profession: null,
      age: 32,
      gender: "female",
      image: "/images/imagedata/shanu_namdev_id_22.jpg",
    },

    {
      id: 21,
      name: "Priyesh Chhaperwal",
      profession: "Government employee in Veterinary College Mhow",
      age: 32,
      gender: "male",
      image: "/images/imagedata/priyesh_chhaperwal_id_21.jpg",
    },

    {
      id: 20,
      name: "नीति नामदेव",
      age: 30,
      profession: null,
      gender: "female",
      image: "/images/imagedata/neeti_namdev_id_20.jpg",
    },

    {
      id: 19,
      name: "विकास नामदेव",
      profession: "अतिथि शिक्षक वर्ग 2, MP Online & Photocopy Shop",
      age: 26,
      gender: "male",
      image: "/images/imagedata/vikas_namdev_id_19.jpg",
    },

    {
      id: 18,
      name: "Chanchlesh Namdev",
      profession: "Business (Kirana, General Wholesale)",
      age: 30,
      gender: "male",
      image: "/images/imagedata/chanchlesh_namdev_id_18.jpg",
    },

    {
      id: 17,
      name: "हिमांशु डोंगरे (नामदेव)",
      profession:
        "C.R.S. IMPEX PVT. LTD. Dental Lab + Mobile Repairing Engineer",
      age: 29,
      gender: "male",
      image: "/images/imagedata/himanshu_dongre_id_17.jpg",
    },

    {
      id: 16,
      name: "Paramhans Namdev (Karan)",
      profession: "Software Engineer at IntelliaTech Solutions Pvt Ltd",
      age: 25,
      gender: "male",
      image: "/images/imagedata/paramhans_namdev_karan_id_16.jpg",
    },

    {
      id: 15,
      name: "Raksha Namdev",
      profession: "Private School Teacher",
      age: 26,
      gender: "female",
      image: "/images/imagedata/raksha_namdev_id_15.jpg",
    },
    {
      id: 14,
      name: "Neelesh Namdev",
      profession: "VSA (in MANREGA, JP Nateran)",
      age: 27,
      gender: "male",
      image: "/images/imagedata/neelesh_namdev_id_14.jpg",
    },
    {
      id: 13,
      name: "Garima Namdev",
      profession: "Private Job", // No specific job mentioned
      age: 28,
      gender: "female",
      image: "/images/imagedata/garima_namdev_id_13.jpg",
    },
    {
      id: 1,
      name: "Nilesh Borse",
      profession: "Central Railway (Work)",
      age: null,
      gender: "male",
      height: "5 ft 4 in",
      image: "/images/imagedata/nilesh_borse_id_1.jpg",
    },

    {
      id: 2,
      name: "Radika Namdev",
      profession: "Job/Business",
      age: null,
      gender: "female",
      height: "5 ft 1 in",
      image: "/images/imagedata/radika_namdev_id_2.jpg",
    },

    {
      id: 3,
      name: "Chiranjeev / Sushri Kumari Swati Namdev",
      profession: "Senior Graphic Designer at Speedlabs",
      age: null,
      gender: "female",
      height: "5 ft 3 in",
      image: "/images/imagedata/swati_namdev_id_3.jpg",
    },

    {
      id: 4,
      name: "Mayank Kumar Namdeo",
      profession: "Accenture, Noida",
      age: null,
      gender: "male",
      image: "/images/imagedata/mayank_kumar_namdeo_id_4.jpg",
    },

    {
      id: 5,
      name: "Satyam (Namdev)",
      profession: "Real Estate Property Dealer",
      age: 24,
      gender: "male",
      image: "/images/imagedata/satyam_namdev_id_5.jpg",
    },

    {
      id: 6,
      name: "Sonam (Namdev)",
      profession: "Irrigation Department (Private)",
      age: 28,
      gender: "female",
      image: "/images/imagedata/sonam_namdev_id_6.jpg",
    },
    {
      id: 7,
      name: "Mayank Namdeo (Lucky)",
      profession:
        "Manager at GAJA Engineering Pvt. Ltd., Lucknow (RO) (Private Job)",
      age: 29,
      gender: "male",
      image: "/images/imagedata/mayank_namdeo_lucky_id_7.jpg",
    },
    {
      id: 8,
      name: "चिरंजीव/ मोनू नामदेव",
      profession: "कृषि खाद बीज दवाई की दुकान",
      age: 26,
      gender: "male",
      image: "/images/imagedata/chiranjiv_monu_namdeo_id_8.jpg",
    },
    {
      id: 9,
      name: "Shubham Kumar Namdeo",
      profession:
        "Preparation of Competition Exam and Business of Clothes Shop",
      age: 32,
      gender: "male",
      image: "/images/imagedata/shubham_kumar_namdeo_id_9.jpg",
    },
    {
      id: 10,
      name: "तनीशा नामदेव (लवी)",
      profession: "प्राइवेट टीचर",
      age: 24,
      gender: "female",
      image: "/images/imagedata/tanishaa_namdeo_lavi_id_10.jpg",
    },
    {
      id: 11,
      name: "Shweta Namdev",
      profession: "Car workshop as a telecalling and computer work",
      age: 28,
      gender: "female",
      image: "/images/imagedata/shweta_namdeo_id_11.jpg",
    },
    {
      id: 12,
      name: "वेदांश नामदेव",
      profession: "Owner of Private Higher Secondary School",
      age: 26,
      gender: "male",
      image: "/images/imagedata/vedansh_namdev_id_12.jpg",
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
                  {card.age !== null ? `${card.age} years old` : null}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
