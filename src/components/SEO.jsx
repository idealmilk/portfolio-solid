import { mergeProps } from 'solid-js';
import { Title, Meta, Link } from 'solid-start';
import { useLocation } from '@solidjs/router';

export default function Work(props) {
  const merged = mergeProps(
    {
      title: 'Matthew Gilligan',
      description: 'Sustainable front-end developer',
      image: '',
      isBlogPost: false,
    },
    props
  );

  const url = 'https://trv608.netlify.app/';
  const { pathname } = useLocation();

  return (
    <>
      <Title>{merged.title}</Title>

      {/* General tags */}
      <Meta name='description' content={merged.description} />
      <Meta name='image' content={merged.image} />
      <Link rel='canonical' href={`${url}${pathname}`} />

      {/* OpenGraph tags */}
      <Meta property='og:url' content={`${url}${pathname}`} />
      <Meta property='og:title' content={merged.title} />
      <Meta property='og:site_name' content={merged.title} />
      <Meta
        property='og:type'
        content={merged.isBlogPost ? 'article' : 'website'}
      />
      <Meta property='og:description' content={merged.description} />
      <Meta property='og:image' content={merged.image} />
      <Meta property='og:image:alt' content={merged.description} />
      <Meta property='og:image:width' content='1200' />
      <Meta property='og:image:height' content='600' />

      {/* Twitter Card tags */}
      <Meta name='twitter:image:src' content={merged.image} />
      <Meta name='twitter:card' content='summary_large_image' />
      <Meta name='twitter:title' content={merged.title} />
      <Meta name='twitter:description' ccontent={merged.description} />
      {merged.twitterUsername && (
        <Meta name='twitter:creator' content={merged.twitterUsername} />
      )}
    </>
  );
}
