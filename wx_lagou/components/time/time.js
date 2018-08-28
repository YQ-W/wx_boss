// 注意：在组件wxss中不应使用ID选择器、属性选择器和标签名选择器。
// 在自定义组件的 js 文件中，需要使用 Component() 来注册组件，并提供组件的属性定义、内部数据和自定义方法。
// 组件的属性值和内部数据将被用于组件 wxml 的渲染，其中，属性值是可由组件外部传入的

Component({
  // 外部可以扔入多个节点
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  // 
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,  // 强类型定义
      value: 'default value', // default 默认值
      observer: function(obj){ // 修改状态监测
        console.log('我被修改了')
        console.log(obj)
      }
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {
      'name':'wyq'
    }
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () {
      console.log('dddd')
    }
  },
  created: function(){
    console.log('created');
  },
  attached: function(){
    console.log('attached');
  },
  ready : function(){
    console.log('ready');
  }
})