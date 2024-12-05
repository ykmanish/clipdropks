import Input from "../../../components/Reusables/Input";
import Button from "../../../components/Reusables/Button";

const Step2 = ({ formData, onChange, onNext, onBack }) => {
  return (
    <div>
      <h1 className="mt-10 text-3xl small dark:text-[#ffffff] text-[#0c0c0c]">Select Date and Budget</h1>
      <form className="flex flex-col">
        <Input name="date" value={formData.date} onChange={onChange} label="DD/MM/YYYY" type="text" className="w-2/3 mt-6" />
        <Input name="budget" value={formData.budget} onChange={onChange} label="Budget" type="text" className="w-2/3 mt-4" />
        <div className="flex mt-6">
          <Button text="Back" onClick={onBack} className="mr-2 bg-gray-200 w-fit px-6" />
          <Button text="Next Step" className="w-fit px-6 " onClick={onNext} />
        </div>
      </form>
    </div>
  );
};

export default Step2;
