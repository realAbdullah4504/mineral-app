const Footer = () => {
  return (
    <div className="flex flex-col  w-full px-[9.3rem] justify-center text-[#40384F]">
      <div className="flex justify-between pt-[3.8rem]">
        <div className="flex flex-col pb-[6.688rem]">
          <img
            src="/logoMOE.png"
            alt="Logo"
            width={48}
            height={48}
            className="justify-start"
          />
          <span className="text-[1.139rem] font-semibold mt-[1.741rem]">
            Ministry of Energy
          </span>
          <span className="text-[1.139rem] font-semibold">
            (Petroleum Division)
          </span>
          <div className="flex pt-[2.4rem] pb-8">
            <img src="/logoEmail.svg" alt="Email" />
            <span className="ml-3 text-base font-medium">
              info@minerals.gov.pk
            </span>
          </div>
          <div className="flex justify-center space-x-2">
            <img src="/logoInstagram.svg" alt="Instagram" className="w-6 h-6" />
            <img src="/logoFacebook.svg" alt="Facebook" className="w-6 h-6" />
            <img src="/logoYoutube.svg" alt="Youtube" className="w-6 h-6" />
            <img src="/logoTwitter.svg" alt="Twitter" className="w-6 h-6" />
            <img src="/logoLinkedIn.svg" alt="LinkedIn" className="w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-[1.139rem] text-left w-full mb-7">
            Company
          </span>

          <div className="flex flex-col items-start w-full font-medium text-[0.792rem]">
            {" "}
            {/* Align buttons to the left */}
            <button className="text-left mb-4">About Us</button>
            <button className="text-left mb-4">News</button>
            <button className="text-left mb-4">Business & Investment</button>
            <button className="text-left mb-4">Legal Framework</button>
            <button className="text-left mb-4">Press Release</button>
            <button className="text-left mb-4">
              National Mineral Development Plan
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-[1.139rem] mb-7 text-left w-full">
            Resources
          </span>

          <div className="flex flex-col items-start w-full font-medium text-[0.792rem]">
            {" "}
            {/* Align buttons to the left */}
            <button className="text-left mb-4">Data and Statistics</button>
            <button className="text-left mb-4">Initiatives & Projects</button>
            <button className="text-left mb-4">Who is Who</button>
            <button className="text-left mb-4">CSR</button>
            <button className="text-left mb-4">FAQ&apos;s</button>
            <button className="text-left mb-4">Research & Development</button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-[1.139rem] text-left w-full mb-7">
            Connect with us
          </span>

          <div className="flex flex-col items-start font-medium text-[0.792rem]">
            <label htmlFor="name" className="mb-2 font-medium">
              Name
            </label>
            <hr className=" border-[#40384F] bg-black h-px w-[16.25rem] mt-[6.88px] mb-[23.87px]" />
            <label htmlFor="email" className="mb-2 font-medium">
              Email
            </label>
            <hr className=" border-[#40384F] bg-black h-px w-[16.25rem] mt-[6.88px] mb-[23.87px]" />
            <label htmlFor="phone" className="mb-2 font-medium">
              Phone No.
            </label>
            <hr className=" border-[#40384F] bg-black h-px w-[16.25rem] mt-[6.88px] mb-[23.87px]" />
            <label htmlFor="message" className="mb-2 font-medium">
              Message
            </label>
            <hr className=" border-[#40384F] bg-black h-px w-[16.25rem] mt-[6.88px] mb-[23.87px]" />
          </div>
        </div>
      </div>
      <hr className=" border-[#40384F] bg-black h-px" />
      <div className="flex justify-between pt-[3rem] pb-[3rem]">
        <div className="flex flex-col text-[0.8rem]">
          Copyright © 2023, Ministry of Energy (Petroleum Division)
        </div>
        <div className="flex flex-col">
          <div className="flex w-[18rem] text-[0.6rem] justify-between">
            <button className="flex flex-col">Data Privacy</button>
            <button className="flex flex-col">Terms & Conditions</button>
            <button className="flex flex-col">Disclaimer</button>
            <button className="flex flex-col">Help Center</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
