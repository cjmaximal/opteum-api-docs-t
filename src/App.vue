<template>
  <div id="app">
    <div :class="$style.clear"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-6"><a href="#" class="btn btn-primary"><i class="fa fa-user-circle fa-fw"></i> Styled with sass!</a></div>
        <div class="col-md-6">

          <el-badge :value="countInput" class="item">
            <el-button size="small">{{input}}</el-button>
          </el-badge>

          <el-input
            placeholder="Test"
            v-model="input">
          </el-input>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      input: 'Hello'
    }
  },
  computed: {
    countInput () {
      return this.input.split('').length
    }
  }
}
</script>

<style lang="sass">
  @import url(https://fonts.googleapis.com/css?family=Roboto)

  // Bootstrap
  $icon-font-path: "../node_modules/bootstrap-sass/assets/fonts/bootstrap/"
  @import '../node_modules/bootstrap-sass/assets/stylesheets/bootstrap'

  // Font Awesome
  $fa-font-path: "../node_modules/font-awesome/fonts"
  @import "../node_modules/font-awesome/scss/font-awesome"

  body
    font-family: Roboto
    font-size: 14px
</style>

<style module>
  .clear{
    height: 20px;
  }
</style>
