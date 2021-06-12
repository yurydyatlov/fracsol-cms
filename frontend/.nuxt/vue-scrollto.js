import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {"offset":-59})

export default function (ctx, inject) {
    inject('scrollTo', VueScrollTo.scrollTo)
}
