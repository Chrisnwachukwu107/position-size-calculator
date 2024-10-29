import { ButtonProps } from '../../helpers/props';

export default function Button({
  children,
  className,
}: ButtonProps)
{
  return (
    <button className={ className }>
      { children }
    </button>
  )
}

