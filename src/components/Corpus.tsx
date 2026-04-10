import {useMemo} from 'react';
import {Link} from '@tanstack/react-router';
import {type ColumnDef} from '@tanstack/react-table';
import ReactMarkdown from 'react-markdown';
import {Commit, IdLink, Table} from '@dracor/react';
import type {Corpus, Text} from '../types';

interface Props {
  meta: Corpus;
  texts: Text[];
}

export default function CorpusComponent({
  meta: {title, description, commit, repository, name},
  texts,
}: Props) {
  const columns = useMemo<ColumnDef<Text>[]>(
    () => [
      {
        accessorKey: 'authors',
        header: 'Author',
        accessorFn: (row) => {
          const {authors = []} = row;
          return authors.map((a) => a.name).join(' ');
        },
        cell: (info) => (
          <div>
            {info.row.original.authors.map(({name, refs}) => (
              <div key={name}>
                <span>{name}</span>
                <br />
                {refs?.map((r) => (
                  <span key={r}>
                    <IdLink>{r}</IdLink>{' '}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ),
      },
      {
        accessorKey: 'title',
        header: 'Title',
        cell: (info) => {
          const wikidataRef = info.row.original.refs?.find((r) =>
            r.startsWith('wikidata:')
          );
          return (
            <>
              <Link className="text-lg" to={info.row.original.name}>
                {`${info.row.original.title}`}
              </Link>
              <br />
              {wikidataRef && <IdLink>{wikidataRef}</IdLink>}
            </>
          );
        },
      },
      {
        accessorKey: 'referenceYear',
        header: 'Reference Year',
        accessorFn: (row) => row.referenceYear,
        cell: (info) => info.row.original.referenceYear,
      },
      {
        accessorKey: 'words',
        header: 'Number of words',
        accessorFn: (row) => row.metrics?.numOfWords || 0,
        cell: (info) =>
          info.row.original.metrics?.numOfWords.toLocaleString('en'),
        enableGlobalFilter: false,
      },
      {
        accessorKey: 'id',
        header: 'ID',
        accessorFn: (row) => row.id,
        cell: (info) => info.row.original.id,
      },
    ],
    []
  );

  return (
    <section>
      <h1>{title}</h1>
      <title>{`${title} (ELTeC)`}</title>
      {description && (
        <div>
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      )}
      {commit && (
        <p>
          <Commit repo={repository.split('#')[0]}>{commit}</Commit>
        </p>
      )}
      {texts.length > 0 && <Table key={name} data={texts} columns={columns} />}
    </section>
  );
}
