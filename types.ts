import type { ReactNode } from 'react';

export interface Project {
  id: number;
  titleKey: string;
  locationKey: string;
  descriptionKey: string;
  imageUrl: string;
  beforeImageUrl: string;
  afterImageUrl: string;
}

export interface Service {
  icon: ReactNode;
  titleKey: string;
  descriptionKey: string;
}

export interface NavLink {
  href: string;
  labelKey: string;
  external?: boolean;
}
