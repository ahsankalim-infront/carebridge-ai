export type DataSource = "mysql" | "json";

export type Service = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  icon: string;
  features: string[];
  outcomes: string[];
  sortOrder: number;
};

export type Specialty = {
  id: number;
  name: string;
  category: string;
  sortOrder: number;
};

export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  location: string;
};

export type ContactMessage = {
  id?: number;
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
  createdAt?: string;
};

export type Appointment = {
  id?: number;
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
  createdAt?: string;
};

export type StoreResult<T> = {
  data: T;
  source: DataSource;
};
