<template>
  <section class="subscr-item">
    <p>留下信箱，<br>第一時間獲得專題相關消息。</p>
    <Subscription />
  </section>
</template>

<script>
import Subscription from 'src/components/Subscription.vue'

export default {
  name: 'SubscrItem',
  components: {
    Subscription
  }
}
</script>

<style lang="stylus">
@import '../util/global.styl'

.subscr-item
  text-align center
  position relative
  z-index 9
  & br
    @media (min-width $mobile)
      display none
  & .subscription-wrapper
    margin-top 20px
    max-width 400px
    margin-left auto
    margin-right auto
    & .subscription
      &__input
        height 40px
        font-size 1.5rem
        border-radius 10px
        line-height 40px
        flex 1 0 70.83%
        outline none
        transition box-shadow 0.15s $easeInOutCubic
        &:focus
          box-shadow 0 0 0 3.2px #9b9b9b
        &::-webkit-input-placeholder
          color #9b9b9b
          font-weight 500
      &__btn
        height 40px
        font-size 1.5rem
        border-radius 10px
        font-weight 500
        background-color #4a4a4a
        line-height 40px
        flex 0 0 25%
        max-width 70px
        &:active
          background-color #9b9b9b
</style>
