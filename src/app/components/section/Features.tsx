"use client";

import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import {
  BlocksIcon,
  CalendarDaysIcon,
  ChartColumnBig,
  HourglassIcon,
} from "lucide-react";

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    icon: (
      <CalendarDaysIcon
        className="w-15 h-15 text-black items-start"
        stroke="#0891b2"
      />
    ),
    title: "Scheduling",
    description:
      "Create task schedules synced to your natural energy peaks and troughs.",
  },
  {
    icon: <ChartColumnBig className="w-15 h-15 text-black" stroke="#0891b2" />,
    title: "Analytics",
    description:
      "Track your productivity trends with comprehensive data and insights.",
  },
  {
    icon: <BlocksIcon className="w-15 h-15 text-black" stroke="#0891b2" />,
    title: "Integrations",
    description:
      "Incorporate wellness practices into your daily plan with reminders for meditation, hydration, and more.",
  },
  {
    icon: <HourglassIcon className="w-15 h-15 text-black" stroke="#0891b2" />,
    title: "Focus Timer",
    description:
      "Use the built-in Pomodoro timer for focused work sessions with customizable intervals.",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#f6fffe]">
      <Container>
        <SectionTitle className="text-[#334155]" title="Robust features" />

        <div className="grid md:grid-cols-4 gap-4 mt-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center  p-10 rounded-2xl  "
            >
              <div className="mb-6">{item.icon}</div>

              <h3 className="text-xl font-semibold items-start">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 text-base leading-relaxed ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
