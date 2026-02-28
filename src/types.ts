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
}
