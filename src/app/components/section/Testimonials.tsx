"use client";

import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import Image from "next/image";
import dgimg from "../../assets/image/digitalmarketer.avif";

type TestimonialItem = {
  name: string;
  role: string;
  message: string;
  avatar?: string;
};

const testimonials: TestimonialItem[] = [
  {
    name: "Ayesha W.",
    role: "Digital Marketing Specialist",
    message: `"Flowrise has made burnout a thing of the past. It's a game-changer for work-life balance. It's not just a productivity app—it's a lifestyle enhancer."`,

    avatar: "/avatars/michael.jpg",
  },
  {
    name: "Mark R.",
    role: "Nonprofit founder",
    message: `"Before Flowrise, I was always running against the clock. Now, I work in harmony with my natural rhythms. My productivity and wellbeing have never been better!"`,
    avatar: "/avatars/michael.jpg",
  },
  {
    name: "Emily W.",
    role: "UX Designer",
    message: `"Flowrise has revolutionized my workday! It adapts to my energy and helps me optimize my daily tasks. I'm more productive and happier than ever!"`,
    avatar: "/avatars/sofia.jpg",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#f6fffe] text-[#334155] text-[24px] leading-8	"
    >
      <Container>
        <SectionTitle title="What Our Users Say" />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="flex flex-col items-center ">
                <p className="text-xl md:text-2xl font-normal font-body text-slate-600 ">
                  {item.message}
                </p>
                <div className="flex flex-row gap-3 mt-4">
                  {item.avatar && (
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="rounded-full mb-4 object-cover"
                    />
                  )}
                  <div className="flex flex-col">
                    <h4 className="mt-4 text-base font-medium">{item.name}</h4>
                    <span className="text-gray-500 text-sm text-wrap ">
                      {item.role}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
