export interface Advantage { icon: React.ReactNode; title: string; desc: string; }
export interface CostRow   { category: string; min: string; avg: string; max: string; }
export interface CostTotal { min: string; avg: string; max: string; }
export interface University { id: number; name: string; programs: string; students: string; location: string; image: string; href: string; }
export interface VisaType  { title: string; desc: string; }

export interface CountryData {
  name: string;
  description: string;
  heroImage: string;
  bannerImage: string;
  flagImage: string;
  ctaTitle: string;
  advantages: Advantage[];
  costRows: CostRow[];
  costTotal: CostTotal;
  universities: University[];
  visaTypes: VisaType[];
}
