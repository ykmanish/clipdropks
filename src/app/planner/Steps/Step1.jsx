import Input from "../../../components/Reusables/Input";
import Button from "../../../components/Reusables/Button";

const Step1 = ({ formData, onChange, onNext }) => {
  return (
    <div>
      <h1 className="mt-8 text-2xl small lg:text-3xl dark:text-[#ffffff] text-[#0c0c0c]">Let’s start at the very beginning</h1>
      <form className="flex flex-col">
        <Input name="name" value={formData.name} onChange={onChange} label="Name" type="text" className="lg:w-2/3 mt-6" />
        <Input name="email" value={formData.email} onChange={onChange} label="Email" type="email" className="lg:w-2/3 mt-4" />
        <Input name="company" value={formData.company} onChange={onChange} label="Company" type="text" className="lg:w-2/3 mt-4" />
        <Button text="Next Step" onClick={onNext} className="mt-6 w-fit px-6" />
      </form>
    </div>
  );
};

export default Step1;
