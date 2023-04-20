const mainCSS = (cfg) => `
.dtf-feedGroups .content-header-repost {
  position: absolute;
  left: 0px;
  margin: 14px 0 0 33px;
  padding: unset;
  width: max-content;
  height: max-content;
  line-height: 0;
  font-size: 0;
  z-index: 1;
}
.dtf-feedGroups .content-header-repost svg {
  width: 15px;
  height: 15px;
  margin: unset;
}
.dtf-feedGroups .content-header-repost a {
  display: none;
}

.dtf-feedGroups .content-header-author__avatar {
  border-radius: 50%;
  box-shadow: 0 0 2px 0px rgb(0 0 0);
}

:is(.dtf-feedGroups, .dtf-feedGroups.obs) {
  display: flex;
  flex-direction: column;
  gap: 3px 0px;
  margin-bottom: 10px;
  border-radius: 3px;
}

.dtf-feedGrous:not(.obs) {
  width: 700px;
  margin: 0px 0px 0px -25px;
  box-shadow: 0px 0px 2px 0px rgb(0 0 0);
}

.dtf-feedGroups.obs {
  row-gap: 15px;
}

.dtf-feedGroups.obs .feed__item {
  position: relative;
  box-shadow: 0px 0px 2px 0px rgb(0 0 0);
}

.dtf-feedGroups .dtf-feed-group {
  margin: 0px 3px 0px 3px;
  padding: 3px;
  overflow-y: auto;
  max-height: 730px;
  box-shadow: 0px 0px 3px 1px black;
}

.dtf-feedGroups .groupList {
  display: flex;
  flex-direction: column;
  margin: 2px 0 0 4px;
  padding: 0px 5px 0px 0px;
  gap: 5px 0;
}

.dtf-feedGroups .dtf-feed-group .subGroup {
  background-color: rgb(0 0 0);
  border-radius: 3px;
  box-shadow: inset 0px 0px 3px 0px rgb(50 50 50), 0px 0px 2px 0px rgb(50 50 50);
}

.dtf-feedGroups .subList {
  display: flex;
  gap: 10px 0px;
  background-color: rgb(255 255 255);
  margin: 5px;
  padding: 5px;
  max-height: 500px;
  overflow-y: auto;
  flex-direction: column;
  overscroll-behavior: contain;
  box-shadow: 0 0 3px 0px rgb(0 0 0);
}

.dtf-feedGroups .dtf-feed-group :is(.groupHeader, .panel) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: rgb(255 255 255);
  padding: 3px;
  font-size: 14px;
  cursor: pointer;
}
.dtf-feedGroups .dtf-feed-group .groupHeader {
  display: block;
  background-color: rgb(58 21 78);
  border-radius: 3px;
}
.dtf-feed-group .groupHeader :is(.title, .num, newMark) {
  display: inline-block;
  background-color: rgb(0 0 0);
}
.dtf-feed-group .groupHeader .title {
  font-weight: 600;
  color: rgb(101 215 168);
}
.dtf-feed-group .groupHeader .num {
  color: rgb(255 255 255);
  box-shadow: 0px 0px 4px 1px rgb(101 215 168);
}
.dtf-feed-group .groupHeader .num.off {
  display: none;
}

.dtf-feed-group .panel .info {
  display: flex;
  flex-direction: row;
  gap: 0 5px;
}

.dtf-feed-group .panel .mask {
  width: 14px;
  height: 14px;
  margin: auto;
  background-color: rgb(255 255 255);
  border-radius: 50%;
  display: inline-flex;
  overflow: hidden;
  box-shadow: 0px 0px 2px 1px rgb(0 0 0), 0px 0px 2px 1px rgb(255 255 255);
}
.dtf-feed-group .panel .ico {
  margin: auto;
  max-width: 14px;
  max-height: 14px;
}
.dtf-feed-group .panel :is(.title, .num, .newMark) {
  display: inline;
  background-color: rgb(0 0 0);
  margin: auto;
  padding: 1px 2px 1px 2px;
  border-radius: 2px;
  overflow: hidden;
}

.dtf-feed-group .panel .title {
  max-width: 350px;
}
.dtf-feed-group .num {
  margin-left: 5px;
  color: rgb(255 255 255);
  padding: 1px 3.5px 0px 3.5px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  box-shadow: 0px 0px 2px 1px rgb(255 255 255), 0px 0px 2px 1px rgb(0 0 0);
}

:is(.dtf-feed-group, .dtf-feed-group .subList)::-webkit-scrollbar {
  width: 9px;
  background: rgb(0 0 0);
}
:is(.dtf-feed-group, .dtf-feed-group .subList)::-webkit-scrollbar-track {
  background: rgb(0 0 0 / 67%);
}
:is(.dtf-feed-group, .dtf-feed-group .subList)::-webkit-scrollbar-track-piece {
  background-color: unset;
  border: 3px solid rgba(155, 105, 105, 0);
  border-radius: 0px;
  width: 1px;
  height: 1px;
}
:is(.dtf-feed-group, .dtf-feed-group .subList)::-webkit-scrollbar-thumb {
  border: 3px solid transparent;
  border-radius: 18px;
  box-shadow: inset 0px 0px 0px 1px rgb(41 206 145 / 12%), inset 0px 0px 5px 1px rgb(255 255 255 / 70%), inset 0px 0px 0px 1px rgb(41 206 145 / 12%);
}
:is(.dtf-feed-group, .dtf-feed-group .subList)::-webkit-scrollbar-corner {
  background-color: unset;
}



.dtf-feed-group :is(.groupList.hidden, .subList.hidden) {
  display: none;
}

.dtf-feedGroups .subList .feed__item.l-island-round {
  position: relative;
  border-radius: unset;
  box-shadow: 0px 0px 3px 0px rgb(0 0 0);
}

.dtf-feedGroups .feed__item.l-island-round>:nth-child(1) {
  margin-bottom: unset;
}
.dtf-feedGroups .l-island-round {
  border-radius: unset;
}

.dtf-feed-group .panel .newMark {
  background-color: rgb(0 0 0);
  max-width: max-content;
  color: rgb(203 203 203);
  font-size: 13px;
  padding: 1px 3px 1px 3px;
  border-radius: 3px;
  margin-left: 5px;
}
.dtf-feed-group .newMark.off {
  display: none;
}

.dtf-feed-group .sgActions {
  display: none;
  position: relative;
  float: right;
  z-index: 10;
}
.dtf-feed-group .panel:hover .sgActions {
  display: inline-flex;
}

.dtf-feed-group .sgActions button {
  background-color: rgb(255 255 255);
  color: rgb(0 0 0);
  font-size: 11px;
  font-weight: 500;
  padding: 0px 3px 0px 3px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 0px 3px 0px rgb(0 0 0);
}

.dtf-feedGroups .feed__item .feed-actions {
  color: black;
  border-radius: 3px;
  padding: 1px;
  margin-right: 10px;
  display: flex;
  align-items: flex-start;
  gap: 0px 7px;
}
.dtf-feedGroups .feed__item .feed-actions button {
  color: rgb(0 0 0);
  padding: 0px 3px 0px 3px;
  cursor: pointer;
  box-shadow: 0px 0px 3px 1px rgb(110 109 109);
}
.dtf-feedGroups .feed__item .feed-actions button:hover {
  color: red;
}

.dtf-feedGroups .feed__item .content-header {
  height: 45px;
}

.dtf-feedGroups .feed__item.l-island-round.collapsed {
  position: relative;
  box-shadow: 0px 0px 3px 0px rgb(0 0 0);
  border-radius: unset;
}

.dtf-feedGroups .subGroup:is(.ignoredSubsite, .ignoredAuthor, .favoriteSubsite, .favoriteAuthor) .panel .info::after {
  display: inline;
  position: relative;
  background-color: rgb(0 0 0);
  margin: auto;
  padding: 2px 2px 2px 2px;
  font-size: 11px;
  border-radius: 2px;
}

.dtf-feedGroups .feed__item.l-island-round:is(
.favoriteSubsite, .ignoredSubsite,
.favoriteAuthor, .ignoredAuthor
)>:nth-child(1)::before {
  display: block;
  width: max-content;
  position: absolute;
  color: rgb(108 108 108);
  font-size: 11px;
  font-weight: 600;
  margin: 0 0 0 3px;
  top: 3px;
  text-align: left;
  z-index: 0;
}

.dtf-feedGroups .feed__item.l-island-round:is(.watchedFeed, .ignoredFeed)>:nth-child(1)::after {
  display: block;
  width: 100%;
  position: absolute;
  color: rgb(50 50 50);
  font-size: 13px;
  font-weight: 600;
  top: 2px;
  text-align: center;
  z-index: 0;
}

.dtf-feed-group .subGroup:is(.favoriteSubsite, .favoriteAuthor)::after {
  display: block;
  position: absolute;
  top: 2px;
  right: 3px;
  color: rgb(108 108 108);
  font-size: 11px;
  font-weight: 600;
  z-index: 0;
}

.dtf-feedGroups :is(.blogBlockedNoTitle, .blogBlockedTitle,
.blogBlockedNoText, .blogBlockedText,
.subsiteBlockedNoTitle, .subsiteBlockedTitle,
.subsiteBlockedNoText, .subsiteBlockedText)::after {
  display: block;
  position: absolute;
  width: 100%;
  margin: 0 0 0 -3px;
  top: 1px;
  text-align: right;
  color: rgb(108 108 108);
  font-size: 13px;
  font-weight: 600;
}

.dtf-feedGroups .feed__item.l-island-round.collapsed,
.feed__item.l-island-round.collapsed>:nth-child(1) {
  min-height: 45px;
  height: 45px;
  overflow-y: hidden;
}


.dtf-feedGroups .feed__item.l-island-round.watchedFeed>:nth-child(1)::after {
  content: 'ФИД ПРОСМОТРЕН ✔️';
}
.dtf-feedGroups .feed__item.l-island-round.ignoredFeed>:nth-child(1)::after {
  content: 'ФИД ИГНОРИРУЕТСЯ 🚫';
}

.dtf-feed-group .subGroup:is(.favoriteSubsite, .favoriteAuthor) {
  background-color: ${cfg['feeds']['filters']['favorite']['visual']['color']['panel']};
  background-image: repeating-linear-gradient(45deg, rgb(0 0 0) 49%, transparent);
}
.dtf-feedGroups .feed__item.l-island-round:is(.favoriteSubsite, .favoriteAuthor) .content-header {
  background-color: ${cfg['feeds']['filters']['favorite']['visual']['color']['feed']};
}
.dtf-feedGroups .feed__item.l-island-round.favoriteAuthor .favoriteAuthor.btn {
  background-color: rgb(243 160 208);
  font-weight: 500;
}


.dtf-feedGroups .feed__item.l-island-round.ignoredAuthor>:nth-child(1) {
  filter: opacity(0.7);
}
.dtf-feedGroups .feed__item.l-island-round.ignoredAuthor .content-header {
  background-color: rgb(229 198 198);
}
.dtf-feedGroups .feed__item.l-island-round.ignoredAuthor .ignoreAuthor.btn {
  background-color: rgb(243 160 208);
  font-weight: 500;
}

.dtf-feedGroups .subGroup.ignoredSubsite.ignoredAuthor .panel .info::after {
  content: 'ПОДСАЙТ И АВТОР 💢\uFE0E';
}
.dtf-feedGroups .subGroup.favoriteSubsite.favoriteAuthor .panel .info::after {
  content: 'ПОДСАЙТ И АВТОР 💘';
}
.dtf-feedGroups .subGroup.favoriteSubsite.ignoredAuthor .panel .info::after {
  content: 'ПОДСАЙТ 💘, АВТОР 💢\uFE0E';
}
.dtf-feedGroups .subGroup.ignoredSubsite.favoriteAuthor .panel .info::after {
  content: 'ПОДСАЙТ 💢\uFE0E, АВТОР 💘';
}
.dtf-feedGroups .subGroup.ignoredSubsite .panel .info::after {
  content: 'ПОДСАЙТ 💢\uFE0E';
}
.dtf-feedGroups .subGroup.ignoredAuthor .panel .info::after {
  content: 'АВТОР 💢\uFE0E';
}
.dtf-feedGroups .subGroup.favoriteSubsite .panel .info::after {
  content: 'ПОДСАЙТ 💘';
}
.dtf-feedGroups .subGroup.favoriteAuthor .panel .info::after {
  content: 'АВТОР 💘';
}

.dtf-feedGroups .feed__item.l-island-roundLis(.favoriteSubsite, .favoriteAuthor) .content-header {
  background-color: rgb(144 209 172);
}
.dtf-feedGroups .feed__item.l-island-round.favoriteSubsite .favoriteSubsite.btn {
  background-color: rgb(243 160 208);
  font-weight: 500;
}

.dtf-feedGroups .feed__item.l-island-round.ignoredSubsite.ignoredAuthor>:nth-child(1)::before {
  content: 'ПОДСАЙТ И АВТОР 💢';
}
.dtf-feedGroups .feed__item.l-island-round.favoriteSubsite.favoriteAuthor>:nth-child(1)::before {
  content: 'ПОДСАЙТ И АВТОР 💘';
}
.dtf-feedGroups .feed__item.l-island-round.ignoredSubsite.favoriteAuthor>:nth-child(1)::before {
  content: 'ПОДСАЙТ 💢, АВТОР 💘';
}
.dtf-feedGroups .feed__item.l-island-round.favoriteSubsite.ignoredAuthor>:nth-child(1)::before {
  content: 'ПОДСАЙТ 💘, АВТОР 💢';
}
.dtf-feedGroups .feed__item.l-island-round.ignoredSubsite>:nth-child(1)::before {
  content: 'ПОДСАЙТ 💢';
}
.dtf-feedGroups .feed__item.l-island-round.ignoredAuthor>:nth-child(1)::before {
  content: 'АВТОР 💢';
}
.dtf-feedGroups .feed__item.l-island-round.favoriteSubsite>:nth-child(1)::before {
  content: 'ПОДСАЙТ 💘';
}
.dtf-feedGroups .feed__item.l-island-round.favoriteAuthor>:nth-child(1)::before {
  content: 'АВТОР 💘';
}





.dtf-feedGroups .feed__item.l-island-round.ignoredSubsite>:nth-child(1) {
  filter: opacity(0.7);
}
.dtf-feedGroups .feed__item.l-island-round:is(.ignoredSubsite, .ignoredAuthor, .ignoredFeed) .content-header {
  background-color: rgb(215 148 171);
}
.dtf-feedGroups .feed__item.l-island-round.ignoredSubsite .ignoreSubsite.btn {
  background-color: rgb(243 160 208);
  font-weight: 500;
}



.dtf-feedGroups .feed__item.l-island-round.watchedFeed>:nth-child(1) {
  filter: opacity(0.7);
}
.dtf-feedGroups .feed__item.l-island-round.watchedFeed .content-header {
  background-color: ${cfg['feeds']['filters']['watched']['visual']['color']['feed']};
}
.dtf-feedGroups .feed__item.l-island-round.watchedFeed .watchFeed.btn {
  background-color: rgb(243 160 208);
  font-weight: 500;
}

.dtf-feedGroups .feed__item.l-island-round.ignoredFeed>:nth-child(1) {
  filter: opacity(0.7);
}
.dtf-feedGroups .feed__item.l-island-round:is(.ignoredFeed, .ignoredAuthor) .content-header {
  background-color: ${cfg['feeds']['filters']['ignored']['visual']['color']['feed']};
}
.dtf-feedGroups .feed__item.l-island-round.ignoredFeed .ignoreFeed.btn {
  background-color: rgb(243 160 208);
  font-weight: 500;
}



.dtf-feed-group .subGroup:is(.ignoredSubsite, .ignoredAuthor, .ignoredFeed) {
  background-color: ${cfg['feeds']['filters']['ignored']['visual']['color']['panel']};
  background-image: repeating-linear-gradient(45deg, rgb(0 0 0) 49%, transparent);
}

.dtf-feedGroups .feed__item.l-island-round.blogBlockedNoTitle.blogBlockedNoText::after {
  content: 'Заголовок и текст ⦰';
}
.dtf-feedGroups .feed__item.l-island-round.blogBlockedTitle.blogBlockedText::after {
  content: 'Заголовок и текст ✗';
}
.dtf-feedGroups .feed__item.l-island-round.blogBlockedTitle.blogBlockedNoText::after {
  content: 'Заголовок ✗, текст ⦰';
}
.dtf-feedGroups .feed__item.l-island-round.blogBlockedNoTitle.blogBlockedText::after {
  content: 'Заголовок ⦰, текст ✗';
}
.dtf-feedGroups .feed__item.l-island-round.blogBlockedNoTitle::after {
  content: 'Заголовок ⦰';
}
.dtf-feedGroups .feed__item.l-island-round.blogBlockedNoText::after {
  content: 'Текст ⦰';
}
.dtf-feedGroups .feed__item.l-island-round.blogBlockedTitle::after {
  content: 'Текст ✗';
}
.dtf-feedGroups .feed__item.l-island-round.blogBlockedText::after {
  content: 'Текст ✗';
}

.dtf-feedGroups .feed__item.l-island-round.subsiteBlockedNoTitle.subsiteBlockedNoText::after {
  content: 'Заголовок и текст ⦰';
}
.dtf-feedGroups .feed__item.l-island-round.subsiteBlockedTitle.subsiteBlockedText::after {
  content: 'Заголовок и текст ✗';
}
.dtf-feedGroups .feed__item.l-island-round.subsiteBlockedTitle.subsiteBlockedNoText::after {
  content: 'Заголовок ✗, текст ⦰';
}
.dtf-feedGroups .feed__item.l-island-round.subsiteBlockedNoTitle.subsiteBlockedText::after {
  content: 'Заголовок ⦰, текст ✗';
}
.dtf-feedGroups .feed__item.l-island-round.subsiteBlockedNoTitle::after {
  content: 'Заголовок ⦰';
}
.dtf-feedGroups .feed__item.l-island-round.subsiteBlockedNoText::after {
  content: 'Текст ⦰';
}
.dtf-feedGroups .feed__item.l-island-round.subsiteBlockedTitle::after {
  content: 'Текст ✗';
}
.dtf-feedGroups .feed__item.l-island-round.subsiteBlockedText::after {
  content: 'Текст ✗';
}

.layout__right-column>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(2) .commentBlockedLink {
  background-color: rgb(0 0 0);
  border-radius: 3px;
}
.layout__right-column>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(2) .commentBlockedText {
  border-radius: 3px;
  font-size: 0px;
  display: none;
}

.dtf-feedGroups .dtf-menuButton {
  background-color: rgb(211 224 231);
  color: rgb(0 0 0);
  padding: 0px 3px 0px 3px;
  cursor: pointer;
  box-shadow: 0px 0px 3px 1px rgb(110 109 109);
}
.dtf-feedGroups .dtf-menuButton .menuList {
  /*margin: 0px 0px 0px -3px;*/
  margin: 0px 0px 0px 19px;
}

.dtf-menuButton {
  display: flex;
  align-items: flex-end;
  cursor: pointer;
}
.dtf-menuButton .menuList {
  display: none;
  position: absolute;
  margin: 0px 0px 0px -5px;
}
.dtf-menuButton:hover .menuList,
.dtf-menuButton .menuList:hover {
  background: rgb(255 255 255);
  width: max-content;
  height: max-content;
  padding: 3px;
  display: flex;
  flex-direction: row;
  gap: 5px 5px;
  box-shadow: 0px 0px 2px 1px rgb(0 0 0);
  z-index: 10;
}



.dtf-feedGroups .cont {
  display: flex;
}
.dtf-feedGroups .video-cont {
  display: inline-flex;
  position: relative;
  margin: auto;
  max-width: ${cfg['feeds']['attachments']['size']['video']}px;
  max-height: ${cfg['feeds']['attachments']['size']['video']}px;
  box-shadow: 0px 0px 3px 1px rgb(0 0 0);
  z-index: 10;
  cursor: pointer;
}
.dtf-feedGroups .video-cont video {
  max-width: inherit;
  max-height: inherit;
  margin: auto;
}

.dtf-feedGroups .video-cont.playing .mediaStarter {
  display: none;
}

.dtf-feedGroups .mediaStarter {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 40%);
  position: absolute;
  /* justify-content: center; */
  align-items: center;
  z-index: 10;
  cursor: pointer;
}
.dtf-feedGroups .mediaStarter .btn {
  display: flex;
  background-color: rgb(255 255 255);
  margin: 0 auto;
  height: 50%;
  max-height: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  /* top: calc(50% - 50% / 2); */
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 4px 0px rgb(0 0 0);
  z-index: 1;
  /* cursor: pointer; */
}
.dtf-feedGroups .mediaStarter .btn img {
  width: 35%;
  margin: 0px 0px 0px 10%;
}
.dtf-feedGroups .video-cont:hover .mediaStarter .btn {
  background-color: rgb(255 0 0);
}
`;
