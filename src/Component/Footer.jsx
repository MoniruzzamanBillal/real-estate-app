import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const footerLeft = [
  {
    link: "Privacy Policy",
  },
  {
    link: "Terms and Conditions",
  },
  {
    link: "Contributers",
  },
];

const footerRight = [
  {
    link: "Buy Property",
  },
  {
    link: "Rent Property",
  },
  {
    link: "About Us",
  },
];

const Footer = () => {
  return (
    <>
      <div className="footerContainer py-5 border-t border-gray-500  ">
        <div className="footerWrapper m-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] flex justify-center items-center flex-col sm:flex-row  ">
          {/* footer left  */}
          <div className="footerLeftContainer  w-[85%] sm:w-[50%] mb-4 sm:mb-0 ">
            <div className="footerLeftWrapper   m-auto  flex flex-col justify-center items-center pb-5 sm:pb-8 ">
              {/*  */}

              <div className="footerTopHeading  mb-2 font-semibold text-lg  ">
                <h1>Company </h1>
              </div>

              {footerLeft.map((ele, ind) => (
                <>
                  <div
                    key={ind}
                    className={`footerContent  hover:underline cursor-pointer  ${
                      footerLeft.length - 1 === ind ? "mb-0" : "mb-2 "
                    } `}
                  >
                    <p className="  ">{ele.link}</p>
                  </div>
                </>
              ))}

              {/*  */}
            </div>
          </div>
          {/* footer left  */}
          {/*  */}
          {/* footer right  */}

          <div className="footerRightContainer  w-[85%] sm:w-[50%]">
            <div className="footerRightWrapper  m-auto flex flex-col justify-center items-center pb-4 sm:pb-8 ">
              {/*  */}
              <div className="footerTopHeading  mb-2 font-semibold text-lg ">
                <h1>Useful Links </h1>
              </div>

              {footerRight.map((ele, ind) => (
                <>
                  <div
                    key={ind}
                    className={`footerContent  hover:underline cursor-pointer  ${
                      footerRight.length - 1 === ind ? "mb-0" : "mb-2 "
                    } `}
                  >
                    <p className="  ">{ele.link}</p>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* footer right  */}
        </div>

        {/* footer bottom  */}
        <div className="footerBottom pt-2 sm:pt-6 ">
          <div className="footerBottomWrapper w-[95%] sm:w-[85%] m-auto flex flex-col justify-center items-center ">
            {/*  */}
            <div className="footerBoottomTop  mb-3 text-center text-sm sm:text-base ">
              <p>
                © 2022 Magic Properties, Inc. All rights reserved. Made by
                Moniruzzaman
              </p>
            </div>

            {/*  */}

            <div className="footerBottomIcons w-[34%] sm:w-[26%] md:w-[18%] lg:w-[16%]  flex justify-between text-2xl sm:text-3xl ">
              <a href="/">
                <AiFillLinkedin />
              </a>
              <a href="/">
                <AiFillGithub />
              </a>
              <a href="/">
                <AiOutlineTwitter />
              </a>
            </div>

            {/*  */}
          </div>
        </div>

        {/* footer bottom ends  */}
      </div>
    </>
  );
};

export default Footer;
