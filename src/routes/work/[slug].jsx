import { useParams } from 'solid-start';

import ProjectDetail from '~/components/ProjectDetail';
import SEO from '~/components/SEO';
import { Projects } from '~/data/Projects';

export default function WorkTemplate() {
  const params = useParams();

  const project = Projects.find((obj) => obj.slug === params.slug);

  return (
    <main>
      <SEO title={project.clientName} />
      <div class='inner-wrap' style={{ 'margin-top': '15rem' }}>
        <img src={project.homeImage} class='wide-img' alt='' />
        <ProjectDetail data={project} />

        <For each={project.desktopImages}>
          {(image, i) => {
            return (
              <img
                src={image}
                alt={`${project.clientName} desktop ${i}`}
                class='wide-img'
                style={{ 'margin-bottom': '4rem' }}
              />
            );
          }}
        </For>
      </div>

      <div className='mockup-wrap'>
        <For each={project.mobileImages}>
          {(image, i) => {
            return (
              <img src={image} alt={`${project.clientName} mobile ${i}`} />
            );
          }}
        </For>
      </div>
    </main>
  );
}
