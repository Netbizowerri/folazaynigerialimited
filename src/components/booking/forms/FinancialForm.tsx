import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const FinancialForm = ({ register }: FormProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Capital Range *</label>
        <select
          {...register('serviceSpecificFields.capitalRange')}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        >
          <option value="Below ₦500K">Below ₦500K</option>
          <option value="₦500K–₦2M">₦500K–₦2M</option>
          <option value="₦2M–₦10M">₦2M–₦10M</option>
          <option value="₦10M–₦50M">₦10M–₦50M</option>
          <option value="₦50M+">₦50M+</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Risk Appetite</label>
        <select
          {...register('serviceSpecificFields.riskAppetite')}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Duration</label>
        <select
          {...register('serviceSpecificFields.duration')}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        >
          <option value="Short-term Less Than 1 Year">Short-term Less Than 1 Year</option>
          <option value="Medium-term 1–3 Years">Medium-term 1–3 Years</option>
          <option value="Long-term More Than 3 Years">Long-term More Than 3 Years</option>
        </select>
      </div>
    </div>
  );
};

export default FinancialForm;
