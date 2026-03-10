import clsinfraLogo from '/cls-infra.svg';

interface Props {
  apiVersion: string;
  frontendVersion: string;
  existVersion: string;
}

export default function Footer({
  apiVersion,
  frontendVersion,
  existVersion,
}: Props) {
  return (
    <div className="pt-8 pb-6 text-center">
      <small className="opacity-45">
        ELTeC API: {apiVersion}, ELTeC Frontend: {frontendVersion}, eXist:{' '}
        {existVersion}
      </small>
      <br />
      <a href="https://clsinfra.io/" target="_blank" rel="noreferrer noopener">
        <img
          src={clsinfraLogo}
          className="inline-block h-6 mt-2"
          alt="CLS INFRA logo"
        />
      </a>
    </div>
  );
}
