import { Title } from 'solid-start';

import Work from '~/components/Work';
import { Projects } from '~/data/Projects';

export default function WorkPage() {
  console.log(Projects);
  return (
    <main>
      <Title>Work</Title>

      <Work />
    </main>
  );
}
