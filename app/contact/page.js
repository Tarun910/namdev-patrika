import React from 'react';
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/tarun.jpg"
                  alt="Profile of Tarun Namdev, a full-stack developer"
                  fill // Using fill layout for responsive image
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                About Me
              </h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                I’m Tarun Namdev, a full-stack developer pursuing MCA at Lakshmi Narain College of Technology, Bhopal. I have worked on web development projects using the MERN stack, ShadCN UI, and Tailwind CSS. This website aims to help people by listing biodata and details in an organized way to make it easier for everyone to access. Currently Optimizing the performance and features of the website.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                If you have any feedback or suggestions, feel free to reach out via email at <a href="mailto:namdevtarun910@gmail.com" className="text-blue-600 dark:text-blue-400">namdevtarun910@gmail.com</a> or send a WhatsApp message to <a href="https://wa.me/91260919910" className="text-blue-600 dark:text-blue-400">+91 6260919910</a>.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Thank you for your time and consideration.
                <br />
                Sincerely,  
                <br />
                Tarun Namdev
                <br />
                <a href="https://www.linkedin.com/in/tarun910/" className="text-blue-600 dark:text-blue-400">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
