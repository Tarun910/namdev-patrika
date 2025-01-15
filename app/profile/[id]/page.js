"use client"; // Add this directive to make it a client-side component

import { useParams } from "next/navigation"; // Client-side hook
import Image from "next/image";

// Sample data for profiles (this could be fetched from an API in a real app)
const profiles = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    profession: "Software Developer",
    gender: "male",
    caste: "Brahmin",
    rashi: "Virgo",
    fathersName: "Mr. Smith",
    image: "/images/download (4).jpg",
    email: "johndoe@example.com",
    whatsapp: "https://wa.me/11234567890",
    bio: "A professional looking for a partner with similar interests and values.",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 24,
    profession: "Designer",
    gender: "female",
    caste: "Kshatriya",
    rashi: "Libra",
    fathersName: "Mr. Doe",
    image: "/images/download (1).jpg",
    email: "janedoe@example.com",
    whatsapp: "https://wa.me/11234567891",
    bio: "Looking for someone who shares similar life goals and aspirations.",
  },
  {
    id: 3,
    name: "Sam Smith",
    age: 35,
    profession: "Manager",
    gender: "male",
    caste: "Vaishya",
    rashi: "Aquarius",
    fathersName: "Mr. Sampson",
    image: "/images/download (2).jpg",
    email: "samsmith@example.com",
    whatsapp: "https://wa.me/11234567892",
    bio: "Seeking a partner who values family and tradition.",
  },
  {
    id: 4,
    name: "Sarah Lee",
    age: 30,
    profession: "Developer",
    gender: "female",
    caste: "Shudra",
    rashi: "Pisces",
    fathersName: "Mr. Lee",
    image: "/images/4.jpg",
    email: "sarahlee@example.com",
    whatsapp: "https://wa.me/11234567893",
    bio: "Looking for a companion who believes in love and partnership.",
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

  const handleMessageClick = () => {
    window.location.href = `mailto:${selectedProfile.email}`; // Open email client with the profile's email
  };

  const handleWhatsappClick = () => {
    window.location.href = selectedProfile.whatsapp; // Open WhatsApp chat
  };

  const handleExpressInterest = () => {
    alert(
      "Interest has been successfully expressed! The profile owner will get in touch with you."
    );
  };

  const handleAddToShortlist = () => {
    alert("This profile has been added to your shortlist.");
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
        <div className="border-b pb-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Personal Information
          </h2>
          <p>
            <span className="font-semibold">Age:</span> {selectedProfile.age}
          </p>
          <p>
            <span className="font-semibold">Gender:</span>{" "}
            {selectedProfile.gender}
          </p>
          <p>
            <span className="font-semibold">Caste:</span>{" "}
            {selectedProfile.caste}
          </p>
          <p>
            <span className="font-semibold">Rashi:</span>{" "}
            {selectedProfile.rashi}
          </p>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Family Details
          </h2>
          <p>
            <span className="font-semibold">Father Name:</span>{" "}
            {selectedProfile.fathersName}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* Message and action buttons */}
        <button
          onClick={handleMessageClick}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Message
        </button>
        <button
          onClick={handleWhatsappClick}
          className="bg-green-500 text-white py-2 px-4 rounded-lg"
        >
          WhatsApp
        </button>
        <button
          onClick={handleExpressInterest}
          className="bg-yellow-500 text-white py-2 px-4 rounded-lg"
        >
          Express Interest
        </button>
        <button
          onClick={handleAddToShortlist}
          className="bg-gray-500 text-white py-2 px-4 rounded-lg"
        >
          Add to Shortlist
        </button>
      </div>
    </div>
  );
};

export default Profile;
