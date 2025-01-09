import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/container-scroll-animation";

function Hero() {
    return (
        <section className="bg-gray-50 flex items-center flex-col">
            <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Introducing your financial Assistant <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-blue-950">
                 <span className= "text-red-600"> AI </span> Expense Tracker
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/dashboard.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
        </section>
    )
}

export default Hero;