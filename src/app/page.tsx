import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const page = () => {
  return (
    <main className="container py-12 flex flex-col justify-center items-center md:min-h-[89vh]">
      <div className="hero pb-6 md:pb-12 flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-12">
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
            <strong>a Frontend Developer</strong>
          </div>
          <Contact />
        </div>
      </div>
      <p className="text-center">
        My name is Daffa Damar Ardhika, a frontend developer currently focused
        on Vue.js, with experience in React as well. I enjoy crafting seamless
        and interactive user experiences and am passionate about using Tailwind
        CSS for styling and layouting.
      </p>
      <div className="py-12 gap-5 flex flex-col flex-wrap overflow-auto max-w-[80dvw]">
        <GitHubCalendar username="daffadmr" />
      </div>
    </main>
  );
};

export default page;
