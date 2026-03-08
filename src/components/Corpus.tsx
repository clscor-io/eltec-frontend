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
            {info.row.original.authors.map(({name, ref}) => (
              <div key={name}>
                <span>{name}</span>
                <br />
                {ref && <IdLink>{ref}</IdLink>}
              </div>
            ))}
          </div>
        ),
      },
      {
        accessorKey: 'title',
        header: 'Title',
        cell: (info) => (
          <Link className="text-lg" to={info.row.original.name}>
            {`${info.row.original.title}`}
          </Link>
        ),
      },
      {
        accessorKey: 'sources',
        header: 'Year of first edition',
        accessorFn: (row) => {
          const firstEdition = row.sources.find(
            ({type}) => type === 'firstEdition'
          );
          return firstEdition?.year ?? '';
        },
        cell: (info) =>
          info.row.original.sources.find(({type}) => type === 'firstEdition')
            ?.year,
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
