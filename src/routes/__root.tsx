import {createRootRoute, Outlet} from '@tanstack/react-router';
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools';
import {NavBar} from '@dracor/react';
import pkg from '../../package.json';
import {fetchApiInfo, fetchCorpora} from '../loaders';

const RootLayout = () => {
  const {corpora} = Route.useLoaderData();
  return (
    <>
      <NavBar
        title="ELTeC"
        version={`version ${pkg.version}`}
        gitHubUrl="https://github.com/clscor-io/eltec-api"
        navItems={[
          {
            label: 'About',
            items: [
              {label: 'What is ELTeC', to: '/doc/$', params: {_splat: 'about'}},
              {
                label: 'Imprint and GDPR',
                to: '/doc/$',
                params: {_splat: 'imprint-and-gdpr'},
              },
            ],
          },
          {
            label: 'Corpora',
            items: corpora.map(({title, name}) => ({
              label: title,
              to: '/corpora/$corpusId',
              params: {corpusId: name},
            })),
          },
          {
            label: 'API',
            to: '/doc/api',
          },
        ]}
      />
      <div className="p-4">
        <Outlet />
      </div>
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
