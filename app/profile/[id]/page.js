"use client"; // Add this directive to make it a client-side component

import { useParams } from "next/navigation"; // Client-side hook
import Image from "next/image";

// Sample data for profiles (this could be fetched from an API in a real app)
const profiles = [
  // {
  //   id: 1,
  //   name: "John Doe",
  //   age: 28,
  //   profession: "Software Developer",
  //   gender: "male",
  //   caste: "Brahmin",
  //   rashi: "Virgo",
  //   fathersName: "Mr. Smith",
  //   image: "/images/download (4).jpg",
  //   email: "johndoe@example.com",
  //   whatsapp: "https://wa.me/11234567890",
  //   bio: "A professional looking for a partner with similar interests and values.",
  // },
  {
    id: 63,
    image: "/images/imagedata/rohit_namdev_id_63.jpg",
    name: "Rohit Namdev",
    age: 28,
    profession: "International marketing, Arvind Mills Ltd (Ahmedabad)",
    gender: "Male",
    height: "5'11",
    education: "B.E. (Textile Engineering): Vaishnav College, MBA (Marketing): DAVV",
    birthDate: "07/03/1996",
    birthPlace: "Barwaha, M.P.",
    birthTime: "12:05 PM",
    caste: "Namdev",
    fathersName: "Mr. Santosh Namdev",
    mothersName: "Mrs. Rajshree Namdev",
    fathersProfession: "N/A",
    mothersProfession: "N/A",
    gotra: "Dhakalya",
    manglik: "No",
    address: "H no. 107, Bhandari Greens, Maheshwar Road, Barwaha, M.P.",
    contact: {
      father: "7415732939",
      other: "9826935680",
      whatsapp: null
    },
    bio: "A professional in international marketing at Arvind Mills Ltd, Ahmedabad, seeking a suitable partner with shared aspirations."
  },
  
  {
    id: 62,
    image: "/images/imagedata/ayur_shandilkar_namdeo_id_62.jpg",
    name: "AYUR SHANDILKAR (NAMDEO)",
    age: 27,
    profession: "OWNER BOMBAY CAR SHRINGAR SHOWROOM",
    gender: "Male",
    height: "5 feet 8 inch",
    education: "Polytechnic Civil",
    birthDate: "14/04/1998",
    birthPlace: "BALAGHAT",
    birthTime: "9 A.M.",
    caste: "Namdeo",
    fathersName: "SHRI CHANDRA SHEKHAR SHANDILKAR",
    mothersName: "Smt. ANITA SHANDILKAR",
    fathersProfession: "Rett. GOVERNMENT SERVICE, IRRIGATION DEPTT, BALAGHAT",
    mothersProfession: "HOUSE WIFE",
    gotra: "SHANDILYA",
    manglik: "N/A",
    address: "NEAR TANVI GIFT COLLECTION, WARD NO. 21, RAMGALI, BALAGHAT (M.P.)",
    contact: {
      father: "9340395144",
      other: "7999909804",
      whatsapp: null
    },
    bio: "OWNER BOMBAY CAR SHRINGAR SHOWROOM, looking for a compatible partner."
  },
  
  {
    id: 61,
    image: "/images/imagedata/sourabh_shandilkar_namdeo_id_61.jpg",
    name: "SOURABH SHANDILKAR (namdeo)",
    age: 30,
    profession: "OWNER OF BOMBAY CAR SHRINGAR",
    gender: "Male",
    height: "5 feet 7 inch",
    education: "B.E. Civil",
    birthDate: "02/07/1993",
    birthPlace: "BALAGHAT",
    birthTime: "6.45 P.M.",
    caste: "Namdeo",
    fathersName: "SHRI CHANDRA SHEKHAR SHANDILKAR",
    mothersName: "Smt. ANITA SHANDILKAR",
    fathersProfession: "GOVERNMENT SERVICE, IRRIGATION DEPTT, BALAGHAT",
    mothersProfession: "HOUSE WIFE",
    gotra: "SHANDILYA",
    manglik: "N/A",
    address: "NEAR TANVI GIFT COLLECTION, WARD NO. 21, RAMGALI, BALAGHAT (M.P.)",
    contact: {
      father: "9340395144",
      other: "7999909804",
      whatsapp: null
    },
    bio: "OWNER OF BOMBAY CAR SHRINGAR, looking for a compatible partner."
  },
  
  {
    id: 60,
    name: "प्रिंस नामदेव",
    profession: "सीआईएसएफ पद प्रधान आरक्षक",
    age: 28,
    gender: "male",
    image: "/images/imagedata/prince_namdev_id_60.jpg",
    fatherName: "शिवकुमार नामदेव",
    motherName: "रेखा नामदेव",
    birthDate: "06/12/1996",
    birthTime: "9/15 रात्रि",
    birthPlace: "टीकमगढ",
    education: "बीटेक (मेकेनिकल)",
    height: "6 फिट",
    caste: "दर्जी",
    subCaste: "नामदेव",
    gotra: "कुटुम्बया",
    address: "जेपी कालेज के सामने जिला गुना",
    contact: {
      father: "7049137949",
      other: "9893412495"
    }
  },
  
  {
    id: 59,
    name: "आकाश नामदेव (हिमांशु)",
    profession: "डायॅमन्ड एण्ड ज्वेलर्स में कार्यरत",
    age: 25,
    gender: "male",
    image: "/images/imagedata/akash_namdev_himanshu_id_59.jpg",
    fatherName: "श्री लक्ष्मीनारायण नामदेव",
    motherName: "श्रीमति मनीषा नामदेव",
    birthDate: "12/06/1998",
    birthTime: "सुबह 11:50",
    birthPlace: "सागर",
    education: "BA /PGDCA",
    height: "5 फुट 5 इन्च",
    caste: "टेलरिंग",
    gotra: "कौशल",
    address: "बिहारी जी मदिंर के पीछे मोहन नगर वार्ड जिला सागर (म. प्र.)",
    contact: {
      father: "9329164545",
      other: "9039721309"
    }
  },
  
  {
    id: 58,
    image: "/images/imagedata/aman_namdev_id_58.jpg",
    name: "अमन नामदेव",
    age: 25,
    profession: "Self-employed",
    salary: "N/A",
    gender: "Male",
    income: "N/A",
    height: "N/A",
    education: "MBA",
    birthDate: "4.12.99",
    birthPlace: "गौरझामर",
    birthTime: "1:25 AM",
    fathersName: "वीरेंद्र नामदेव",
    mothersName: "मीना नामदेव",
    fathersProfession: "सिलाई एवं कृषि",
    mothersProfession: "आंगनवाड़ी कार्यकर्ता",
    gotra: "कौशल",
    manglik: "नहीं",
    preferences: "N/A",
    address: "ग्राम गौरझामर तहसील देवरी जिला सागर",
    contact: {
      father: "9993604034",
      whatsapp: "N/A",
      other: "N/A"
    },
    bio: "An MBA graduate, currently self-employed, seeking a compatible partner with similar values."
  },
  
  {
    id: 57,
    image: "/images/imagedata/raksha_namdev_id_57.jpg",
    name: "रक्षा (नामदेव)",
    age: 28,
    profession: "Guest Faculty at Govt. High School",
    salary: "N/A",
    gender: "Female",
    income: "N/A",
    height: "5\"6\"",
    education: "B.Sc(C.A), M.Sc(C.S), B.Ed.",
    birthDate: "05/08/1996",
    birthPlace: "सलामतपुर",
    birthTime: "2:5 AM",
    fathersName: "श्री हरिराम जी (नामदेव)",
    mothersName: "श्रीमती विमला (नामदेव)",
    fathersProfession: "Tailoring",
    mothersProfession: "Tailoring",
    gotra: "बामाेनिया",
    manglik: "नहीं",
    preferences: "Contact only MP state & Darji Namdev",
    address: "सिचाई कॉलोनी के सामने मुख्य मार्ग सलामतपुर, District Raisen (M.P)",
    contact: {
      father: "8770089184",
      whatsapp: "https://wa.me/9584099588",
      other: "N/A"
    },
    bio: "A passionate educator working as a Guest Faculty at Govt. High School, with a strong academic background, seeking a compatible partner from MP state & Darji Namdev community."
  },
  
  {
    id: 56,
    image: "/images/imagedata/lavkush_namdev_id_56.jpg",
    name: "Lavkush Namdev",
    age: 31,
    profession: "Branch Manager at Maruti Suzuki Pvt Ltd",
    salary: "N/A",
    gender: "Male",
    income: "N/A",
    height: "5 फुट 7इंच",
    education: "B.Tech(EC), M.Sc(Math), B.Ed, PGDCA, MA(Hindi)",
    birthDate: "07/07/1993",
    birthPlace: "सतना",
    birthTime: "12:20 AM",
    fathersName: "Mr. Rajendra Kumar Namdev",
    mothersName: "Mrs. Sita Namdev",
    fathersProfession: "N/A",
    mothersProfession: "N/A",
    gotra: "N/A",
    manglik: "No",
    preferences: "ग्रेजुएट एंड Higher Education",
    address: "वार्ड क्र. 37 डाली बाबा जल पंप नं 2 वैष्णो देवी रोड सतना (M.P.)",
    contact: {
      father: "7389615586",
      mother: "8349271359",
      whatsapp: "https://wa.me/+91-9179258085",
      other: "8085575228"
    },
    bio: "A highly educated and career-oriented professional working as a Branch Manager at Maruti Suzuki Pvt Ltd, seeking a compatible partner with similar aspirations."
  },
  
  {
    id: 55,
    image: "/images/imagedata/piyush_shandilkar_id_55.jpg",
    name: "पीयूष शांडिलकर(नामदेव)",
    age: 36,
    profession: "माइन मेट (मैंगनीज माइंस)",
    salary: "₹20000",
    gender: "Male",
    income: "₹20000",
    height: "5'6\"",
    education: "एम काॅम",
    birthDate: "20-12-1988",
    birthPlace: "मंडला",
    fathersName: "श्री रमेश शांडिलकर (नामदेव)",
    mothersName: "सुधा शांडिलकर (नामदेव)",
    fathersProfession: "रिटायर  हैड कर्लक",
    gotra: "N/A",
    manglik: "N/A",
    preferences: "*",
    address: "बालाघाट (म प्र)",
    contact: {
      father: "9826432413",
      other: "9907106551",
      whatsapp: null,
    },
    bio: "A dedicated professional working in the manganese mining industry, seeking a compatible partner.",
  },

  {
    id: 54,
    image: "/images/imagedata/sonam_namdev_id_54.jpg",
    name: "कु.सोनम (नामदेव)",
    age: 36,
    profession:
      "नर्सिंग आफीसर/क्वालिटी आफीसर जिला चिकित्सालय मण्डला (मध्यप्रदेश) सरकारी नौकरी",
    gender: "Female",
    income: "6 लाख 50 हजार रुपए",
    height: "5 फिट 8 इंच",
    education:
      "बी.एस.सी.नर्सिंग ,पी.जी. डिप्लोमा इन हेल्थकेयर क्वालिटी  मेनेजमेंट",
    birthDate: "05/08/1987",
    birthPlace: "जबलपुर (मध्यप्रदेश)",
    birthTime: "11 AM",
    caste: "नामदेव",
    fathersName: "सुभाष (नामदेव)",
    mothersName: "श्रीमती सरोज (नामदेव)",
    fathersProfession: "सेवानिवृत",
    mothersProfession: "सरकारी नौकरी जिला चिकित्सालय मण्डला में",
    gotra: "भारद्वाज",
    manglik: "नहीं",
    preferences: "समकक्ष",
    address: "आशीर्वाद होटल के पास हीरा कालोनी बिंझिया मण्डला (मध्यप्रदेश)",
    contact: {
      father: "7470954254",
      other: "9425851912",
      whatsapp: null,
    },
    bio: "A dedicated professional working in the Irrigation Department (Private), seeking a compatible partner with shared values and aspirations.",
  },

  {
    id: 53,
    image: "/images/imagedata/rajrajeshwar_namdev_id_53.jpg", // Replace with the correct image path
    name: "राजराजेश्वर नामदेव",
    age: 29, // Calculated based on DOB (2024 - 1995)
    profession: "प्राइवेट नौकरी",
    gender: "Male",
    income: "N/A", // Not specified
    height: "5'8\"",
    education: "बी.एस सी., पीजीडीसीए",
    birthDate: "16/05/1995",
    birthPlace: "विदिशा",
    birthTime: "दोप. 12:45 बजे",
    caste: "नामदेव",
    fathersName: "श्री दीपक कुमार नामदेव जी",
    mothersName: "श्रीमती कुमुद नामदेव",
    fathersProfession: "प्राइवेट नौकरी",
    mothersProfession: "शिक्षिका",
    gotra: "स्वयं: जनोसिया, निषेध: घुराठिया, खोइया",
    manglik: "आंशिक मांगलिक",
    preferences: "N/A", // Not specified
    address: "किले अंदर वैस मार्ग, विदिशा (मध्यप्रदेश)",
    contact: {
      father: null,
      other: "9826473442, 9691713563",
      whatsapp: "https://wa.me/+91-9826473442",
    },
    bio: "प्राइवेट नौकरी में कार्यरत, पढ़े-लिखे और जिम्मेदार व्यक्ति। आंशिक मांगलिक होने के कारण परिवार की सहमति के साथ संगत रिश्ता तलाश कर रहे हैं।",
  },

  {
    id: 52,
    image: "/images/imagedata/vikas_namdev_id_52.jpg", // Replace with the correct image path
    name: "विकास नामदेव",
    age: 25, // Calculated based on DOB (2024 - 1999)
    profession: "ऑनलाईन फ्लिपकार्ट सर्विस",
    gender: "Male",
    income: "12 से 15 हजार मासिक",
    height: "N/A", // Not specified
    education: "10वीं",
    birthDate: "05-02-1999",
    birthPlace: "छतरपुर, मध्य प्रदेश",
    birthTime: "प्रातः 5:15 मिनट",
    caste: "नामदेव",
    fathersName: "श्री धर्मेंद्र नामदेव",
    mothersName: "श्रीमती उर्मिला नामदेव",
    fathersProfession:
      "साड़ी फॉल पिको मैचिंग सेंटर, गोवर्धन टॉकीज के पीछे छतरपुर",
    mothersProfession: "ग्रहकार",
    gotra: "पनगारिया",
    manglik: "N/A", // Not specified
    preferences: "N/A", // Not specified
    address: "गायत्री मंदिर के पीछे छतरपुर, मध्य प्रदेश",
    contact: {
      father: "9285465532",
      other: null,
      whatsapp: "https://wa.me/+91-9425882525",
    },
    bio: "ऑनलाईन फ्लिपकार्ट सर्विस में कार्यरत, परिवार की जिम्मेदारियों को प्राथमिकता देने वाले एक मेहनती व्यक्ति।",
  },

  {
    id: 51,
    image: "/images/imagedata/bhupendra_namdev_id_51.jpg", // Replace with the correct image path
    name: "भुपेंद्र नामदेव (जितेन्द्र)",
    age: 26, // Calculated based on DOB (2024 - 1998)
    profession: "मोटर इलेक्ट्रॉनिक",
    gender: "Male",
    income: "15000 मासिक",
    height: "5.5",
    education: "9th",
    birthDate: "25/10/1998",
    birthPlace: "ब्यावरा",
    birthTime: "सुबह 5 बजे",
    caste: "नामदेव",
    fathersName: "सुरेश कुमार नामदेव",
    mothersName: "आशा नामदेव",
    fathersProfession: "फल फ्रूट",
    mothersProfession: "N/A",
    gotra: "अशर्मा",
    manglik: "N/A", // Not specified
    preferences: "अनुरुप",
    address: "ब्यावरा जिला राजगढ़",
    contact: {
      father: "9630882439",
      other: "7566302549 (व्हाट्सएप)",
      whatsapp: "https://wa.me/+91-7566302549",
    },
    bio: "मोटर इलेक्ट्रॉनिक क्षेत्र में कार्यरत एक मेहनती व्यक्ति, जो अपने व्यवसाय में स्थिरता और उन्नति की तलाश में है।",
  },

  {
    id: 50,
    image: "/images/imagedata/arun_namdev_id_50.jpg", // Replace with the correct image path
    name: "अरुण नामदेव",
    age: 27, // Calculated based on DOB (2024 - 1996)
    profession: "सिलाई मशीन टेरिग मटेरियल थोक फुटकर",
    gender: "Male",
    income: "20000 मासिक",
    height: "5'10",
    education: "B.Sc (CS)",
    birthDate: "10/10/1996",
    birthPlace: "सिलवानी",
    birthTime: "N/A", // Birth time not provided
    caste: "नामदेव",
    fathersName: "Shri Prem Narayan Namdev",
    mothersName: "Shrimati Harivai Namdev",
    fathersProfession: "Private Job",
    mothersProfession: "N/A",
    gotra: "देवदरिया",
    manglik: "No",
    preferences: "N/A", // No preferences mentioned
    address: "सिलवानी - जिला रायसेन (MP)",
    contact: {
      father: "9630389656",
      other: "N/A", // No additional contact provided
      whatsapp: "N/A", // No WhatsApp number mentioned
    },
    bio: "एक मेहनती और व्यवसायिक व्यक्ति जो सिलाई मशीन और टेरिग मटेरियल के व्यवसाय में है।",
  },

  {
    id: 49,
    image: "/images/imagedata/shivani_namdev_id_49.jpg", // Replace with the correct image path
    name: "Shivani Namdev",
    age: 23, // Calculated based on DOB (2024 - 2000)
    profession: "N/A", // Self-occupation not specified
    gender: "Female",
    income: "N/A", // No income mentioned
    height: "4' ft",
    education: "BA",
    birthDate: "27/07/2000",
    birthPlace: "Ganj Basoda",
    birthTime: "N/A", // Birth time not provided
    caste: "Namdev/Darji",
    fathersName: "Mr. Kailash Namdev",
    mothersName: "Mrs. Anita Namdev",
    fathersProfession: "Shop",
    mothersProfession: "Howswife",
    gotra: "Self: Sher ke badgujar, Maternal Uncle: Ghutanna",
    manglik: "No",
    preferences: "N/A", // No preferences mentioned
    address: "Bareth road Ganj Basoda Vidisha (M.P.)",
    contact: {
      father: "9617189727",
      other: "8225934354", // WhatsApp number
      whatsapp: "https://wa.me/+91-8225934354",
    },
    bio: "एक साधारण व्यक्तित्व की महिला जो अपने परिवार के साथ समय बिताना पसंद करती है।",
  },

  {
    id: 48,
    image: "/images/imagedata/varun_namdev_id_48.jpg", // Replace with the correct image path
    name: "चिरंजीव / वरुण नामदेव",
    age: 30, // Calculated dynamically based on birth year (2024 - 1994)
    profession:
      "लीगल मैनेजर (कैप्री ग्लोबल हाउसिंग फाइनेंस लिमिटेड) एवं अधिवक्ता डिस्ट्रिक्ट कोर्ट जिला छिंदवाड़ा।",
    gender: "male",
    income: "N/A", // No income data provided
    height: "5.7",
    education: "बी कॉम, एल एल बी",
    birthDate: "15.06.1994",
    birthPlace: "रोहना कला छिंदवाड़ा",
    birthTime: "07.55 PM",
    caste: "नामदेव",
    fathersName: "श्री सतीश नामदेव",
    mothersName: "श्रीमती सुरेखा नामदेव",
    fathersProfession: "कृषि",
    mothersProfession: "गृहणी",
    gotra: "सिंगारे",
    manglik: "नही",
    preferences: "N/A",
    address: "ग्राम रोहना कला जिला छिंदवाड़ा मध्य प्रदेश",
    contact: {
      father: "9424949955",
      other: "9770091099",
      whatsapp: "https://wa.me/+91-9424949955",
    },
    bio: "A dedicated legal professional serving as Legal Manager at Capri Global Housing Finance Limited and practicing advocate at District Court, Chhindwara, seeking a compatible life partner.",
  },

  {
    id: 47,
    image: "/images/imagedata/raksha_namdev_id_47.jpg", // Replace with the correct image path
    name: "रक्षा (नामदेव)",
    age: 27, // Calculated dynamically based on birth year (2024 - 1996)
    profession: "working at govt.high.school as a guest faculty",
    gender: "female",
    income: "N/A", // No income data provided
    height: '5"6"',
    education: "B.sc(c.a),m.sc(c.s),B.ed.",
    birthDate: "05/08/1996",
    birthPlace: "सलामतपुर",
    birthTime: "2:5 Am",
    caste: "नामदेव",
    fathersName: "श्री हरिराम जी (नामदेव)",
    mothersName: "श्रीमती विमला (नामदेव)",
    fathersProfession: "Tailoring",
    mothersProfession: "N/A",
    gotra: "बामाेनिया",
    manglik: "नहीं",
    preferences: "contact only Mp state & Darji Namdev",
    address:
      "सिचाई कॉलोनी के सामने मुख्य मार्ग सलामतपुर, District Raisen (m.p)",
    contact: {
      father: "8770089184",
      other: "8827842325, 9977032810",
      whatsapp: "https://wa.me/+91-958409958",
    },
    bio: "A dedicated professional working as a guest faculty at Govt. High School, seeking a partner from MP state & Darji Namdev community.",
  },

  {
    id: 46,
    image: "/images/imagedata/paras_namdev_id_46.jpg", // Replace with the correct image path
    name: "Paras Namdev",
    age: 24, // Calculate dynamically if required
    profession: "Artist and Musician Including Electronic Repairing",
    gender: "male",
    income: "15000+",
    height: "5'3\"",
    education: "Graduate B.Com from Mumbai University",
    birthDate: "05/01/2001",
    birthPlace: "Jabalpur M.p",
    birthTime: "9:30 pm",
    caste: "N/A",
    fathersName: "Mukesh Namdev",
    mothersName: "Vinita Namdev",
    fathersProfession: "Contractor",
    mothersProfession: "N/A",
    gotra: "कौशल",
    manglik: "N/A",
    preferences: "N/A",
    address: "325 Dwarka nagar chandmari road jabalpur madhya pradesh 482001",

    contact: {
      father: "959467201",
      other: "N/A",
      whatsapp: "N/A",
    },
    bio: "Artist and Musician Including Electronic Repairing",
  },

  {
    id: 45,
    image: "/images/imagedata/manish_bhamre_id_45.jpg", // Replace with the correct image path
    name: "मनिष भामरे",
    age: 25, // Calculate dynamically if required
    profession: "District Manager at AXIS BANK",
    gender: "male",
    income: "06-08 lakh",
    height: "5'6\"",
    education: "B.A L.L.B, & MBA",
    birthDate: "02/03/1999",
    birthPlace: "सूरत (गुजरात)",
    birthTime: "6:00 AM",
    caste: "N/A",
    fathersName: "अनिल भामरे",
    mothersName: "ज्योति भामरे",
    fathersProfession: "शॉप",
    mothersProfession: "N/A",
    gotra: "भारतवाज",
    manglik: "नही",
    preferences: "N/A",
    address: "बुरहानपुर मध्य प्रदेश",

    contact: {
      father: "6261186175",
      other: "9165564428",
      whatsapp: "https://wa.me/+91-9165564428",
    },
    bio: "District Manager at AXIS BANK",
  },

  {
    id: 44,
    image: "/images/imagedata/komal_kumari_namdev_id_44.jpg", // Replace with the correct image path
    name: "कोमल कुमारी (नामदेव)",
    age: 27, // Calculate dynamically if required
    profession: "private school teacher",
    gender: "female",
    income: "N/A", // Update with actual income if available
    height: "5'0\"",
    education: "B.A M.A. final, Bed final, RS-CIT Computer cours",
    birthDate: "08-02-1998",
    birthPlace: "भरतपुर",
    birthTime: "N/A",
    caste: "नामदेव",
    fathersName: "श्री महेश चंद जलथर (नामदेव)",
    mothersName: "श्रीमति अंजू कुमारी (नामदेव)",
    fathersProfession: "business man",
    mothersProfession: "N/A",
    gotra: "स्वयं: जलथर, माँ: निर्वानिया, दादी: कामेवर, नानी: सावरिया",
    manglik: "No",
    preferences: "good job ya good business",
    address: "भरतपुर (राज.)",

    contact: {
      father: "09414222271",
      other: "09414222271",
      whatsapp: "https://wa.me/+91-9414222271",
    },
    bio: "private school teacher",
  },

  {
    id: 43,
    image: "/images/imagedata/palak_chittora_id_43.jpg", // Replace with the correct image path
    name: "Palak Chittora",
    age: 28, // Calculate dynamically if required
    profession: "Dentist, Fellowship in Cosmetology - Practicing in Hyderabad",
    gender: "Female",
    income: "N/A", // Update with actual income if available
    height: "5'3\"",
    education: "Bachelor in Dental Surgery, Fellowship in Cosmetology",
    birthDate: "25/08/1996",
    birthPlace: "Kota (Raj)",
    birthTime: "08:45 AM",
    caste: "Chittora",
    fathersName: "Rajendra Chittora",
    mothersName: "Bharti Chittora",
    fathersProfession: "Engineer (Working in Saudi Arabia Refinery)",
    mothersProfession: "N/A",
    gotra: "Father: Chittora, Mother: Sopra",
    manglik: "N/A",
    preferences: "N/A", // Add preferences if applicable
    address: "105, Royal Park, Raipura, Kota",

    contact: {
      father: "+91 9998957073",
      other: "+91 9662052073, +966 542429118",
      whatsapp: null,
    },
    bio: "Practicing Dentist with a Fellowship in Cosmetology in Hyderabad, with a passion for singing and music.",
  },

  {
    id: 42,
    image: "/images/imagedata/milan_namdev_id_42.jpg", // Replace with the correct image path
    name: "Milan Namdev",
    age: 29, // Calculate dynamically if required
    profession:
      "Nursing Officer - Arvindo Medical College Hospital, Indore (MP)",
    gender: "Male",
    income: "N/A", // Update with actual income if available
    height: "5'4\"",
    education: "B.Sc Nursing, Preparation for AIIMS",
    birthDate: "02/07/1996",
    birthPlace: "Manohar Thana",
    birthTime: "9:36 AM",
    caste: "Namdev",
    fathersName: "Dharmendra Namdev",
    mothersName: "Mamta Namdev",
    fathersProfession: "Business (Cloth)",
    mothersProfession: "N/A",
    gotra: "Jhaliya",
    manglik: "No",
    preferences: "N/A", // Add preferences if applicable
    address: "Manohar Thana, Jhalawar",

    contact: {
      father: "6377902139",
      other: null,
      whatsapp: null,
    },
    bio: "Nursing Officer at Arvindo Medical College Hospital, Indore, preparing for AIIMS, looking for a suitable partner.",
  },

  {
    id: 41,
    image: "/images/imagedata/mansi_namdeo_id_41.jpg", // Replace with the correct image path
    name: "Mansi Namdeo",
    age: 25, // Calculate dynamically if required
    profession: "Nursing Officer - Government District Hospital Jabalpur (M.P)",
    gender: "Female",
    income: "N/A", // Update with actual income if available
    height: "5'4\"",
    education:
      "B.Sc Nursing (NSCB Medical College Jabalpur), PGDCA, Fellowship in ICU (CMC Vellore)",
    birthDate: "22/10/1999",
    birthPlace: "Balaghat",
    birthTime: "1:00 AM",
    caste: "Namdeo",
    fathersName: "Mr. Umashankar Namdeo",
    mothersName: "Mrs. Nandini Namdeo",
    fathersProfession: "Business (Mansi Furniture and Electronics)",
    mothersProfession: "N/A",
    gotra: "Shandilya",
    manglik: "No",
    preferences: "Please contact only Madhya Pradesh residents",
    address: "NH30 Bhai Bhen Nala, Buha Bichiya, Dist Mandla (M.P)",

    contact: {
      father: "798700520",
      other: "810365226",
      whatsapp: null,
    },
    bio: "Nursing Officer at Government District Hospital Jabalpur, looking for a compatible partner from Madhya Pradesh.",
  },

  {
    id: 40,
    image: "/images/imagedata/pavan_rajput_chhipa_id_40.jpg", // Replace with the correct image path
    name: "Pavan Rajput (Chhipa)",
    age: 27, // Calculate dynamically if required
    profession: "Deputy Manager, Bajaj Finance Limited, Gwalior",
    gender: "Male",
    income: "N/A", // Update with actual income if available
    height: "5 feet 7 inches",
    education: "B.Com, MBA (Finance)",
    birthDate: "15/09/1996",
    birthPlace: "Dabra (Gwalior), Madhya Pradesh",
    birthTime: "1:40 AM",
    caste: "Rajput",
    fathersName: "Omprakash Rajput",
    mothersName: "Geeta Devi",
    fathersProfession: "Government Employee (MPEB)",
    mothersProfession: "Homemaker",
    gotra: "Self: Diggiwar, Maternal Gotra: Bhavda",
    manglik: "N/A",
    preferences: "N/A", // Add preferences if applicable
    address: "Naya Santra, New Colony, Murar, Gwalior",

    contact: {
      father: "8827842325",
      other: "9977032810",
      whatsapp: null,
    },
    bio: "Deputy Manager at Bajaj Finance Limited, seeking a partner with similar values and aspirations.",
  },

  {
    id: 39,
    image: "/images/imagedata/कपिल_कुमार_नामदेव_वर्मा_id_39.jpg",
    name: "कपिल कुमार नामदेव वर्मा",
    age: 28,
    profession: "Software Engineer, Krindle Software (American Company)",
    gender: "Male",
    income: "N/A",
    height: "5'6\"",
    education: "BTech (VIT Chennai)",
    birthDate: "30-05-1996",
    birthPlace: "जोधपुर",
    birthTime: "10:45 PM",
    caste: "Namdev",
    fathersName: "श्री अनिल कुमार नामदेव वर्मा",
    mothersName: "श्रीमति रेखा नामदेव वर्मा",
    fathersProfession: "Principal (Rajasthan Govt)",
    mothersProfession: "Senior Teacher (Govt)",
    gotra:
      "Self: दांगड़ा, Mother: किजड़ा, Grandmother: कश्यप, Maternal Grandmother: लखमरा",
    manglik: "No",
    preferences: "N/A",
    address: "मकान नम्बर 8ब116 KBHB जोधपुर, राजस्थान",
    contact: {
      father: "9414850101",
      other: null,
      whatsapp: null,
    },
    bio: "An enthusiastic software engineer working with an American company, seeking a life partner with mutual respect and shared dreams.",
  },

  {
    id: 38,
    image: "/images/imagedata/शिवानी_नामदेव_id_38.jpg",
    name: "शिवानी नामदेव",
    age: 25,
    profession: "Sr. Accountant",
    gender: "Female",
    income: "N/A",
    height: "5.4 inches",
    education: "BSc (Maths), MBA (Accounting & Finance)",
    birthDate: "14-02-1999",
    birthPlace: "सागर, मध्य प्रदेश",
    birthTime: "7:30 PM",
    caste: "वेध",
    fathersName: "श्री अनिल कुमार नामदेव",
    mothersName: "श्रीमति राज मानी नामदेव",
    fathersProfession: "Govt Servant",
    mothersProfession: "Private Job",
    gotra: "N/A",
    manglik: "No",
    preferences: "Depends",
    address: "जबलपुर नाका, Damoh, मध्य प्रदेश",
    contact: {
      father: "93400342",
      other: "934009625",
      whatsapp: null,
    },
    bio: "An accomplished Sr. Accountant, looking for a life partner who values career growth and cultural traditions.",
  },

  {
    id: 37,
    image: "/images/imagedata/jitendra_namdev_id_37.jpg",
    name: "Jitendra Namdev",
    age: 29,
    profession: "Nominated Project Director, National Level Company",
    gender: "Male",
    income: "90k-1 lakh/month",
    height: "5 feet 10 inches",
    education: "BBA",
    birthDate: "11-03-1995",
    birthPlace: "N/A",
    birthTime: "N/A",
    caste: "Namdev",
    fathersName: "Late Mr. Sanman Singh Namdev",
    mothersName: "Late Mrs. Lalita Namdev",
    fathersProfession: "N/A",
    mothersProfession: "N/A",
    gotra: "Self: जामुनिया, Mother: बड़ोदिया",
    manglik: "No",
    preferences: "Simple family with strong cultural roots",
    address: "District Raisen, 42 km from Bhopal",
    contact: {
      father: null,
      other: "9304408838",
      whatsapp: "https://wa.me/+91-8962249440",
    },
    bio: "A hardworking individual with a strong career in a national-level company, searching for a supportive life partner.",
  },

  {
    id: 36,
    image: "/images/imagedata/shivam_namdev_id_36.jpg",
    name: "Shivam Namdev",
    age: 28,
    profession: "Sr. Engineer",
    gender: "Male",
    income: "50k /month",
    height: "5.8 feet",
    education: "BE (ME), MBA (HR)",
    birthDate: "09/10/1996",
    birthPlace: "Rajnagar, M.P.",
    birthTime: "9:30 Day",
    caste: "Namdev",
    fathersName: "Mr. Ganesh Namdev",
    mothersName: "S/m. Savitri Namdev",
    fathersProfession: "Cloth business",
    mothersProfession: "N/A",
    gotra: "Bhardwaj",
    manglik: "No",
    preferences: "N/A",
    address: "Rajnagar, District Chhatarpur, M.P.",
    contact: {
      father: "9630143018",
      other: null,
      whatsapp: null,
    },
    bio: "A dedicated Sr. Engineer seeking a suitable match with shared aspirations and family values.",
  },

  {
    id: 35,
    image: "/images/imagedata/ayushi_rohilla_id_35.jpg",
    name: "Ayushi Rohilla",
    age: 29,
    profession: "Teacher, Scottish International School, Shamli (UP)",
    gender: "Female",
    income: "N/A",
    height: "5’1’’",
    education: "BCA, B.Ed",
    birthDate: "20-12-1995",
    birthPlace: "Shamli (UP)",
    birthTime: "1:50 PM",
    caste: "Rohilla",
    fathersName: "Shri Rakesh Kumar",
    mothersName: "Shrimati Mamta",
    fathersProfession: "Businessman",
    mothersProfession: "Homemaker",
    gotra: "Self: उन्न, Mother: जेवड़ा",
    manglik: "No",
    preferences: "N/A",
    address: "Shamli (UP)-247776",
    contact: {
      father: "991720709",
      other: null,
      whatsapp: null,
    },
    bio: "A dedicated teacher working at Scottish International School, seeking a life partner who values education and family.",
  },

  {
    id: 34,
    image: "/images/imagedata/ankit_namdeo_id_34.jpg",
    name: "Ankit Namdeo",
    age: 32,
    profession: "Software Engineer, TCS",
    gender: "Male",
    income: "80000",
    height: "5’9’’ ft",
    education: "MTech, BE (Computer Science)",
    birthDate: "07/April/1992",
    birthPlace: "Shahpura, Dindori",
    birthTime: "6:55 PM",
    caste: "Namdev",
    fathersName: "Om Prakash Namdeo",
    mothersName: "N/A",
    fathersProfession: "Retired Govt Officer",
    mothersProfession: "N/A",
    gotra: "N/A",
    manglik: "No",
    preferences: "N/A",
    address: "Shahpura, District-Dindori",
    contact: {
      father: "9589972786",
      other: null,
      whatsapp: null,
    },
    bio: "An accomplished Software Engineer at TCS, looking for a compatible partner with shared aspirations and values.",
  },

  {
    id: 33,
    image: "/images/imagedata/ashish_verma_id_33.jpg",
    name: "Ashish Verma",
    age: 33,
    profession:
      "Architect & Civil Engineer, SAI CONSULTANTS Bhopal (Building Planning & Designing)",
    gender: "Male",
    income: "30K+",
    height: '5.4"',
    education: "B.E. (Civil Engg.)",
    birthDate: "25/06/1991",
    birthPlace: "Dabra",
    birthTime: "04:30 p.m.",
    caste: "Darji 'Namdev",
    fathersName: "H. L. Verma",
    mothersName: "Ramwati Verma",
    fathersProfession: "Retired Govt. Job",
    mothersProfession: "House wife",
    gotra: "Self: Mohniya, Dadi: Bijoliya, Nani: Setharia, Mama: Paliya",
    manglik: "No",
    preferences: "Sanskari",
    address:
      "(1) Ward No.25 Dabra, District Gwalior, M.P. (2) Flat-F2 Shreeram Vithika, Sarvdharam Colony, Sector-A, Kolar Road, Bhopal, M.P.",
    contact: {
      father: "8770420350",
      other: "9425744219",
      whatsapp: "https://wa.me/+91-8819985677",
    },
    bio: "A highly educated and professional individual working as an Architect & Civil Engineer, seeking a sanskari partner with shared values and aspirations.",
  },

  {
    id: 32,
    image: "/images/imagedata/aanand_sarvariya_id_32.jpg",
    name: "आनंद सरबरिया",
    age: 37,
    profession: "पारले नमकीन",
    gender: "Male",
    income: "15000",
    height: '5 फुट 6" इंच',
    education: "बी . काम.",
    birthDate: "N/A",
    birthPlace: "N/A",
    birthTime: "N/A",
    caste: "N/A",
    fathersName: "संतोष सरबरिया",
    mothersName: "N/A",
    fathersProfession: "N/A",
    mothersProfession: "N/A",
    gotra: "N/A",
    manglik: "N/A",
    preferences: "N/A",
    address: "संतोष सरबरिया ई, डबल्यू,एस,345 न्यास कालोनी इटारसी",
    contact: {
      father: "N/A",
      other: "88476-05802",
      whatsapp: null,
    },
    bio: "N/A",
  },

  {
    id: 31,
    image: "/images/imagedata/vikas_namdev_id_31.jpg",
    name: "विकास नामदेव",
    age: 28,
    profession: "private job- Lab technician",
    education: "Bmlt",
    birthDate: "21/9/1996",
    birthPlace: "हैदरगढ़",
    birthTime: "5:10Am",
    height: "5'7\"",
    caste: "नामदेव",
    fathersName: "श्री संतोष नामदेव",
    mothersName: "श्रीमति ममता नामदेव",
    fathersProfession: "किराना दुकान",
    mothersProfession: "गृहणी",
    gotra: "बडगूजर",
    mamaGotra: "भारद्वाज",
    address: "हैदरगढ़ जिला विदिशा(एम.पी.)",
    contact: {
      father: "93029 24430",
      other: "9753463578",
      whatsapp: null,
    },
    bio: "A dedicated Lab Technician with a strong educational background, currently pursuing a fulfilling career in private employment.",
  },

  {
    id: 30,
    image: "/images/imagedata/deepanshu_namdev_id_30.jpg",
    name: "दीपांशु नामदेव",
    age: 24,
    profession: "स्वयं का नोकरी/व्यव.",
    income: "15,000",
    height: "5'9\"",
    education: "बीए कंप्यूटर, एल एल बी सेकेंड 2, आई टी आई इलेक्ट्रॉनिक 2 वर्ष",
    birthDate: "11-10-2000",
    birthPlace: "गंजबासौदा/विदिशा जिला (म,प्र)",
    birthTime: "दोपहार 3:00 बजे",
    caste: "नामदेव",
    fathersName: "नरेन्द्र नामदेव",
    mothersName: "श्रीमती मिथलेश नामदेव",
    fathersProfession:
      "प्रायवेट, मोबाइल शाप एम पी आनलाइन एडवाइजर, बजाज एलायंज स्टार हेल्थ",
    mothersProfession: "गृहिणी",
    gotra: "योनियां",
    mamaGotra: "बड़गूजर",
    manglik: "आंशिक मांगलिक",
    grandfather: "रमेश चंद्र नामदेव रिटायर्ड स्वास्थ्य विभाग सुपरवाइजर",
    address: "गंजबासौदा जिला विदिशा मध्यप्रदेश",
    contact: {
      father: "9827566411",
      other: "9425070855",
      whatsapp: null,
    },
    email: "Topstarnews.mp@gmail.com",
    bio: "A dedicated professional with diverse qualifications, currently pursuing a job/business with a focus on growth and opportunities.",
  },

  {
    id: 29,
    image: "/images/imagedata/chiranjeev_yash_chauhan_id_29.jpg",
    name: "चिरंजीव/ सु.श्री... यश चौहान (नामदेव)",
    age: 36,
    profession:
      "Working As Tex Consultant And Accounts Executive In CA Firm, पुणे, महाराष्ट्र",
    gender: "Male",
    income: "50,000",
    height: "5.6 इंच",
    education:
      "CA Intermediate (From ICAI DELHI), B.com, M.com (From DAVV Indore)",
    birthDate: "09/12/1988",
    birthPlace: "धार, मध्य प्रदेश",
    birthTime: "4.20 Am",
    caste: "नामदेव",
    fathersName: "स्वर्गीय श्री राधेश्याम चौहान (नामदेव)",
    mothersName: "श्रीमती रजनी चौहान (नामदेव)",
    fathersProfession: "N/A",
    mothersProfession: "शिक्षिका (प्राइवेट स्कूल)",
    gotra: "Khichiya",
    manglik: "No",
    preferences: "शिक्षित",
    address: "गली न. 6, मुक्तानंद परिसर धामनोद, जिला धार, मध्य प्रदेश",
    contact: {
      father: "N/A",
      other: "9754776657",
      whatsapp: "https://wa.me/+91-9713264602",
    },
    bio: "A dedicated professional working as a Tex Consultant and Accounts Executive, seeking a compatible partner with shared values and aspirations.",
  },

  {
    id: 28,
    image: "/images/imagedata/abhishek_namdev_id_28.jpg",
    name: "अभिषेक नामदेव",
    age: 29,
    profession: "teleperformance, indore",
    gender: "Male",
    income: "As per company norms",
    height: "5'6\"",
    education:
      "एम एस सी कम्प्यूटर साइंस, स्टेनो शार्ट हैंड, डी सी ए, सी पी सी टी, हिन्दी टाइपिंग",
    birthDate: "18-03-1995",
    birthPlace: "सागर म.प्र.",
    birthTime: "रात्रि -11:50",
    caste: "Namdev",
    fathersName: "राम गोपाल नामदेव",
    mothersName: "आभा नामदेव",
    fathersProfession: "से.नि. कार्यालय अधीक्षक बी एस एन एल सागर म.प्र.",
    mothersProfession: "से. नि. यू डी सी शि‌क्षा वि़भाग सागर",
    gotra: "भारद्वाज",
    manglik: "नहीं",
    preferences: "N/A",
    address: "एच-5 बालक काम्प्लेक्स तिली वार्ड सागर (मप्र)",
    contact: {
      father: "N/A",
      other: "9425626022, 9407542400",
      whatsapp: "N/A",
    },
    bio: "एक समर्पित पेशेवर व्यक्ति जो teleperformance में काम करता है, समान विचारधारा और मूल्यों के साथ उपयुक्त साथी की तलाश में है।",
  },

  {
    id: 27,
    image: "/images/imagedata/jay_prakash_chimpa_id_27.jpg",
    name: "जय प्रकाश छिंपा",
    age: 32,
    profession:
      "प्राईवेट नौकरी एवं व्यवसाय (मेडीकल दुकान में एकाउंटेंट का कार्य) एवम् जिम का कार्य",
    gender: "Male",
    income: "60,000/-",
    height: "5'8\"",
    education: "B.A.",
    birthDate: "05.10.1992",
    birthPlace: "बीकानेर",
    birthTime: "3:35 am",
    caste: "Namdev",
    fathersName: "श्री गंगा राम छिंपा",
    mothersName: "श्रीमति सुशिला देवी",
    fathersProfession: "सरकारी राशन डीपो",
    mothersProfession: "N/A",
    gotra: "बुला",
    manglik: "नहीं",
    preferences: "N/A",
    address: "C/o ओम प्रकाश छिंपा, छिंपो का मौहल्ला, गंगा शहर रोड., बीकानेर",
    contact: {
      father: "N/A",
      other: "7568144297",
      whatsapp: "https://wa.me/+91-7568144297",
    },
    bio: "प्राईवेट नौकरी एवं व्यवसाय (मेडीकल दुकान में एकाउंटेंट का कार्य) एवम् जिम का कार्य करने वाले एक समर्पित व्यक्ति, जो समान विचारधारा और मूल्यों के साथ एक उपयुक्त साथी की तलाश में हैं।",
  },

  {
    id: 26,
    image: "/images/imagedata/sourabh_namdev_id_26.jpg",
    name: "Sourabh Namdev",
    age: 27,
    profession: "Police Department Bhopal",
    gender: "Male",
    income: "N/A",
    height: "5'10\"",
    education: "BA, DCA",
    birthDate: "28/11/1997",
    birthPlace: "Pipariya Dist. Narmdapuram",
    birthTime: "9:00 PM",
    caste: "Namdev",
    fathersName: "Mr. Mukesh Kumar Namdev",
    mothersName: "Mrs. Saroj Namdev",
    fathersProfession:
      "Assistant Sub-Inspector at Thana Station Road Pipariya Dist. Narmdapuram (MP)",
    mothersProfession: "Housewife",
    gotra: "Janoriya",
    manglik: "No",
    preferences: "समकक्ष",
    address:
      "Gaytri Nagar, Sandiya Road, Maharana Pratap ward Pipariya Dist. Narmdapuram (MP)",
    contact: {
      father: "N/A",
      other: "9424486955, 7587619487",
      whatsapp: "https://wa.me/+91-9424486955",
    },
    bio: "A committed professional working in the Police Department, looking for a compatible partner with similar values.",
  },

  {
    id: 25,
    image: "/images/imagedata/gagan_namdev_id_25.jpg",
    name: "गगन नामदेव",
    age: 30,
    profession: "प्रायवेट जॉब",
    gender: "Male",
    income: "35000 प्रतिमाह",
    height: "4'9\"",
    education: "बीएससी बायो पीजीडीसी",
    birthDate: "24/04/1994",
    birthPlace: "गुना",
    birthTime: "8:15 AM",
    caste: "Namdev",
    fathersName: "प्रमोद कुमार नामदेव",
    mothersName: "छाया नामदेव",
    fathersProfession: "रिटायर्ड",
    mothersProfession: "N/A",
    gotra: "नारोदिया",
    manglik: "आंशिक नहीं मांगलिक",
    preferences: "N/A",
    address: "इंदौर",
    contact: {
      father: "N/A",
      other: "9425134029",
      whatsapp: "https://wa.me/+91-9425134029",
    },
    bio: "A dedicated individual working in private job with an income of 35000 per month, seeking a compatible partner.",
  },
  {
    id: 24,
    image: "/images/imagedata/shivani_bhardwaj_namdeo_id_24.jpg", // Replace with the correct image path
    name: "Shivani Bhardwaj (Namdeo)",
    age: 26,
    profession: "Assistant Manager at Central Bank of India",
    gender: "Female",
    income: "N/A",
    height: "5 ft",
    education: [
      "Bsc Agriculture, RVSKVV Gwalior (2019)",
      "MSC (Plant Genetics), JNKVV Jabalpur (2021)",
    ],
    birthDate: "04/07/1997",
    birthPlace: "Ramtek",
    birthTime: "9:03 pm",
    caste: "Namdeo",
    fathersName: "Chandra Kumar Bhardwaj (Namdeo)",
    mothersName: "Neetu Bhardwaj (Namdeo)",
    fathersProfession: "Business Man",
    mothersProfession: "Home Maker",
    gotra: "N/A",
    manglik: "N/A",
    preferences: "Single",
    address: "Balaghat",
    contact: {
      father: "9407307302",
      mother: "7722868483",
      other: "N/A",
      whatsapp: "N/A",
    },
    bio: "A dedicated Assistant Manager at Central Bank of India, passionate about agriculture and plant genetics, seeking a compatible partner with shared values and aspirations.",
  },

  {
    id: 23,
    image: "/images/imagedata/uma_namdev_id_23.jpg", // Replace with the correct image path
    name: "उमा नामदेव",
    age: 28, // Calculated dynamically if required
    profession: "HR Trainee, दैनिक भास्कर, भोपाल",
    gender: "Female",
    income: "N/A",
    height: "5'4\"",
    education: "MBA (HR & Marketing)",
    birthDate: "04/05/1996",
    birthPlace: "बीलखो, तहसील बैरसिया, जिला भोपाल",
    birthTime: "शाम 4:30 बजे",
    caste: "Namdev",
    fathersName: "श्री नर्मदा प्रसाद नामदेव",
    mothersName: "श्रीमती कुसुम देवी नामदेव",
    fathersProfession: "जेंट्स टेलर",
    mothersProfession: "लेडीस टेलर",
    gotra: "वनपुरिया",
    manglik: "नहीं",
    preferences: "उच्च शिक्षित",
    address: "एलआईजी 12, विश्वकर्मा नगर, फेज 2, करोंद, भोपाल, मध्य प्रदेश",
    contact: {
      father: null,
      other: "9009116693 (भाई - मनोज कुमार नामदेव)",
      whatsapp: "https://wa.me/+91-9425942439",
    },
    bio: "A dedicated HR Trainee working at दैनिक भास्कर, भोपाल. Looking for a partner who values education and shared growth.",
  },

  {
    id: 22,
    image: "/images/imagedata/shanu_namdev_id_22.jpg", // Replace with the correct image path
    name: "शानू नामदेव",
    age: 32, // Calculated dynamically if required
    profession: "N/A",
    gender: "Female",
    income: "N/A",
    height: "5 फीट",
    education: "बी.कॉम., एम.कॉम., बी.एड.",
    birthDate: "20/09/1992",
    birthPlace: "भोपाल",
    birthTime: "शाम 6:50 बजे",
    caste: "Namdev",
    fathersName: "स्व. श्री राकेश नामदेव (शासकीय सेवक)",
    mothersName: "श्रीमती कमला देवी नामदेव (शासकीय सेवा में)",
    fathersProfession: "शासकीय सेवक",
    mothersProfession: "शासकीय सेवा में",
    gotra: "वनपुरिया",
    manglik: "आंशिक मांगलिक",
    preferences: "संपर्क भोपाल के आसपास या इंदौर क्षेत्र से हो",
    address: "भोपाल",
    contact: {
      other: "9893041088",
    },
    bio: "एक शिक्षित और आत्मनिर्भर महिला, दहेज के कारण तलाक (कोर्ट सम्मिलित), संगत और समान मूल्यों वाले साथी की तलाश में। समूह एडमिन से पुष्टि की जा सकती है, कृपया बायोडाटा ध्यानपूर्वक पढ़ें और फिर ही संपर्क करें। ",
  },

  {
    id: 21,
    image: "/images/imagedata/priyesh_chhaperwal_id_21.jpg",
    name: "Priyesh Chhaperwal",
    age: 32,
    profession: "Government employee in Veterinary College Mhow",
    gender: "Male",
    height: "5.7",
    education: "B.A Graduate",
    birthDate: "07/10/1991",
    birthPlace: "Akola, Maharashtra",
    birthTime: "05:15 AM",
    rashi: "Kanya (Virgo)",
    gotra: "Chhaperwal",
    fathersName: "Late Shri Rajesh Chhaperwal",
    fathersProfession: "Government employee in Mhow",
    mothersName: "Kavita Chhaperwal",
    mothersProfession: "Housewife",
    sistersName: "Dr. Simran Chhaperwal",
    sistersProfession: "Physiotherapist",
    address: "26/A Krashi Vihar Colony, Mhow",
    contact: {
      whatsapp: "https://wa.me/+91-9039446657",

      email: null,
    },
    bio: "A dedicated government employee working at the Veterinary College in Mhow, looking for a life partner who shares similar values and aspirations.",
  },

  {
    id: 20,
    image: "/images/imagedata/neeti_namdev_id_20.jpg",
    name: "नीति नामदेव",
    age: "N/A",
    profession: "N/A",
    gender: "Female",
    income: "N/A",
    height: "5.5 फीट",
    weight: "52 किग्रा",
    education: "बी.एड, बी.सी.एस (गणित), एम.एस.डब्ल्यू, योगिक साइंस",
    birthDate: "15/10/1994",
    birthPlace: "N/A",
    birthTime: "N/A",
    bloodGroup: "B+",
    caste: "नामदेव (दर्जी)",
    fathersName: "अशोक नामदेव",
    mothersName: "भूरी नामदेव",
    brother: "दीपेश नामदेव",
    sisters: "3",
    gotra: "नरवरिया",
    manglik: "N/A",
    preferences: "N/A",
    address: "कृष्णापूरा, वार्ड नंबर 24, गंजबासौदा MP",
    contact: {
      email: "neetinamdev012@gmail.com",
      other: "9685655250 (मामा)/ 9425942439 (भाई)",
    },
    bio: "अधिक जानकारी के लिए संपर्क करें।",
  },

  {
    id: 19,
    image: "/images/imagedata/vikas_namdev_id_19.jpg",
    name: "विकास नामदेव",
    age: 26,
    profession: "अतिथि शिक्षक वर्ग 2, MP Online & Photocopy Shop",
    gender: "Male",
    income: "N/A",
    height: "5'7\"",
    education: "B.Sc, M.Sc, D.Ed, ITI, DCA",
    birthDate: "19/01/1998",
    birthPlace: "शमशाबाद",
    birthTime: "08:15 AM",
    caste: "ठकरोल्या",
    fathersName: "श्री लक्ष्मीनारायण नामदेव",
    mothersName: "श्रीमती चम्पा बाई नामदेव",
    fathersProfession: "सिलाई",
    mothersProfession: "गृहिणी",
    gotra: "ठकरोल्या",
    manglik: "नहीं",
    preferences: "N/A",
    address: "वार्ड नंबर 05 भगवानपुर रोड शमशाबाद जिला विदिशा मध्यप्रदेश",
    contact: {
      father: "9993543788",
      whatsapp: "https://wa.me/+91-999354378",
    },
    bio: "An accomplished teacher and entrepreneur managing MP Online and photocopy services, seeking a compatible life partner with similar values.",
  },
  {
    id: 18,
    image: "/images/imagedata/chanchlesh_namdev_id_18.jpg",
    name: "Chanchlesh Namdev",
    age: 30,
    profession: "Business (Kirana, General Wholesale)",
    gender: "Male",
    income: "N/A",
    height: "5'6\"",
    education: "ITI (Automobile), Bachelor of Arts, D.C.A",
    birthDate: "22/07/1994",
    birthPlace: "N/A",
    birthTime: "9:15 PM",
    caste: "Baghel",
    fathersName: "Shri Dhana Ram Namdeo",
    mothersName: "Smt. Kanti Namdeo",
    fathersProfession: "Business of Kirana General (Firm: Namdev Traders)",
    mothersProfession: "Housewife",
    gotra: "Baghel",
    manglik: "N/A",
    preferences: "N/A",
    address: "Chakki Khamariya, Dist-Seoni, M.P. 480661",
    contact: {
      father: "7999461877",
      other: "8959713927",
      whatsapp: null,
    },
    bio: "A successful businessman running a wholesale kirana firm, seeking a life partner to share personal and professional aspirations.",
  },

  {
    id: 17,
    image: "/images/imagedata/himanshu_dongre_id_17.jpg",
    name: "हिमांशु डोंगरे (नामदेव)",
    age: 29,
    profession: "C.R.S. IMPEX PVT. LTD. Dental Lab + Mobile Repairing Engineer",
    gender: "Male",
    income: "6 lakh per annum",
    height: "5.7",
    education: "Post Graduation in Diploma and Management and B.Com + Tax",
    birthDate: "14/06/1994",
    birthPlace: "इंदौर",
    birthTime: "11:44 AM",
    caste: "डोंगरे",
    fathersName: "कपिल डोंगरे",
    mothersName: "स्व अनीता डोंगरे",
    fathersProfession:
      "आयुर्वेदिक मेडिसिन प्रोडक्शन एंड जड़ीबूटी रॉ मटेरियल सप्लाई",
    mothersProfession: "N/A",
    gotra: "स्वयं का: डोंगरे, मां का: मेडटवाल, नानी का: N/A, दादी का: चौहान",
    manglik: "नहीं",
    preferences: "N/A",
    address: "PALHAR NAGAR AIRPORT ROAD INDORE M.P.",
    contact: {
      father: "9425960061",
      whatsapp: "https://wa.me/+91-9039883331",

      email: "himanshu.official1429@gmail.com",
    },
    bio: "A highly skilled professional managing a dental lab and mobile repairing work, looking for a compatible partner with shared values and aspirations.",
  },

  {
    id: 16,
    image: "/images/imagedata/paramhans_namdev_karan_id_16.jpg",
    name: "Paramhans Namdev (Karan)",
    age: 25,
    profession: "Software Engineer at IntelliaTech Solutions Pvt Ltd",
    gender: "Male",
    income: "7.5 LAKH/ANUM",
    height: "N/A",
    education: "B.E. (S.V.C.E)",
    birthDate: "01/04/1999",
    birthPlace: "Indore",
    birthTime: "07:50 AM",
    caste: "Namdev",
    fathersName: "Santosh Namdev",
    mothersName: "Lt. Smt. Reeta Namdev",
    fathersProfession: "N/A",
    mothersProfession: "N/A",
    gotra: "Self: Pipariya, Maternal Uncle: Badoniya",
    manglik: "N/A",
    preferences: "N/A",
    address: "143 Kanak Corridor, Karol Bagh Road, Aurobindo Hospital",
    contact: {
      father: "8959569170",
      other: null,
      whatsapp: null,
    },
    bio: "A skilled Software Engineer working at IntelliaTech Solutions Pvt Ltd, earning 7.5 LPA, looking for a partner who values education, family, and growth.",
  },
  {
    id: 15,
    name: "रक्षा (नामदेव)",
    profession: "निजी स्कूल शिक्षक",
    age: 26,
    gender: "Female",
    image: "/images/imagedata/raksha_namdev_id_15.jpg",
    income: "N/A",
    height: "5'4\"",
    education: "बी. कॉम, एम. कॉम",
    birthDate: "03/08/1997",
    birthPlace: "गोटेगांव (जिला - नरसिंहपुर)",
    birthTime: "03:35 AM",
    caste: "नामदेव",
    fathersName: "कोमल चंद्र (नामदेव)",
    mothersName: "श्रीमती सुषमा (नामदेव)",
    fathersProfession: "प्राइवेट जॉब",
    mothersProfession: "गृहणी",
    gotra: "स्वयं का: भारद्वाज, मां का: कौशल",
    manglik: "आंशिक",
    preferences: "मध्यप्रदेश निवासी, सुशिक्षित, साधारण परिवार, मिलनसार",
    familyMembers: 6,
    address:
      "किसानी मोहल्ला, बोस वार्ड, गोटेगांव, (श्रीधाम), जिला - नरसिंहपुर, मध्यप्रदेश",
    contact: {
      father: "9713078747",
      other: "9584745241",
      whatsapp: "https://wa.me/+91-9584745241",
      email: "N/A",
    },
    bio: "सुशिक्षित और दयालु स्वभाव की, निजी स्कूल शिक्षक के रूप में कार्यरत। साधारण और मिलनसार परिवार से शिक्षित जीवनसाथी की तलाश।",
  },

  {
    id: 14,
    image: "/images/imagedata/neelesh_namdev_id_14.jpg", // Replace with the correct image path
    name: "Neelesh Namdev",
    age: 27,
    profession: "VSA (in MANREGA, JP Nateran)",
    gender: "Male",
    income: "N/A", // Income not mentioned
    height: "5'11\"",
    education: "B.Sc (CS), B.Ed, MA (English), PGDCA",
    birthDate: "21/05/1996",
    birthPlace: "Village Pipaldhar, Tahseel Shamsabad, Dist. Vidisha",
    birthTime: "N/A", // Time not provided
    caste: "Namdev",
    fathersName: "Mr. Kanhaiya Lal Namdev",
    mothersName: "Mrs. Shree Bai Namdev",
    fathersProfession: "Clothes Shop Owner",
    mothersProfession: "N/A",
    gotra: "Dhollpuriya",
    manglik: "N/A", // Manglik status not mentioned
    preferences: "N/A", // No preferences mentioned
    address: "Village Pipaldhar, Tahseel Shamsabad, Dist. Vidisha",
    contact: {
      father: null,
      other: "9981302967 (Jitendra Namdev)",
      whatsapp: null,
    },
    bio: "A highly educated and dedicated professional working as a VSA in MANREGA. Looking for a compatible partner with shared values and aspirations.",
  },
  {
    id: 13,
    name: "कु. गरिमा नामदेव",
    profession: "प्राइवेट जॉब",
    age: 28,
    gender: "Female",
    image: "/images/imagedata/garima_namdev_id_13.jpg",
    income: "N/A",
    height: "5'1\"",
    education: "M.Sc, B.Ed",
    birthDate: "13/07/1995",
    birthPlace: "बड़वाह (जिला खरगौन, म प्र)",
    birthTime: "11:30 AM",
    caste: "नामदेव",
    fathersName: "श्री अशोक नामदेव",
    mothersName: "श्रीमती लेखा नामदेव",
    fathersProfession: "प्राइवेट जॉब",
    mothersProfession: "N/A",
    gotra: "देवदरिया, घुराटिया",
    manglik: "आंशिक मांगलिक",
    preferences: "N/A",
    address: "BH 08 HIG 'B' Delux Kadambari Nagar, Rau, Indore (M.P.)",
    contact: {
      father: "8435159871",
      other: "N/A",
      whatsapp: "https://wa.me/+91-8435159871",
      email: "N/A",
    },
    bio: "M.Sc और B.Ed योग्यता प्राप्त, प्राइवेट जॉब में कार्यरत। गरिमा एक समझदार और सहयोगी जीवनसाथी की तलाश में हैं।",
  },
  {
    id: 1,
    image: "/images/imagedata/nilesh_borse_id_1.jpg",
    name: "Nilesh Borse",
    age: null,
    profession: "Central Railway (Work)",
    gender: "Male",
    income: null,
    height: "5 ft 4 in",
    education: "ITI (Fitter), BCom",
    birthDate: "30/05/1994",
    birthPlace: "Bhusawal",
    birthTime: "11:45 AM",
    caste: null,
    fathersName: "Jagdish Borse",
    mothersName: "Shreemati Rekha Borse",
    fathersProfession: "Government Job, Central Railway (Retired)",
    mothersProfession: null,
    gotra: null,
    manglik: null,
    preferences: "As per compatibility",
    address: "Shivaji Nagar, Bhusawal",
    contact: {
      father: "9096926997",
      other: null,
      whatsapp: null,
    },
    bio: "A central railway employee seeking a compatible partner.",
  },
  {
    id: 2,
    image: "/images/imagedata/radika_namdev_id_2.jpg",
    name: "Radhika Namdev",
    age: null,
    profession: "Job/Business",
    gender: "Female",
    income: null,
    height: "5 ft 1 in",
    education: "BSc, DLIED",
    birthDate: "28/07/2001",
    birthPlace: "Narahat, District Lalitpur UP",
    birthTime: "06:03 AM",
    caste: "Namdev",
    fathersName: "Ravikant Namdev",
    mothersName: "Babita Namdev",
    fathersProfession: "Teacher (Government)",
    mothersProfession: null,
    gotra: "Kathya",
    manglik: "No",
    preferences: null,
    address: "Narahat, District Lalitpur UP",
    contact: {
      father: "9794078690",
      other: null,
      whatsapp: null,
    },
    bio: "A well-educated girl from a teacher's family seeking a suitable partner.",
  },
  {
    id: 3,
    image: "/images/imagedata/swati_namdev_id_3.jpg",
    name: "Chiranjeev / Sushri Kumari Swati Namdev",
    age: null,
    profession: "Senior Graphic Designer at Speedlabs",
    gender: "Female",
    income: "50,000 per month",
    height: "5 ft 3 in",
    education: "BSc",
    birthDate: "09/03/1996",
    birthPlace: "Radhogarh, District Guna, M.P.",
    birthTime: "4:45 PM",
    caste: null,
    fathersName: "Shri Santosh Ji Namdev",
    mothersName: "Shreemati Radha Namdev",
    fathersProfession: "Ruchi Soya, Indore, Madhya Pradesh (Job)",
    mothersProfession: null,
    gotra: "Pavaiya Mama Gotra Lakheriyan",
    manglik: "Partial Manglik",
    preferences: "Metositi Job",
    address: "Full address not provided",
    contact: {
      father: null,
      other: null,
      // whatsapp: "6265827657",
      whatsapp: "https://wa.me/+91-6265827657",
    },
    bio: "Senior Graphic Designer, seeking a partner with matching values and professional interests.",
  },
  {
    id: 4,
    image: "/images/imagedata/mayank_kumar_namdeo_id_4.jpg",
    name: "Mayank Kumar Namdeo",
    age: null,
    profession: "Accenture, Noida",
    gender: "Male",
    income: "15.5 LPA",
    height: "5 ft 10 in",
    education: "MSc (AI), MBA (Finance & Systems), BE (IT)",
    birthDate: "23/06/1991",
    birthPlace: "Babina Cantt (Jhansi) UP",
    birthTime: "12:45 AM",
    caste: "Namdev",
    fathersName: "Mahesh Kumar Namdeo",
    mothersName: "Mamta Namdeo",
    fathersProfession: "Ret. Defence Engineer MES",
    mothersProfession: null,
    gotra: "Bharadwaj",
    manglik: "No",
    preferences: "Same",
    address: "Nature Park, Lalghati Bhopal",
    contact: {
      father: null,
      other: null,
      whatsapp: "https://wa.me/+91-738918466",
    },
    bio: "A highly educated professional seeking a partner with shared life goals.",
  },
  {
    id: 5,
    image: "/images/imagedata/satyam_namdev_id_5.jpg",
    name: "Satyam (Namdev)",
    age: 24,
    profession: "Real Estate Property Dealer",
    gender: "Male",
    income: "15,000 - 30,000",
    height: "5 ft 8 in",
    education: "12th",
    birthDate: "22/08/1999",
    birthPlace: "Bareli, MP",
    birthTime: "10:00 AM",
    caste: "Namdev",
    fathersName: "Shri Mahesh (Namdev)",
    mothersName: "Shrimati Sunita (Namdev)",
    fathersProfession: "Catering",
    mothersProfession: "Grihani",
    gotra: "Self: Naroliya, Maternal Uncle: Banpuriya",
    manglik: "No",
    preferences: "N/A",
    address: "Bareli, District Raisen, Tehsil Bareli, Village Khandraj",
    contact: {
      father: "6260594920",
      other: "9770455346",
      whatsapp: null,
    },
    bio: "A professional real estate property dealer seeking a compatible partner with shared values.",
  },
  {
    id: 6,
    image: "/images/imagedata/sonam_namdev_id_6.jpg", // Replace with the correct image path
    name: "Sonam (Namdev)",
    age: 28, // Calculate dynamically if required
    profession: "Irrigation Department (Private)",
    gender: "Female",
    income: "N/A", // Update with actual income if available
    height: "5 ft",
    education: "B.Sc (Maths), D.El.Ed",
    birthDate: "02/11/1995",
    birthPlace: "Ganj Basoda",
    birthTime: "6:00 AM",
    caste: "Namdev",
    fathersName: "Mr. Dinesh (Namdev)",
    mothersName: "Mrs. Sunita (Namdev)",
    fathersProfession: "Tailor",
    mothersProfession: "N/A",
    gotra: "Self: Laipuriya, Maternal Uncle: N/A",
    manglik: "No",
    preferences: "N/A", // Add preferences if applicable
    address: "Akriti Homes, Behind SDM Bungalow, Ganj Basoda",

    contact: {
      father: "9630952268",
      other: "9171541979 (मामा)",
      whatsapp: null,
    },
    bio: "A dedicated professional working in the Irrigation Department (Private), seeking a compatible partner with shared values and aspirations.",
  },
  {
    id: 7,
    image: "/images/imagedata/mayank_namdeo_lucky_id_7.jpg",
    name: "मयंक नामदेव (लक्की)",
    age: 31,
    profession:
      "Manager at GAJA Engineering Pvt. Ltd. At Lucknow (RO) (प्राइवेट जॉब)",
    gender: "Male",
    income: "35,000",
    height: "5'4\"",
    education: "MCA, B.Sc (Computer Science)",
    birthDate: "24/12/1993",
    birthPlace: "सिवनी",
    birthTime: "12:40 PM",
    caste: "नामदेव",
    fathersName: "स्व. श्री अशोक नामदेव",
    mothersName: "श्रीमति वंदना नामदेव",
    fathersProfession: "N/A",
    mothersProfession: "गृहिणी",
    gotra: "N/A",
    manglik: "No",
    preferences: "शिक्षित समकक्ष, संस्कारी",
    address: "महावीर वार्ड विश्वकर्मा मंदिर के पास सिवनी (म. प्र.)",
    contact: {
      father: "N/A",
      other: "6261127357, 8319688858",
      whatsapp: "https://wa.me/+91-741521979",
    },
    bio: "A professional manager at GAJA Engineering Pvt. Ltd. in Lucknow, seeking a compatible partner with similar values and aspirations.",
  },

  {
    id: 8,
    image: "/images/imagedata/chiranjiv_monu_namdeo_id_8.jpg",
    name: "चिरंजीव/ मोनू नामदेव",
    age: 27,
    profession: "कृषि खाद बीज दवाई की दुकान",
    gender: "Male",
    income: "N/A",
    height: "5'7\"",
    education: "BSC कंप्यूटर, LLB (Running)",
    birthDate: "14/02/1997",
    birthPlace: "मानोंरा, जिला विदिशा (M.P.)",
    birthTime: "11:50 PM (गुरुवार, शिवरात्रि)",
    caste: "नामदेव",
    fathersName: "श्री संतोष जी नामदेव",
    mothersName: "श्रीमति गायत्री नामदेव",
    fathersProfession: "सोसाइटी बैंक, सोथर, जिला विदिशा (M.P.)",
    mothersProfession: "ग्रहणी",
    gotra: "ठकरोलिया, मामा गोत्र: बडगुजर",
    manglik: "No",
    preferences: "नहीं",
    address: "N/A",
    contact: {
      father: "N/A",
      other: "+91-7987746040",
      whatsapp: "https://wa.me/+91-7987746040",
    },
    bio: "A dedicated professional working in the agriculture seed and medicine store, seeking a compatible partner with shared values and aspirations.",
  },
  {
    id: 9,
    image: "/images/imagedata/shubham_kumar_namdeo_id_9.jpg",
    name: "Shubham kumar Namdeo",
    age: 32,
    profession: "Preparation of competition exam and business of clothes shop",
    gender: "Male",
    income: "N/A",
    height: "N/A",
    education: "BE Civil Engineering",
    birthDate: "28/10/1992",
    birthPlace: "Adegaon teh. Lakhnadon distt. Seoni MP",
    birthTime: "N/A",
    caste: "Namdeo",
    fathersName: "Shivkumar Namdeo",
    mothersName: "Rajani Namdeo",
    fathersProfession: "N/A",
    mothersProfession: "N/A",
    gotra: "Vaidya",
    manglik: "No",
    preferences: "N/A",
    address: "Adegaon teh. Lakhnadon distt. Seoni MP",
    contact: {
      father: "N/A",
      other: "8103358795, 9713929894",
      whatsapp: "N/A",
    },
    bio: "A dedicated individual preparing for competitive exams while managing a clothing business, seeking a balanced and fulfilling life.",
  },
  {
    id: 10,
    image: "/images/imagedata/tanishaa_namdeo_lavi_id_10.jpg",
    name: "तनीशा नामदेव (लवी)",
    age: 24,
    profession: "Private Teacher",
    gender: "Female",
    income: "N/A",
    height: "5'6\"",
    education:
      "बी ए (इंग्लिस लिटलेचर), एल एल बी, एल एल एम, स्टेनो, पी जी डी सी ए, बी लिप (रनिंग)",
    birthDate: "04/07/2000",
    birthPlace: "सिवनी",
    birthTime: "11:40 AM",
    caste: "नामदेव",
    fathersName: "स्व अशोक नामदेव",
    mothersName: "वंदना नामदेव",
    fathersProfession: "N/A",
    mothersProfession: "हाउस वाइफ",
    gotra: "N/A",
    manglik: "No",
    preferences: "शिक्षित समकक्ष, संस्कारी",
    address: "महावीर वार्ड विश्वकर्मा मंदिर के पास सिवनी",
    contact: {
      father: "N/A",
      other: "6261127357",
      whatsapp: "https://wa.me/+91-741521979",
    },
    bio: "A private teacher with a strong educational background, seeking a partner who values education and culture.",
  },
  {
    id: 11,
    image: "/images/imagedata/shweta_namdeo_id_11.jpg",
    name: "Shweta Namdev",
    age: 28,
    profession: "Tellicalling and Computer Work at Car Workshop",
    gender: "Female",
    income: "N/A",
    height: "5'6\"",
    education: "B.Com",
    birthDate: "27/10/1996",
    birthPlace: "Damoh (M.P)",
    birthTime: "4:00 PM",
    caste: "Namdev",
    fathersName: "Shri Jugal Kishore Namdev",
    mothersName: "Smt. Manisha Namdev",
    fathersProfession: "Tailor",
    mothersProfession: "Tailor",
    gotra: "Bharadwaj",
    manglik: "No",
    preferences: "Well Educated",
    address: "Bhopal (Madhya Pradesh)",
    contact: {
      father: "9770363198",
      other: "N/A",
      whatsapp: "N/A",
    },
    bio: "A dedicated professional working in the car workshop, seeking a well-educated and like-minded partner.",
  },
  {
    id: 12,
    image: "/images/imagedata/vedansh_namdev_id_12.jpg",
    name: "वेदांश नामदेव",
    age: 26,
    profession: "Owner of Private Higher Secondary School",
    gender: "Male",
    income: "1,50,000 (Joint)",
    height: "5'5\"",
    education: "B.E. (Mechanical), PGDCA",
    birthDate: "06/02/1998",
    birthPlace: "भोपाल (एम. पी.)",
    birthTime: "10:55 PM",
    caste: "नामदेव",
    fathersName: "श्री उमेश कुमार नामदेव",
    mothersName: "श्रीमति शोभा नामदेव",
    fathersProfession: "Owner of Private Higher Secondary School",
    mothersProfession: "Principal at Private Higher Secondary School",
    gotra: "तरोलिया (दर्जी)",
    manglik: "No",
    preferences: "M.P.",
    familyMembers: 3,
    address:
      "बी-71, एलिक्सिर गार्डन, न्यू जेल रोड, करोंद बाए-पास, भोपाल (एम. पी.)",
    contact: {
      father: "9425464232",
      other: "N/A",
      whatsapp: "https://wa.me/+91-9425464232",
      email: "uknamdev512@gmail.com",
    },
    bio: "A successful individual managing a private higher secondary school, supported by a family dedicated to education, seeking a compatible match from Madhya Pradesh.",
  },
];

const Profile = () => {
  const { id } = useParams(); // Get the dynamic 'id' from the URL params

  // Find the profile based on the 'id'
  const selectedProfile = profiles.find(
    (profile) => profile.id === parseInt(id)
  );

  if (!selectedProfile)
    return (
      <p className="text-center text-red-500 font-semibold">
        Profile not found
      </p>
    );

  // const handleCallClick = () => {
  //   window.location.href = `+91+${selectedProfile.contact.whatsapp}`; // Replace 'phone' with actual phone number field if available
  // };
  const handleCallClick = () => {
    // Sanitize the phone number by removing any non-numeric characters (except '+')
    let phoneNumber = selectedProfile.contact.whatsapp.replace(/[^0-9+]/g, "");

    // Ensure it starts with a '+' sign and prepend country code if necessary
    if (!phoneNumber.startsWith("+")) {
      phoneNumber = `+91${phoneNumber}`; // Default to India (+91), adjust for other countries if needed
    }

    window.location.href = `tel:${phoneNumber}`; // Redirect to the phone number
  };

  const handleMessageClick = () => {
    window.location.href = `mailto:${selectedProfile.email}`; // Open email client with the profile's email
  };

  const handleWhatsappClick = () => {
    window.location.href = selectedProfile.contact.whatsapp; // Open WhatsApp chat
  };

  const handleExpressInterest = () => {
    alert(
      "Interest has been successfully expressed! The profile owner will get in touch with you."
    );
  };

  const handleAddToShortlist = () => {
    alert("This profile has been added to your shortlist.");
  };

  const handleShareClick = () => {
    // Build a message with profile data and URL to share
    const message = `Check out this profile!\n\nName: ${selectedProfile.name}\nProfession: ${selectedProfile.profession}\nGender: ${selectedProfile.gender}\nHeight: ${selectedProfile.height}\nEducation: ${selectedProfile.education}\nDate of Birth: ${selectedProfile.birthDate}\nBirth Place: ${selectedProfile.birthPlace}\nBirth Time: ${selectedProfile.birthTime}\nFather's Name: ${selectedProfile.fathersName}\nFather's Profession: ${selectedProfile.fathersProfession}\nAddress: ${selectedProfile.address}\nBio: ${selectedProfile.bio}\n\nFor more details, visit: ${window.location.href}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  };

  const handleCopyClick = () => {
    // Build a message with profile data to copy
    const message = `Check out this profile!\n\nName: ${selectedProfile.name}\nProfession: ${selectedProfile.profession}\nGender: ${selectedProfile.gender}\nHeight: ${selectedProfile.height}\nEducation: ${selectedProfile.education}\nDate of Birth: ${selectedProfile.birthDate}\nBirth Place: ${selectedProfile.birthPlace}\nBirth Time: ${selectedProfile.birthTime}\nFather's Name: ${selectedProfile.fathersName}\nFather's Profession: ${selectedProfile.fathersProfession}\nAddress: ${selectedProfile.address}\nBio: ${selectedProfile.bio}\n\nFor more details, visit: ${window.location.href}`;

    // Copy the message to clipboard
    navigator.clipboard
      .writeText(message)
      .then(() => {
        alert("Profile details copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-8">
      <div className="flex flex-col items-center mb-6">
        <Image
          className="rounded-full border-4 border-gray-200 shadow-md"
          src={selectedProfile.image}
          alt={selectedProfile.name}
          width={200}
          height={200}
        />
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mt-4">
          {selectedProfile.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {selectedProfile.profession}
        </p>
        <p className="text-lg text-gray-500 italic mt-2 dark:text-gray-400">
          {selectedProfile.bio}
        </p>
      </div>

      <div className="space-y-4">
        {/* Personal Information */}
        <div className="border-b pb-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Personal Information
          </h2>
          <p>
            <span className="font-semibold">Name:</span>{" "}
            {selectedProfile.name || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Age:</span>{" "}
            {selectedProfile.age || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Gender:</span>{" "}
            {selectedProfile.gender || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Caste:</span>{" "}
            {selectedProfile.caste || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Rashi:</span>{" "}
            {selectedProfile.rashi || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Height:</span>{" "}
            {selectedProfile.height || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Profession:</span>{" "}
            {selectedProfile.profession || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Education:</span>{" "}
            {selectedProfile.education || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Income:</span>{" "}
            {selectedProfile.income || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Manglik:</span>{" "}
            {selectedProfile.manglik || "N/A"}
          </p>
        </div>

        {/* Family Details */}
        <div className="border-b pb-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Family Details
          </h2>
          <p>
            <span className="font-semibold">Father&apos;s Name:</span>{" "}
            {selectedProfile.fathersName || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Father&apos;s Profession:</span>{" "}
            {selectedProfile.fathersProfession || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Mother&apos;s Name:</span>{" "}
            {selectedProfile.mothersName || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Mother&apos;s Profession:</span>{" "}
            {selectedProfile.mothersProfession || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Gotra:</span>{" "}
            {selectedProfile.gotra || "N/A"}
          </p>
        </div>

        {/* Birth Details */}
        <div className="border-b pb-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Birth Details
          </h2>
          <p>
            <span className="font-semibold">Birth Date:</span>{" "}
            {selectedProfile.birthDate || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Birth Place:</span>{" "}
            {selectedProfile.birthPlace || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Birth Time:</span>{" "}
            {selectedProfile.birthTime || "N/A"}
          </p>
        </div>

        {/* Contact Details */}
        {/* Contact Details */}
        <div className="border-b pb-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Contact Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Information */}
            <div>
              <p>
                <span className="font-semibold">Father&apos;s Contact:</span>{" "}
                {selectedProfile.contact?.father || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Mother&apos;s Contact:</span>{" "}
                {selectedProfile.contact?.mother || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Other&apos;s Contact:</span>{" "}
                {selectedProfile.contact?.other || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Whatsapp&apos;s Contact:</span>{" "}
                {selectedProfile.contact?.whatsapp || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {selectedProfile.contact?.email || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Bio
          </h2>
          <p>{selectedProfile.bio || "N/A"}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <button
          onClick={handleCallClick}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Call
        </button>
        <button
          onClick={handleWhatsappClick}
          className="bg-green-500 text-white py-2 px-4 rounded-lg"
        >
          WhatsApp
        </button>

        {/* Copy to Clipboard Button */}
        <button
          onClick={handleCopyClick}
          className="bg-gray-500 text-white py-2 px-4 rounded-lg"
        >
          Copy Link
        </button>

        {/* Share Profile Button */}
        <button
          onClick={handleShareClick}
          className=" bg-blue-500  text-white py-2 px-4 rounded-lg"
        >
          Share Profile
        </button>

        {/* <button
          onClick={handleExpressInterest}
          className="bg-yellow-500 text-white py-2 px-4 rounded-lg"
        >
          Express Interest
        </button>
        <button
          onClick={handleAddToShortlist}
          className="bg-purple-600 text-white py-2 px-4 rounded-lg"
        >
          Add to Shortlist
        </button> */}
      </div>
    </div>
  );
};

export default Profile;
