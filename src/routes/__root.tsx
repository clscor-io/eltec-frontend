import {createRootRoute, Link, Outlet} from '@tanstack/react-router';
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools';
import {fetchApiInfo, fetchCorpora} from '../loaders';

const RootLayout = () => {
  const {info, corpora} = Route.useLoaderData();
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link
          to="/doc/$"
          params={{_splat: 'about'}}
          className="[&.active]:font-bold"
        >
          About
        </Link>{' '}
        <Link to="/doc/api" className="[&.active]:font-bold">
          API
        </Link>{' '}
        <small>
          ELTeC API {info.version}, {corpora.length} corpora
        </small>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

async function loader() {
  const info = await fetchApiInfo();
  const corpora = await fetchCorpora();
  return {info, corpora};
}

export const Route = createRootRoute({
  component: RootLayout,
  loader,
  staleTime: Infinity,
});
