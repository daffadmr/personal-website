"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const DarkModeBtn = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex px-1 py-[2px] gap-1 dark:bg-slate-800 bg-slate-100 border hover:border-black dark:hover:border-white hover:ring-2 hover:ring-slate-800 dark:hover:ring-slate-200 border-slate-500 shadow-lg rounded-3xl relative cursor-pointer"
      onClick={() => {
        theme === "dark" ? setTheme("light") : theme === "light" ? setTheme("dark") : null;
      }}
    >
      <div className="absolute dark:bg-white bg-slate-800 w-[20px] h-[20px] dark:translate-x-[24px] top-[2px] bottom-0 left-1 rounded-full transition-all duration-300"></div>
      <SunIcon
        width={20}
				className="dark:text-white text-transparent"
      />
      <MoonIcon
        width={20}
				className="text-slate-800 dark:text-transparent"
      />
    </div>
  );
};
export default DarkModeBtn;
