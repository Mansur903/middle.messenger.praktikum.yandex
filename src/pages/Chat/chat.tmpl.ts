import styles from './styles.module.scss';

export const tmpl = `
{{{addChatModal}}}
<main class=${styles.main}>

  <section class=${styles.channels}>
  
    <div class=${styles.channelsHeader}>
    {{{profileLinkCmp}}}
    {{{createChatCmp}}}
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
{{{addChatModal}}}
`;
