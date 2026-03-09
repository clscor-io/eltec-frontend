import {Outlet} from '@tanstack/react-router';
import {AuthorInfo, IdCopy, IdLink, Tabs} from '@dracor/react';
import type {Text as TextData} from '../types';

export interface Props {
  data: TextData;
}

export default function Text({data}: Props) {
  const authors = data?.authors?.map((a) => a.name).join(', ');
  const authorTitle = data ? `${authors}: ${data.title}` : '';

  const wikidataRef = data.refs?.find((r) => r.startsWith('wikidata:'));

  const authorQids = data.authors
    .filter(({refs}) => refs.find((r) => r.startsWith('wikidata:')))
    .map(
      ({refs}) => refs.find((r) => r.startsWith('wikidata:'))?.split(':')[1]
    );

  return (
    <div>
      <title>{authorTitle}</title>
      <section>
        <div className="flex justify-between mb-4 flex-col gap-3 md:flex-row">
          <div>
            <h2 className="text-sm mb-1">{authors}</h2>
            <h1>{data.title}</h1>
            <IdCopy>{data.id}</IdCopy>{' '}
            {wikidataRef && <IdLink>{wikidataRef}</IdLink>}
          </div>
          <div>
            {authorQids.map((qid) => (
              <AuthorInfo key={qid} wikidataId={qid!} name="" />
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
