import styles from './styles.module.scss';

export const tmpl = `
{{{addChatModal}}}
{{{modalAddUserToChat}}}
{{{modalRemoveUserFromChat}}}
<main class=${styles.main}>

  <section class=${styles.channels}>
  
    <div class=${styles.channelsHeader}>
    {{{profileLinkCmp}}}
    {{{createChatCmp}}}
    </div>
    
    <ul class=${styles.channelsList}>
      {{#each channelsCmp}}
        {{{this}}}
      {{/each}}
    </ul>
  
  </section>

  <section class=${styles.chat}>
    <div class=${styles.chatHeader}>
      {{{chatHeaderChannelInfo}}}
      
      {{#if isChatSelected}}
        <div class=${styles.chatHeaderButtons}>
          {{{chatTooltipCmp}}}
        </div>
      {{/if}}
    </div>
    
    {{{messagesCmp}}}
    
    <form class=${styles.inputWrapper}>
      {{{inputCmp}}}
      {{{buttonSendCmp}}}
    </form>
  </section>
</main>
`;
