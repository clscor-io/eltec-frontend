import {createFileRoute, useParams} from '@tanstack/react-router';
import {TEIText} from '@dracor/react';

const apiUrl = String(import.meta.env.VITE_ELTEC_API);

export const Route = createFileRoute('/corpora_/$corpusId_/$textId/fulltext')({
  component: RouteComponent,
});

function RouteComponent() {
  const {corpusId, textId} = useParams({
    from: '/corpora_/$corpusId_/$textId/fulltext',
  });

  const url = `${apiUrl}/corpora/${corpusId}/texts/${textId}/tei`;

  return <TEIText url={url} />;
}
