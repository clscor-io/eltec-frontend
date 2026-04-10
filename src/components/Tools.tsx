import {useState} from 'react';

const apiUrl = String(import.meta.env.VITE_ELTEC_API);
// const apiUrl = 'https://staging.eltec.clscor.io/api/v1';

interface Props {
  corpusId: string;
  textId: string;
}

export default function Tools({corpusId, textId}: Props) {
  const [textType, setTextType] = useState<'tei' | 'plaintext'>('tei');

  const apiBase = new URL(apiUrl, window.location.href);
  const urlBase = `${apiBase.href}/corpora/${corpusId}/texts/${textId}`;
  const textUrl = encodeURIComponent(`${urlBase}/${textType}`);

  const isAccessible = apiBase.hostname.includes('clscor.io');

  return (
    <div className="">
      {!isAccessible && (
        <p className="font-bold italic">
          The connected <a href={apiBase.href}>DraCor API</a> does not seem to
          be publicly accessible. The external tools need to be able to access
          the respective endpoints of the API.
        </p>
      )}

      {isAccessible && (
        <>
          <p className="">
            Text layer for analysis:{' '}
            <label onClick={() => setTextType('tei')}>
              <input
                type="radio"
                checked={textType === 'tei'}
                onChange={() => console.log('tei')}
                style={{appearance: 'auto'}}
              />{' '}
              Full text (TEI-encoded)
            </label>{' '}
            <label onClick={() => setTextType('plaintext')}>
              <input
                type="radio"
                checked={textType === 'plaintext'}
                onChange={() => console.log('plaintext')}
                style={{appearance: 'auto'}}
              />{' '}
              Plain text{' '}
            </label>
          </p>
          <ul>
            <li>
              <a
                href={`https://voyant-tools.org/?input=${textUrl}`}
                target="_blank"
              >
                Voyant Tools
              </a>
            </li>
            <li>
              <a
                href={`https://switchboard.clarin.eu/#/vlo/${textUrl}`}
                target="_blank"
              >
                CLARIN Language Resource Switchboard
              </a>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
