// components/num-controller/num-controller.js
Component({
  /**
   * 组件的属性列表
   */
  created:function(){
    console.log(this.properties.num)
  },
  properties: {
    num:{
       type : Number,
       observer: function (obj) { // 修改状态监测
        console.log('我被修改了')
        console.log(obj)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    add:function() {

      this.setData({
        num: this.data.num + 1
      })

      // 通知父级状态变更
   //   this.triggerEvent('numChange', this.data.num);
    },
    sub: function() {
      if (this.data.num > 0) {
        this.setData({
          num: this.data.num - 1
        })
      }
     // this.triggerEvent('numChange', this.data.num);
    }
  }
})
