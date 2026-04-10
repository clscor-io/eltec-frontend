import type {E5CSubscores} from '../types';

interface Props {
  scores: E5CSubscores;
}

export default function Subscores({scores}: Props) {
  return (
    <table className="m-0  text-xs">
      <caption className="text-gray-600">Sub&nbsp;scores</caption>
      <tbody>
        {Object.entries(scores).map(([key, value]) => (
          <tr key={key}>
            <th className="p-0.5 text-right italic text-xs">{key}</th>
            <td className="p-0.5 text-right">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
