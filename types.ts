export enum PropertyType {
  RESIDENTIAL = 'Residential',
  PLOT = 'Plot',
  OTHER = 'Other' // Commercial, Industrial, etc.
}

export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  type: PropertyType;
  area: string;
  description: string;
  images: string[];
  videoUrl?: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  propertyId?: string;
  message: string;
}