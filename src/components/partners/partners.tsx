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

        <Image src='/partners/alpine-nation.png' alt='alpine-nation' width={160} height={54} />
        <Image src='/partners/tipovej.png' alt='Tipovej!org' width={110} height={30} />
        <Image src='/partners/plezarna.png' alt='Plezarna' width={197} height={197} />
        <Image src='/partners/risa.png' alt='Risa' width={146} height={97} />
        <Image src='/partners/cpm.png' alt='Center za pomoč mladim' width={67} height={126} />
        <Image src='/partners/octopics.png' alt='Octopics' width={160} height={120} />
      </div>
    </PageSection>
  );
};
