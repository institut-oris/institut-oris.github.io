import { PropsWithChildren } from 'react';
import Image from 'next/image';
import { PageSection, PageSectionVariant } from '../page-section/index';

interface PartnersProps extends PropsWithChildren {
  title: string;
}

export const Partners = ({ title }: PartnersProps): JSX.Element => {
  return (
    <PageSection variant={PageSectionVariant.Grey} sectionTitle={title}>
      <div className='partners'>
        <Image src='/partners/scng.png' alt='Šolski center nova gorica' width={186} height={46} />
        <Image src='/partners/rokus.png' alt='Rokus' width={172} height={57} />
        <Image src='/partners/rutina.png' alt='Rutina' width={152} height={57} />
        <Image src='/partners/ragor.png' alt='Ragor' width={210} height={110} />
        <Image src='/partners/plezarna.png' alt='Plezarna' width={197} height={197} />
      </div>
    </PageSection>
  );
};
