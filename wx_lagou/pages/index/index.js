//index.js
//获取应用实例因为如果 getSetting 没走
//  回调函数没绑定上;
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    showUser: true,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow:function(){
    
  },
  onLoad: function (options) {
    console.log('--------')
    console.log(options)
    console.log('--------')
    //console.log(app.globalData);
    //判断小程序的API，回调，参数，组件等是否在当前版本用。
    console.log(wx.canIUse('button.open-type.getUserInfo'));
    // 如果存在直接设置值
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      // 当前的版本支持 button的授权方式 手动绑定
      // userInfoReadyCallback 避免数据没来 为空
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  // 还是需要定义一个函数 
  // 和 open-type 后面的名字一样 
  // 而且必须为 getUserInfo
  getUserInfo: function (e) {
    console.log(app)
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true,
        showUser: false
      })
    }
  },
  openSetting: function (obj) {
    console.log(obj)
  }
})
