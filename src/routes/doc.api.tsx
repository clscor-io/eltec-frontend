import {createFileRoute} from '@tanstack/react-router';
import {ApiDoc} from '@dracor/react';
import 'swagger-ui-react/swagger-ui.css';

export const Route = createFileRoute('/doc/api')({
  component: ApiPage,
});

function ApiPage() {
  return <ApiDoc url="/api/v1/openapi.yaml" title="ELTeC API" />;
}
