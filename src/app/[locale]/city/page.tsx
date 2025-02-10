import Head from 'next/head';

function page() {
  return (
    <>
      <Head>
        <title>Vidéo de la ville</title>
        <meta name="description" content="Regardez une vidéo de la ville en haute définition." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w-screen h-screen bg-gray-800">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/zih7Xss12XE?autoplay=1&quality=hd1080"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default page;
