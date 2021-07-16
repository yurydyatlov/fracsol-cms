<template>

  <div>
    <section class="content-begin">
      <div class="section-with-bg section-standart incline-section">
        <div class="container">
          <div class="mirrored-box about-us-info">
            <div class="mirrored-box__content">

              <div class="about-us-info__content start-align" style="position: relative">

                <svg class="about-tabs" viewBox="0 0 717 640" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <linearGradient id="linearGradient-1" x1="30%" y1="40%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#0E136F;stop-opacity:1" />
                      <stop offset="60%" style="stop-color:#F10D8A;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#F00D8A;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient x1="30.4401898%" y1="67.1557348%" x2="63.8984948%" y2="35.8776459%" id="linearGradient-2">
                      <stop stop-color="#FFE524" offset="0%"></stop>
                      <stop stop-color="#890A7D" offset="98.4402316%"></stop>
                      <stop stop-color="#061037" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="50%" y1="133.565594%" x2="50%" y2="0%" id="linearGradient-3">
                      <stop stop-color="#34CCFF" offset="0%"></stop>
                      <stop stop-color="#14C8EA" offset="0%"></stop>
                      <stop stop-color="#5CC766" offset="49.073763%"></stop>
                      <stop stop-color="#80FF22" offset="100%"></stop>
                      <stop stop-color="#213B92" offset="100%"></stop>
                      <stop stop-color="#0B450D" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(96.000000, 92.000000)">
<!--                      <path d="M287.077531,299 L541.577531,437.666667 L540.53994,437.666607 C541.226694,438.142371 541.577531,438.624183 541.577531,439.111111 C541.577531,447.886302 427.634,455 287.077531,455 C146.521062,455 32.5775309,447.886302 32.5775309,439.111111 C32.5775309,438.624183 32.928368,438.142371 33.6151214,437.666607 L32.5775309,437.666667 L287.077531,299 Z" id="Combined-Shape" fill="url(#linearGradient-1)"></path>-->
<!--                      <path d="M295.577531,25 L296.224531,26.005 C303.214986,21.1049851 364.775228,103.229557 434.250504,210.026318 L436.35819,213.270072 C506.691943,321.642626 557.986624,413.507239 550.928162,418.455571 C550.455916,418.78661 549.734444,418.720224 548.778147,418.275654 L549.244908,419 L298.173338,283.147642 L295.610117,28.5916078 C295.569962,28.1335515 295.566868,27.7300982 295.601517,27.3824669 L295.577531,25 Z" id="Combined-Shape" fill="url(#linearGradient-2)"></path>-->
                      <g @mouseover="hoveredBoard = true;" @mouseout="hoveredBoard = false" class="path-action"
                         :class="{ active: currentTab === 2 }"
                         @click="activateBoard()">
                        <path :d="getPathBoard()" style="transition: all 111ms linear;" fill="url(#linearGradient-1)"></path>
                        <text id="BOARD" transform="translate(159.961209, 309.508426) rotate(-28.000000) translate(-159.961209, -309.508426) " font-family="Geneva" font-size="40" font-weight="normal" fill="#FFFFFF">
                          <tspan x="90" y="285">BOARD</tspan>
                        </text>
                      </g>
                      <g @mouseover="hoveredTeam = true;" @mouseout="hoveredTeam = false;" class="path-team"
                         :class="{ active: currentTab === 3 }"
                         @click="activateTeam()">
                        <path :d="getPathTeam()" style="transition: all 111ms linear;" fill="url(#linearGradient-2)"></path>
                        <text id="TEAM" transform="translate(400, 285) rotate(29.000000) translate(-408.267762, -305.797476) " font-family="Geneva" font-size="40" font-weight="normal" fill="#FFFFFF">
                          <tspan x="341.345832" y="317.771149">TEAM</tspan>
                        </text>
                      </g>
                      <g @mouseover="hoveredStory = true;" @mouseout="hoveredStory = false" class="path-story"
                         :class="{ active: currentTab === 1 }"
                         @click="activateStory()">
                        <path :d="getPathStory()" style="transition: all 111ms linear;" fill="url(#linearGradient-3)"></path>
                        <text id="OUR-STORY" font-family="Geneva" font-size="40" font-weight="normal" fill="#FFFFFF">
                          <tspan x="160" y="390">OUR STORY</tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                </svg>


                <div class="info-text">

                  <div class="info-text__content about-content" v-show="currentTab === 0" v-html="$md.render(intro)">
                  </div>

                  <div class="tab-content" v-show="currentTab === 1">
                    <div class="info-text__title">
                      OUR STORY
                    </div>
                    <div class="info-text__content full-opacity">
                      <div v-html="$md.render(story)"></div>
                    </div>
                  </div>

                  <div class="tab-content" v-show="currentTab === 2">
                    <div class="info-text__title">
                      BOARD
                    </div>
                    <div class="info-text__content">
                      <div class="team-members">
                        <template v-for="item of board">
                          <div class="team-members__item col-three">
                            <div class="avatar-box">
                              <div class="avatar-box__image">
                                <div class="avatar-box__photo-cont" :style="{ backgroundImage: `url('${ strapiBaseUri + item.photo.url }')` }"></div>
                              </div>
                            </div>

                            <div class="team-members__item__fullname">
                              {{ item.fullname }}
                            </div>
                            <div class="team-members__item__title">
                              {{ item.title }}
                            </div>
                            <div class="team-members__item__extra-title">
                              {{ item.extraTitle }}
                            </div>

                          </div>
                        </template>
                      </div>
                    </div>
                  </div>


                  <div class="tab-content" v-show="currentTab === 3">
                    <div class="info-text__title">
                      TEAM
                    </div>
                    <div class="info-text__content">
                      <div class="team-members">
                        <template v-for="item of team">
                          <div class="team-members__item">
                            <div class="avatar-box">
                              <div class="avatar-box__image">
                                <div class="avatar-box__photo-cont" :style="{ backgroundImage: `url('${ strapiBaseUri + item.photo.url }')` }"></div>
                              </div>
                            </div>

                            <div class="team-members__item__fullname">
                              {{ item.fullname }}
                            </div>
                            <div class="team-members__item__title">
                              {{ item.title }}
                            </div>
                            <div class="team-members__item__extra-title">
                              {{ item.extraTitle }}
                            </div>
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="section-with-bg section-standart">
        <div class="container">
          <div class="mirrored-box about-us-info">
            <div class="mirrored-box__content">

              <div class="about-us-info__content min-height-content-250">
                <div class="info-text">

                  <div class="tab-content">

                    <div class="left-bg-container">
                      <img src="~assets/images/mission.png" />
                    </div>
                    <div class="right-bg-container">
                      <img src="~assets/images/mission.png" />
                    </div>

                    <div class="info-text__title">
                      MISSION
                    </div>
                    <div class="info-text__content full-opacity m-t-25" v-html="$md.render(mission)">
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="section-with-bg section-standart">
        <div class="container">
          <div class="mirrored-box about-us-info">
            <div class="mirrored-box__content">

              <div class="about-us-info__content min-height-content-250">
                <div class="info-text">

                  <div class="tab-content">

                    <div class="left-bg-container">
                      <img src="~assets/images/vision.png">
                    </div>
                    <div class="right-bg-container">
                      <img src="~assets/images/vision.png">
                    </div>

                    <div class="info-text__title">
                      VISION
                    </div>
                    <div class="info-text__content full-opacity m-t-25" v-html="$md.render(vision)">
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="section-with-bg section-standart">
        <div class="container">
          <div class="mirrored-box about-us-info sticc-lead">
            <div class="mirrored-box__content">

              <div class="about-us-info__content min-height-content-250">
                <div class="info-text">

                  <div class="tab-content">

                    <div class="info-text__title">
                      STICC to LEAD
                    </div>
                    <div class="info-text__content full-opacity m-t-25">
                      <img src="~assets/images/sticc_to_lead.png" alt="Sticc to Lead" />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>



export default {
  props: ['team', 'board', 'story', 'intro', 'vision', 'mission'],
  data() {
    return {
      currentTab: 0,
      hoveredBoard: false,
      hoveredTeam: false,
      hoveredStory: false,
      svgWidth: 300,
      svgHeight: 300,
      strapiBaseUri: ''
    }
  },
  methods: {
    getPathBoard: function () {
      return `M255.999953,0 L253.408908,258.147642 L2.79794327,394 L3.50449937,392.900598 C2.19123099,393.667216 1.23009244,393.864282 0.648130959,393.455585 C-6.39737216,388.507238 44.8032471,296.642569 115.00802,188.269947 C185.212794,79.8973246 247.836602,-3.94474376 254.882316,1.0032893 C254.991428,1.07992298 255.08657,1.17740256 255.167888,1.29546651 L255.999953,0 Z`;
    },
    getPathTeam: function () {
      return `M273.999953,0 L274.646953,1.005 C281.637409,-3.89501486 343.19765,78.2295565 412.672927,185.026318 L414.780613,188.270072 C485.114366,296.642626 536.409046,388.507239 529.350584,393.455571 C528.878338,393.78661 528.156867,393.720224 527.200569,393.275654 L527.66733,394 L276.595761,258.147642 L274.03254,3.59160782 C273.992384,3.13355152 273.98929,2.7300982 274.023939,2.38246694 L273.999953,0 Z`;
    },
    getPathStory: function () {
      return `M265.499953,274 L519.999953,412.666667 L518.962363,412.666607 C519.649116,413.142371 519.999953,413.624183 519.999953,414.111111 C519.999953,422.886302 406.056422,430 265.499953,430 C124.943484,430 10.9999532,422.886302 10.9999532,414.111111 C10.9999532,413.624183 11.3507903,413.142371 12.0375438,412.666607 L10.9999532,412.666667 L265.499953,274 Z`;
    },
    activateStory: function () {
      this.currentTab = 1;
    },
    activateBoard: function () {
      this.currentTab = 2;
    },
    activateTeam: function () {
      this.currentTab = 3;
    },
  },
  mounted() {
    this.strapiBaseUri = process.env.strapiBaseUri;
  }
}
</script>
