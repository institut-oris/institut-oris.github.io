import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

export enum PageIntroVariant {}

interface PageIntroProps extends HTMLAttributes<HTMLDivElement> {
  sectionTitle?: ReactNode;
  variant?: PageIntroVariant;
}

export const PageIntro = ({ variant, sectionTitle, className }: PageIntroProps): JSX.Element => {
  return (
    <div className={classNames('pageIntro', variant, className)}>
      <div className='row '>
        <div className='container'>
          {sectionTitle && <h1 className='pageIntro__title'>{sectionTitle}</h1>}
        </div>
      </div>
    </div>
  );
};
