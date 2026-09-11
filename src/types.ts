export interface DeviceCategory {
  id: string;
  name: string;
  icon: string;
  badge: string;
  sparePartsYears: number; // e.g. 10 years
  deliveryDaysMax: number; // e.g. 15 business days
  whoCanRepair: 'laien_und_profis' | 'nur_fachbetriebe' | 'allgemein_zugaenglich';
  whoCanRepairText: string;
  legalFramework: string;
  legalRegulationCode: string;
  warrantyExtensionMonths: number; // e.g. 12 months in EU Right to Repair
  typicalParts: string[];
  description: string;
}

export interface DefectType {
  id: string;
  name: string;
  description: string;
  typicalCostRatio: number; // fraction of original device price
  co2SavingsEstimateKg: number;
}

export interface StateBonusProgram {
  state: string;
  status: 'aktiv' | 'erschoepft_neustart_geplant' | 'in_planung';
  statusBadge: string;
  maxAmountEur: number;
  costCoveragePct: number;
  minInvoiceEur: number;
  officialBody: string;
  description: string;
  conditions: string[];
}

export interface RepairPartner {
  id: string;
  title: string;
  category: 'ersatzteile' | 'werkstatt' | 'versicherung' | 'diy_anleitung';
  categoryLabel: string;
  partnerName: string;
  headline: string;
  description: string;
  highlights: string[];
  ctaText: string;
  partnerUrl: string;
  verifiedLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'recht' | 'hersteller' | 'kosten' | 'bonus';
}
