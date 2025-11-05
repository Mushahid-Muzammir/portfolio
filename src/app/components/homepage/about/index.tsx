// @flow strict
import { personalData } from "../../../../../utils/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="relative my-12 py-8 lg:my-16 lg:py-16"> 
      <div className="absolute -right-8 top-1/2 hidden -translate-y-1/2 flex-col items-center lg:flex z-20"> 
        <span className="w-fit rotate-90 rounded-md bg-[#1a1443] px-5 py-2 text-xl text-white shadow-lg border border-violet-700"> 
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443] mt-2"></span> 
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl"> 
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-1"> 
          <div className="order-2 lg:order-1">
            <h2 className="mb-5 text-2xl font-bold uppercase text-[#16f2b3]">
              Who I am?
            </h2>
            <p className="text-base text-gray-200 lg:text-xl leading-relaxed hover:text-[#FFF58A] transition-all duration-500"> 
              {personalData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;