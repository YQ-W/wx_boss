// pages/require_component/require_component.js
var arr = getApp();



Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:'1123456',
    arr:[1,2,3,4],
    num:123456
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   'arr':arr.content
    // })
  },
  bindClick:function(){
      this.setData({
        'time':'wwww'
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  onMyEvent: function(e){
      console.log(e.detail)
  },
  numChange:function(e){
    console.log(e.detail)
  },
  onClick:function(){
    this.setData({
      num:123
    })
  }
})