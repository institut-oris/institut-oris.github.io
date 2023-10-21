import { PropsWithChildren } from 'react';
import Image from 'next/image';

import { Link } from '../link';

interface CardProps extends PropsWithChildren {
  image: string;
  title: string;
  href?: string;
}

export const Card = ({ image, title, children, href }: CardProps): JSX.Element => {
  const content = (
    <article className='card'>
      {image && <Image className='card__image' src={image} alt={title} width={412} height={412} />}
      <div className='card__content'>
        <h3 className='card__title'>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );

  return (
    <>
      {href ? (
        <Link href={href} className='card__Link'>
          {content}
        </Link>
      ) : (
        content
      )}{' '}
    </>
  );
};
