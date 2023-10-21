import { Listing, WorkItem, PageSection, PageIntro, Card, Partners, Main } from '@/components';

export default function Home() {
  return (
    <Main>
      <PageIntro
        sectionTitle={
          <>
            {' '}
            Z oblikovalskimi pristopi in inovativnimi metodami dela ustvarjamo boljše{' '}
            <span className='home__introLine'>produkte in storitve.</span>
          </>
        }
      />

      <PageSection sectionTitle='Kaj delamo?'>
        <Listing className='home__workItems'>
          <WorkItem title='Design thinking'>
            Skozi praktično delavnico boste osvojili principe design thinkinga in hkrati rešili
            trenutne probleme vašega projekta.
          </WorkItem>
          <WorkItem
            title={
              <>
                Od strategije do <br />
                praktične rešitve
              </>
            }
          >
            Usmerjeno v poslovne cilje in ciljno skupino oblikujemo jasno strategijo in pripravimo
            praktične primere komunikacijskih materialov in produktnih rešitev.
          </WorkItem>
          <WorkItem title='Sodelovanje'>
            Z inovativnimi metodami dela in sodelovanja bo vaš tim bolj uigran, kreativen ter bo
            sposoben razvijati uspešne produkte.
          </WorkItem>
        </Listing>
        <div className='content u-text-center'>
          <p>
            Poslovna in izobraževalna okolja so običajno rigidna in dolgočasna, zato ne spodbujajo
            inovativnosti in kreativnosti, nujne za razvoj novih produktov in storitev. Z
            oblikovalskim načinom razmišljanja, usmerjenim v uporabnika, inovativnimi metodami
            sodelovanja ter upoštevanjem prave poslovne strategije prinašamo dobre ideje na trg in v
            družbo.
          </p>
        </div>
      </PageSection>

      <PageSection sectionTitle='Projekti' className='home__projects'>
        <Listing>
          <Card image='/images/brainblender.png' title='Brainblender' href='/brainblender'>
            Brainblender je družabna igra, ki spodbuja ustvarjanje skupinskih idej – od nedolžno
            zabavnih do družbeno odgovornih ali podjetniško pomembnih.
          </Card>
          <Card image='/images/uris.png' title='Uris'>
            UriS je spletni komunikator in je namenjen osebam z različnimi težavami pri govoru.
            Inštitut je pomagal projektu z poslovnim načrtom in promocijskimi materiali.
          </Card>
          <Card
            image='/images/delavnica-programiranja.png'
            title='Delavnica programiranja za otroke'
          >
            S pomočjo zabavih aktivnosti bodo otroci spoznali osnove programiranja.
          </Card>
        </Listing>
      </PageSection>

      <Partners title='Naši partnerji' />
    </Main>
  );
}
