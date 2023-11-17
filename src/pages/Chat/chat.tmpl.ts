import styles from './styles.module.scss';

export const tmpl = `
<main class=${styles.main}>

  <section class=${styles.channels}>
  
    <div class=${styles.channelsHeader}>
    {{{profileLinkCmp}}}
      <input class=${styles.searchInput} type="text" name="search" placeholder="Поиск">
    </div>
    
    <ul class=${styles.channelsList}>
      {{{channelsCmp}}}
    </ul>
    
  </section>

  <section class=${styles.chat}>
  
    <div class=${styles.chatHeader}></div>
    <ul class=${styles.messages}></ul>
    
    <div class=${styles.inputWrapper}>
      {{{inputCmp}}}
      {{{buttonSendCmp}}}
    </div>
  
  </section>
</main>
`;
