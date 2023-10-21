import { PageSection, ProjectIntro, ProjectSection, Main, Button } from '@/components';

import { generateMetadata } from '@/helpers';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  {
    title: 'Brainblender',
    description:
      'Brainblender je družabna igra, ki spodbuja ustvarjanje skupinskih idej – od nedolžno zabavnih do družbeno odgovornih ali podjetniško pomembnih.',
  },
  '/meta/brainblender.png',
);

const DIY_LINK =
  'https://drive.google.com/drive/folders/1vvsaml_QbWMmz1CpjiDkhte6x_vI-elO?usp=share_link';

export default function Page() {
  return (
    <Main className='project'>
      <ProjectIntro
        sectionTitle='Brainblender'
        image={{ src: '/images/brainblender-intro.png', width: 594, height: 516 }}
      >
        <p>
          Brainblender je družabna igra, ki spodbuja ustvarjanje skupinskih idej – od nedolžno
          zabavnih do družbeno odgovornih ali podjetniško pomembnih.
        </p>

        <Button className='introButton' href={DIY_LINK}>
          Prenesi DIY
        </Button>
      </ProjectIntro>

      <ProjectSection
        sectionTitle='Zakaj igra?'
        image={{ src: '/images/brainblender-1.png', width: 594, height: 480 }}
      >
        <p>
          Igra spodbuja timsko delo in pomaga različnim posameznikom, da v skupini ustvarjajo
          neobičajne rešitve ali rešujejo vsakdanje probleme na drugačen način.{' '}
        </p>
        <p>
          Deluje po principu namiznih iger, kjer 4 igralci poskušajo najti skupen odgovor na izbrano
          vprašanje. Igralci vprašanje lahko izberejo iz nabora vprašanj, ki jih prejmejo ob igri
          ali oblikujejo svoje vprašanje. Igra se začne, ko vsak igralec odgovori na izbrano
          vprašanje s svojo idejo. V nadaljevanju z metanjem kocke vsak razvije večje število
          variacij svoje ideje. Kocka pomaga igralcem, da svojo idejo razvijejo na nepredvidljive
          načine. V drugi stopnji igre najprej po dva igralca združita svoje variacije v eno novo
          skupno idejo oz. odgovor na osnovno vprašanje. Na vsakem koraku so igralci omejeni s
          časom. Igra je zaključena, ko se vsi igralci strinjajo z eno rešitvijo vprašanja.
        </p>
      </ProjectSection>

      <ProjectSection
        sectionTitle='Kako je nastal?'
        image={{ src: '/images/brainblender-2.png', width: 594, height: 395 }}
      >
        <p>
          Na interdisciplinarni oblikovalski delavnici Splitinteractions (UMAS, Split) ga je
          sooblikovala članica Inštituta Pika Žvan.
        </p>
        <p>
          Cilj je bil ustvariti oboje, igro in generator idej v enem. Načela in strategije igre
          Brainblender lahko uporabimo v vsakdanjem življenju, ne glede na to, ali želimo spremeniti
          svoje dojemanje sveta okoli nas ali samo, da bi odločanje prenesli v igriv proces.
        </p>
        <p>Zasnovana je bila za vsakogar in je brezplačna za prenos.</p>
      </ProjectSection>

      <PageSection className='u-text-center'>
        <h2 className='callOut'>
          Brainblender je odprtokodna igra, <br />
          pripravljena kot DIY v formatu PDF.
        </h2>
        <Button href={DIY_LINK}>Prenesi Brainblender DIY</Button>
      </PageSection>
    </Main>
  );
}
