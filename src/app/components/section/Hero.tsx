"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import img from "../../assets/image/banner.avif";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-32  bg-[#f6fffe]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-5xl md:text-7xl md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">
            Productivity that flows with your life.
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            Unleash your potential by harmonizing your daily tasks and habits
            with your unique energy rhythms.
          </p>

          <div className="mt-10 flex justify-center gap-4 rounded-full">
            <Button className="block rounded-full-important w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12  font-display text-white font-bold text-base tracking-wider mb-8 md:mb-10">
              Try for free
            </Button>
          </div>
          <Image
            className="shadow-sm hover:shadow-lg transition"
            quality={100}
            width={896}
            height={637}
            src={img}
            alt="banner"
          />
        </motion.div>
      </Container>
    </section>
  );
};
export default Hero;
