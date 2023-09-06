import Image from "next/image";
import Link from "next/link";
import buyImage from "../../assets/images/buy.jpg";

const Banner = ({
  imageUrl,
  purpose,
  title,
  description,
  buttonText,
  linkName,
}) => (
  <>
    <div className="bannerContainer  ">
      <div className="bannerWrapper  w-[70%] m-auto py-4 sm:py-8 flex justify-between items-center  flex-col sm:flex-row ">
        {/* left side of banner  */}

        <div className="bennerLeft  w-[85%] sm:w-[50%] md:w-[49%] mb-4 sm:mb-0 rounded overflow-auto ">
          <div className="bannerImage   ">
            <Image src={imageUrl} alt="banner left image " />
          </div>
        </div>
        {/* left side of banner  */}

        {/* right side of banner  */}

        <div className="bannerRight  w-[85%] sm:w-[49%] ">
          {/* banner top  */}
          <div className="bannerRightTop  text-gray-500  mb-3 sm:mb-1 md:mb-3 text-base sm:text-sm md:text-base">
            <h1>{purpose}</h1>
          </div>
          {/* banner top  */}

          {/* banner heading  */}

          <div className="bannerRightHeading  w-[100%] md:w-[90%] lg:w-[75%] font-semibold text-3xl sm:text-xl md:text-2xl lg:text-3xl mb-5 sm:mb-2 md:mb-3 lg:mb-5 ">
            <h1 className=" leading-[2.2rem] lg:leading-[2.8rem] ">{title}</h1>
          </div>

          {/* banner heading  */}

          {/* banner description  */}

          <div className="bannerDescription  text-lg sm:text-base md:text-lg text-start w-[88%] sm:w-[98%] lg:w-[70%] mb-3 sm:mb-2 md:mb-3 ">
            <h1>{description}</h1>
          </div>

          {/* banner description  */}

          {/* banner button  */}
          <div className="bannerButton">
            <button className=" bg-gray-300  text-gray-800 text-base sm:text-sm lg:text-base py-3 sm:py-2 md:py-2.5 lg:py-3 px-6 sm:px-4 md:px-5 lg:px-6 rounded-md hover:bg-gray-700 hover:text-gray-50 hover:shadow-md active:scale-[.99] font-semibold ">
              <Link href={linkName}> {buttonText} </Link>
            </button>
          </div>
          {/* banner button  */}
        </div>

        {/* right side of banner  */}
      </div>
    </div>
  </>
);

export default Banner;
