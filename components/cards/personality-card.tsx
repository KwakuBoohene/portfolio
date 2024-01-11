import { Personality } from "@/types";
import Image from "next/image";
import React from "react";

interface PersonalityCardProps {
  personality: Personality;
}

const PersonalityCard = ({ personality }: PersonalityCardProps) => {
  const { title, desc, img, colspan } = personality;
  return (
    <article className={`grid grid-cols-12 py-5`}>
      <div className="col-span-2">
        <div className="w-full flex justify-center">
          <img className="w-[180px]" src={img} alt={title} />
        </div>
      </div>
      <div className="col-span-10 pl-5">
        <div className="flex flex-col justify-center h-full">
          <p className="text-bluey font-medium">{title}</p>
          <p className="mt-4 font-light">{desc}</p>
        </div>
      </div>
    </article>
  );
};

export default PersonalityCard;
