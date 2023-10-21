import { HTMLAttributes } from 'react';

import classNames from 'classnames';

export enum ListingVariant {
  Two = 'listing--variant2',
}

interface ListingProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ListingVariant;
}

export const Listing = ({ children, className, variant }: ListingProps): JSX.Element => {
  return <div className={classNames('listing', variant, className)}>{children}</div>;
};
