import Button from "../../../components/Reusables/Button";

const Step3 = ({ formData, onChange, onNext, onBack }) => {
  return (
    <div>
      <h1 className="mt-10 text-3xl dark:text-[#ffffff] small text-[#0c0c0c]">What services do you require?</h1>
      <div className="flex flex-wrap max-w-2xl gap-4 mt-6">
        {[
          "Web development",
          "App development",
          "UI/UX Design",
          "Cyber Security",
          "AI/ML",
          "Cloud development",
          "Blockchain",
          "Deployment & Testing",
          "I want it all!",
        ].map((service) => (
          <label key={service} className="flex small dark:text-[#ffffff] dark:border-zinc-900  border p-3 rounded-2xl border-zinc-400 w-fit items-center cursor-pointer">
            <input
              type="checkbox"
              className="mr-2 checkbox dark:border  checkbox-primary dark:border-zinc-600 rounded-full"
              value={service}
              checked={formData.services.includes(service)}
              onChange={(e) => {
                const selectedServices = formData.services.includes(service)
                  ? formData.services.filter((s) => s !== service)
                  : [...formData.services, service];
                onChange({ target: { name: "services", value: selectedServices } });
              }}
            />
            {service}
          </label>
        ))}
      </div>
      <div className="flex mt-6">
        <Button text="Back" onClick={onBack} className="mr-2 w-fit px-6 bg-gray-200" />
        <Button text="Next Step" className="w-fit px-6" onClick={onNext} />
      </div>
    </div>
  );
};

export default Step3;
