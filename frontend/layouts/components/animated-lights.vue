<template>
  <div>
    <svg class="lights-animated" version="1.1" xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="bg-animated">
          <rect v-for="item of nodes" :class="item.animation" :fill="item.color" :x="item.x" :y="item.y"
                :width="item.width" :height="item.height" :rx="item.rx"></rect>
        </g>
      </g>
    </svg>
  </div>

</template>


<style>
  .animate-circles {
    transform-origin: center;
    animation: mymove 130s infinite;
  }

  @keyframes mymove {
    from {
      transform: rotate(0) translate(0, 0)
    }
    to {
      transform: rotate(360deg) translate(150px, 200px)
    }
  }

  .animate-circles-half {
    transform-origin: center;
    animation: mymove-half 130s infinite;
  }

  @keyframes mymove-half {
    from {
      transform: rotate(0) translate(0, 0)
    }
    to {
      transform: rotate(180deg) translate(150px, -100px)
    }
  }

  .animate-circles-reverse {
    transform-origin: center;
    animation: mymove-rev 130s infinite;
  }

  @keyframes mymove-rev {
    from {
      transform: rotate(0) translate(0px, 0px)
    }
    to {
      transform: rotate(-360deg) translate(150px, 100px)
    }
  }

  .animate-circles-half-rev {
    transform-origin: center;
    animation: mymove-half-rev 130s infinite;
  }

  @keyframes mymove-half-rev {
    from {
      transform: rotate(0) translate(0, 0)
    }
    to {
      transform: rotate(-180deg) translate(125px, 100px)
    }
  }
</style>

<script>
import { Elastic, TimelineMax } from "gsap";

export default {
  data() {
    return {
      nodes: [],
      animations: [
        'animate-circles',
        'animate-circles-half',
        'animate-circles-reverse',
        'animate-circles-half-rev'
      ],
      colors: [
        '#2DB6D2',
        '#57D22D',
        '#2DD263',
        '#D22D9E',
        '#2DD2B7',
        '#D22D82',
      ],
      combs: [
        {
          w: 5,
          h: 6,
          rx: 3
        },
        {
          w: 7,
          h: 9,
          rx: 4
        },
      ]
    }
  },
  methods: {
    createNodes() {
      this.nodes = [];
      for (let i = 0; i <= 50; i++) {
        let comb = this.combs[this.randomIntFromInterval(0, 1)];
        this.nodes.push({
          color: this.colors[this.randomIntFromInterval(0, 5)],
          x: this.randomIntFromInterval(50, window.innerWidth - 50),
          y: this.randomIntFromInterval(50, window.innerHeight - 50),
          width: comb.w,
          height: comb.h,
          rx: comb.rx,
          animation: this.animations[this.randomIntFromInterval(0, 3)]
        });
      }
    },
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },
  beforeMount() {
    this.createNodes();
  }
}
</script>
