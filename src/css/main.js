const mainCSS = `
.dtf-feedGroups .content-header-repost {
  position: absolute;
  left: 0px;
  margin: 0;
  padding: 18px 0 0 0px;
  width: max-content;
  font-size: 0;
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
  box-shadow: 0px 0px 2px 0px rgb(0 0 0);
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
}

.dtf-feedGroups .dtf-feed-group :is(.groupHeader, .panel) {
  width: 100%;
  color: white;
  padding: 3px;
  font-size: 14px;
  cursor: pointer;
}
.dtf-feed-group .groupHeader {
    background-color: rgb(58 21 78);
    border-radius: 3px;
}
.dtf-feed-group .groupHeader :is(.title, .num, newMark) {
  display: inline-block;
}
.dtf-feed-group .groupHeader .title {
  font-weight: 600;
  color: rgb(101 215 168);
}
.dtf-feed-group .groupHeader .num {
  background-color: rgb(0 0 0);
  color: rgb(255 255 255);
  box-shadow: 0px 0px 4px 1px rgb(101 215 168);
}
.dtf-feed-group .groupHeader .num.off {
  display: none;
}
.dtf-feed-group .panel .mask {
  width: 14px;
  height: 14px;
  margin: 0px 5px 0px 0px;
  background-color: rgb(255 255 255);
  border-radius: 50%;
  display: inline-flex;
  overflow: hidden;
  box-shadow: 0px 0px 3px 0px rgb(0 0 0);
}
.dtf-feed-group .panel .ico {
  margin: auto;
  max-width: 14px;
  max-height: 14px;
}
.dtf-feed-group .panel :is(.title, .num, .newMark) {
  display: inline-block;
  overflow: hidden;
  margin: 0px 5px -1px 0px;
}

.dtf-feed-group .panel .title {
  max-width: 350px;
}
.dtf-feed-group .num {
  margin-left: 5px;
  color: rgb(255 255 255);
  background-color: rgb(0 0 0);
  padding: 1px 3.5px 0px 3.5px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  box-shadow: 0px 0px 4px 1px rgb(255 255 255);
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

.dtf-feedGroups .feed__item.l-island-round>div {
  margin-bottom: unset;
}
.dtf-feedGroups .l-island-round {
  border-radius: unset;
}

.dtf-feed-group .subGroup {
  position: relative;
  background-color: rgb(0 0 0);
}

.dtf-feed-group .panel .newMark {
  background-color: rgb(0 0 0);
  display: inline-block;
  max-width: max-content;
  color: rgb(203 203 203);
  font-size: 13px;
  padding: 0px 3px 0px 3px;
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
  margin: 1px 0px 0px 0px;
  z-index: 10;
}
.dtf-feed-group .panel:hover .sgActions {
  display: inline-block;
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
  box-shadow: 0px 0px 3px 1px rgb(0 0 0);
  border-radius: unset;
}
.dtf-feedGroups .feed__item.l-island-round.collapsed::after {
  display: block;
  width: 100%;
  position: absolute;
  color: rgb(108 108 108);
  font-size: 14px;
  font-weight: 600;
  top: 3px;
  text-align: center;
  filter: contrast(1);
  z-index: 0;
}

.dtf-feedGroups .subGroup:is(.ignoredSubsite, .ignoredAuthor,
.favoriteSubsite, .favoriteAuthor) .panel::after {
  display: inline;
  position: relative;
  font-size: 11px;
  top: -2px;
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
  top: 3px;
  left: 3px;
  text-align: left;
  z-index: 0;
}

.dtf-feedGroups .feed__item.l-island-round:is(
.watchedFeed, .ignoredFeed
)>:nth-child(1)::after {
  display: block;
  width: 100%;
  position: absolute;
  color: rgb(50 50 50);
  font-size: 13px;
  font-weight: 600;
  top: 3px;
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

.dtf-feedGroups :is(.blogBlockedNoTitle, .blogBlockedTitle, .subsiteBlockedNoTitle, .subsiteBlockedTitle)::after {
  display: block;
  text-align: center !important;
  color: rgb(108 108 108);
  font-size: 13px;
  font-weight: 600;
}

.dtf-feedGroups .feed__item.l-island-round:is(.collapsed),
.feed__item.l-island-round:is(.collapsed)>div {
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
  background-color: rgb(144 209 172);
  box-shadow: 0px 0px 3px 1px rgb(50 50 50);
}
.dtf-feed-group .subGroup.favoriteAuthor .panel .title {
  color: rgb(0 0 0);
}
.dtf-feedGroups .feed__item.l-island-round.favoriteAuthor .content-header {
  background-color: rgb(209 144 205);
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

.dtf-feedGroups .subGroup.ignoredSubsite.ignoredAuthor .panel::after {
  content: 'ПОДСАЙТ И АВТОР 💢';
}
.dtf-feedGroups .subGroup.favoriteSubsite.favoriteAuthor .panel::after {
  content: 'ПОДСАЙТ И АВТОР 💘';
}
.dtf-feedGroups .subGroup.favoriteSubsite.ignoredAuthor .panel::after {
  content: 'ПОДСАЙТ 💘, АВТОР 💢';
}
.dtf-feedGroups .subGroup.ignoredSubsite.favoriteAuthor .panel::after {
  content: 'ПОДСАЙТ 💢, АВТОР 💘';
}

.dtf-feed-group .subGroup.favoriteSubsite .panel .title {
  color: rgb(0 0 0);
}
.dtf-feedGroups .feed__item.l-island-round.favoriteSubsite .content-header {
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
.dtf-feedGroups .feed__item.l-island-round.ignoredSubsite .content-header {
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
  background-color: rgb(199 229 215);
}
.dtf-feedGroups .feed__item.l-island-round.watchedFeed .watchFeed.btn {
  background-color: rgb(243 160 208);
  font-weight: 500;
}

.dtf-feedGroups .feed__item.l-island-round.ignoredFeed>:nth-child(1) {
  filter: opacity(0.7);
}
.dtf-feedGroups .feed__item.l-island-round.ignoredFeed .content-header {
  background-color: rgb(229 198 198);
}
.dtf-feedGroups .feed__item.l-island-round.ignoredFeed .ignoreFeed.btn {
  background-color: rgb(243 160 208);
  font-weight: 500;
}



.dtf-feed-group .subGroup.ignoredAuthor {
  background-color: rgb(78 28 52);
  box-shadow: 0px 0px 2px 0px rgb(0 0 0);
}
.dtf-feed-group .subGroup.ignoredAuthor .title {
  color: rgb(195 112 154);
}

.dtf-feedGroups .feed__item.l-island-round.blogBlockedNoTitle.blogBlockedNoText::after {
  content: 'Блог ⛔ - заголовок и текст ⦰';
}
.dtf-feedGroups .feed__item.l-island-round.blogBlockedTitle.blogBlockedText::after {
  content: 'Блог ⛔ - заголовок и текст ✗';
}
.dtf-feedGroups .feed__item.l-island-round.blogBlockedTitle.blogBlockedNoText::after {
  content: 'Блог ⛔ - заголовок ✗, текст ⦰';
}
.dtf-feedGroups .feed__item.l-island-round.blogBlockedNoTitle.blogBlockedText::after {
  content: 'Блог ⛔ - заголовок ⦰, текст ✗';
}

.dtf-feedGroups .feed__item.l-island-round.subsiteBlockedNoTitle.subsiteBlockedNoText::after {
  content: 'Статья ⛔ - заголовок и текст ⦰';
}
.dtf-feedGroups .feed__item.l-island-round.subsiteBlockedTitle.subsiteBlockedText::after {
  content: 'Статья ⛔ - заголовок и текст ✗';
}
.dtf-feedGroups .feed__item.l-island-round.subsiteBlockedTitle.subsiteBlockedNoText::after {
  content: 'Статья ⛔ - заголовок ✗, текст ⦰';
}
.dtf-feedGroups .feed__item.l-island-round.subsiteBlockedNoTitle.subsiteBlockedText::after {
  content: 'Статья ⛔ - заголовок ⦰, текст ✗';
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




:is(.DTF-video, .DTF-videoYT) {
  display: flex;
  max-width: 600px;
  max-height: 400px;
  margin: auto;
}
:not(.comment) :is(.DTF-video, .DTF-videoYT) :is(video, iframe) {
  max-width: 600px;
  position: relative;
  margin: auto;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.dtf-feedGroups .v-subscribe-button__subscribe {
  background-color: unset;
}
`;
