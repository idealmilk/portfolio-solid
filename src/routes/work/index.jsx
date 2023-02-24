import { Title } from 'solid-start';

import Work from '~/components/Work';
import { Projects } from '~/data/Projects';

export default function Home() {
  console.log(Projects);
  return (
    <main>
      <Title>Research Log</Title>
      <h1>Research Log</h1>

      <Work projects={Projects} fallback={<div>I am looking for it</div>} />
    </main>
  );
}
