import Image from "next/image";
import Link from "next/link";
import logo from './images/lafia-logo.png'
import heroImage from './images/hero-image.png'

export default function Home() {
  return (
    <div className="relative bg-[#6B48FF] bg-[url('images/Background-pattern.png')] w-full overflow-hidden mix-blend-multiply bg-no-repeat bg-center bg-clip-border bg-cover lg:h-[759px] 2xl:h-[919px]"> 
      <div className="max-w-7xl mx-auto px-4 lg:max-w-7xl">
        <div className="flex justify-between items-center py-8 mb-20">
          <Image src={logo} alt="logo" className="w-20"/>
          <div className="flex items-center justify-center space-x-10">
            <Link href="" className="text-white font-semibold text-base border-b transition-all duration-300 border-transparent hover:border-white border-spacing-4">About</Link>
            <Link href="" className="text-white font-semibold text-base border-b transition-all duration-300 border-transparent hover:border-white border-spacing-4">Patients</Link>
            <Link href="" className="text-white font-semibold text-base border-b transition-all duration-300 border-transparent hover:border-white border-spacing-4">Payers</Link>
            <Link href="" className="text-white font-semibold text-base border-b transition-all duration-300 border-transparent hover:border-white border-spacing-4">Contact Us</Link>
          </div>
          <div>
            <Link href="" className="bg-white text-[#6B48FF] py-3 px-6 rounded-md font-semibold transition-all duration-500 hover:bg-[#5337C9] hover:text-white">Schedule a demo</Link>
          </div>
        </div>
        {/* hero */}
        <div className="grid grid-cols-2 relative">
          <div className="w-full col-span-1 pt-5 lg:pt-5 xl:pt-10">
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h1 className="bg-white text-sm font-medium py-1 px-4 rounded-full text-center max-w-[25rem]">Transforming Healthcare Management for Excellence</h1>
              </div>
              <p className="text-white font-extrabold text-[3rem] leading-[1.25] -tracking-wide lg:text-[2.5rem]"> Seamlessly Simplify Patient Care and Elevate your Medical Practice.</p>
              <p className="text-white text-lg font-normal leading-relaxed max-w-lg">Be at the forefront of the transformative journey as we bring together Practitioners, Patients, Payers and other key players!</p>
              <div>
                <Link href="" className="bg-white text-[#6B48FF] py-2 sm:py-3 px-3 sm:px-6 rounded-md font-semibold transition-all duration-500 hover:bg-[#5337C9] hover:text-white">Join our Beta Program</Link>
              </div>
            </div>
          </div>
          <Image src={heroImage} className="w-auto absolute right-0 xl:translate-x-[20rem] 2xl:translate-x-[29rem] lg:translate-x-40 lg:h-[600px] 2xl:h-[750px]" />
        </div> 
      </div> 
    </div>
  );
}
