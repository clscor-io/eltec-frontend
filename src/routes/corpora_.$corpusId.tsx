import {createFileRoute, Outlet} from '@tanstack/react-router';

export const Route = createFileRoute('/corpora_/$corpusId')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div>Hello "/corpora/$corpusId"!</div>
      <Outlet />
    </>
  );
}
