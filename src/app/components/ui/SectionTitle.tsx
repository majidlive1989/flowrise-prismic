import React from "react";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const SectionTitle = ({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-4xl font-bold">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
