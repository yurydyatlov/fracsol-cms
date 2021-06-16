<template>

  <div class='navbar' :class="isActive()">

    <svg viewBox="0 0 12 10" class="hamburger" @click="menuPress()">
      <path d="M10,2 L2,2" class="upper" style="fill: none;stroke: white;stroke-linecap: round;"/>
      <path d="M2,5 L10,5" class="middle" style="fill: none;stroke: white;stroke-linecap: round;"/>
      <path d="M10,8 L2,8" class="lower" style="fill: none;stroke: white;stroke-linecap: round;"/>
    </svg>

    <div class="logo-form">
      <NuxtLink :to="'/'" class="logo-top">
        <img alt="fracsol-logo" src="~assets/images/logo.svg" />
      </NuxtLink>
    </div>

    <ul class="top-menu">
      <li v-for="item of nav" @mouseenter="mouseEnter(item)" @mouseleave="mouseLeave(item)">
        <NuxtLink :to="'/' + item.route">
          {{ item.title }}
        </NuxtLink>
        <transition name="fade">
          <ul class="sub-menu" v-if="item.subElements && item.isHovered">
            <li v-for="subItem of item.subElements">
              <NuxtLink :to="'/' + item.route + '/' + subItem.route">
                {{ subItem.title }}
              </NuxtLink>
            </li>
          </ul>
        </transition>
      </li>
      <li style="margin-top: 10px;">
        <a href="https://fracsol.revsolz.com" target="_blank" class="login-button">
          <img alt="login-icon" src="~assets/images/lock.svg" />
          Login</a>
      </li>
    </ul>

  </div>
</template>

<script>

import { TimelineLite, Power2 } from 'gsap';

export default {
  data() {
    return {
      menuActive: false,
      nav: [
        {
          id: 'home',
          title: 'Home',
          route: ''
        },
        {
          id: 'about-us',
          title: 'About Us',
          route: 'about-us',
        },
        {
          title: 'FracSol',
          route: 'fracsol',
          subElements: [
            {
              title: 'TWM',
              route: 'twm',
            },
            {
              title: 'OWM',
              route: 'owm',
            },
            {
              title: 'FDI',
              route: 'fdi',
            },
            {
              title: 'ML',
              route: 'ml',
            },
          ]
        },
        {
          title: 'Contact',
          route: 'contact',
        }
      ]
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.initHum();
  },
  methods: {
    mouseEnter(item) {
      item.isHovered = true;
      this.$forceUpdate();
    },
    mouseLeave(item) {
      item.isHovered = false;
      this.$forceUpdate();
    },
    menuPress() {
      this.menuActive = !this.menuActive;
      this.tl.reversed() ? this.tl.play() : this.tl.reverse();
    },
    initHum() {
      const upper = document.getElementsByClassName('upper');
      const middle = document.getElementsByClassName('middle');
      const lower = document.getElementsByClassName('lower');
      this.tl = new TimelineLite({paused: true, reversed: true});
      this.tl.to(upper, 0.2, {attr: {d: "M8,2 L2,8"}, x: 1, ease: Power2.easeInOut}, 'start')
          .to(middle, 0.2, {autoAlpha: 0}, 'start')
          .to(lower, 0.2, {attr: {d: "M8,8 L2,2"}, x: 1, ease: Power2.easeInOut}, 'start');
    },
    handleScroll(e) {
      if (e.target.scrollingElement.scrollTop > 20) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
      this.$forceUpdate();
    },
    isActive() {
      return !this.menuActive ? '' : 'active';
    }
  }
}
</script>

<style>

</style>
