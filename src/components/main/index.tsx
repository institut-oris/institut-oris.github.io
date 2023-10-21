import { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface MainProps extends HTMLAttributes<HTMLDivElement> {}

export const Main = ({ children, className }: MainProps): JSX.Element => {
  return <main className={classNames('page__main', className)}>{children}</main>;
};
