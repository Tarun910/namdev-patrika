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
      other: "9171541979",
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
      whatsapp: "741521979",
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
      whatsapp: "+91-7987746040",
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
      whatsapp: "741521979",
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
      whatsapp: "9425464232",
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

  const handleCallClick = () => {
    window.location.href = `tel:+${selectedProfile.contact.whatsapp}`; // Replace 'phone' with actual phone number field if available
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
