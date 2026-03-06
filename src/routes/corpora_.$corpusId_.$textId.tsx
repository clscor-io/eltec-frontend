import {createFileRoute} from '@tanstack/react-router';
import {fetchText} from '../loaders';
import Text from '../components/Text';

export const Route = createFileRoute('/corpora_/$corpusId_/$textId')({
  component: RouteComponent,
  loader: async ({params: {corpusId, textId}}) => {
    const text = await fetchText(corpusId, textId);
    return text;
  },
});

function RouteComponent() {
  const text = Route.useLoaderData();
  return <Text data={text} />;
}
