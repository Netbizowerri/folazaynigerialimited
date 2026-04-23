import { 
  Buildings, 
  Package, 
  Plant, 
  Basket, 
  ChartLineUp, 
  Drop, 
  Handshake 
} from '@phosphor-icons/react';

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  tagline: string;
  icon: any;
  path: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'estate',
    name: 'Estate Development & Land Brokerage',
    slug: 'estate-development-land-brokerage',
    path: '/services/estate-development-land-brokerage',
    tagline: 'Securing your future with premium property assets.',
    shortDescription: 'Acquisition, development, and brokerage of high-value properties in Nigeria.',
    description: 'We specialize in the acquisition, development, and sale of premium landed properties. Our brokerage services connect buyers with verified land and property assets, ensuring transparency and growth.',
    icon: Buildings,
    image: 'https://i.ibb.co/bM4FXMRT/FOLAZAY-1.jpg'
  },
  {
    id: 'trading',
    name: 'General Trading',
    slug: 'general-trading',
    path: '/services/general-trading',
    tagline: 'Excellence in procurement and global logistics.',
    shortDescription: 'Reliable supply chain solutions and general merchant services.',
    description: 'Folazay Nigeria Limited serves as a major player in general trading, facilitating the supply and distribution of various goods with a focus on quality procurement and logistics excellence.',
    icon: Package,
    image: 'https://i.ibb.co/0RBNgLNZ/FOLAZAY-3.jpg'
  },
  {
    id: 'agriculture',
    name: 'Agriculture & Farming',
    slug: 'agriculture-farming',
    path: '/services/agriculture-farming',
    tagline: 'Sowing the seeds of national food security.',
    shortDescription: 'Modern crop cultivation, livestock farming, and processing.',
    description: 'We are committed to sustainable agriculture through modern crop cultivation and livestock farming. Our processing facilities add value to raw produce, driving food security and investment.',
    icon: Plant,
    image: 'https://i.ibb.co/FkfVRhMh/FOLAZAY-2.jpg'
  },
  {
    id: 'farm-products',
    name: 'Sale of Farm Products',
    slug: 'sale-of-farm-products',
    path: '/services/sale-of-farm-products',
    tagline: 'Fresh from the farm to your doorstep.',
    shortDescription: 'Distribution of high-quality fresh and processed farm produce.',
    description: 'Our distribution network supplies wholesalers, retailers, and final consumers with high-quality farm produce, bridging the gap between rural producers and urban markets.',
    icon: Basket,
    image: 'https://i.ibb.co/FbGH95GV/FOLAZAY-4.jpg'
  },
  {
    id: 'financial',
    name: 'Financial Investments',
    slug: 'financial-investments',
    path: '/services/financial-investments',
    tagline: 'Building wealth through strategic portfolio management.',
    shortDescription: 'Expert advisory and investment in financial instruments.',
    description: 'We provide professional portfolio advisory services and strategic investment opportunities in shares and financial instruments, tailored to meet diverse risk appetites.',
    icon: ChartLineUp,
    image: 'https://i.ibb.co/Kzchs0BV/FOLAZAY-5.jpg'
  },
  {
    id: 'petroleum',
    name: 'Petroleum Products Sales',
    slug: 'petroleum-products-sales',
    path: '/services/petroleum-products-sales',
    tagline: 'Fueling industries with reliable energy solutions.',
    shortDescription: 'Supply and distribution of PMS, AGO, DPK, and lubricants.',
    description: 'As a trusted supplier in the energy sector, we distribute high-quality petroleum products, including PMS, AGO, and DPK, ensuring reliable energy supply for businesses and individuals.',
    icon: Drop,
    image: 'https://i.ibb.co/ynCpp3KY/FOLAZAY-6.jpg'
  },
  {
    id: 'contracts',
    name: 'General Contracts',
    slug: 'general-contracts',
    path: '/services/general-contracts',
    tagline: 'Executing excellence in every project.',
    shortDescription: 'Civil, commercial, and supply contracts management.',
    description: 'Our project management team handles diverse contracts, from civil engineering to commercial supplies, delivering professional excellence and on-time project execution.',
    icon: Handshake,
    image: 'https://i.ibb.co/fV2dZDKX/FOLAZAY-7.jpg'
  }
];
