import { Title } from 'solid-start';

import Work from '~/components/Work';
import { Projects } from '~/data/Projects';

export default function Home() {
  console.log(Projects);
  return (
    <main>
      <Title>Work</Title>
      <h1>Work</h1>

      <Work projects={Projects} fallback={<div>I am looking for it</div>} />
    </main>
  );
}
