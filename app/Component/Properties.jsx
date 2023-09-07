import Image from "next/image";
import Link from "next/link";
import millify from "millify";

import { FaBed, FaBath } from "react-icons/fa";
import { BiSolidGridAlt } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import cardImg from "../../assets/images/card/rent-card.jpg";
import cardLogo from "../../assets/images/card/rent-card logo.jpg";
import blueTic from "../../assets/images/card/blueTic.svg";

const Properties = () => {
  return (
    <>
      <div class="max-w-sm bg-gray-300 border border-gray-200 rounded-lg shadow overflow-auto cursor-pointer hover:shadow-lg transform hover:-translate-y-2 duration-300 ">
        {/* card top starts  */}
        <div className="cardTop  ">
          <Image src={cardImg} />
        </div>
        {/* card top ends  */}

        {/*  */}

        {/* card bottom starts  */}

        <div className="cardBottom  px-2 py-4 flex justify-between  ">
          {/* left side of card starts  */}
          <div className="peopertyLeft  w-[82%] ">
            {/* property left side  */}
            <div className="propertyLeft  mb-1 ">
              <div className="propertyLeftContainer  flex ">
                <Image src={blueTic} />

                <p className=" pl-3 text-lg font-semibold ">
                  AED 19.5K/monthly
                </p>
              </div>
            </div>

            {/* property icon section  */}
            <div className="propertyIcon  flex justify-around items-center mb-2 ">
              <p className=" roomNo  ">1</p>

              <FaBed />

              <p>|</p>

              <p className=" bathRoom  ">1</p>

              <FaBath />

              <p>|</p>

              <p className=" roomSize ">73.4 sqft</p>

              <BiSolidGridAlt />
            </div>

            {/* property start  */}
            <div className="propertyStar  flex text-xl mb-2 ">
              <AiFillStar className="  text-yellow-400 " />
              <AiFillStar className="  text-yellow-400 " />
              <AiFillStar className="  text-yellow-400 " />
              <AiFillStar className="  text-yellow-400 " />
            </div>

            {/* property description  */}
            <div className="propertyDescription text-gray-800 ">
              <p>Modern Furnished | Best Amenit...</p>
            </div>

            {/*  */}
          </div>
          {/* left side of card ends */}

          {/* right side of card starts  */}

          <div className="peopertyRight  w-[18%] ">
            <div className="imgContainer w-[80%] m-auto  ">
              <Image src={cardLogo} />
            </div>
          </div>

          {/* right side of card ends */}
        </div>

        {/* card bottom ends */}
      </div>
    </>
  );
};

export default Properties;
