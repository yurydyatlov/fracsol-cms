<template>
  <div>

    <div class="section-standart">

      <h2 class="header-title header-title--section">Features</h2>

      <div class="container full-height--center">

        <div class="row features">

          <div class="column column-33" v-for="item of features">
            <div class="features__item">

              <div class="features__item--header">
                <img :src="require(`~/assets/images/twm-features/${ item.icon }`)" :alt="item.title">
              </div>

              <div class="features__item--title">{{ item.title }}</div>
              <div class="features__item--desc">{{ item.desc }}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  data() {
    return {
      features: [
        {
          title: 'OVERVIEW',
          desc: 'Automated frac activity detection gives your team instant access to the instant completion events, delivering timely information to the engineering team.',
          icon: 'overview.png'
        },
        {
          title: 'STAGE VIEW',
          desc: 'Plot, spot and respond to potential problems, rapidly identifying any inter-stage events such as ball-drop, perf placement, plug position and more for every stage.',
          icon: 'stage-view.png'
        },
        {
          title: 'FRAC VIEW',
          desc: 'Brings historical completion data together in real-time, giving your team a powerful tool to optimize completion design and performance. Rapidly compare wells and identify frac parameters that yields to optimal fracking performance.',
          icon: 'frac-view.png'
        },
        {
          title: 'KPIs',
          desc: 'Users can easily track and view KPIs across wells, enabling engineers to rapidly identify best practices and continuously improve completion performance.',
          icon: 'kpis.png'
        },
        {
          title: 'Interactive Mapping',
          desc: 'Enables progress tracking of completion stages with reference to directional surveys. Obtain insights of wellbore info on geomatics enabled map.\n',
          icon: 'mapping.png'
        },
        {
          title: 'ML Powered',
          desc: 'Pattern recognition enabled learning process, empowers the algorithms to discover regularities and assist with classifying into various categories.',
          icon: 'ml-powered.png'
        },
      ]
    }
  },
  methods: {
    common: () => {
    }
  },
  mounted() {
    this.year = new Date().getFullYear()
  }
}
</script>
