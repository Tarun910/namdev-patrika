"use client";
import React from "react";

const About = () => {
  return (
    <section className="p-6 bg-background/50 backdrop-blur">
      <div className="container mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold text-white">About Namdev Patrika</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Welcome to <strong>Namdev Patrika</strong> - a leading platform that brings together individuals from the Namdev Samaj community, helping them find meaningful connections. We aim to make the search for a life partner easier by focusing on shared values, traditions, and cultural backgrounds.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          At <strong>Namdev Patrika</strong>, we understand how important it is to find someone who not only complements your personality but also connects with your cultural and community values. Our platform is designed to offer an intuitive matchmaking process, helping you discover the ideal match for a fulfilling partnership.
        </p>
        
        <h3 className="text-2xl font-semibold text-white mt-6">Managed by</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">Email: <a href="mailto:namdevtarun910@gmail.com" className="text-primary hover:underline">namdevtarun910@gmail.com</a></p>
        <p className="text-lg text-gray-700 dark:text-gray-300">Mobile: <a href="tel:+916260919910" className="text-primary hover:underline">+91-6260919910</a></p>
        
        <h3 className="text-2xl font-semibold text-white mt-6">Features We Offer</h3>
        <ul className="list-disc text-left text-lg text-gray-700 dark:text-gray-300 space-y-3 mt-4 mx-auto md:w-2/3">
          <li><strong>Custom Profiles:</strong> Build a comprehensive profile that highlights your personality, preferences, and values to attract compatible matches.</li>
          <li><strong>Smart Search Filters:</strong> Fine-tune your search with filters like age, profession, education, and more to ensure you meet people who match your criteria.</li>
          <li><strong>Match Suggestions:</strong> Our smart algorithm recommends compatible profiles based on your preferences and profile information, making your search efficient.</li>
          <li><strong>Safe Messaging:</strong> Communicate securely with potential matches through our messaging system, ensuring privacy and confidentiality throughout your interaction.</li>
          <li><strong>Community Engagement:</strong> Participate in community events, meetups, and matrimonial gatherings where you can meet potential partners in person.</li>
          <li><strong>Verified Accounts:</strong> Rely on verified profiles for a secure and authentic matchmaking experience, ensuring that the profiles you interact with are genuine.</li>
          <li><strong>Reliable Support:</strong> Our customer support team is here to assist you with any questions or concerns, providing timely and helpful responses for a smooth experience.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-white mt-6">Join Us Now</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Join <strong>Namdev Patrika</strong> today and begin your journey toward finding a life partner who shares your values, culture, and traditions. Our platform is dedicated to making the search for your perfect match a seamless and rewarding experience.
        </p>
        
        <h3 className="text-2xl font-semibold text-white mt-6">Why We Stand Out</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Our commitment to delivering personalized matchmaking services, along with a focus on community, makes us the top choice for those looking for meaningful connections. At <strong>Namdev Patrika</strong>, we believe in bringing people together with shared values to create lasting relationships.
        </p>
      </div>
    </section>
  );
};

export default About;
