import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const EstateForm = ({ register }: FormProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Service Type *</label>
        <select
          {...register('serviceSpecificFields.serviceType')}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        >
          <option value="Land Purchase">Land Purchase</option>
          <option value="Property Development">Property Development</option>
          <option value="Real Estate Consultancy">Real Estate Consultancy</option>
          <option value="Property Marketing & Brokerage">Property Marketing & Brokerage</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Location of Interest *</label>
        <input
          {...register('serviceSpecificFields.locationOfInterest')}
          placeholder="e.g. Ikorodu, Lagos"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Budget Range *</label>
        <select
          {...register('serviceSpecificFields.budgetRange')}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        >
          <option value="Below ₦1M">Below ₦1M</option>
          <option value="₦1M–₦5M">₦1M–₦5M</option>
          <option value="₦5M–₦20M">₦5M–₦20M</option>
          <option value="₦20M–₦50M">₦20M–₦50M</option>
          <option value="₦50M+">₦50M+</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Property Type *</label>
        <select
          {...register('serviceSpecificFields.propertyType')}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        >
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Industrial">Industrial</option>
          <option value="Mixed-Use">Mixed-Use</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Are You Buying or Selling? *</label>
        <div className="flex gap-6 mt-2">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="radio" {...register('serviceSpecificFields.buyingOrSelling')} value="Buying" className="w-4 h-4 text-[#1A5086]" />
            <span className="text-sm font-medium">Buying</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="radio" {...register('serviceSpecificFields.buyingOrSelling')} value="Selling" className="w-4 h-4 text-[#1A5086]" />
            <span className="text-sm font-medium">Selling</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="radio" {...register('serviceSpecificFields.buyingOrSelling')} value="Both" className="w-4 h-4 text-[#1A5086]" />
            <span className="text-sm font-medium">Both</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default EstateForm;
