import { ButtonProps } from '../../helpers/props';

export default function Button({
  children,
  onClick,
  disabled,
  className,
}: ButtonProps)
{
  return (
    <button className={ className } onClick={ onClick } disabled={ disabled }>
      { children }
    </button>
  )
}

