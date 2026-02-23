import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/corpora_/$corpusId/$textId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/corpora/$corpusId/$textId"!</div>
}
