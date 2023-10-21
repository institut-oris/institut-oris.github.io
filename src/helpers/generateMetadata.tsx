import { Metadata } from 'next';

export const generateMetadata = (
  { title, description, ...meta }: Metadata,
  image: string,
): Metadata => {
  let t = `Inštitut Oris`;

  if (title) t = `${t} | ${title}`;

  console.log(title);

  const d = description || '';

  return {
    metadataBase: new URL('https://institut-oris.si'),
    title: t,
    description: d,
    openGraph: {
      title: t,
      description: d,
      url: 'https://institut-oris.si/',
      siteName: 'institut-oris.si',
      locale: 'sl_SI',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 675,
        },
      ],
    },
    icons: {
      icon: '/icon.png',
    },
    ...meta,
  };
};
