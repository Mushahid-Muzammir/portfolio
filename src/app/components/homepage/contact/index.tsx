import { personalData } from '@/../utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

export default function ContactSection() {
  return (
    <div id="contact" className="my-20 relative text-white scroll-mt-32">
      <h2 className="text-center text-3xl font-bold mb-2 tracking-tight">
        Let’s Connect
      </h2>
      <p className="text-center text-gray-300 mb-10">
        I'm open to freelance work, collaborations & exciting tech opportunities.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Info */}
        <div className="space-y-8 text-lg">
          <div className="flex items-center gap-4">
            <MdAlternateEmail className="bg-[#8b98a5] p-2 rounded-full text-gray-800 hover:bg-[#16f2b3] hover:scale-110 transition" size={40}/>
            <a href={`mailto:${personalData.email}`} className="hover:text-[#16f2b3]">
              {personalData.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <IoMdCall className="bg-[#8b98a5] p-2 rounded-full text-gray-800 hover:bg-[#16f2b3] hover:scale-110 transition" size={40}/>
            <a href={`tel:${personalData.phone}`} className="hover:text-[#16f2b3]">
              {personalData.phone}
            </a>
          </div>

          <div className="flex gap-6 pt-4">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub className="bg-[#8b98a5] p-2 rounded-full text-gray-800 hover:bg-[#16f2b3] hover:scale-110 transition" size={48}/>
            </Link>

            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin className="bg-[#8b98a5] p-2 rounded-full text-gray-800 hover:bg-[#16f2b3] hover:scale-110 transition" size={48}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
