import {createFileRoute, Navigate} from '@tanstack/react-router';

export const Route = createFileRoute('/corpora_/$corpusId_/$textId/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Navigate from="/corpora/$corpusId/$textId" to="fulltext" replace />;
}
