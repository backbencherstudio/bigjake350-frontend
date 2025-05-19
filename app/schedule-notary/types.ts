export interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface ServiceFormData {
  numberOfIndividuals: number;
  personName: string;
  documentFile: FileList;
  hasAddress: boolean;
  serviceSpeed: 'standard' | 'rush' | 'sameDay';
} 