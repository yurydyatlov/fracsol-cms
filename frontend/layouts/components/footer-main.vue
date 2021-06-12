<template>
  <div>
    <div class="bottom-footer">
      <div class="copyright">
        © {{ year }} RevSolz Corp.
      </div>
      <div class="container">
        <div class="row">
          <div class="column column-33">
            <div class="contact-info">
              <img src="~assets/images/phone.png" alt="Tel No" />
              <a href="tel:+15875835939">+1 587 583 5939</a>
            </div>
          </div>
          <div class="column column-33">
            <div class="contact-info">
              <a href="https://linkedin.com" target="_blank"><img src="~assets/images/li.png" alt="Linkedin" /></a>
            </div>
          </div>
          <div class="column column-33">
            <div class="contact-info">
              <img src="~assets/images/location.png" alt="Location" />
              <address> 30th Floor, 421 7th Ave SW <br /> Calgary, AB T2P 4K9</address>
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
      year: String,
      footerMenu: [
        {
          title: 'Privacy Policies',
          url: ''
        },
        {
          title: 'Terms & Conditions',
          url: ''
        }
      ]
    }
  },
  methods: {

  },
  mounted() {
    this.year = new Date().getFullYear()
  }
}
</script>
