import {createFileRoute, useParams} from '@tanstack/react-router';
import {DownloadButton} from '@dracor/react';

const apiUrl = String(import.meta.env.VITE_ELTEC_API);

export const Route = createFileRoute('/corpora_/$corpusId_/$textId/downloads')({
  component: RouteComponent,
});

function RouteComponent() {
  const {corpusId, textId} = useParams({
    from: '/corpora_/$corpusId_/$textId/downloads',
  });

  const url = `${apiUrl}/corpora/${corpusId}/texts/${textId}`;

  return (
    <div className="flex flex-row gap-4 mt-4">
      <div>
        <h3>Metadata (JSON)</h3>
        <DownloadButton href={url} type="json" name={`${textId}.json`} />
      </div>
      <div>
        <h3>Full text (TEI encoded)</h3>
        <DownloadButton
          href={`${url}/tei`}
          type="tei"
          name={`${textId}.tei.xml`}
        />
      </div>
      <div>
        <h3>Plain text</h3>
        <DownloadButton
          href={`${url}/plaintext`}
          type="txt"
          name={`${textId}.txt`}
        />
      </div>
    </div>
  );
}
