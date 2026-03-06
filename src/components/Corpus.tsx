import {useMemo} from 'react';
import {Link} from '@tanstack/react-router';
import {type ColumnDef} from '@tanstack/react-table';
import {Commit, IdLink, Table} from '@dracor/react';
import type {Corpus, Text} from '../types';

interface Props {
  meta: Corpus;
  texts: Text[];
}

export default function CorpusComponent({
  meta: {title, commit, repository, name},
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
      {commit && (
        <p>
          <Commit repo={repository.split('#')[0]}>{commit}</Commit>
        </p>
      )}
      {texts.length > 0 && <Table key={name} data={texts} columns={columns} />}
    </section>
  );
}
