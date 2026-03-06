import {Outlet} from '@tanstack/react-router';
import {AuthorInfo, IdCopy, Tabs} from '@dracor/react';
import type {Text as TextData} from '../types';

export interface Props {
  data: TextData;
}

export default function Text({data}: Props) {
  const authors = data?.authors?.map((a) => a.name).join(', ');
  const authorTitle = data ? `${authors}: ${data.title}` : '';
  const wikidataIds = data?.authors
    ?.map((a) => {
      // eslint-disable-next-line
      const m = a.ref?.match(
        /https:\/\/www\.wikidata\.org\/(?:wiki|entity)\/(Q[0-9]+)/
      );
      return m ? m[1] : null;
    })
    .filter((id) => !!id);

  return (
    <div>
      <title>{authorTitle}</title>
      <section>
        <div className="flex justify-between mb-4 flex-col gap-3 md:flex-row">
          <div>
            <h2 className="text-sm mb-1">{authors}</h2>
            <h1>{data.title}</h1>
            <IdCopy>{data.id}</IdCopy>
          </div>
          <div>
            {wikidataIds?.map((id) => (
              <AuthorInfo key={id} wikidataId={id!} name="" />
            ))}
          </div>
        </div>
        <Tabs
          data={[
            {label: 'Full text', to: '../fulltext'},
            {label: 'Downloads', to: '../downloads'},
          ]}
        />
        <Outlet />
      </section>
    </div>
  );
}
