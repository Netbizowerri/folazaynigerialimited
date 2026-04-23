import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface GlobalFieldsProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const GlobalFields = ({ register, errors }: GlobalFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 pb-10 border-b border-gray-100">
      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Full Name *</label>
        <input
          {...register('fullName')}
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all ${
            errors.fullName ? 'border-red-500' : 'border-gray-200'
          }`}
          placeholder="Enter your full name"
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message as string}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Email Address *</label>
        <input
          type="email"
          {...register('email')}
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all ${
            errors.email ? 'border-red-500' : 'border-gray-200'
          }`}
          placeholder="e.g. name@example.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Phone Number *</label>
        <input
          type="tel"
          {...register('phone')}
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all ${
            errors.phone ? 'border-red-500' : 'border-gray-200'
          }`}
          placeholder="e.g. 08029062319"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message as string}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Preferred Contact Method *</label>
        <select
          {...register('preferredContactMethod')}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        >
          <option value="Phone">Phone</option>
          <option value="Email">Email</option>
          <option value="WhatsApp">WhatsApp</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">How Did You Hear About Us? *</label>
        <select
          {...register('howDidYouHear')}
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all ${
            errors.howDidYouHear ? 'border-red-500' : 'border-gray-200'
          }`}
        >
          <option value="">Select an option</option>
          <option value="Google Search">Google Search</option>
          <option value="Social Media">Social Media</option>
          <option value="Referral">Referral</option>
          <option value="Walk-in">Walk-in</option>
          <option value="Other">Other</option>
        </select>
        {errors.howDidYouHear && <p className="text-red-500 text-xs mt-1">{errors.howDidYouHear.message as string}</p>}
      </div>

      <div className="md:col-span-2 space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Additional Notes</label>
        <textarea
          {...register('additionalNotes')}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all resize-none"
          placeholder="Tell us more about your request..."
        />
      </div>
    </div>
  );
};

export default GlobalFields;
