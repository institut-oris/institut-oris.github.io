import { PropsWithChildren, ReactNode } from 'react';

interface WorkItemProps extends PropsWithChildren {
  title: ReactNode;
}

export const WorkItem = ({ title, children }: WorkItemProps): JSX.Element => {
  return (
    <article className='workItem'>
      <h3 className='workItem__title'>{title}</h3>
      <p>{children}</p>
    </article>
  );
};
