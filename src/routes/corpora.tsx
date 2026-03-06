import {createFileRoute} from '@tanstack/react-router';
import {Route as RootRoute} from './__root';
import CorpusCard from '../components/CorpusCard';

export const Route = createFileRoute('/corpora')({
  component: CorporaComponent,
});

function CorporaComponent() {
  const {corpora} = RootRoute.useLoaderData();
  return (
    <>
      <title>ELTeC Corpora</title>
      <section>
        <div className="flex flex-row justify-center pb-4">
          {corpora.map((corpus) => (
            <CorpusCard corpus={corpus} key={corpus.name} />
          ))}
        </div>
      </section>
    </>
  );
}
