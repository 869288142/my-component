<template>
  <div>
    <canvas ref="canvas" :width="realWidth" :height="realWidth"></canvas>
  </div>
</template>

<script>
let dpr = 1;
export default {
  name: "countDown",
  props: {
    width: {
      type: Number,
      default: 130
    },
    circleColor :{
      type: String,
      default: "#FF8C00"
    },
    lineWidth: {
      type: Number, 
      default: 3
    },
    loadingColor: {
      type: String,
      default: "red"
    },
    percent: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      context: null,
    };
  },
  computed: {
    realLineWidth() {
      return this.lineWidth * dpr
    },
    realWidth() {
      return this.width * dpr
    },
    radius() {
      return this.realWidth / 2 - this.realLineWidth / 2
    },
    center() {
      return this.realWidth / 2 
    }
  },
  methods: {
    writeOrange() {
      const { context } = this;
      context.save();
      context.beginPath();
      context.strokeStyle = this.loadingColor;
      context.lineWidth = this.realLineWidth;
      context.arc(
        this.center,
        this.center,
        this.radius,
        -Math.PI / 2,
        (1 / 50) * Math.PI * (this.percent) - (1 / 2) * Math.PI
      );
      context.stroke();
      context.restore();
    },
    writeCircle() {
      const { context } = this;
      context.save();
      // 绘制新的路径，清除之前路径信息
      context.beginPath();
      // 设置描边颜色
      context.strokeStyle = this.circleColor;
      context.lineWidth = this.realLineWidth;
      // x, y , r , from, to , false为从form绘制到to
      context.arc(this.center, this.center, this.radius, 0, Math.PI * 2);

      // 描边，与填充配对
      context.stroke();
      context.restore();
    },
    repaint() {
      this.context.clearRect(0, 0, this.realWidth, this.realWidth);
      this.writeCircle()
      this.writeOrange()
    }
  },
  watch: {
    circleColor() {
      this.repaint()
    },
    loadingColor() {
      this.repaint()
    },
    percent() {
      this.repaint()
    }
  },
  mounted() {
    // 初始化canvas上下文
    this.context = this.$refs.canvas.getContext('2d');
    dpr = window.devicePixelRatio;
    this.repaint()
  }
};
</script>

<style>
</style>