import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/corpora_/$corpusId_/$textId/downloads')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/corpora_/$corpusId_/$textId/downloads"!</div>;
}
