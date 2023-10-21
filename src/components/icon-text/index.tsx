import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  href: string;
}

export const IconText = ({ children, className, icon, href }: ButtonProps): JSX.Element => {
  return (
    <a className={classNames('iconText', className)} target='_blank' href={href}>
      <span className='iconText__container'>
        {icon}
        {children}
      </span>
    </a>
  );
};
