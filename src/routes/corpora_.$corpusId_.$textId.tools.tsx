import {createFileRoute, useParams} from '@tanstack/react-router';
import Tools from '../components/Tools';

export const Route = createFileRoute('/corpora_/$corpusId_/$textId/tools')({
  component: RouteComponent,
});

function RouteComponent() {
  const {corpusId, textId} = useParams({
    from: '/corpora_/$corpusId_/$textId/tools',
  });
  return <Tools corpusId={corpusId} textId={textId} />;
}
