import {Outlet} from '@tanstack/react-router';
import {AuthorInfo, IdCopy, IdLink, Tabs} from '@dracor/react';
import type {Text as TextData} from '../types';

export interface Props {
  data: TextData;
}

export default function Text({data}: Props) {
  const authors = data?.authors?.map((a) => a.name).join(', ');
  const authorTitle = data ? `${authors}: ${data.title}` : '';
  return (
    <div>
      <title>{authorTitle}</title>
      <section>
        <div className="flex justify-between mb-4 flex-col gap-3 md:flex-row">
          <div>
            <h2 className="text-sm mb-1">{authors}</h2>
            <h1>{data.title}</h1>
            <IdCopy>{data.id}</IdCopy>{' '}
            {data.wikidataId && (
              <IdLink>{`wikidata:${data.wikidataId}`}</IdLink>
            )}
          </div>
          <div>
            {data.authors
              .filter(({wikidataId}) => !!wikidataId)
              .map(({wikidataId}) => (
                <AuthorInfo key={wikidataId} wikidataId={wikidataId!} name="" />
              ))}
          </div>
        </div>
        <Tabs
          data={[
            // @ts-expect-error - FIXME `to`
            {label: 'Full text', to: '../fulltext'},
            // @ts-expect-error - FIXME `to`
            {label: 'Downloads', to: '../downloads'},
          ]}
        />
        <Outlet />
      </section>
    </div>
  );
}
