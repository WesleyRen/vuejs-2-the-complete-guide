<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr />
                <select v-model="alertAnimation">
                  <option value="fade">Fade</option>
                  <option value="slide">Slide</option>
                </select>
                <br />
                <br />
                <button class="btn btn-primary" @click="show = !show">{{ showHide }} alert</button>
                <br /><br />
                <transition :name="alertAnimation">
                  <div class="alert alert-info" v-show="show">This is some info 1</div>
                </transition>

                <transition name="fade" appear>
                  <div class="alert alert-info" v-show="show">This is some info 2</div>
                </transition>

                <transition name="slide" type="animation" appear>
                  <div class="alert alert-info" v-if="show">This is some info 3</div>
                </transition>

                <transition
                            appear
                            enter-class=""
                            enter-active-class="animated bounce"
                            leave-class=""
                            leave-active-class="animated shake">
                  <div class="alert alert-info" v-if="show">This is some info 4</div>
                </transition>

                <transition :name="alertAnimation" mode="out-in">
                  <div class="alert alert-info" v-if="show" key="info">This is some info 5</div>
                  <div class="alert alert-warning" v-else key="warning">This is some warning</div>
                </transition>

                <br />
                <button class="btn btn-primary" @click="load = !load">Load / remove element</button>
                <transition
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
                  @enter-canclled="enterCancelled"

                  @before-leave="beforeLeave"
                  @leave="leave"
                  @after-leave="afterLeave"
                  @leave-cancelled="leaveCancelled"
                  :css="false"> <!-- for Javascript only animatin -->
                  <div style="width: 300px; height: 100px; background-color: green" v-if="load">

                  </div>
                </transition>
                <hr />
                <button class="btn btn-primary"
                  @click="selectedComponent == 'danger-alert' ? selectedComponent = 'success-alert' : selectedComponent = 'danger-alert'">Toggle my components</button>
                <br />
                <transition name="slide" mode="out-in">
                  <component :is="selectedComponent"></component>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import DangerAlert from './DangerAlert.vue';
import SuccessAlert from './SuccessAlert.vue';

    export default {
        data() {
            return {
              show: false,
              load: true,
              alertAnimation: 'fade',
              elementWidth: 100,
              selectedComponent: 'success-alert'
            }
        },
        components: {
          DangerAlert,
          SuccessAlert
        },
        methods: {
          beforeEnter(el) {
            console.log('beforeEnter');
            this.elementWidth = 100;
            el.style.width = this.elementWidth + 'px';
          },
          enter(el, done) {
            console.log('enter');
            let round = 1;
            const interval = setInterval(() => {
              el.style.width = (this.elementWidth + round * 10) + 'px';
              round++;
              if (round > 20) {
                clearInterval(interval);
                done();
              }
            }, 20);
            done();
          },
          afterEnter(el) {
            console.log('afterEnter');
          },
          enterCancelled(el) {
            console.log('enterCancelled');
          },

          beforeLeave(el) {
            console.log('beforeLeave');
            this.elementWidth = 300;
            el.style.width = this.elementWidth + 'px';
          },
          leave(el, done) {
            console.log('leave');
            let round = 1;
            const interval = setInterval(() => {
              el.style.width = (this.elementWidth - round * 10) + 'px';
              round++;
              if (round > 20) {
                clearInterval(interval);
                done();
              }
            }, 20);
          },
          afterLeave(el) {
            console.log('afterLeave');
          },
          leaveCancelled(el) {
            console.log('leaveCancelled');
          }
        },
        computed: {
          showHide() {
            return this.show ? 'Hide' : 'Show';
          }
        }
    }
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s;
}

.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 2s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
  /* transform: trnaslateY(5em); */
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}

.slide-leave {

}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(5em);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(5em);
  }
}
</style>
