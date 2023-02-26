import { Title } from 'solid-start';

import styles from '~/components/Containers.module.css';

export default function Home() {
  return (
    <main>
      <Title>About</Title>
      <h1>About</h1>
      <div class={styles.innerWrap}>
        <p>
          Born in London. Living in Tokyo. Matthew is a web designer and
          developer with a passion for helping brands get there message across
          as eco-friendly as possible.
        </p>
      </div>
    </main>
  );
}
