<template>
  <div class="home">
    <button @click="dialogVisible = !dialogVisible">切换</button>
    <Dialog
      :visible="dialogVisible"
      width="30%"
    >
      <template v-slot:title>
        编辑
      </template>
      <template v-slot:body>
        <span>这是一段信息</span>
      </template>
      <template v-slot:footer>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >确 定</el-button>
      </template>
    </Dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import Dialog from "@/components/dialog.vue";

export default {
  data() {
    return {
      dialogVisible: true
    };
  },
  name: "home",
  components: {
    Dialog
  }
};
</script>
