import React from 'react'

export default function Experiences() {

    const experiences = [
        {
          experienceName: "Swiftride",
          experienceLink: "github.com",
        },
      ];

      

  return (
    <div className="w-full h-full p-8 bg-black rounded-lg">
    {experiences.map((experience) => {
      return (
        <div
          className="  h-[20%]"
          style={{
            backgroundImage:
              " linear-gradient(92deg,  #E8D52B 15.83%, rgba(14, 180, 217, 0.99) 107.25%)",
          }}
        >
          <div className=" h-[99%] hover:h-[98%] p-2 flex flex-col justify-center bg-black">
            <h1 className="text-3xl font-bold">{experience.experienceName}</h1>
          </div>
        </div>
      );
    })}
  </div>
  )
}
