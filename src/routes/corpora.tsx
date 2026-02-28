import {createFileRoute} from '@tanstack/react-router';
import {Route as RootRoute} from './__root';

export const Route = createFileRoute('/corpora')({
  component: CorporaComponent,
});

function CorporaComponent() {
  const {corpora} = RootRoute.useLoaderData();
  return (
    <>
      <h1>Corpora</h1>
      <ul>
        {corpora.map(({name, title}) => (
          <li key={name}>{title}</li>
        ))}
      </ul>
    </>
  );
}
