import { 
  EstateForm, 
  GeneralTradingForm, 
  AgricultureForm, 
  FarmProductsForm, 
  FinancialForm, 
  PetroleumForm, 
  ContractsForm 
} from '../components/booking/forms';

export const serviceFormMap: Record<string, any> = {
  'estate-development-land-brokerage': EstateForm,
  'general-trading': GeneralTradingForm,
  'agriculture-farming': AgricultureForm,
  'sale-of-farm-products': FarmProductsForm,
  'financial-investments': FinancialForm,
  'petroleum-products-sales': PetroleumForm,
  'general-contracts': ContractsForm,
};
