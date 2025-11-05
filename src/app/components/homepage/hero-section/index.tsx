import { personalData } from "@/../utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      {/* Background/Hero Image */}
      <Image
        src="/hero.svg"
        alt="Hero Background"
        width={1572}
        height={795}
        // Adjust positioning based on specific layout needs
        className="absolute -top-[98px] -z-10 w-full object-cover" 
      />

      {/* Content Grid */}
      <div className="grid w-full grid-cols-1 gap-y-12 lg:grid-cols-2 ">
        
        {/* Text and Links Column */}
        <div className="order-2 flex flex-col p-2 pb-20 pt-2 lg:order-1 lg:pt-10 md:pb-10">
          <div className="border-l-[2px] border-white pl-5 ">
            <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            WELCOME, <br />
            I'M{' '}
            <span className="text-pink-500">{personalData.name}</span> 
            <br /> 
            </h1>
            <p className="text-sm text-gray-200 lg:text-lg leading-relaxed hover:text-[#FFF58A] transition-all duration-500"> 
              {personalData.description}
            </p> 
          </div>         

          {/* Social Links */}
          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              aria-label="GitHub profile"
              className="duration-300 transition-all text-pink-500 hover:scale-125"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              aria-label="LinkedIn profile"
              className="duration-300 transition-all text-pink-500 hover:scale-125"
            >
              <BsLinkedin size={30} />
            </Link>
            
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Contact Button */}
            <Link 
              href="#contact" 
              className="bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="flex items-center gap-1 rounded-full border-none bg-[#0d1224] px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-[#ffff] transition-all duration-200 ease-out hover:gap-3 md:px-8 md:py-4 md:text-sm md:font-semibold">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            {/* Resume Button */}
            <Link
              role="button"
              target="_blank"
              href={personalData.resume}
              className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out hover:gap-3 md:px-8 md:py-4 md:text-sm md:font-semibold"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>
        
        {/* Profile Image Column */}
        <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-1"> {/* Added a gradient border/container for the image */}
                <Image
                  src={personalData.profile}
                  width={400}
                  height={400}
                  alt={personalData.name || "Profile Picture"}
                  className="cursor-pointer rounded-full object-cover transition-all duration-1000 hover:scale-110 hover:grayscale-0 grayscale" // Added 'grayscale' for initial state
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;