import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const GeneralTradingForm = ({ register }: FormProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Goods Needed *</label>
        <input
          {...register('serviceSpecificFields.goodsNeeded')}
          placeholder="What are you looking to buy?"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Quantity *</label>
        <input
          type="number"
          {...register('serviceSpecificFields.quantity', { valueAsNumber: true })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Unit *</label>
        <select
          {...register('serviceSpecificFields.unit')}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        >
          <option value="Pieces">Pieces</option>
          <option value="Cartons">Cartons</option>
          <option value="Kg">Kg</option>
          <option value="Tonnes">Tonnes</option>
          <option value="Litres">Litres</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Procurement Support? *</label>
        <div className="flex gap-6 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" {...register('serviceSpecificFields.procurementSupport')} value="Yes" />
            <span className="text-sm">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" {...register('serviceSpecificFields.procurementSupport')} value="No" />
            <span className="text-sm">No</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default GeneralTradingForm;
