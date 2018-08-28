// components/city_List/city_List.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      city:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    height: wx.getSystemInfoSync().windowHeight,
    selectedIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    filterCity : function(e){
        this.setData({
          'selectedIndex':e.target.dataset.index
        })
    },
    closeCity: function(){
      // 给父级上传一个状态 
      // bind:(closeCity) 
      // detail 里面的 值  false
      this.triggerEvent('closeCity',false)

    }
  },
  created:function(){
    console.log(this.data.city)
  }
})
