"use client";
import { AnnouncementQuery } from "@/tina/__generated__/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { tinaField } from "tinacms/dist/react";

export default function AnnouncementBar({
  message,
  discount,
  button,
  link,
  display,
  data,
}: {
  message: string;
  discount: string;
  button: string;
  link: string;
  display?: boolean;
  data: AnnouncementQuery;
}) {
  const navigation = useRouter();
  return (
    <Link href={link}>
      <div
        className={`ffixed inset-x-0 top-0 z-50 ${display ? "" : "hidden"}`}
        data-tina-field={tinaField(data, "announcement")}
      >
        <div className="bg-accent">
          <div className="marquee md:animate-none mx-auto max-w-7xl py-1 md:py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex w-fit mx-auto text-sm md:text-lg items-center flex-row justify-center">
              <div className="flex flex-1 items-center justify-center mr-3 lg:flex-none">
                <p className="ml-3 text-center font-medium text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="mr-2 h-6 w-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    ></path>
                  </svg>
                  <span>{message}</span>{" "}
                  <span className="font-black">{discount}</span>
                </p>
              </div>
              <div className="mt-2 fw-full hidden md:block flex-shrink-0 lg:mt-0 lg:w-auto">
                <button
                  onClick={() => navigation.push(link)}
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-1 text-sm font-medium text-black shadow-sm hover:bg-teal-50"
                >
                  {button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
