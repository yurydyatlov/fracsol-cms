<template>
  <div>

    <div class="section-standart">

      <h2 class="header-title header-title--section">Features</h2>

      <div class="container full-height--center">

        <div class="row features">

          <div class="column column-33" v-for="item of features">
            <div class="features__item">

              <div class="features__item--header">
                <img :src="process.env.strapiBaseUri + item.Icon.url" :alt="item.title">
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
  props: ['features'],
  data() {
    return {
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
