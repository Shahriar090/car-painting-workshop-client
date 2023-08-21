import React from "react";
import painterImg from "../../../assets/painter.jpg";
import { SkillBars } from 'react-skills';



const Skills = () => {

    const skillsData = [
        {
          name: 'Experience',
          level: 95,
          color: 'green',
        },
        {
          name: 'Abilities & Skills',
          level: 97,
          color: 'orange',
        }
      ];
  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
      <div className="main-img relative w-1/2">
        <img src={painterImg} className="rounded-lg w-full " alt="Loading " />
        <div className="img-overlay absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-black to-transparent"></div>
        <div className="img-text absolute bottom-0 right-0  border-2 border-orange-600 p-12 bg-black opacity-70">
          <h1 className="text-white font-bold text-3xl">
            <span className="text-orange-600">150</span>+ Project Complete
          </h1>
        </div>
      </div>
      <div className="text text-white w-1/2 p-6">
        <h3 className="text-orange-600 text-xl font-semibold uppercase">
          Why Choose Us
        </h3>
        <h1 className="text-5xl uppercase font-bold mt-3">
          Experienced Paint Workshop
        </h1>
        <p className="mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          excepturi pariatur? Ut beatae adipisci nisi voluptate quidem harum
          distinctio nesciunt quos eaque blanditiis autem perferendis, maiores
          quis dolores voluptas porro!
        </p>
        <br></br>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          excepturi pariatur? Ut beatae adipisci nisi voluptate quidem harum
          distinctio nesciunt quos eaque blanditiis autem perferendis, maiores
          quis dolores voluptas porro!
        </p>

        <div className="skills-bar mt-12">
        <SkillBars 
        
        skills={skillsData} 
        
        />
        </div>
      </div>
    </div>
  );
};

export default Skills;
