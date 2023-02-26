import { useParams } from 'solid-start';
import { Title } from 'solid-start';

import ProjectDetail from '~/components/ProjectDetail';
import { Projects } from '~/data/Projects';

export default function WorkTemplate() {
  const params = useParams();

  const project = Projects.find((obj) => obj.slug === params.slug);

  console.log(project);

  return (
    <main>
      <Title>{project.clientName}</Title>
      <div class='inner-wrap' style={{ 'margin-top': '15rem' }}>
        <img src={project.home} class='wide-img' alt='' />
        <ProjectDetail data={project} />
      </div>
    </main>
  );
}
