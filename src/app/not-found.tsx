import { PageSection, PageIntro, Main } from '@/components';
import Link from 'next/link';

export default function Page() {
  return (
    <Main>
      <PageIntro sectionTitle={<>404: Stran ne obstaja</>} />

      <PageSection>
        <div className='content'>
          <p>
            Pojdite nazaj <Link href='/'>domov</Link>
          </p>
        </div>
      </PageSection>
    </Main>
  );
}
