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

export interface Author {
  name: string;
  ref: string;
}

export interface TextMetrics {
  numOfParagraphs: number;
  numOfWords: number;
  numOfAuthors: number;
}

export interface Text {
  id: string;
  authors: Author[];
  title: string;
  name: string;
  corpus: string;
  corpusUrl: string;
  commit?: string;
  metrics: TextMetrics;
}
