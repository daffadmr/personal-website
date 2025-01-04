"use client";
import { EyeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../app/projects/styles.module.css";

interface Tech {
  name: string;
  icon: string;
}
type ProjectCardProps = {
  image_url: string;
  title: string;
  repository_url: string;
  project_url: string;
  description: string;
  tech: Array<Tech>;
};

const ProjectCard = ({
  image_url,
  title,
  repository_url,
  project_url,
  description,
  tech,
}: ProjectCardProps) => {
  const [width, setWidth] = useState(0);
  const isMedium = width >= 985;

  const handleResize = () =>
    typeof window !== undefined && setWidth(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [width]);

  return (
    <div
      className={`card dark:bg-slate-700 max-w-md flex flex-col gap-2 shadow-xl rounded w-full dark:border-0 transition-all duration-200 ${styles.imageAnchor}`}
    >
      {isMedium ? (
        image_url !== null ? (
          <a href={project_url} target="_blank">
            <div className="relative">
              <div className="flex items-center justify-center hover:opacity-70">
                <div
                  className={`bg-slate-800 w-full absolute z-10 top-0 left-0 bottom-0 ${styles.cover}`}
                ></div>
                <span
                  className={`flex gap-2 bg-transparent text-white z-20 px-2 py-1 rounded absolute top-1/2 ${styles.eye}`}
                >
                  <EyeIcon width={20} />
                  Click the image to visit live website
                </span>
              </div>
              <Image
                src={image_url}
                width={500}
                height={500}
                loading={"eager"}
                alt={`${title}'s photo`}
                className="rounded-t min-h-[200px] max-h-[200px] w-full"
                priority={true}
              />
            </div>
          </a>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
            alignmentBaseline="central"
            width={50}
            height={50}
            className="rounded-t min-h-[200px] max-h-[200px] w-[50px] text-slate-500 hidden md:inline"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        )
      ) : (
        <div className="image-container relative w-full h-[200px] object-contain">
          <Image
            src={image_url}
            fill
            unoptimized={true}
            alt={`${title}'s photo`}
            priority={true}
          />
        </div>
      )}
      <div className="pt-4 pb-7 pl-6 pr-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg">{title}</div>
          <div className="flex gap-2">
            <a
              href={repository_url}
              target="_blank"
              className="inline-block hover:bg-slate-800 p-2 dark:hover:bg-slate-500 hover:text-slate-100 dark:hover:text-slate-800  rounded"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.559 8.855c.166 1.183.789 3.207 3.087 4.079C11 13.829 11 14.534 11 15v.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-.466 0-1.171 2.354-2.065 2.298-.872 2.921-2.896 3.087-4.079C19.912 8.441 21 7.102 21 5.5 21 3.57 19.43 2 17.5 2S14 3.57 14 5.5c0 1.552 1.022 2.855 2.424 3.313-.146.735-.565 1.791-1.778 2.252-1.192.452-2.053.953-2.646 1.536-.593-.583-1.453-1.084-2.646-1.536-1.213-.461-1.633-1.517-1.778-2.252C8.978 8.355 10 7.052 10 5.5 10 3.57 8.43 2 6.5 2S3 3.57 3 5.5c0 1.602 1.088 2.941 2.559 3.355zM17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7 16 6.327 16 5.5 16.673 4 17.5 4zm-4 14.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5zM6.5 4C7.327 4 8 4.673 8 5.5S7.327 7 6.5 7 5 6.327 5 5.5 5.673 4 6.5 4z"></path>
              </svg>
            </a>
            {!isMedium && (
              <a
                href={project_url}
                target="_blank"
                className="inline-block hover:bg-slate-800 p-2 dark:hover:bg-slate-500 hover:text-slate-100 dark:hover:text-slate-800  rounded"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>
        <div>{description}</div>
        <div className="flex gap-5">
          {tech.map((t: any) => (
            <Image
              src={`/images/tech/${t.icon}`}
              alt={t.name}
              width={30}
              height={30}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
