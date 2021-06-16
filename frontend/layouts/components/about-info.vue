<template>

  <div>
    <section class="content-begin">
      <div class="section-with-bg section-standart incline-section">
        <div class="container">
          <div class="mirrored-box about-us-info">
            <div class="mirrored-box__content">

              <div class="about-us-info__content">
                <svg class="info-diagram" width="600px" height="auto" viewBox="0 0 557 449" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>

                    <linearGradient x1="50%" y1="133.565594%" x2="50%" y2="0%" id="linearGradient-1">
                      <stop stop-color="#34CCFF" offset="0%"></stop>
                      <stop stop-color="#14C8EA" offset="0%"></stop>
                      <stop stop-color="#5CC766" offset="49.073763%"></stop>
                      <stop stop-color="#80FF22" offset="100%"></stop>
                      <stop stop-color="#213B92" offset="100%"></stop>
                      <stop stop-color="#0B450D" offset="100%"></stop>
                    </linearGradient>

                    <linearGradient x1="30.4401898%" y1="67.1557348%" x2="63.8984948%" y2="35.8776459%"
                                    id="linearGradient-2">
                      <stop stop-color="#FFE524" offset="0%"></stop>
                      <stop stop-color="#890A7D" offset="98.4402316%"></stop>
                      <stop stop-color="#061037" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="43.6234473%" y1="70.2537121%" x2="71.108498%" y2="100.2741735%"
                                    id="linearGradient-3">
                      <stop stop-color="#78107C" offset="0%"></stop>
                      <stop stop-color="#F10D8A" offset="90.9981235%"></stop>
                      <stop stop-color="#F00D8A" offset="95%"></stop>
                      <stop stop-color="#C6ABAB" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g class="board-triangle" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">

                    <path style="cursor: pointer;"
                          :class="{ active: currentTab === 1 }"
                          @click="activateStory()"
                          d="M276.499953,285 L530.999953,423.666667 L529.962363,423.666607 C530.649116,424.142371 530.999953,424.624183 530.999953,425.111111 C530.999953,433.886302 417.056422,441 276.499953,441 C135.943484,441 21.9999532,433.886302 21.9999532,425.111111 C21.9999532,424.624183 22.3507903,424.142371 23.0375438,423.666607 L21.9999532,423.666667 L276.499953,285 Z"
                          id="Combined-Shape" fill="url(#linearGradient-1)"></path>

                    <path style="cursor: pointer;" @click="activateTeam()"
                          :class="{ active: currentTab === 3 }"
                          d="M284.999953,11 L285.646953,12.005 C292.637409,7.10498514 354.19765,89.2295565 423.672927,196.026318 L425.780613,199.270072 C496.114366,307.642626 547.409046,399.507239 540.350584,404.455571 C539.878338,404.78661 539.156867,404.720224 538.200569,404.275654 L538.66733,405 L287.595761,269.147642 L285.03254,14.5916078 C284.992384,14.1335515 284.98929,13.7300982 285.023939,13.3824669 L284.999953,11 Z"
                          id="Combined-Shape" fill="url(#linearGradient-2)"></path>

                    <path style="cursor: pointer;" @click="activateBoard()"
                          :class="{ active: currentTab === 2 }"
                          d="M266.999953,11 L264.408908,269.147642 L13.7979433,405 L14.5044994,403.900598 C13.191231,404.667216 12.2300924,404.864282 11.648131,404.455585 C4.60262784,399.507238 55.8032471,307.642569 126.00802,199.269947 C196.212794,90.8973246 258.836602,7.05525624 265.882316,12.0032893 C265.991428,12.079923 266.08657,12.1774026 266.167888,12.2954665 L266.999953,11 Z"
                          id="Combined-Shape" fill="url(#linearGradient-3)"></path>

                    <text style="cursor: pointer;font-family: var(--main-font)" @click="activateTeam()" id="TEAM"
                          :class="{ active: currentTab === 3 }"
                          transform="translate(403.690184, 304.797476) rotate(27.000000) translate(-403.690184, -304.797476) "
                          font-family="Geneva" font-size="40" font-weight="normal" fill="#FFFFFF">
                      <tspan x="336.768255" y="316.771149">TEAM</tspan>
                    </text>
                    <text style="cursor: pointer;" @click="activateBoard()" id="BOARD"
                          :class="{ active: currentTab === 2 }"
                          transform="translate(191.383632, 274.508426) rotate(-28.000000) translate(-191.383632, -274.508426) "
                          font-family="Geneva" font-size="40" font-weight="normal" fill="#FFFFFF">
                      <tspan x="119.206054" y="286.482098" style="font-family: var(--main-font)">BOARD</tspan>
                    </text>
                    <text style="cursor: pointer;" @click="activateStory()" id="OUR-STORY" font-family="Geneva"
                          :class="{ active: currentTab === 1 }"
                          font-size="40" font-weight="normal" fill="#FFFFFF">
                      <tspan x="165.248" y="416" style="font-family: var(--main-font)">OUR STORY</tspan>
                    </text>
                  </g>
                </svg>
                <div class="info-text">
                  <div class="info-text__content" v-show="currentTab === 0">
                    RevSolz Corp. is a progressive company providing <br /> frac solutions in the Oil & Gas Industry. <br /><br />
                    RevSolz's visionary and talented team is developing <br /> the most comprehensive, unique, interactive & AI/ML<br /> infused cloud-based software for the oilfield.
                  </div>

                  <div class="tab-content" v-show="currentTab === 1">
                    <div class="info-text__title">
                      OUR STORY
                    </div>
                    <div class="info-text__content full-opacity">
                      RevSolz was founded by small group of highly experienced, talented, and determined professionals with extensive, and diversified oil & gas industry experiences. <br /><br />

                      While working for many years in the industry they encountered that finding optimum solutions is hard in well completions. The right solution with essential features, easy access and high-level expertise is even harder,that’s why RevSolz was born to fill that gap. <br /><br />

                      Imagine a world where your companies completion data acquisition is smart and connected. Envision a cloud-based brain working round the clock with predictive alerts and stunning visualizations, RevSolz makes this game changing dream a reality. <br /><br />

                      RevSolz is the industry's most comprehensive and unique frac solution provider with surface monitoring & analytics, supplying clients with all the smart monitoring devices for data acquisition and comprehensive cloud-based software. <br /><br />

                      We are a team of industry and technology experts who are focused to bring revolutionary frac solutions with modern, interactive & AI/ML infused software to the oilfield.
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
                                <div class="avatar-box__photo-cont" :style="{ backgroundImage: `url('${ require(`~/assets/images/team/${ item.photo }`) }')` }"></div>
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
                                <div class="avatar-box__photo-cont" :style="{ backgroundImage: `url('${ require(`~/assets/images/team/${ item.photo }`) }')` }"></div>
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
                    <div class="info-text__content full-opacity m-t-25">
                      To deliver cutting-edge IoT Frac Solutions to Oil & Gas Sector.
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
                    <div class="info-text__content full-opacity m-t-25">
                      Becoming the exemplary driver in the process of digital transformation.
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
  data() {
    return {
      currentTab: 0,
      team: [
        {
          fullname: 'Marc Mukhtarli',
          title: 'President & Co-founder',
          photo: 'Marc Mukhtarli Photo.png'
        },
        {
          fullname: 'Joseph Gharibi',
          title: 'VP & Co-founder',
          extraInfo: '(Business Development)',
          photo: 'Joseph Gharibi Photo.png'
        },
        {
          fullname: 'Joseph Sheikhi',
          title: 'Manager & Co-founder ',
          extraTitle: '(Engineering & Technology)',
          photo: 'Joseph Sheiki Photo.png'
        },
        {
          fullname: 'Elkhan Shahverdi',
          title: 'DevOps Engineer',
          photo: 'Elkhan Shaverdi.png'
        },
        {
          fullname: 'Marty Stromquist',
          title: 'Board Director',
          extraTitle: '(Co-founder of NCS)',
          photo: 'Marty Stromquist Photo.png'
        },
        {
          fullname: 'Don Getzlaf',
          title: 'Board Director',
          extraTitle: '(Co-founder of NCS)',
          photo: 'Don Getzlaf Photo.png'
        },
        {
          fullname: 'Peter Garrett',
          title: 'Board Director',
          extraTitle: '(Partner of GGTCPA)',
          photo: 'Peter Garrett Photo.png'
        },
      ],
      board: [
        {
          fullname: 'Marty Stromquist',
          title: 'Board Director',
          extraTitle: '(Co-founder of NCS)',
          photo: 'Marty Stromquist Photo.png'
        },
        {
          fullname: 'Don Getzlaf',
          title: 'Board Director',
          extraTitle: '(Co-founder of NCS)',
          photo: 'Don Getzlaf Photo.png'
        },
        {
          fullname: 'Peter Garrett',
          title: 'Board Director',
          extraTitle: '(Partner of GGTCPA)',
          photo: 'Peter Garrett Photo.png'
        },
        {
          fullname: 'Marc Mukhtarli',
          title: 'President & Co-founder',
          photo: 'Marc Mukhtarli Photo.png'
        },
        {
          fullname: 'Joseph Gharibi',
          title: 'VP & Co-founder',
          extraInfo: '(Business Development)',
          photo: 'Joseph Gharibi Photo.png'
        },
      ]
    }
  },
  methods: {
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
  }
}
</script>
