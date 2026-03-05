import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/doc/api')({
  component: ApiPage,
});

function ApiPage() {
  return <div>Hello "/doc/api"!</div>;
}
