import { HTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';

import classNames from 'classnames';

interface ProjectSectionProps extends HTMLAttributes<HTMLDivElement> {
  sectionTitle?: ReactNode;
  image: { src: string; width: number; height: number };
}

export const ProjectSection = ({
  children,
  sectionTitle,
  className,
  image,
}: ProjectSectionProps): JSX.Element => {
  return (
    <section className={classNames('projectSection', className)}>
      <div className='row'>
        <div className='container'>
          <div className='projectSection__wrapper'>
            <div className='projectSection__content'>
              {sectionTitle && (
                <h2 className='content projectSection__title'>
                  <span className='projectSection__titleText'>{sectionTitle}</span>
                </h2>
              )}
              {children}
            </div>
            {image && <Image className='projectIntro__image' alt='' {...image} />}
          </div>
        </div>
      </div>
    </section>
  );
};
