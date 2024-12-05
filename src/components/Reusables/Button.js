const Button = ({ type, onClick, text, className, customImage, rotate, bgColor }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${className} ${bgColor || "bg-[#c2ff47]"} flex justify-center  items-center lg:text-[14px] text-[15px] text-[#0c0c0c] h-10 small rounded-full`}
    >
      {text}
      <img
        src={customImage || "/lbarrow.svg"}
        className={`lg:w-6 w-5 h-5 ${rotate ? "group-hover:rotate-0 duration-500 transition-all -rotate-45" : ""} lg:h-6`}
        alt=""
      />
    </button>
  );
};

export default Button;
