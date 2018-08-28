// pages/boss/boss.js

const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible:true,
    title:1,
    height: wx.getSystemInfoSync().windowHeight,
    filter_work:[
      {
        name:'经验',
        click_bol:true
      },
      {
        name: '学历',
        click_bol: false
      },
      {
        name: '薪资',
        click_bol: false
      }, {
        name: '规模',
        click_bol: false
      }, {
        name: '融资',
        click_bol: false
      }
    ],
    scroll_bol:false,
    suffer:[
      {
        name:'不限'
      },
      {
        name: '应届生'
      },
      {
        name: '1年以内'
      },
      {
        name: '1年-3年'
      },
      {
        name: '3年-5年'
      },
      {
        name: '5年-10年'
      },
      {
        name: '10年以上'
      },
    ],
    text:11
  },
  setClass: function(ev) {
    
    //  console.log(ev);
    // 数据储存在这里
    //  console.log(ev.target.dataset.index);

    let index = ev.target.dataset.index;

    console.log(this.data.filter_work[index])
    
    if(this.data.filter_work[index].click_bol){
       let str = `filter_work[${index}].click_bol`;
       this.setData({ [str]: false, scroll_bol: false, visible: true})

      console.log(this.data.filter_work[index])
    }else{
      let arr = JSON.parse(JSON.stringify(this.data.filter_work));
      for (let i = 0; i < arr.length; i++) {
        arr[i].click_bol = false;
      }
      if (!this.data.filter_work[index].click_bol) {
        arr[index].click_bol = true;
      }
      this.setData({ filter_work: arr, scroll_bol: true, visible:false})
      this.data.scroll_bol = false;
    }
    //修改对象的方式
    //let str = `filter_work[${index}].click_bol`;
    // this.setData({[str]:true})
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.content);
    console.log('onLoad');
    console.log(options);
    console.log(wx.getSystemInfoSync());
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      console.log('用户下拉刷新')
      this.setData({
        'title':this.data.title + 1
      })
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
    // 修改数据的方法;  this.setData  修改完 页面更新
    // this.data.num    不更新

      //  this.setData({'num': this.data.num})




      this.setData()
  } 
})