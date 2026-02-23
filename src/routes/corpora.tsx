import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/corpora')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/corpora"!</div>;
}
