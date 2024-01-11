import BlueLink from "@/components/blue-link";
import PersonalityCard from "@/components/cards/personality-card";
import TestimonialCard from "@/components/cards/testimonial-card";
import Heading from "@/components/hierarchy/heading";
import { OWNER } from "@/lib/constants";
import { expertise, personality, testimonials } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlMouse } from "react-icons/sl";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";

const AboutPage = () => {
  return (
    <section className="py-16 flex flex-col gap-8 max-md:py-8 px-10">
        <div className="">
        <Heading sub="About Me" title={`Hi, I'm Ayeley 👋🏾`} />
        </div>
      <div className="grid grid-cols-12">
       <div className="col-span-4 ">
       <img
       style={{maxWidth:'none'}}
              src="/images/naa.svg"
              alt={OWNER}
              className="rounded-circle w-[357px] h-[357px] border border-red-100"
            />
       </div>
        <div className="col-span-8 px-6">
          <p className="leading-loose font-light text-xl">
            I am a versatile creative based in Accra. I am passionate about
            creating beautiful digital experiences for people, especially my
            community, to make lives easier. I love to find potential solutions
            to real problems because my goal is to help; plus, I enjoy
            seeing the effects brilliant digital products have on people and
            businesses. I spend most of my time learning and improving myself
            and my skills, and I aspire to be a multifaceted digital experience
            expert and design consultant / advisor.
          </p>
          <BlueLink href="/resume" label="View My Resume" />
        </div>
      </div>


      <div className="">
        {personality.map((pers) => (
          <PersonalityCard key={pers.title} personality={pers} />
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-6 leading-lose">
        <Heading sub="Services" title={`Areas of expertise`} />
        <p className="font-light">
          My key areas of expertise are in{" "}
          <Link
            className="underline"
            href="https://www.interaction-design.org/literature/topics/ux-design"
          >
            User Experience Design (UXD),
          </Link>{" "}
          <Link
            className="underline"
            href="https://www.interaction-design.org/literature/topics/ui-design"
          >
            User Interface Design (UID)
          </Link>{" "}
          ,
          <Link
            className="underline"
            href="https://www.interaction-design.org/literature/article/what-is-interaction-design"
          >
            Interaction Design (IXD)
          </Link>{" "}
          , Product management and Digital Marketing for both web and mobile
          products. Below is a more granular breakdown of my skill-set and
          services.
        </p>
        <div className="flex flex-col gap-4">
          <p className="text-bluey font-medium">
            What i am good at (but not limited to)
          </p>
          <div className="flex flex-col gap-4">
            {expertise.map((exp) => (
              <div className="flex items-start gap-2" key={exp.title}>
                <div className="min-h-[40px] min-w-[40px]">
                  <Image
                    src={exp.icon}
                    alt={exp.title}
                    width={30}
                    height={40}
                    className="h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-medium">{exp.title}</p>
                  <p className="font-light">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <Heading sub="Testimonials" title={`Kind words from kind people`} />
        <div className="grid md:grid-cols-2 py-8 lg:grid-cols-3 gap-4 overflow-x-scroll ">
          {testimonials.map((test) => (
            <TestimonialCard key={test.name} testimonial={test} />
          ))}
        </div>
      </div>
      <a
        href="#"
        className="mt- flex flex-col gap-2 items-center justify-center"
      >
        <div className="flex flex-col items-center rotate-180   justify-center  text-xl">
          <HiOutlineChevronDoubleDown />
        </div>
      </a>
    </section>
  );
};

export default AboutPage;
