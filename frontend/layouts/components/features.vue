<template>
  <div>
    <h2 class="header-title header-title--section">Features</h2>

    <div class="section-with-bg section-standart">
      <div class="container full-height--center">

        <div class="row features">

          <div class="column column-33" v-for="item of features">
            <div class="features__item">

              <div class="features__item--header">
                <img :src="require(`~/assets/images/features/${ item.icon }`)" :alt="item.title">
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
          title: 'WIRELESS SENSORS',
          desc: 'Smart, reliable, accurate & ultra-high-resolution wireless pressure sensors. Secure, robust and fast data transmission enables users to make prompt decisions.',
          icon: 'wireless.png'
        },
        {
          title: 'REAL TIME DATA',
          desc: 'Real-time data acquisition & streaming with NTP (Network Time Protocol) time-synchronization & flexibility to export in a single flat file at any time.',
          icon: 'real-item.png'
        },
        {
          title: 'CLOUD BASED',
          desc: 'Servers, storage, databases, networking, software, analytics, and intelligence provided over the cloud to offer faster solutions, flexible resources, and economies of scale.',
          icon: 'cloud-based.png'
        },
        {
          title: 'SINGLE SCREEN',
          desc: 'Smart Interface combines all the services working both on treatment and offset wells into single screen to avoid NPT (Non-Productive Time).',
          icon: 'single-screen.png'
        },
        {
          title: 'DATA ANALYTICS',
          desc: 'Automated diagnostics and analytics of raw data enables engineers to make prompt decisions on the well stimulation program after each stage completion.',
          icon: 'data-analytics.png'
        },
        {
          title: 'MACHINE LEARNING',
          desc: 'This application will automatically learn and improve from lookbacks without being explicitly programmed to predict potential FDI (Fracture Driven Interaction) events.',
          icon: 'ml.png'
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
