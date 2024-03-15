export interface ContactWrapperType {
  first?: string;
  last?: string;
  avatar?: string;
  twitter?: string;
  notes?: string;
  favorite?: boolean;
}

export interface ContactType extends ContactWrapperType {
  id: string;
  createdAt?: number;
}

export interface ContactsLoaderData {
  contacts: ContactType[];
}

export interface ContactLoaderData {
  contact: ContactType;
}
