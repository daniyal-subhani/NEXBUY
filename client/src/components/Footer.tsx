"use client";

import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  return (
    <div className="footer">
      <div className="mx-auto w-full text-center font-bold text-4xl mb-4 mt-8">
        👉 Footer
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} <strong>NEXBUY</strong>. All
            rights reserved.
          </span>
          <div className="flex space-x-6">
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
