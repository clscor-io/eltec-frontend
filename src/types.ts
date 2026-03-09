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
  refs: string[];
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
  title: string;
  name: string;
  corpus: string;
  corpusUrl: string;
  commit?: string;
  metrics: TextMetrics;
  refs?: string[];
  sources: TextSource[];
}
