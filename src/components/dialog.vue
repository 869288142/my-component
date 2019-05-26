<template>
  <div
    class="mask"
    v-show="visible"
  >
    <div
      class="dialog"
      :style="{width: width}"
    >
      <!-- title -->
      <div class="title">
        <slot name="title"></slot>
      </div>
      <!-- body -->
      <div class="body">
        <slot name="body"> </slot>
      </div>
      <!-- footer -->
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean
    },
    width: {
      type: String,
      default: "50%"
    }
  }
};
</script>
<style lang="scss" scoped>
.mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
}
.dialog {
  background-color: #fff;
  display: inline-block;
  vertical-align: middle;
  border-radius: 6px;
}
.title {
  padding: 10px 20px 20px;
  text-align: left;
}
.body {
  padding: 10px 20px 20px;
  text-align: left;
}
.footer {
  padding: 10px 20px 20px;
  text-align: right;
}
</style>

