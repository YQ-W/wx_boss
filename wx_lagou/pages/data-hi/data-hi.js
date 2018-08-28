// pages/data-hi/data-hi.js
//  小程序只有一个实例 app
//  const 前端定义常量的方式
//  所谓常量一经定义不能改变的量
const app = getApp();
console.log(app);
Page({
  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  tapName : function(event){
    console.log(event);
    
    app.content = event.target.dataset.hi;


    wx.navigateTo({
      url:`../boss/boss?name=${event.target.dataset.hi}`,
      success:function(){
        console.log('1234567');
      }
    })
  }
})