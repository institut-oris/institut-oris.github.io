import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

export enum PageSectionVariant {
  Grey = 'pageSection--grey',
}

interface PageSectionProps extends HTMLAttributes<HTMLDivElement> {
  sectionTitle?: ReactNode;
  variant?: PageSectionVariant;
}

export const PageSection = ({
  children,
  variant,
  sectionTitle,
  className,
}: PageSectionProps): JSX.Element => {
  return (
    <section className={classNames('pageSection', variant, className)}>
      <div className='row'>
        <div className='container'>
          {sectionTitle && (
            <h2 className='content pageSection__title'>
              <span className='pageSection__titleText'>{sectionTitle}</span>
            </h2>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};
