import { HTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';

import classNames from 'classnames';

export enum ProjectIntroVariant {}

interface ProjectIntroProps extends HTMLAttributes<HTMLDivElement> {
  sectionTitle?: ReactNode;
  variant?: ProjectIntroVariant;
  image: { src: string; width: number; height: number };
}

export const ProjectIntro = ({
  variant,
  sectionTitle,
  className,
  image,
  children,
}: ProjectIntroProps): JSX.Element => {
  return (
    <div className={classNames('projectIntro', variant, className)}>
      <div className='row '>
        <div className='container'>
          <div className='projectIntro__wrapper'>
            <div className='projectIntro__content'>
              {sectionTitle && <h1 className='projectIntro__title'>{sectionTitle}</h1>}
              {children}
            </div>
            {image && <Image className='projectIntro__image' alt='' {...image} />}
          </div>
        </div>
      </div>
    </div>
  );
};
