import styles from './styles.module.scss';

export const tmpl = `
  <main class=${styles.wrapper}>
    <h1 class=${styles.title}>404</h1>
    <p class=${styles.subTitle}>Не туда попали</p>
    {{{backLinkCmp}}}
  </main>
`;
