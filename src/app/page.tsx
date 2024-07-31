import styles from './page.module.css';
import Form from '@/components/Form';

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.text}>
          <h1>Learn to code by watching others</h1>

          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div>
          <section className={styles.section}>
            <b>Try it free 7 days</b> then <br />
            $20/mo. thereafter
          </section>
          <br />
          <br />
          <Form />
        </div>
      </div>
    </>
  );
}
