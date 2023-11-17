import styles from './styles.module.scss';

export const tmpl = `
  <main class=${styles.wrapper}>
    <h1 class=${styles.title}>{{value}}</h1>
    <p class=${styles.subTitle}>{{text}}</p>
    {{{backLinkCmp}}}
  </div>
`;
