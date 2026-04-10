import type {ReactNode} from 'react';
import {Link} from '@tanstack/react-router';
import {nanoid} from 'nanoid';
import {Commit} from '@dracor/react';
import type {Corpus} from '../types';
import Subscores from './Subscores';

interface RowProps {
  label: string;
  data: number | string | ReactNode;
  dataStyle?: string;
  popoverContent?: number | string | ReactNode;
}

function CorpusCardRow({label, data, dataStyle, popoverContent}: RowProps) {
  const padding = 'pt-2 pb-1 px-3';
  const id = popoverContent ? nanoid() : '';
  const anchorName = `--anchor-${id}`;
  const content = typeof data === 'number' ? data.toLocaleString('en') : data;
  return (
    <tr className="border-b-2 text-primary font-normal">
      <td className={padding}>
        {popoverContent ? (
          <>
            <button
              popoverTarget={id}
              style={{anchorName}}
              className={`font-bold ${dataStyle} cursor-pointer`}
            >
              {content}
            </button>
            <div
              id={id}
              popover=""
              className="m-0 p-3 rounded-lg border border-gray-200 shadow-lg bg-white text-sm
                         [position-area:block-end_span-inline-end]"
              style={{positionAnchor: anchorName}}
            >
              {popoverContent}
            </div>
          </>
        ) : (
          <span className={`font-bold ${dataStyle}`}>{content}</span>
        )}
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
              popoverContent={<Subscores scores={e5c.subscores} />}
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
