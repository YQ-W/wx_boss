// pages/overflowScroll/overflowScroll.js
Page(
  {

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: wx.getSystemInfoSync().windowHeight,
    scroll_bol : false,
    uiData: {
      "result": [
        {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4948851,
        "positionName": "交互设计师",
        "city": "北京",
        "createTime": "今天 11:05",
        "salary": "15k-25k",
        "companyId": 55446,
        "companyLogo": "i/image3/M00/4C/9E/CgpOIFrgFT-AB_lKAAAXCTsC5_U047.png",
        "companyName": "贝壳",
        "companyFullName": "链家网（北京）科技有限公司",
        "ageLimit": "1年以内",
        "educationBackground": "本科"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4809654,
        "positionName": "视觉设计师",
        "city": "北京",
        "createTime": "今天 13:09",
        "salary": "15k-30k",
        "companyId": 55446,
        "companyLogo": "i/image3/M00/4C/9E/CgpOIFrgFT-AB_lKAAAXCTsC5_U047.png",
        "companyName": "贝壳",
        "companyFullName": "链家网（北京）科技有限公司",
        "ageLimit": "十年以上",
        "educationBackground": "高中"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4933418,
        "positionName": "交互设计师",
        "city": "北京",
        "createTime": "今天 16:02",
        "salary": "15k-25k",
        "companyId": 18139,
        "companyLogo": "i/image2/M00/13/95/CgotOVnwNqeAFbmnAABaH5Q_vVE401.png",
        "companyName": "京东集团",
        "companyFullName": "北京京东世纪贸易有限公司",
        "ageLimit": "不限",
        "educationBackground": "大专"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4776321,
        "positionName": "视觉设计",
        "city": "北京",
        "createTime": "今天 17:41",
        "salary": "10k-15k",
        "companyId": 18139,
        "companyLogo": "i/image2/M00/13/95/CgotOVnwNqeAFbmnAABaH5Q_vVE401.png",
        "companyName": "京东集团",
        "companyFullName": "北京京东世纪贸易有限公司",
        "ageLimit": "一年以内",
        "educationBackground": "本科"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4621621,
        "positionName": "视觉设计师",
        "city": "北京",
        "createTime": "2018-08-19",
        "salary": "10k-20k",
        "companyId": 62,
        "companyLogo": "i/image2/M01/79/0A/CgoB5ltr2A-AM5SFAADbT9jQCn841.jpeg",
        "companyName": "字节跳动",
        "companyFullName": "北京字节跳动科技有限公司",
        "ageLimit": "一年以内",
        "educationBackground": "硕士"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4625805,
        "positionName": "UI设计师",
        "city": "北京",
        "createTime": "2018-08-09",
        "salary": "18k-36k",
        "companyId": 62,
        "companyLogo": "i/image2/M01/79/0A/CgoB5ltr2A-AM5SFAADbT9jQCn841.jpeg",
        "companyName": "字节跳动",
        "companyFullName": "北京字节跳动科技有限公司",
        "ageLimit": "1年以内",
        "educationBackground": "高中"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4712110,
        "positionName": "视觉设计师-衍生品事业部",
        "city": "北京",
        "createTime": "2018-08-15",
        "salary": "15k-30k",
        "companyId": 109,
        "companyLogo": "i/image3/M00/25/96/Cgq2xlqXn9-ALvW-AAAR5MK8aqs262.png",
        "companyName": "马蜂窝",
        "companyFullName": "北京蚂蜂窝网络科技有限公司",
        "ageLimit": "1-3年",
        "educationBackground": "高中"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4703778,
        "positionName": "初中级UI设计师",
        "city": "北京",
        "createTime": "2018-08-09",
        "salary": "10k-20k",
        "companyId": 44091,
        "companyLogo": "i/image3/M00/06/87/Cgq2xlpgCByAMD8nAACUbQvvrew382.png",
        "companyName": "自如网",
        "companyFullName": "北京自如友家资产管理有限公司",
        "ageLimit": "1-3年",
        "educationBackground": "硕士"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4087719,
        "positionName": "高级UI设计师",
        "city": "北京",
        "createTime": "2018-08-09",
        "salary": "13k-25k",
        "companyId": 44091,
        "companyLogo": "i/image3/M00/06/87/Cgq2xlpgCByAMD8nAACUbQvvrew382.png",
        "companyName": "自如网",
        "companyFullName": "北京自如友家资产管理有限公司",
			"ageLimit": "1-3年",
        "educationBackground": "本科"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4005556,
        "positionName": "酒店UI设计师",
        "city": "北京",
        "createTime": "2018-08-15",
        "salary": "15k-30k",
        "companyId": 109,
        "companyLogo": "i/image3/M00/25/96/Cgq2xlqXn9-ALvW-AAAR5MK8aqs262.png",
        "companyName": "马蜂窝",
        "companyFullName": "北京蚂蜂窝网络科技有限公司",
        "ageLimit": "1-3年",
        "educationBackground": "大专"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 2218390,
        "positionName": "UI设计师",
        "city": "北京",
        "createTime": "今天 11:17",
        "salary": "15k-20k",
        "companyId": 2630,
        "companyLogo": "image1/M00/00/07/Cgo8PFTUWAyAS16_AABzIihhnP4085.png",
        "companyName": "站酷ZCOOL",
        "companyFullName": "北京站酷网络科技有限公司",
        "ageLimit": "1年以上",
        "educationBackground": "本科"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4676966,
        "positionName": "UI设计师",
        "city": "北京",
        "createTime": "今天 14:37",
        "salary": "20k-30k",
        "companyId": 1970,
        "companyLogo": "image1/M00/00/06/CgYXBlTUWAeANQBuAABHTL1SBa8889.jpg",
        "companyName": "去哪儿网",
        "companyFullName": "北京趣拿软件科技有限公司",
        "ageLimit": "1年以上",
        "educationBackground": "硕士"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4614866,
        "positionName": "UI设计师",
        "city": "北京",
        "createTime": "今天 14:19",
        "salary": "10k-20k",
        "companyId": 5142,
        "companyLogo": "image1/M00/1E/39/CgYXBlUtyiKALAAwAABj34GbTu8848.jpg",
        "companyName": "人人网",
        "companyFullName": "北京千橡网景科技发展有限公司",
        "ageLimit": "1-3年",
        "educationBackground": "本科"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4350525,
        "positionName": "UI设计师",
        "city": "北京",
        "createTime": "今天 14:08",
        "salary": "15k-20k",
        "companyId": 157387,
        "companyLogo": "i/image2/M00/4E/39/CgoB5lsE0oKAXNSTAAAZzaVTqJ4208.jpg",
        "companyName": "水母基因",
        "companyFullName": "北京水母科技有限公司",
        "ageLimit": "1-3年",
        "educationBackground": "本科"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4781818,
        "positionName": "UI设计师",
        "city": "北京",
        "createTime": "今天 17:03",
        "salary": "15k-30k",
        "companyId": 436,
        "companyLogo": "image1/M00/26/1E/Cgo8PFVUDROAf7zrAABr5cEcbGQ572.jpg",
        "companyName": "360",
        "companyFullName": "奇虎360科技有限公司",
        "ageLimit": "1-3年",
        "educationBackground": "大专"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4845056,
        "positionName": "视觉设计师",
        "city": "北京",
        "createTime": "今天 17:41",
        "salary": "10k-15k",
        "companyId": 18139,
        "companyLogo": "i/image2/M00/13/95/CgotOVnwNqeAFbmnAABaH5Q_vVE401.png",
        "companyName": "京东集团",
        "companyFullName": "北京京东世纪贸易有限公司",
        "ageLimit": "1-3年",
        "educationBackground": "大专"

      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 3635365,
        "positionName": "视觉设计",
        "city": "北京",
        "createTime": "今天 09:25",
        "salary": "8k-15k",
        "companyId": 18139,
        "companyLogo": "i/image2/M00/13/95/CgotOVnwNqeAFbmnAABaH5Q_vVE401.png",
        "companyName": "京东集团",
        "companyFullName": "北京京东世纪贸易有限公司",
        "ageLimit": "1-3年",
        "educationBackground": "本科"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4800033,
        "positionName": "交互设计师",
        "city": "北京",
        "createTime": "昨天 10:05",
        "salary": "15k-30k",
        "companyId": 55446,
        "companyLogo": "i/image3/M00/4C/9E/CgpOIFrgFT-AB_lKAAAXCTsC5_U047.png",
        "companyName": "贝壳",
        "companyFullName": "链家网（北京）科技有限公司",
        "ageLimit": "1年以上",
        "educationBackground": "大专"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4525159,
        "positionName": "UI设计师",
        "city": "北京",
        "createTime": "2018-08-09",
        "salary": "20k-40k",
        "companyId": 62,
        "companyLogo": "i/image2/M01/79/0A/CgoB5ltr2A-AM5SFAADbT9jQCn841.jpeg",
        "companyName": "字节跳动",
        "companyFullName": "北京字节跳动科技有限公司",
        "ageLimit": "1年以上",
        "educationBackground": "本科"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4134273,
        "positionName": "UI设计师",
        "city": "北京",
        "createTime": "2018-08-09",
        "salary": "18k-30k",
        "companyId": 62,
        "companyLogo": "i/image2/M01/79/0A/CgoB5ltr2A-AM5SFAADbT9jQCn841.jpeg",
        "companyName": "字节跳动",
        "companyFullName": "北京字节跳动科技有限公司",
        "educationBackground": "高中",
        "ageLimit": "1年以上",
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4091205,
        "positionName": "资深UI设计师",
        "city": "北京",
        "createTime": "今天 13:09",
        "salary": "15k-30k",
        "companyId": 55446,
        "companyLogo": "i/image3/M00/4C/9E/CgpOIFrgFT-AB_lKAAAXCTsC5_U047.png",
        "companyName": "贝壳",
        "companyFullName": "链家网（北京）科技有限公司",
        "educationBackground": "本科",
        "ageLimit": "1-3年",
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4703805,
        "positionName": "高级UI设计师",
        "city": "北京",
        "createTime": "2018-08-09",
        "salary": "15k-30k",
        "companyId": 44091,
        "companyLogo": "i/image3/M00/06/87/Cgq2xlpgCByAMD8nAACUbQvvrew382.png",
        "companyName": "自如网",
        "companyFullName": "北京自如友家资产管理有限公司",
        "educationBackground": "硕士",
        "ageLimit": "1-3年"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4835876,
        "positionName": "视觉设计实习生",
        "city": "北京",
        "createTime": "2018-08-15",
        "salary": "2k-3k",
        "companyId": 109,
        "companyLogo": "i/image3/M00/25/96/Cgq2xlqXn9-ALvW-AAAR5MK8aqs262.png",
        "companyName": "马蜂窝",
        "companyFullName": "北京蚂蜂窝网络科技有限公司",
        "educationBackground": "本科",
        "ageLimit": "1年以内"
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4787041,
        "positionName": "视觉设计实习生",
        "city": "北京",
        "createTime": "2018-08-09",
        "salary": "2k-3k",
        "companyId": 44091,
        "companyLogo": "i/image3/M00/06/87/Cgq2xlpgCByAMD8nAACUbQvvrew382.png",
        "companyName": "自如网",
        "companyFullName": "北京自如友家资产管理有限公司",
        "educationBackground": "高中",
        "ageLimit": "1年以内",
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 3483732,
        "positionName": "无线视觉设计师",
        "city": "北京",
        "createTime": "2018-08-15",
        "salary": "10k-20k",
        "companyId": 109,
        "companyLogo": "i/image3/M00/25/96/Cgq2xlqXn9-ALvW-AAAR5MK8aqs262.png",
        "companyName": "马蜂窝",
        "companyFullName": "北京蚂蜂窝网络科技有限公司",
        "educationBackground": "本科",
        "ageLimit": "1年以内",

      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 2538193,
        "positionName": "UI设计师",
        "city": "北京",
        "createTime": "今天 14:59",
        "salary": "10k-20k",
        "companyId": 123700,
        "companyLogo": "i/image/M00/67/E1/Cgp3O1gPIDmAJ6jiAAC-k5AMCG8007.png",
        "companyName": "花圃科技",
        "companyFullName": "花圃（北京）科技有限公司",
        "educationBackground": "本科",
        "ageLimit": "1-3年",
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4900672,
        "positionName": "UI设计师",
        "city": "北京",
        "createTime": "今天 19:39",
        "salary": "15k-30k",
        "companyId": 436,
        "companyLogo": "image1/M00/26/1E/Cgo8PFVUDROAf7zrAABr5cEcbGQ572.jpg",
        "companyName": "360",
        "companyFullName": "奇虎360科技有限公司",
        "educationBackground": "博士",
        "ageLimit": "10年以上",
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4905621,
        "positionName": "UI设计师",
        "city": "北京",
        "createTime": "今天 10:52",
        "salary": "15k-25k",
        "companyId": 100241,
        "companyLogo": "i/image/M00/02/FF/Cgp3O1aliq6AKO4xAAAUy0wZ8KA413.jpg",
        "companyName": "阿里体育",
        "companyFullName": "阿里体育（上海）有限公司",
        "educationBackground": "硕士",
        "ageLimit": "10年以上",
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 4694257,
        "positionName": "UI设计",
        "city": "北京",
        "createTime": "今天 15:31",
        "salary": "18k-36k",
        "companyId": 5832,
        "companyLogo": "image1/M00/00/0D/CgYXBlTUWCCAdkhOAABNgyvZQag818.jpg",
        "companyName": "新浪微博",
        "companyFullName": "微梦创科网络科技（中国）有限公司",
        "educationBackground": "本科",
        "ageLimit": "10年以上",
      },
      {
        "logger": {
          "traceCapable": true,
          "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 3754111,
        "positionName": "UI设计",
        "city": "北京",
        "createTime": "今天 14:10",
        "salary": "15k-30k",
        "companyId": 25592,
        "companyLogo": "image1/M00/00/35/Cgo8PFTUXJeAJhm5AAAyDX2QCwc674.jpg",
        "companyName": "新浪网",
        "companyFullName": "新浪网技术（中国）有限公司",
        "educationBackground": "本科",
        "ageLimit": "1年以上"
      }
      ]
    },
    studyData: ['不限','专科','本科','硕士'],
    filterName:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getSystemInfoSync().windowHeight);
    console.log(this.data.uiData)
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
    console.log('到了该加数据的位置了!!!!!');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  click_scroll : function(){
    this.setData({
      "scroll_bol": !this.data.scroll_bol
    })
  },
  filterUiData:function(event){
      this.setData({
  'filterName':event.target.dataset.name
      })
  },
    lowerCallback: function(){
      console.log('我到触发的区域了!!!!')
      console.log(this);
      console.log('--------')
      setTimeout(() => {
        console.log(this)
        this.setData({
          'uiData.result': this.data.uiData.result.concat(this.data.uiData.result)
        })
        console.log('--------')
      },1000)

    }
})