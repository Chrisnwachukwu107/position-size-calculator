import { OptionProps } from '../../helpers/props';

export default function Option({
  value,
  children,
}: OptionProps) {
  return (
    <option value={ value }>{ children }</option>
  );
}
