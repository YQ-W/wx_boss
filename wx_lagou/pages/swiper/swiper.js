// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    // 是否显示指示点
    indicatorDots: true,
    // 当前点击时候的index索引
    // 建议在标签里面去写
    //current:'???'
    // 指示点颜色
    indicatorColor: 'rgba(100, 0, 0, .3)',
    // 被选中颜色点
    indicatorActiveColor : 'red',
    // 是否不返回滑动
    circular:true,
    //是否自动切换
    autoplay: true,
    //自动切换时间间隔
    interval: 3000,
    // 滑动动画时长
    duration: 2000,
    // 可以露出后一项的一小部分
    // (页面会出现异常; 建议用大间距的时候 使用这种方案)
    nextMargin: "0px",
    width: wx.getSystemInfoSync().windowWidth


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
    wx.stopPullDownRefresh()
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
  
  }
})