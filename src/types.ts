export interface ApiInfo {
  version: string;
  name: string;
  status: string;
  existdb: string;
}

export interface CorpusMetrics {
  numOfTexts: number;
  numOfParagraphs: number;
  numOfWords: number;
  numOfAuthors: number;
}

export interface BalanceDistribution {
  gender: {
    M: number;
    F: number;
  };
  reprintCount: {
    high: number;
    low: number;
  };
  size: {
    short: number;
    medium: number;
    long: number;
  };
  timeSlot: {
    T1: number; // 1840–1859
    T2: number; // 1860–1879
    T3: number; // 1880–1899
    T4: number; // 1900–1919
  };
}

export interface E5CScore {
  class: 'core' | 'plus' | 'extended';
  e5c: number;
  subscores: {
    text: number;
    female: number;
    male: number;
    single: number;
    triple: number;
    short: number;
    long: number;
    range: number;
    reprint: number;
  };
}

export interface Corpus {
  name: string;
  title: string;
  acronym?: string;
  description?: string;
  repository: string;
  licence?: string;
  licenceUrl?: string;
  metrics?: CorpusMetrics;
  textsUrl: string;
  updated: string;
  commit?: string;
  balance: BalanceDistribution;
  e5c: E5CScore;
}

export interface Author {
  name: string;
  refs?: string[];
}

export interface SourceLink {
  url: string;
  text?: string;
}

export interface TextSource {
  bibl: string;
  type?: string;
  author?: string;
  title?: string;
  year?: string;
  publisher?: string;
  placePublished?: string;
  links?: SourceLink[];
}

export interface TextMetrics {
  numOfParagraphs: number;
  numOfWords: number;
  numOfAuthors: number;
}

export interface Text {
  id: string;
  authors: Author[];
  authorGender: 'M' | 'F';
  title: string;
  name: string;
  corpus: string;
  corpusUrl: string;
  commit?: string;
  metrics: TextMetrics;
  referenceYear: string;
  refs?: string[];
  reprintCount: 'low' | 'high';
  sizeCategory: 'short' | 'medium' | 'long';
  timeSlot: 'T1' | 'T2' | 'T3' | 'T4';
  sources: TextSource[];
}
