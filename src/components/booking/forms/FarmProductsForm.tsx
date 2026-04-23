import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const FarmProductsForm = ({ register }: FormProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Product Category *</label>
        <select
          {...register('serviceSpecificFields.productType')}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        >
          <option value="Fresh Produce">Fresh Produce</option>
          <option value="Processed Produce">Processed Produce</option>
          <option value="Grains">Grains</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Livestock Products">Livestock Products</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Quantity *</label>
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
            <option value="Kg">Kg</option>
            <option value="Tonnes">Tonnes</option>
            <option value="Bags">Bags</option>
            <option value="Crates">Crates</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FarmProductsForm;
