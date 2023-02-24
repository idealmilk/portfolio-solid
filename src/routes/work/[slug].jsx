import { useParams } from 'solid-start';
import { Title } from 'solid-start';

import { Projects } from '~/data/Projects';

export default function Home() {
  const params = useParams();

  const project = Projects.find((obj) => obj.slug === params.slug);

  return (
    <main>
      <Title>{project.clientName}</Title>
      <h1>{project.clientName}</h1>
    </main>
  );
}
