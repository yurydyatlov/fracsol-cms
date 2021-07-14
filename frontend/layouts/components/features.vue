<template>
  <div>
    <h2 class="header-title header-title--section">Features</h2>

    <div class="section-with-bg section-standart">
      <div class="container full-height--center">

        <div class="row features">

          <div class="column column-33" v-for="item of features">
            <div class="features__item">

              <div class="features__item--header">
                <img :src="strapiBaseUri + item.Icon.url" :alt="item.title">
              </div>

              <div class="features__item--title">{{ item.title }}</div>
              <div class="features__item--desc">{{ item.Description }}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
   'features'
  ],
  data() {

    return {
      strapiBaseUri: ''
    }
  },
  methods: {
    common: () => {
    }
  },
  mounted() {
    this.strapiBaseUri = process.env.strapiBaseUri;
    this.year = new Date().getFullYear()
  }
}
</script>
