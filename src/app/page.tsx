import Contact from "@/components/Contact";
import Skill from "@/components/Skill";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="container py-12 lg:py-20 flex flex-col justify-center items-center md:min-h-[89vh]">
      <div className="hero pb-6 md:pb-20 flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-12">
        <Image
          src={"me.jpg"}
          unoptimized={true}
          width={250}
          height={250}
          alt="Daffa's picture"
          className="rounded-full p-2 border-4 w-[200px] md:w-[250px]"
        />
        <div className="text flex flex-col">
          <div>Hello,</div>
          <div className="text-5xl">
            <strong>I'm Daffa</strong>
          </div>
          <div>
            <strong>A Front-End Web Enthusiast</strong>
          </div>
          <Contact />
        </div>
      </div>
      <p className=" text-justify">
        My name is Daffa Damar Ardhika, a passionate individual with a strong
        interest in front-end web development. I find immense joy in creating
        engaging and user-friendly websites, and I am particularly drawn to the
        power and versatility of technologies like React and Svelte.
      </p>
      <div className="flex flex-col items-center pt-20 gap-5">
        <h1>Skills</h1>
        <Skill />
      </div>
    </main>
  );
};

export default page;
