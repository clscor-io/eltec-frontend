import {createFileRoute, useParams} from '@tanstack/react-router';
import {fetchCorpusTexts} from '../loaders';
import {Route as RootRoute} from './__root';
import Corpus from '../components/Corpus';

export const Route = createFileRoute('/corpora_/$corpusId')({
  component: RouteComponent,
  loader: async ({params: {corpusId}}) => {
    const texts = await fetchCorpusTexts(corpusId);
    return texts;
  },
});

function RouteComponent() {
  const {corpusId} = useParams({from: '/corpora_/$corpusId'});
  const {corpora} = RootRoute.useLoaderData();
  const texts = Route.useLoaderData();
  const corpus = corpora.find((c) => c.name === corpusId);

  if (!corpus) {
    return <strong>No such corpus!</strong>;
  }

  return (
    <>
      <title>ELTeC: {corpus.title}</title>
      <Corpus meta={corpus} texts={texts} />
    </>
  );
}
