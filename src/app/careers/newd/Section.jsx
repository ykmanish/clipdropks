import React from "react";

const Section = ({ id, title, children, className }) => {
  return (
    <section id={id} className={className}>
      <div className={`text-3xl ${id === "section1" ? "font-bold" : "font-normal"} mb-4`}>
        {id === "section1" ? (
          <>
            <span className="font-normal dark:text-[#ffffff]">
              ClipDropks is looking for a <br />
            </span>
            <h1 className="dark:text-[#ffffff] text-[#0c0c0c]">{title}</h1>
          </>
        ) : (
          <>
          <h1 className="mb-8 dark:text-[#ffffff]">
          {title}
          </h1>
          </>
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;
