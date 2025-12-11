"use client";

import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Image from "next/image";

type IntegrationItem = {
  name: string;
  logo: string;
};

const integrations: IntegrationItem[] = [
  { name: "Notion", logo: "/logos/notion.svg" },
  { name: "Slack", logo: "/logos/slack.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Vercel", logo: "/logos/vercel.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
];

const Integrations = () => {
  return (
    <section className="py-24 bg-gray-50" id="integrations">
      <Container>
        <SectionTitle
          title="Seamless Integrations"
          subtitle="Connect your workflow to the tools you already love."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center mt-14">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="flex justify-center opacity-70 hover:opacity-100 transition"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Integrations;
