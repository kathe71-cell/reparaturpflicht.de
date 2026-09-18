export interface DeviceCategory {
  id: string;
  name: string;
  subCategoryText: string;
  icon: string;
  badge: string;
  hasEcodesignObligation: boolean;
  sparePartsYears: number; // Max years e.g. 10
  sparePartsYearsText: string; // e.g. "7–10 Jahre (bauteilabhängig)"
  deliveryDaysMax: number; // Max days
  deliveryDaysText: string; // e.g. "5–10 Werktage (bauteilabhängig)"
  whoCanRepair: 'laien_und_profis' | 'nur_fachbetriebe' | 'getrennt_nach_bauteil' | 'keine_spezifische_pflicht';
  whoCanRepairText: string;
  consumerParts: string[]; // Parts available to end users
  proParts: string[]; // Parts restricted to professional repairers
  legalFramework: string;
  legalRegulationCode: string;
  primarySourceUrl?: string;
  applicationDate: string; // Effective date of regulation
  startOfTimelineText: string; // e.g. "Ab Inverkehrbringen des letzten Exemplars des Modells"
  description: string;
}

export interface DefectType {
  id: string;
  name: string;
  description: string;
  isUsuallySelfInflicted?: boolean;
}

export type SellerType = 'gewerblich' | 'privat' | 'unbekannt';
export type PurchasePeriod = 'unter_12_monate' | '12_bis_24_monate' | 'nach_2_jahren' | 'vor_31_07_2026' | 'nach_31_07_2026';
export type ModelReleasePeriod = 'vor_20_06_2025' | 'ab_20_06_2025' | 'unbekannt';
export type DefectCause = 'unfall_eigenverschulden' | 'materialfehler_ohne_einwirkung' | 'normaler_verschleiss' | 'unbekannt';

export interface DutyCheckResult {
  status: 'gewaehrleistung_moeglich' | 'kein_gewaehrleistungsanspruch' | 'ersatzteilpflicht_besteht' | 'keine_ersatzteilpflicht' | 'nicht_abschliessend_bestimmbar';
  statusBadge: string;
  statusColor: 'emerald' | 'amber' | 'rose' | 'slate';
  headline: string;
  summary: string;
  sellerWarrantyNote: string;
  manufacturerEcodesignNote: string;
  rightToRepairNote: string;
  conditionalNotes?: string[];
  disclaimer: string;
}

export interface StateBonusProgram {
  id: string;
  state: string;
  status: 'aktiv' | 'gestoppt_budget_erschoepft' | 'beendet' | 'kein_programm';
  statusBadge: string;
  maxAmountEur: number;
  costCoveragePct: number;
  minInvoiceEur: number;
  maxRepairsPerYear?: number;
  officialBody: string;
  officialUrl: string;
  auditDate: string;
  description: string;
  conditions: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'recht' | 'hersteller' | 'kosten' | 'bonus';
  citation?: string;
}
