import React from "react";
import Map from "./Map";
import Instagram from "../assets/instagramblack.png";
import Facebook from "../assets/facebook1.png";

function FindUs() {
  return (
    <>
      {" "}
      <div className="flex flex-col md:flex-row mx-auto md:gap-48 bg-red-200 ">
        <div className="w-full mx-auto md:w-1/3 mb-8 md:mb-0">
          <div className="w-full h-96 relative rounded-xl mb-12 md:mb-24">
            <h2 className="text-lg md:text-3xl font-semplicita mb-4 mt-4 text-center">
              Nous trouver :{" "}
            </h2>

            <Map />
          </div>
        </div>
        <div
          id="salon"
          className="w-full md:w-1/3 h-1/3 md:h-1/3 mx-auto md:py-12 rounded-xl mt-4 md:mt-8 overflow-hidden shadow-lg mb-4 md:mb-12 flex items-center bg-red-100"
        >
          <div className="md:w-96 flex-col text-center mx-auto">
            <h2 className="text-lg md:text-3xl font-semplicita mb-8 md:mb-8  ">
              Contact :
            </h2>
            <p className="text-gray-700 text-sm md:text-2xl font-semplicita">
              21 Cours Vitton <br></br> 69006 Lyon <br></br>TEL : 04 76 71 67 54{" "}
              <br></br>Lundi au samedi : 10h30 – 19h30 <br></br>Dimanche :
              fermée
            </p>
            <div className="flex justify-around ">
              <a href="https://www.instagram.com/chez.maria.lyon/">
                <img
                  className="w-8 h-8 md:w-12 md:h-12 mt-4 md:mt-8 mb-4"
                  src={Instagram}
                  alt="Instagram logo"
                />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100074332740719">
                <img
                  className="w-8 h-8 md:w-14 md:h-14 mt-4 md:mt-8 mb-4"
                  src={Facebook}
                  alt="Facebook logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindUs;
