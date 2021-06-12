<template>
  <div>

    <div class="section-standart">

      <h2 class="header-title header-title--section">Features</h2>

      <div class="container full-height--center">

        <div class="row features">

          <div class="column column-33" v-for="item of features">
            <div class="features__item">

              <div class="features__item--header">
                <img :src="require(`~/assets/images/fdi-features/${ item.icon }`)" :alt="item.title">
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
          title: 'GEOMATICS ENABLED',
          desc: 'Ability to create interactive monitoring dashboards with received frac and offsetting data. Make real-time annotations on the charts and share with peers.',
          icon: 'Geomatics Enabled.png'
        },
        {
          title: 'AUTOMATED FDI IDENTIFICATION',
          desc: 'Obtain insights of fracture interactions with FracSol’s automated system. FDIs will be identified, classified and categorized into tables, charts and maps to display degree of frac connectivity (parent/child communication).',
          icon: 'auto-fdi.png'
        },
        {
          title: 'PRODUCTION ANALYSIS',
          desc: 'By bringing historical production data, FDI module will automatically generate and identify production gain/loss and find the relationship with identified FDI events.',
          icon: 'Production Analysis.png'
        },
        {
          title: 'STAT ANALYSIS',
          desc: 'Ability to create interactive, statistical dashboards with analyzed frac and offsetting well data. Benefit out of real-time performance indicators for better asset management.',
          icon: 'Stat Analysis.png'
        },
        {
          title: 'SUPERIMPOSE EVENTS',
          desc: 'Ability to overlay identified FDI events will enable users to compare intensities, magnitudes and volumes that created each frac connectivity.',
          icon: 'Superimpose.png'
        },
        {
          title: 'ML Powered',
          desc: 'Pattern recognition enabled learning process, empowers the algorithms to discover regularities and assist with classifying into various categories.',
          icon: 'ML Powered.png'
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
