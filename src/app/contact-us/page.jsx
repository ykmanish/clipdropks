import React from "react";
import Input from "../../components/Reusables/Input";
import TextArea from "../../components/Reusables/Textarea";
import Link from "next/link";
import NewsCheck from "@/components/Reusables/NewsCheck";
const page = () => {
  return (
    <div>
      <div className=" max-w-7xl mx-auto h-auto py-14 mt-14 ">
        <div className="lg:grid flex flex-col lg:flex-row gap-4 p-4 lg:grid-cols-6">
          <div className="lg:col-span-4  flex  flex-col">
            <div className="flex flex-col lg:flex-row items-start ">
              <h1 className="small flex items-center justify-start gap-2 text-[17px] dark:text-[#ffffff] text-[#0c0c0c]">
                <span className="bg-[#0c0c0c] dark:bg-[#ffffff] w-2 h-2 rounded-full"></span>
                contact
              </h1>
              <h1 className="small flex lg:ml-24 font-semibold lg:-mt-8 mt-6  tracking-tight justify-end gap-2 text-7xl lg:text-9xl dark:text-[#ffffff]  text-[#0c0c0c]">
                <span className="text-zinc-300 dark:text-zinc-500 mr-4">It’s</span>nice{" "}
                <span className="text-zinc-300 dark:text-zinc-500 ml-4">to</span>
              </h1>
            </div>
            <div className="flex lg:flex-row flex-col  items-start ">
              <h1 className="small flex font-semibold tracking-tight  gap-2 text-7xl lg:text-9xl dark:text-[#ffffff]  text-[#0c0c0c]">
                meet <span className="text-zinc-300 dark:text-zinc-500 ml-4">ya</span>
              </h1>
              <span className="bg-[#c2ff47] flex group   justify-center items-center lg:ml-10 mt-3 h-10 w-10 lg:w-24 lg:h-24 rounded-full">
                <img
                  src="/lbarrow.svg"
                  className="lg:w-10 lg:h-10 w-6 h-6 group-hover:rotate-90 duration-500 transition-all rotate-45  "
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="col-span-2 flex justify-center lg:justify-end">
            <div className="bg-[#0c0c0c] w-full lg:w-60 h-80 rounded-3xl"></div>
          </div>
        </div>
        <div className="border-b  dark:border-zinc-800 mt-6 lg:mt-8"></div>



        <div className="lg:grid lg:mt-8 mt-6 flex flex-col p-4 lg:grid-cols-8">
          <div className="lg:col-span-3 mt-14 lg:mt-0 order-last lg:order-first lg:max-w-sm  flex flex-col">
            <h1 className="small dark:text-zinc-100 text-[#0c0c0c] font-light text-[16px] lg:text-[17px]">
              For general enquiries, please fill out the form to get in touch.
              Alternatively, if you know your project details — head over to our
              project planner for a more refined step-by-step.
            </h1>
            <div className="flex group ">
              <Link href="/planner">
              <button className="bg-[#c2ff47] flex items-center justify-center  text-black w-fit px-6  h-10 small rounded-full mt-8">
                Go to Project Planner
                <img
                  src="/lbarrow.svg"
                  className="w-6 group-hover:rotate-0 duration-500  transition-all -rotate-45  h-6"
                  alt=""
                />
              </button>
              </Link>
            </div>
            {/* <h1 className="mt-6 text-zinc-500 small">Hate contact forms? <span className="text-[#0c0c0c] ml-5">hello@madebyshape.co.uk</span></h1> */}
          </div>
          <div className="lg:col-span-5">
            <form>
              <div className="lg:grid flex flex-col  lg:grid-cols-2 gap-4">
                <Input label="Name" type="name" />
                <Input label="Email Address" type="email" />
                <Input label="Phone (Optional)" type="text" />
                <Input
                  label="How did you hear about Quantafile?"
                  type="email"
                />
              </div>
              <TextArea
                label="Tell us about your project"
                value=""
                className="mt-4 w-full "
              />
              <div className="flex ml-3 flex-col mt-5">
                <NewsCheck/>

                <h1 className="small mt-4 dark:text-zinc-300 text-zinc-800 text-sm">
                  By submitting this form I accept the Privacy Policy of this
                  site.
                </h1>
                <button className="bg-[#010101] dark:bg-[#ffffff] dark:text-[#0c0c0c] flex items-center  w-fit px-6  text-[#ffffff] h-10 small rounded-full mt-6">
                  Send Message
                  <img
                    src="/lwarrow.svg"
                    className="w-6 group-hover:rotate-0 duration-500  transition-all -rotate-45  h-6"
                    alt=""
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="mt-20">
          <h1 className="text-start small text-[#0c0c0c] text-4xl">
            Hate contact forms?
          </h1>
          <p className="mt-6 text-start text-[#0c0c0c] font-semibold small text-6xl">
            contact@quantafile.com
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default page;
