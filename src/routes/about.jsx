import SEO from '~/components/SEO';

export default function About() {
  return (
    <main>
      <SEO title='About' />
      <div class='inner-text-wrap' style={{ 'margin-top': '15rem' }}>
        <p>
          Born in London. Living in Tokyo. Matthew is a web designer and
          front-end developer with a passion for helping brands get their
          message across online without damaging the environment.
        </p>
        <p>
          Using lightweight frameworks, simple yet effective design and
          real-time carbon data to limit the loading of page content during peak
          times, Matthew can help your brand take care of the world that you
          want to reach.
        </p>
      </div>
    </main>
  );
}
