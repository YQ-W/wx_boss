// pages/yanchu/yanchu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeLeft:0,
    arr : {
    "code": 200,
    "msg": "",
    "data": [
      {
        "performanceId": 46716,
        "ticketStatus": 3,
        "categoryId": 9,
        "shopId": 111543609,
        "shopUUId": null,
        "name": "\u7B2C\u4E8C\u5341\u4E00\u5C4A\u4E9A\u6D32\u5BA0\u7269\u5C55",
        "shopName": "\u7B2C\u4E8C\u5341\u4E00\u5C4A\u4E9A\u6D32\u5BA0\u7269\u5C55-\u65B0\u56FD\u9645\u535A\u89C8\u4E2D\u5FC3",
        "lat": 31.210212,
        "lng": 121.568457,
        "address": "\u9F99\u9633\u8DEF2345\u53F7",
        "posterUrl": "https://p1.meituan.net/moviesh/7d00883e312de949b6163159281cc39b1310840.jpg",
        "postUrlForShare": "https://p1.meituan.net/64.64/moviesh/7d00883e312de949b6163159281cc39b1310840.jpg@64w_64h_1e_1c_1l",
        "showTimeRange": "2018-08-25 \u81F3 2018-08-26",
        "priceRange": "48-50",
        "seatUrl": null,
        "limit": true,
        "inventoryCount": 9651,
        "tipForList": null,
        "performanceLabelVO": {
          "priceLabel": 0,
          "contentLabel": 0,
          "saleLabel": 3
        },
        "detail": null,
        "summary": null,
        "ticketNotes": null,
        "cityId": 1,
        "cityName": "\u4E0A\u6D77",
        "lowestPrice": 48,
        "performanceTag": null,
        "minDiscount": 9.6,
        "seatType": 0,
        "saleRemindVO": null,
        "shareLink": "https://show.maoyan.com/qqw/detail?id=46716&fromTag=gwlshare",
        "stockOutRegister": 0,
        "needAnswer": 0,
        "questionBankId": 0,
        "questionHint": null,
        "isCurrentCity": 1,
        "distance": 4.3021008E7,
        "poi": "360.0:360.0",
        "self": true,
        "thirdPartyDesc": null,
        "bsPerformanceId": 39289
      },
      {
        "performanceId": 40986,
        "ticketStatus": 3,
        "categoryId": 9,
        "shopId": 5363770,
        "shopUUId": null,
        "name": "World of GHIBLI in China\u9F99\u732B\u4E0A\u662030\u5468\u5E74\u7EAA\u5FF5\u2014\u5409\u535C\u529B\u7684\u827A\u672F\u4E16\u754C\u5C55",
        "shopName": "\u4E0A\u6D77\u73AF\u7403\u91D1\u878D\u4E2D\u5FC3",
        "lat": 31.23433,
        "lng": 121.507753,
        "address": "\u4E16\u7EAA\u5927\u9053100\u53F7",
        "posterUrl": "https://p1.meituan.net/myvideodistribute/5af89a0f87899c198a6196c058b2dfe7198744.jpg",
        "postUrlForShare": "https://p1.meituan.net/64.64/myvideodistribute/5af89a0f87899c198a6196c058b2dfe7198744.jpg@64w_64h_1e_1c_1l",
        "showTimeRange": "2018-07-01 \u81F3 2018-10-07",
        "priceRange": "120-160",
        "seatUrl": null,
        "limit": true,
        "inventoryCount": 190536,
        "tipForList": null,
        "performanceLabelVO": {
          "priceLabel": 0,
          "contentLabel": 0,
          "saleLabel": 3
        },
        "detail": null,
        "summary": null,
        "ticketNotes": null,
        "cityId": 1,
        "cityName": "\u4E0A\u6D77",
        "lowestPrice": 120,
        "performanceTag": null,
        "minDiscount": null,
        "seatType": 0,
        "saleRemindVO": null,
        "shareLink": "https://show.maoyan.com/qqw/detail?id=40986&fromTag=gwlshare",
        "stockOutRegister": 0,
        "needAnswer": 0,
        "questionBankId": 0,
        "questionHint": null,
        "isCurrentCity": 1,
        "distance": 2961.3388671875,
        "poi": "121.50334930419922:31.236370086669922",
        "self": true,
        "thirdPartyDesc": null,
        "bsPerformanceId": 32717
      },
      {
        "performanceId": 54879,
        "ticketStatus": 3,
        "categoryId": 9,
        "shopId": 112628263,
        "shopUUId": null,
        "name": "\u5927\u82F1\u535A\u7269\u9986\u300A\u4E98\u53E4\u5965\u79D8\u300B\u6D41\u52A8\u4F53\u9A8C\u9986",
        "shopName": "LCM\u7F6E\u6C47\u65ED\u8F89\u5E7F\u573A",
        "lat": 31.240773,
        "lng": 121.554527,
        "address": "\u5F20\u6768\u8DEF2389\u5F04",
        "posterUrl": "https://p0.meituan.net/myvideodistribute/45daae9ae48cc833464653304d7c7409762465.gif",
        "postUrlForShare": "https://p0.meituan.net/64.64/myvideodistribute/45daae9ae48cc833464653304d7c7409762465.gif@64w_64h_1e_1c_1l",
        "showTimeRange": "2018-09-22 \u81F3 2018-10-30",
        "priceRange": "48-2890",
        "seatUrl": null,
        "limit": true,
        "inventoryCount": 21468,
        "tipForList": null,
        "performanceLabelVO": {
          "priceLabel": 0,
          "contentLabel": 0,
          "saleLabel": 3
        },
        "detail": null,
        "summary": null,
        "ticketNotes": null,
        "cityId": 1,
        "cityName": "\u4E0A\u6D77",
        "lowestPrice": 48,
        "performanceTag": null,
        "minDiscount": 8.5,
        "seatType": 0,
        "saleRemindVO": null,
        "shareLink": "https://show.maoyan.com/qqw/detail?id=54879&fromTag=gwlshare",
        "stockOutRegister": 0,
        "needAnswer": 0,
        "questionBankId": 0,
        "questionHint": null,
        "isCurrentCity": 1,
        "distance": 4.3021008E7,
        "poi": "360.0:360.0",
        "self": true,
        "thirdPartyDesc": null,
        "bsPerformanceId": 48650
      },
      {
        "performanceId": 45111,
        "ticketStatus": 3,
        "categoryId": 9,
        "shopId": 111693591,
        "shopUUId": null,
        "name": "WAVELENGTH\uFF1A\u51FA\u5382\u8BBE\u7F6E\u2014\u6C89\u6D78\u5F0F\u827A\u672F\u4F53\u9A8C\u5927\u5C55",
        "shopName": "WAVELENGTH\uFF1A\u51FA\u5382\u8BBE\u7F6E\u2014\u6C89\u6D78\u5F0F\u827A\u672F\u4F53\u9A8C\u5927\u5C55",
        "lat": 31.158106,
        "lng": 121.35777,
        "address": "\u6F15\u5B9D\u8DEF3055\u53F7\u5B9D\u9F99\u7F8E\u672F\u9986\u5185",
        "posterUrl": "https://p1.meituan.net/moviesh/a1cbe118524d074c81c5c4a2c283156e694466.gif",
        "postUrlForShare": "https://p1.meituan.net/64.64/moviesh/a1cbe118524d074c81c5c4a2c283156e694466.gif@64w_64h_1e_1c_1l",
        "showTimeRange": "2018-07-08 \u81F3 2018-10-08",
        "priceRange": "98-230",
        "seatUrl": null,
        "limit": true,
        "inventoryCount": 5612,
        "tipForList": null,
        "performanceLabelVO": {
          "priceLabel": 0,
          "contentLabel": 0,
          "saleLabel": 3
        },
        "detail": null,
        "summary": null,
        "ticketNotes": null,
        "cityId": 1,
        "cityName": "\u4E0A\u6D77",
        "lowestPrice": 98,
        "performanceTag": null,
        "minDiscount": 7.6,
        "seatType": 0,
        "saleRemindVO": null,
        "shareLink": "https://show.maoyan.com/qqw/detail?id=45111&fromTag=gwlshare",
        "stockOutRegister": 1,
        "needAnswer": 0,
        "questionBankId": 0,
        "questionHint": null,
        "isCurrentCity": 1,
        "distance": 4.3021008E7,
        "poi": "360.0:360.0",
        "self": true,
        "thirdPartyDesc": null,
        "bsPerformanceId": 37530
      },
      {
        "performanceId": 50562,
        "ticketStatus": 3,
        "categoryId": 9,
        "shopId": 111800060,
        "shopUUId": null,
        "name": "BIGBANG10 THE EXHIBITION: A TO Z\u5341\u5468\u5E74\u56DE\u987E\u5927\u5C55\u4E0A\u6D77\u7AD9",
        "shopName": "BIGBANG\u4ECEA\u5230Z\uFF1A\u5341\u5468\u5E74\u56DE\u987E\u5927\u5C55-\u73AF\u7403\u6E2F",
        "lat": 31.233096,
        "lng": 121.412578,
        "address": "\u4E2D\u5C71\u5317\u8DEF3300\u53F7\u4E0A\u6D77\u73AF\u7403\u6E2F2F",
        "posterUrl": "https://p0.meituan.net/myvideodistribute/5852717dfe1ac9c081be9c38f2bf5760441237.jpg",
        "postUrlForShare": "https://p0.meituan.net/64.64/myvideodistribute/5852717dfe1ac9c081be9c38f2bf5760441237.jpg@64w_64h_1e_1c_1l",
        "showTimeRange": "2018-08-10 \u81F3 2018-10-20",
        "priceRange": "120-1000",
        "seatUrl": null,
        "limit": true,
        "inventoryCount": 7413,
        "tipForList": null,
        "performanceLabelVO": {
          "priceLabel": 0,
          "contentLabel": 0,
          "saleLabel": 3
        },
        "detail": null,
        "summary": null,
        "ticketNotes": null,
        "cityId": 1,
        "cityName": "\u4E0A\u6D77",
        "lowestPrice": 120,
        "performanceTag": null,
        "minDiscount": null,
        "seatType": 0,
        "saleRemindVO": null,
        "shareLink": "https://show.maoyan.com/qqw/detail?id=50562&fromTag=gwlshare",
        "stockOutRegister": 0,
        "needAnswer": 0,
        "questionBankId": 0,
        "questionHint": null,
        "isCurrentCity": 1,
        "distance": 4.3021008E7,
        "poi": "360.0:360.0",
        "self": true,
        "thirdPartyDesc": null,
        "bsPerformanceId": 43674
      },
      {
        "performanceId": 51175,
        "ticketStatus": 3,
        "categoryId": 9,
        "shopId": 111554151,
        "shopUUId": null,
        "name": "\u65F6\u95F4\u5267\u573A-\u4E70\u4E00\u8D60\u4E8C\uFF0C\u4E09\u4EBA\u901A\u884C",
        "shopName": "\u65F6\u95F4\u5267\u573A",
        "lat": 31.169669,
        "lng": 121.364795,
        "address": "\u5434\u4E2D\u8DEF1599\u53F7",
        "posterUrl": "https://p1.meituan.net/myvideodistribute/71853665a736e4038a50353ce7d79e68385756.gif",
        "postUrlForShare": "https://p1.meituan.net/64.64/myvideodistribute/71853665a736e4038a50353ce7d79e68385756.gif@64w_64h_1e_1c_1l",
        "showTimeRange": "2018-08-18 \u81F3 2018-11-18",
        "priceRange": "150",
        "seatUrl": null,
        "limit": true,
        "inventoryCount": 9784,
        "tipForList": null,
        "performanceLabelVO": {
          "priceLabel": 0,
          "contentLabel": 0,
          "saleLabel": 3
        },
        "detail": null,
        "summary": null,
        "ticketNotes": null,
        "cityId": 1,
        "cityName": "\u4E0A\u6D77",
        "lowestPrice": 150,
        "performanceTag": null,
        "minDiscount": null,
        "seatType": 0,
        "saleRemindVO": null,
        "shareLink": "https://show.maoyan.com/qqw/detail?id=51175&fromTag=gwlshare",
        "stockOutRegister": 0,
        "needAnswer": 0,
        "questionBankId": 0,
        "questionHint": null,
        "isCurrentCity": 1,
        "distance": 4.3021008E7,
        "poi": "360.0:360.0",
        "self": true,
        "thirdPartyDesc": null,
        "bsPerformanceId": 44347
      },
      {
        "performanceId": 40870,
        "ticketStatus": 3,
        "categoryId": 9,
        "shopId": 110248434,
        "shopUUId": null,
        "name": "\u83B1\u5B89\u5FB7\u7F57 \u00B7 \u57C3\u5229\u5E0C\u4E2A\u5C55\u300C\u865A\u6784\u300D\u2223\u3010\u660A\u7F8E\u672F\u9986\u3011\u5E26\u4F60\u79F0\u9738\u670B\u53CB\u5708\u6444\u5F71\u5927\u8D5B",
        "shopName": "\u83B1\u5B89\u5FB7\u7F57 \u00B7 \u57C3\u5229\u5E0C\u4E2A\u5C55\u300C\u865A\u6784\u300D-\u660A\u7F8E\u672F\u9986",
        "lat": 31.212379,
        "lng": 121.626282,
        "address": "\u7956\u51B2\u4E4B\u8DEF2277\u53F7\u4E0A\u6D77\u4E16\u548C\u4E2D\u5FC3",
        "posterUrl": "https://p1.meituan.net/moviesh/81b4fd3d67ada6f8711aacad552137a9775654.jpg",
        "postUrlForShare": "https://p1.meituan.net/64.64/moviesh/81b4fd3d67ada6f8711aacad552137a9775654.jpg@64w_64h_1e_1c_1l",
        "showTimeRange": "2018-06-01 \u81F3 2018-10-15",
        "priceRange": "80-240",
        "seatUrl": null,
        "limit": true,
        "inventoryCount": 33632,
        "tipForList": null,
        "performanceLabelVO": {
          "priceLabel": 0,
          "contentLabel": 0,
          "saleLabel": 3
        },
        "detail": null,
        "summary": null,
        "ticketNotes": null,
        "cityId": 1,
        "cityName": "\u4E0A\u6D77",
        "lowestPrice": 80,
        "performanceTag": null,
        "minDiscount": null,
        "seatType": 0,
        "saleRemindVO": null,
        "shareLink": "https://show.maoyan.com/qqw/detail?id=40870&fromTag=gwlshare",
        "stockOutRegister": 0,
        "needAnswer": 0,
        "questionBankId": 0,
        "questionHint": null,
        "isCurrentCity": 1,
        "distance": 4.3021008E7,
        "poi": "360.0:360.0",
        "self": true,
        "thirdPartyDesc": null,
        "bsPerformanceId": 32693
      },
      {
        "performanceId": 47064,
        "ticketStatus": 3,
        "categoryId": 9,
        "shopId": 92202765,
        "shopUUId": null,
        "name": "\u5FAE\u578B\u73B0\u573A\u2014\u2014\u7530\u4E2D\u8FBE\u4E5F\u7684\u8111\u6D1E\u60C5\u62A5\u7AD9\u4E0A\u6D77\u7AD9",
        "shopName": "\u516B\u53F7\u6865\u827A\u672F\u7A7A\u95F4\u00B71908\u7CAE\u4ED3",
        "lat": 31.240078,
        "lng": 121.466461,
        "address": "\u5357\u82CF\u5DDE\u8DEF1247\u53F72\u697C",
        "posterUrl": "https://p0.meituan.net/myvideodistribute/be64f73bc1043ce1d7e213a7c0701992357110.jpg",
        "postUrlForShare": "https://p0.meituan.net/64.64/myvideodistribute/be64f73bc1043ce1d7e213a7c0701992357110.jpg@64w_64h_1e_1c_1l",
        "showTimeRange": "2018-07-21 \u81F3 2018-10-07",
        "priceRange": "89-238",
        "seatUrl": null,
        "limit": true,
        "inventoryCount": 5492,
        "tipForList": null,
        "performanceLabelVO": {
          "priceLabel": 0,
          "contentLabel": 0,
          "saleLabel": 3
        },
        "detail": null,
        "summary": null,
        "ticketNotes": null,
        "cityId": 1,
        "cityName": "\u4E0A\u6D77",
        "lowestPrice": 89,
        "performanceTag": null,
        "minDiscount": null,
        "seatType": 0,
        "saleRemindVO": null,
        "shareLink": "https://show.maoyan.com/qqw/detail?id=47064&fromTag=gwlshare",
        "stockOutRegister": 0,
        "needAnswer": 0,
        "questionBankId": 0,
        "questionHint": null,
        "isCurrentCity": 1,
        "distance": 1633.995361328125,
        "poi": "121.4619140625:31.24199676513672",
        "self": true,
        "thirdPartyDesc": null,
        "bsPerformanceId": 39664
      },
      {
        "performanceId": 47292,
        "ticketStatus": 3,
        "categoryId": 4,
        "shopId": 2544853,
        "shopUUId": null,
        "name": "\u5F00\u5FC3\u9EBB\u82B1\u7206\u7B11\u821E\u53F0\u5267\u300A\u838E\u58EB\u6BD4\u4E9A\u522B\u751F\u6C14\u300B \u7B2C10\u8F6E",
        "shopName": "\u4E0A\u6D77\u620F\u5267\u5B66\u9662",
        "lat": 31.2169838,
        "lng": 121.44094,
        "address": "\u534E\u5C71\u8DEF600\u53F7",
        "posterUrl": "https://p0.meituan.net/moviesh/570d5d5c1afead95e7a7bc7ca5a74142204320.jpg",
        "postUrlForShare": "https://p0.meituan.net/64.64/moviesh/570d5d5c1afead95e7a7bc7ca5a74142204320.jpg@64w_64h_1e_1c_1l",
        "showTimeRange": "2018-08-24 \u81F3 2018-09-08",
        "priceRange": "80-1180",
        "seatUrl": null,
        "limit": true,
        "inventoryCount": 8694,
        "tipForList": null,
        "performanceLabelVO": {
          "priceLabel": 0,
          "contentLabel": 0,
          "saleLabel": 3
        },
        "detail": null,
        "summary": null,
        "ticketNotes": null,
        "cityId": 1,
        "cityName": "\u4E0A\u6D77",
        "lowestPrice": 80,
        "performanceTag": null,
        "minDiscount": null,
        "seatType": 0,
        "saleRemindVO": null,
        "shareLink": "https://show.maoyan.com/qqw/detail?id=47292&fromTag=gwlshare",
        "stockOutRegister": 0,
        "needAnswer": 0,
        "questionBankId": 0,
        "questionHint": null,
        "isCurrentCity": 1,
        "distance": 3719.568603515625,
        "poi": "121.43633270263672:31.21885871887207",
        "self": true,
        "thirdPartyDesc": null,
        "bsPerformanceId": 39942
      },
      {
        "performanceId": 53671,
        "ticketStatus": 3,
        "categoryId": 9,
        "shopId": 58812843,
        "shopUUId": null,
        "name": "2018\u4E2D\u56FD\u4E0A\u6D77\u56FD\u9645\u7AE5\u4E66\u5C55",
        "shopName": "\u5DE5\u94F6\u4E2D\u5FC3\u4E0A\u6D77\u4E16\u535A\u5C55\u89C8\u9986",
        "lat": 31.182653,
        "lng": 121.489954,
        "address": "\u56FD\u5C55\u8DEF1099\u53F7",
        "posterUrl": "https://p1.meituan.net/myvideodistribute/5ce371832a60f0ddd66dc8041cb7b820672613.gif",
        "postUrlForShare": "https://p1.meituan.net/64.64/myvideodistribute/5ce371832a60f0ddd66dc8041cb7b820672613.gif@64w_64h_1e_1c_1l",
        "showTimeRange": "2018-11-09 \u81F3 2018-11-12",
        "priceRange": "30-78",
        "seatUrl": null,
        "limit": true,
        "inventoryCount": 30983,
        "tipForList": null,
        "performanceLabelVO": {
          "priceLabel": 0,
          "contentLabel": 0,
          "saleLabel": 3
        },
        "detail": null,
        "summary": null,
        "ticketNotes": null,
        "cityId": 1,
        "cityName": "\u4E0A\u6D77",
        "lowestPrice": 30,
        "performanceTag": null,
        "minDiscount": 6.0,
        "seatType": 0,
        "saleRemindVO": null,
        "shareLink": "https://show.maoyan.com/qqw/detail?id=53671&fromTag=gwlshare",
        "stockOutRegister": 0,
        "needAnswer": 0,
        "questionBankId": 0,
        "questionHint": null,
        "isCurrentCity": 1,
        "distance": 5257.388671875,
        "poi": "121.48548889160156:31.18466567993164",
        "self": true,
        "thirdPartyDesc": null,
        "bsPerformanceId": 47329
      }
    ],
    "paging": {
      "pageNo": 1,
      "pageSize": 10,
      "totalHits": 1293,
      "hasMore": true
    },
    "attrMaps": {
      "serverTime": 1535071071396
    }
  }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {




    console.log(this.data.arr);
    function isIn(currentDateStr) {
      var startDate = new Date('2017-11-10');
      var endDate = new Date('2017-11-30');
      console.log(startDate.getTime());
      console.log(endDate.getTime());
      var curDate = new Date(currentDateStr);
      if (curDate.getTime() < endDate.getTime() && curDate.getTime() > startDate.getTime)
        return true;
      return false;
    }
    isIn('2017-11-30');
    // 获取 最后一天
    var day = new Date(2018, 8, 24);


    var daycount = day.getDate();
    var oneDayTime = 24 * 60 * 60 * 1000; 
    console.log(daycount);
    
    // 获取周日
    var SundayTime = day.getTime() + (7 - day) * oneDayTime; 
    
    var monday = new Date(SundayTime);
    console.log(monday)
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
  filter_time: function(event){
    var oneDayTime = 24 * 60 * 60 * 1000; 
    // 获取今天的时间
    var date = new Date();
    // 获取今天是周几  0 - 6  date.getDay()
    // 


    // 周获取一周的时间区间
    var timeLeft = date.getTime() - oneDayTime * (date.getDay() - 1)
    var timeRight = date.getTime() + oneDayTime * (7 - date.getDay())
    

    // 月~  7 8 9 10 ()
    //  8
    var month = date.getMonth();
    console.log(month)
      

      this.setData({
        timeLeft: Date.now()
      })
  }
})