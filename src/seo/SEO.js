import React from 'react';
import { Helmet } from 'react-helmet-async';

const defaultMeta = {
  title: 'The Artist Room — Community & Events',
  description: 'Step into The Artist Room — where creativity meets community. Join us for events with live music, workshops, and more.',
  url: typeof window !== 'undefined' ? window.location.href : '/',
  image: `${process.env.PUBLIC_URL}/assets/images/seo-share.jpg`
};

const JSONLD = (props) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": props.title || defaultMeta.title,
  "url": props.url || defaultMeta.url,
  "description": props.description || defaultMeta.description
});

const SEO = ({ title, description, url, image }) => {
  const meta = {
    ...defaultMeta,
    title: title || defaultMeta.title,
    description: description || defaultMeta.description,
    url: url || defaultMeta.url,
    image: image || defaultMeta.image
  };

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="theme-color" content="#ffffff" />

      <link rel="canonical" href={meta.url} />

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:image" content={meta.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      <script type="application/ld+json">{JSON.stringify(JSONLD(meta))}</script>
    </Helmet>
  );
};

export default SEO;
