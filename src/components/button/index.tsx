import { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface ButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const Button = ({ children, className, ...rest }: ButtonProps): JSX.Element => {
  return (
    <a className={classNames('button', className)} target='_blank' {...rest}>
      {children}
    </a>
  );
};
