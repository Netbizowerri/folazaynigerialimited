import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const AgricultureForm = ({ register }: FormProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Area of Interest *</label>
        <select
          {...register('serviceSpecificFields.areaOfInterest')}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        >
          <option value="Crop Cultivation">Crop Cultivation</option>
          <option value="Livestock Farming">Livestock Farming</option>
          <option value="Farm Processing">Farm Processing</option>
          <option value="Agricultural Investment">Agricultural Investment</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Specific Crop/Livestock *</label>
        <input
          {...register('serviceSpecificFields.cropOrLivestock')}
          placeholder="e.g. Cassava, Poultry"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Farm Size (Hectares)</label>
        <input
          type="number"
          {...register('serviceSpecificFields.farmSize', { valueAsNumber: true })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Existing Land?</label>
        <select
          {...register('serviceSpecificFields.hasExistingLand')}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
    </div>
  );
};

export default AgricultureForm;
