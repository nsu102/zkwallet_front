import Link from 'next/link';
import Image from 'next/image';
import { Youtube, Linkedin, Twitter, Rss } from 'lucide-react';
import { FOOTER_CONTENT } from '@/constants';

export default function Footer() {
  const socialIcons = {
    youtube: Youtube,
    linkedin: Linkedin,
    x: Twitter,
    rss: Rss,
  };

  return (
    <footer className="bg-nav-bg text-white py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Side - Company Info */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span className="text-xl font-bold">{FOOTER_CONTENT.company.name}</span>
            </div>

            {/* Company Details */}
            <div className="space-y-2 text-sm text-gray-300">
              <p>{FOOTER_CONTENT.company.address} {FOOTER_CONTENT.company.ceo}</p>
              <p>{FOOTER_CONTENT.company.businessNumber} E-mail : {FOOTER_CONTENT.company.email}</p>
              <p className="mt-4">{FOOTER_CONTENT.company.copyright}</p>
            </div>

            {/* Certification Badge */}
            <div className="flex items-center gap-3 mt-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">✓</span>
                </div>
              </div>
              <span className="text-sm text-gray-300">{FOOTER_CONTENT.company.certification}</span>
            </div>
          </div>

          {/* Right Side - Links and Social */}
          <div className="flex flex-col items-end gap-6">
            {/* Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {FOOTER_CONTENT.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {FOOTER_CONTENT.social.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-gray-800" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
