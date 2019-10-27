<template>
  <div class="select">
    <input
      :value="value"
      class="select_value"
      @click="triggerList"
      readonly
    />
    <ul class="list_wrap" v-show="isShowList">
      <li
        v-for="(item, index) in list"
        class="list_item"
        @click="selectItem(item)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "select",
  data() {
    let list = Array.from({length: 8}, (item, index) => {
      return  {
        name : `下拉${index}`
      }
    })
    
    return {
      value: 3,
      list,
      isShowList: false
    };
  },
  methods: {
    triggerList() {
      this.isShowList = !this.isShowList
    },
    selectItem(item) {
      this.isShowList = false

      this.value = item.name

      this.$emit("on-change", item)
    },
  },
  mounted() {
    document.addEventListener("click",(e) => {
      console.log();
      if(![...e.target.classList].includes("select_value")) {
         this.isShowList = false
      }
    })
  }
};
</script>

<style>
.select {
  position: relative;
  width: 200px;
}
.select_value {
  width: 100%;
  display: block;
  outline: none;
}
.list_wrap {
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.list_item {
  text-align: left;
  padding: 5px;
}
</style>