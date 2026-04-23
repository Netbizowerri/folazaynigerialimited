import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const ContractsForm = ({ register }: FormProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Contract Type *</label>
        <select
          {...register('serviceSpecificFields.contractType')}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
        >
          <option value="Civil Contract">Civil Contract</option>
          <option value="Commercial Contract">Commercial Contract</option>
          <option value="Supply Contract">Supply Contract</option>
          <option value="Project Management">Project Management</option>
          <option value="Consultancy">Consultancy</option>
        </select>
      </div>

      <div className="space-y-2 md:col-span-2">
        <label className="block text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Project Description *</label>
        <textarea
          {...register('serviceSpecificFields.projectDescription')}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#1A5086] outline-none transition-all"
          placeholder="Briefly describe the project..."
        />
      </div>
    </div>
  );
};

export default ContractsForm;
