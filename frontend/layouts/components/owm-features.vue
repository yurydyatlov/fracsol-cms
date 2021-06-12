<template>
  <div>

    <div class="section-standart">

      <h2 class="header-title header-title--section">Features</h2>

      <div class="container full-height--center">

        <div class="row features">

          <div class="column column-33" v-for="item of features">
            <div class="features__item">

              <div class="features__item--header">
                <img :src="require(`~/assets/images/owm-features/${ item.icon }`)" :alt="item.title">
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
          icon: 'wireless-sensors.png'
        },
        {
          title: 'ALARM NOTIFICATIONS',
          desc: 'Smart alarm settings, enable push notifications to any device (mobile & web) and receive alarms via text messages, emails.',
          icon: 'alarm_notification.png'
        },
        {
          title: 'REAL TIME AND CLOUD BASED',
          desc: 'Well monitoring anytime with a  cloud-based login. Smart sensors continuously push new data to FracSol OWM for real-time monitoring and analysis.',
          icon: 'real_time.png'
        },
        {
          title: 'INTERACTIVE MAPPING',
          desc: 'Instant multi-layer maps, geocoding and reverse geocoding bring geographic context to your analysis. Maps help generate insights and make predictions not possible using tables and charts.',
          icon: 'interactive_mapping.png'
        },
        {
          title: 'SECURE LOGIN',
          desc: 'High security protocols helps any organization in managing and maintaining enhanced infrastructures for compliance and to protect sensitive data.',
          icon: 'secure_login.png'
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
