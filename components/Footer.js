"use client";
import React from "react";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Icons for social media

const Footer = () => {
  return (
    <footer className="p-6 bg-background/50 backdrop-blur border-t z-10 mt-28">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row">
          <Link href={"/"} className="text-xl font-bold">
            namdev-patrika
          </Link>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center mt-8 md:mt-0 space-y-4">
          <div className="text-center text-sm text-white-400">
            <p>
              &copy; {new Date().getFullYear()} namdev-patrika. All Rights
              Reserved.
            </p>
          </div>

          {/* Social Media Links */}
          {/* <div className="flex space-x-6 mt-4 text-xl ">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-primary transition-colors duration-300"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-primary transition-colors duration-300"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-primary transition-colors duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="hover:text-primary transition-colors duration-300"
            >
              <FaGithub />
            </Link>
          </div> */}
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0 flex flex-col space-y-6">
          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>

            {/* Contact Information Links */}
            <div className="space-y-2 text-sm">
              <p>
                Email:{" "}
                <a
                  href="mailto:namdevtarun910@gmail.com"
                  className="text-primary hover:underline"
                >
                 namdevtarun910@gmail.com
                </a>
              </p>
              <p>
                Phone 1:{" "}
                <a
                  href="tel:+916260919910"
                  className="text-primary hover:underline"
                >
                  +91 6260919910
                </a>
              </p>
              <p>
                Phone 2:{" "}
                <a
                  href="tel:+919977427794"
                  className="text-primary hover:underline"
                >
                  +91 9977427794
                </a>
              </p>
            </div>

            {/* Other Links */}
            <div className="space-y-4 text-sm mt-4 flex flex-col">
              <Link href="/download" className="text-primary hover:underline">
                Download App
              </Link>
              <Link href="/contact" className="text-primary hover:underline">
                Contact Us
              </Link>
              <Link href="/about" className="text-primary hover:underline">
                About Us
              </Link>
              {/* <Link href="https://www.facebook.com" target="_blank" className="text-primary hover:underline">
                Namdev Samajh Patrika
              </Link> */}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Use
              </Link>
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              {/* <Link href="/refund" className="text-primary hover:underline">Refund Policy</Link> */}
              {/* Additional Links */}
              <Link href="/careers" className="text-primary hover:underline">
                Careers
              </Link>
              <Link href="/faq" className="text-primary hover:underline">
                FAQ
              </Link>
              <Link href="/help" className="text-primary hover:underline">
                Help Center
              </Link>
              <Link href="/press" className="text-primary hover:underline">
                Press
              </Link>
              <Link href="/support" className="text-primary hover:underline">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
