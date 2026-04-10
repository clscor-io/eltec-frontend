import type {ReactNode} from 'react';
import {Link} from '@tanstack/react-router';
import {Commit} from '@dracor/react';
import type {Corpus} from '../types';

interface RowProps {
  label: string;
  data: number | string | ReactNode;
  dataStyle?: string;
}

function CorpusCardRow({label, data, dataStyle}: RowProps) {
  const padding = 'pt-2 pb-1 px-3';
  return (
    <tr className="border-b-2 text-primary font-normal">
      <td className={`${padding} font-bold ${dataStyle}`}>
        {typeof data === 'number' ? data.toLocaleString('en') : data}
      </td>
      <th className={`${padding} text-right font-normal`}>{label}</th>
    </tr>
  );
}

export default function CorpusCard({corpus}: {corpus: Corpus}) {
  const {name, title, metrics, updated, commit, repository, e5c} = corpus;
  // strip possible branch fragment from repo URI
  const repoUrl = repository?.split('#')[0];
  return (
    <div className="rounded-xl inline-block shadow-lg w-full md:w-96">
      <div className="bg-white rounded-t-xl p-2 text-2xl font-bold whitespace-nowrap text-ellipsis overflow-hidden">
        <Link to={name} className="text-primary" title={title}>
          {title}
        </Link>
      </div>
      {metrics && (
        <table className="m-0 w-full">
          <tbody>
            <CorpusCardRow
              label="ELTeC Score"
              data={e5c.e5c}
              dataStyle="text-2xl"
            />
            <CorpusCardRow label="Number of texts" data={metrics.numOfTexts} />
            <CorpusCardRow
              label="Number of authors"
              data={metrics.numOfAuthors}
            />
            <CorpusCardRow
              label="Number of paragraphs"
              data={metrics.numOfParagraphs}
            />
            <CorpusCardRow label="Number of Words" data={metrics.numOfWords} />
            <CorpusCardRow
              label="Git commit"
              data={commit ? <Commit repo={repoUrl}>{commit}</Commit> : 'n/a'}
            />
            <CorpusCardRow
              label="last update"
              data={updated ? new Date(updated).toLocaleString() : 'n/a'}
            />
          </tbody>
        </table>
      )}
    </div>
  );
}
