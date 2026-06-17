import type { ComponentType } from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { 
  EstateForm, 
  GeneralTradingForm, 
  AgricultureForm, 
  FarmProductsForm, 
  FinancialForm, 
  PetroleumForm, 
  ContractsForm 
} from '../components/booking/forms';

interface FormComponentProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

export const serviceFormMap: Record<string, ComponentType<FormComponentProps>> = {
  'estate-development-land-brokerage': EstateForm,
  'general-trading': GeneralTradingForm,
  'agriculture-farming': AgricultureForm,
  'sale-of-farm-products': FarmProductsForm,
  'financial-investments': FinancialForm,
  'petroleum-products-sales': PetroleumForm,
  'general-contracts': ContractsForm,
};
