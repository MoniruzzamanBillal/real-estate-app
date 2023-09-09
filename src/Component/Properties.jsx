import millify from "millify";

import { FaBed, FaBath } from "react-icons/fa";
import { BiSolidGridAlt } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

// import cardImg from "../../public/assets/images/card/rent-card.jpg";
import cardImg from "/images/card/rent-card.jpg";
// import cardLogo from "../../public/assets/images/card/rent-cardLogo.jpg";
import cardLogo from "/images/card/rent-cardLogo.jpg";
// import blueTic from "../../public/assets/images/card/blueTic.svg";
import blueTic from "/images/card/blueTic.svg";

const Properties = ({
  property: {
    price,
    externalID,
    coverPhoto,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
  },
}) => {
  return (
    <>
      <a href={`/property/${externalID}`}>
        <div className="  bg-gray-200 border border-blue-200 rounded-lg  overflow-auto cursor-pointer hover:shadow-md transform hover:-translate-y-1 duration-200 w-[80%] sm:w-[100%] m-auto ">
          {/* card top starts  */}
          <div className="cardTop  ">
            <div className="cardIMG bg-blue-600 h-[18rem]  ">
              <img
                src={coverPhoto ? coverPhoto?.url : cardImg}
                alt=""
                className=" w-full h-full object-fill "
              />
            </div>
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
                  <img src={isVerified ? blueTic : ""} />

                  <p className=" pl-3 text-lg font-semibold ">
                    USD {millify(price)} /{rentFrequency}
                  </p>
                </div>
              </div>

              {/* property icon section  */}
              <div className="propertyIcon  flex justify-around items-center mb-2 ">
                <p className=" roomNo  "> {rooms} </p>

                <FaBed />

                <p>|</p>

                <p className=" bathRoom  "> {baths} </p>

                <FaBath />

                <p>|</p>

                <p className=" roomSize "> {millify(area)} sqft</p>

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
              <div className="propertyDescription propertyTitle  text-gray-800 ">
                {/* <p>Modern Furnished | Best Amenit...</p> */}
                <p>
                  {title.length > 20 ? `${title.substring(0, 20)}....` : title}
                </p>
              </div>

              {/*  */}
            </div>
            {/* left side of card ends */}

            {/* right side of card starts  */}

            <div className="peopertyRight  w-[18%] ">
              <div className="imgContainer w-[75%] m-auto  ">
                <img
                  src={agency ? agency?.logo?.url : ""}
                  width={100}
                  height={200}
                />
              </div>
            </div>

            {/* right side of card ends */}
          </div>

          {/* card bottom ends */}
        </div>
      </a>
    </>
  );
};

export default Properties;
