<template>
  <div class="donate-item">
    <p>覺得這篇報導不錯嗎？歡迎用新台幣支持 READr，讓更多深度報導浮上檯面。</p>
    <a href="https://www.readr.tw/donate" target="_blank">用新台幣跟 READr 一起幹大事</a>
  </div>
</template>

<script>
export default {
  name: 'DonateItem'
}
</script>

<style lang="stylus">
.donate-item
  display flex
  flex-direction column
  align-items center
  width 100%
  max-width 800px
  background-color rgba(216, 216, 216, 0.15)
  color #4a4a4a
  padding 20px 0
  font-size 14px
  & p
    margin 0
    color #7d7d7d
  & a
    margin 13px 0 0 0
    display flex
    justify-content center
    align-items center
    color #fff
    background-color #a56c6a
    text-decoration none
    width 400px
    height 40px
    padding 12px 0
    border-radius 4px
    transition background-color 0.3s ease-out
    &:hover
      background-color #dc9794
    &:active
      background-color #dc9794
      transition none

@media (max-width 719.98px)
  .donate-item
    padding 21px 15px 23px 15px
    & p
      text-align center
      line-height 1.71
    & a
      margin 8px
      width 100%
      height 44px
</style>