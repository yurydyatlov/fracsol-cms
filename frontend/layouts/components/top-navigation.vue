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
      <li style="margin-top: 10px;" class="login-but-cont">

        <a href="https://fracsol.revsolz.com" target="_blank">
          <img class="login-but" src="~assets/images/login-button.png" alt="Fracsol Login Button" />
        </a>

<!--        <svg width="218px" height="60px" viewBox="0 0 218 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Login">
              <rect id="Rectangle" stroke="url(#linearGradient-1)" stroke-width="3" x="1.5" y="1.5" width="215" height="57" rx="14"></rect>
              <text font-family="HelveticaNeue, Helvetica Neue" font-size="24" font-weight="normal" fill="#C2CBE9">
                <tspan x="89.716" y="37">Login</tspan>
              </text>
              <g id="Login-Lock" transform="translate(36.000000, 11.000000)">
                <rect id="Lock-Square" fill-rule="nonzero" x="0" y="0" width="39" height="38"></rect>
                <path d="M8,26.6842105 L8,18 L32,18 L32,23 C32,28.5228475 27.5228475,33 22,33 L11.2,33 L11.2,33" id="Lock-Bottom" stroke="url(#linearGradient-2)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M29,14 C29,9.02943725 24.9705627,5 20,5 C15.0294373,5 11,9.02943725 11,14 L11,14 L11,14" id="Lock-Top" stroke="url(#linearGradient-3)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                <circle id="Green-Dot-" fill="#49FF00" fill-rule="nonzero" cx="19.5" cy="25.5" r="1.5"></circle>
              </g>
            </g>
          </g>
        </svg>-->

<!--        <a  class="login-button">
          <img alt="login-icon" src="~assets/images/lock.svg" />
          Login
        </a>-->
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
