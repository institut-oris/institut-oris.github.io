import Link from 'next/link';

import Image from 'next/image';

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className='page__header header'>
        <div className='row'>
          <div className='container'>
            <Link href='/'>
              <Image
                className='header__logo'
                src='/oris.svg'
                alt='Oris Logo'
                width={141}
                height={30}
                priority
              />
            </Link>
            <nav className='header__links'>
              <ul>
                <li>
                  <Link href='/kontakt'>kontakt</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {children}

      <footer className='page__footer footer'>
        <div className='row'>
          <div className='container'>
            <Link href='/'>
              <Image
                className='footer__logo'
                src='/oris.svg'
                alt='Oris Logo'
                width={141}
                height={30}
                priority
              />
            </Link>
            <nav className='footer__links'>
              <ul>
                <li>
                  <Link href='/kontakt'>kontakt</Link>
                </li>
              </ul>
            </nav>

            <div className='footer__meta'>
              <span className='footer__copyright'>&copy; 2023 Inštitut Oris</span>
              <Link className='footer__legal' href='/pravno-obvestilo'>
                Pravno obvestilo
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
