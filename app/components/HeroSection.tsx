"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import Link from "next/link";

export const HeroSection = () => {
  const text = ["Ayoub Trabelsi", 1000, "Full-Stack Developer", 1000];

  const router = useRouter();

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-3xl md:text-5xl sm:text-4xl lg:text-6xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b22cf] via-[#7074e5] to-[#74aff5]">
              Hello, I&apos;m {""}
            </span>
            <br />
            <TypeAnimation
              sequence={text}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 w-fit">
            I&apos;m just a guy who loves tech and enjoys exploring how it
            shapes our world.
          </p>
          <div>
            <button
              onClick={() => router.push("#contact")}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-r from-[#6b22cf] via-[#7074e5] to-[#74aff5] "
            >
              Hire Me
            </button>
            <Link href="resume/CV-Ayoub_Trabelsi.pdf" target="_blank">
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-[#6b22cf] via-[#7074e5] to-[#74aff5] hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-6 lg:mt-0"
        >
          <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              alt="profile photo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              src="/images/face.jpg"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
