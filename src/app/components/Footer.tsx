import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-[#e6d2c9] text-gray-800 py-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap justify-between gap-8">
            {/* About Section */}
            <div className="w-full sm:w-auto flex-1 min-w-[250px]">
              <h4 className="text-lg md:text-xl font-semibold mb-4">About Face The Future</h4>
              <p className="text-sm md:text-base text-gray-600">
                At Face The Future, we are dedicated to delivering high-quality skincare products that help you
                achieve healthy, glowing skin. From serums to sunscreen, explore the best in skincare to suit all skin
                types.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="w-full sm:w-auto flex-1 min-w-[250px]">
              <h4 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:border-b hover:border-b-red-950">
                    SkinCare
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:border-b hover:border-b-red-950">
                    Products & Brands
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:border-b hover:border-b-red-950">
                    Health & Advice
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:border-b hover:border-b-red-950">
                    Clinic
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="w-full sm:w-auto flex-1 min-w-[250px]">
              <h4 className="text-lg md:text-xl font-semibold mb-4">Contact Us</h4>
              <div className="text-gray-600">
                <p>📍 456 Skincare Blvd, BeautyCity</p>
                <p>📞 +1 555 123 4567</p>
                <p>✉️ support@facetothefuture.com</p>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="w-full sm:w-auto flex-1 min-w-[250px]">
              <h4 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex text-xl space-x-6">
                <Link href="#" className="hover:text-white">
                  <FaLinkedin />
                </Link>
                <a href="#" className="hover:text-white">
                  <FaGithub />
                </a>
                <a href="#" className="hover:text-white">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center my-4 text-gray-500 text-sm">
            © 2024 Face The Future. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
