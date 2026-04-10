import {createFileRoute, useParams} from '@tanstack/react-router';
import rehypeRaw from 'rehype-raw';
import {DocPage} from '@dracor/react';

export const Route = createFileRoute('/doc/$')({
  component: Docs,
});

function Docs() {
  const {_splat} = useParams({from: '/doc/$'});
  return <DocPage url={`/doc/${_splat}.md`} rehypePlugins={[rehypeRaw]} />;
}
