import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const PetroleumForm = ({ register }: FormProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Product Type *</label>
        <select
          {...register('serviceSpecificFields.productType')}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        >
          <option value="PMS Petrol">PMS Petrol</option>
          <option value="AGO Diesel">AGO Diesel</option>
          <option value="DPK Kerosene">DPK Kerosene</option>
          <option value="Lubricants">Lubricants</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Quantity Required *</label>
        <div className="flex gap-2">
          <input
            type="number"
            {...register('serviceSpecificFields.quantity', { valueAsNumber: true })}
            className="w-2/3 px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
          />
          <select
            {...register('serviceSpecificFields.unit')}
            className="w-1/3 px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
          >
            <option value="Litres">Litres</option>
            <option value="Metric Tonnes">Metric Tonnes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PetroleumForm;
