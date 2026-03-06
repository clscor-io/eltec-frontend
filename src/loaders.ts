import type {ApiInfo, Corpus, Text} from './types';

const apiUrl = String(import.meta.env.VITE_ELTEC_API);

console.log(apiUrl);

export async function fetchApiInfo() {
  const res = await fetch(`${apiUrl}`);
  if (!res.ok) throw new Error('Failed to fetch API info');
  return (await res.json()) as ApiInfo;
}

export async function fetchCorpora() {
  const res = await fetch(`${apiUrl}/corpora`);
  if (!res.ok) throw new Error('Failed to fetch corpora');
  return (await res.json()) as Corpus[];
}

export async function fetchCorpus(id: string) {
  const res = await fetch(`${apiUrl}/corpora/${id}`);
  if (!res.ok) throw new Error('Failed to fetch corpus');
  return (await res.json()) as Corpus;
}

export async function fetchCorpusTexts(id: string) {
  const res = await fetch(`${apiUrl}/corpora/${id}/texts`);
  if (!res.ok) throw new Error('Failed to fetch corpus texts');
  return (await res.json()) as Text[];
}

export async function fetchText(corpus: string, id: string) {
  const res = await fetch(`${apiUrl}/corpora/${corpus}/texts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch text data');
  return (await res.json()) as Text;
}
