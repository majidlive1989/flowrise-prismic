import React from "react";
import Image from "next/image";
import cta1 from "../../assets/image/cta1.avif";
import cta2 from "../../assets/image/cta2.avif";
import cta3 from "../../assets/image/cta3.avif";
const CTA = () => {
  return (
    <div>
      <div className="flex flex-row gap-9 justify-center py-[64px] px-[24px] ">
        <Image
          quality={100}
          width={560}
          height={617}
          src={cta1}
          alt="cta1"
          className="rounded-[8px]"
        />

        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-[#334155] text-[48px] font-semibold">
            Harmonize your schedule
          </h1>
          <p className="flex justify-items-start  text-[18px] text-slate-600 w-[450px]">
            Align tasks with your natural energy rhythms. Embrace tailored
            productivity.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-9 justify-center py-[64px] px-[24px] ">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-[#334155] text-[48px] font-semibold">
            Mindful task tracking
          </h1>
          <p className="flex justify-items-start  text-[18px] text-slate-600 w-[450px]">
            Blend productivity with mindfulness. Understand your patterns,
            enhance focus
          </p>
        </div>
        <Image
          quality={100}
          width={560}
          height={617}
          src={cta2}
          alt="cta2"
          className="rounded-[8px]"
        />
      </div>
      <div className="flex flex-row gap-9 justify-center py-[64px] px-[24px] ">
        <Image
          quality={100}
          width={560}
          height={617}
          src={cta3}
          alt="cta3"
          className="rounded-[8px]"
        />

        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-[#334155] text-[48px] font-semibold">
            Productivity and self care
          </h1>
          <p className="flex justify-items-start  text-[18px] text-slate-600 w-[450px]">
            Beyond task completion. Embrace self-care routines, foster a
            healthier lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
