// pages/onReachBottom/onReachBottom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: {
      "coming": [],
      "movieIds": [
        343208,
        1218190,
        341737,
        1203084,
        346178,
        1218299,
        569712,
        1216446,
        343070,
        892394,
        1212592,
        439495,
        248907,
        1218052,
        341516,
        1222188,
        1200486,
        1189889,
        1220838,
        1223430,
        1220736,
        1229214,
        1225029,
        1229500,
        1217513,
        1216365,
        1229499,
        248162,
        1207515,
        345870,
        945620,
        1229496,
        1229371,
        1175253
      ],
      "stid": "576591972453269000",
      "stids": [
        {
          "movieId": 343208,
          "stid": "576591972453269000_a343208_c0"
        },
        {
          "movieId": 1218190,
          "stid": "576591972453269000_a1218190_c1"
        },
        {
          "movieId": 341737,
          "stid": "576591972453269000_a341737_c2"
        },
        {
          "movieId": 1203084,
          "stid": "576591972453269000_a1203084_c3"
        },
        {
          "movieId": 346178,
          "stid": "576591972453269000_a346178_c4"
        },
        {
          "movieId": 1218299,
          "stid": "576591972453269000_a1218299_c5"
        },
        {
          "movieId": 569712,
          "stid": "576591972453269000_a569712_c6"
        },
        {
          "movieId": 1216446,
          "stid": "576591972453269000_a1216446_c7"
        },
        {
          "movieId": 343070,
          "stid": "576591972453269000_a343070_c8"
        },
        {
          "movieId": 892394,
          "stid": "576591972453269000_a892394_c9"
        },
        {
          "movieId": 1212592,
          "stid": "576591972453269000_a1212592_c10"
        },
        {
          "movieId": 439495,
          "stid": "576591972453269000_a439495_c11"
        }
      ],
      "total": 34,
      "movieList": [
        {
          "id": 343208,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/7a2c3acb1bda2baad8df309b046d0872344909.jpg",
          "version": "v3d imax",
          "nm": "蚁人2：黄蜂女现身",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 319327,
          "star": "保罗·路德,伊万杰琳·莉莉,迈克尔·佩纳",
          "rt": "2018-08-24",
          "showInfo": "今天58家影院放映1171场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 1218190,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/091f305b0a415080d5cb3a0a470d0763431429.jpg",
          "version": "",
          "nm": "大师兄",
          "preShow": false,
          "sc": 9.5,
          "globalReleased": true,
          "wish": 95461,
          "star": "甄子丹,陈乔恩,喻亢",
          "rt": "2018-08-24",
          "showInfo": "今天57家影院放映478场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 341737,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/53e39ceee7bfbada4dc89bd93bbd334b198786.jpg",
          "version": "v3d imax",
          "nm": "碟中谍6：全面瓦解",
          "preShow": false,
          "sc": 0,
          "globalReleased": false,
          "wish": 178301,
          "star": "汤姆·克鲁斯,亨利·卡维尔,文·瑞姆斯",
          "rt": "2018-08-31",
          "showInfo": "2018-08-31 下周五上映",
          "showst": 4,
          "wishst": 0
        },
        {
          "id": 1203084,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/c6b9bfb37fdb6dc01f700bd3f8d383c92054736.jpg",
          "version": "",
          "nm": "一出好戏",
          "preShow": false,
          "sc": 8.2,
          "globalReleased": true,
          "wish": 411582,
          "star": "黄渤,舒淇,王宝强",
          "rt": "2018-08-10",
          "showInfo": "今天51家影院放映147场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 346178,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/fb91bf43588aecad953d6df0b2b1218e50396.jpg",
          "version": "v3d imax",
          "nm": "巨齿鲨",
          "preShow": false,
          "sc": 8.8,
          "globalReleased": true,
          "wish": 406648,
          "star": "杰森·斯坦森,李冰冰,雷恩·威尔森",
          "rt": "2018-08-10",
          "showInfo": "今天48家影院放映137场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 1218299,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/14e56351582b639421099f8270a9a2f42068044.jpg",
          "version": "v3d",
          "nm": "深海历险记",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 15448,
          "star": "张璐,陈红,张云龙",
          "rt": "2018-08-24",
          "showInfo": "今天52家影院放映136场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 569712,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/5e167f3334700264f19a1c47ca4a012912655725.jpg",
          "version": "",
          "nm": "黑子的篮球·终极一战",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 128978,
          "star": "小野贤章,苏尚卿,小野友树",
          "rt": "2018-08-24",
          "showInfo": "今天38家影院放映124场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 1216446,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/012ad8d605f1983543106f9adeab712b2631588.jpg",
          "version": "",
          "nm": "快把我哥带走",
          "preShow": false,
          "sc": 9,
          "globalReleased": true,
          "wish": 171988,
          "star": "张子枫,彭昱畅,赵今麦",
          "rt": "2018-08-17",
          "showInfo": "今天42家影院放映119场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 343070,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/830459ae19f5cacac0dd21dba56caf031867206.jpg",
          "version": "v3d",
          "nm": "精灵旅社3：疯狂假期",
          "preShow": false,
          "sc": 8.6,
          "globalReleased": true,
          "wish": 133532,
          "star": "亚当·桑德勒,赛琳娜·戈麦斯,凯瑟琳·哈恩",
          "rt": "2018-08-17",
          "showInfo": "今天32家影院放映61场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 892394,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/af6eaacabc7928f65a73632d1ecbfa72127713.jpg",
          "version": "",
          "nm": "奇怪的袜子精灵",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 4025,
          "star": "克里斯托弗·哈德克,马瑞克·塔西里克,Stanislav Zindulka",
          "rt": "2018-08-24",
          "showInfo": "今天15家影院放映39场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 1212592,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/9cf86d0cbd3861c9dbc3f1e3189b32251042527.jpg",
          "version": "v2d imax",
          "nm": "西虹市首富",
          "preShow": false,
          "sc": 9.2,
          "globalReleased": true,
          "wish": 339761,
          "star": "沈腾,宋芸桦,张一鸣",
          "rt": "2018-07-27",
          "showInfo": "今天16家影院放映31场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 439495,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/bf72eeacc260d6866ab6bb627cfbfcde4691545.jpg",
          "version": "",
          "nm": "苏丹",
          "preShow": false,
          "sc": 0,
          "globalReleased": false,
          "wish": 22558,
          "star": "萨尔曼·汗,安努舒卡·莎玛,兰迪普·弘达",
          "rt": "2018-08-31",
          "showInfo": "2018-08-31 下周五上映",
          "showst": 4,
          "wishst": 0
        }
      ]
    },
    Arr: { "coming": [], "movieIds": [343208, 1218190, 341737, 1203084, 346178, 1216446, 343070, 1212592, 439495, 248907, 1218299, 1207515, 1204528, 569712, 1220838, 344292, 1208645, 1223430, 892394, 1175253, 1218052, 1225029, 345870, 248162, 1216365, 1189938, 1229214, 1222188, 1200486, 8815, 1203528, 341516, 1217513, 493549, 1189889, 1222209, 1227737, 249976, 78968, 7874, 2322, 336, 13828, 13373, 5430], "stid": "576591972453269000", "stids": [{ "movieId": 343208, "stid": "576591972453269000_a343208_c0" }, { "movieId": 1218190, "stid": "576591972453269000_a1218190_c1" }, { "movieId": 341737, "stid": "576591972453269000_a341737_c2" }, { "movieId": 1203084, "stid": "576591972453269000_a1203084_c3" }, { "movieId": 346178, "stid": "576591972453269000_a346178_c4" }, { "movieId": 1216446, "stid": "576591972453269000_a1216446_c5" }, { "movieId": 343070, "stid": "576591972453269000_a343070_c6" }, { "movieId": 1212592, "stid": "576591972453269000_a1212592_c7" }, { "movieId": 439495, "stid": "576591972453269000_a439495_c8" }, { "movieId": 248907, "stid": "576591972453269000_a248907_c9" }, { "movieId": 1218299, "stid": "576591972453269000_a1218299_c10" }, { "movieId": 1207515, "stid": "576591972453269000_a1207515_c11" }], "total": 45, "movieList": [{ "id": 343208, "haspromotionTag": false, "img": "http://p1.meituan.net/w.h/movie/7a2c3acb1bda2baad8df309b046d0872344909.jpg", "version": "v3d imax", "nm": "蚁人2：黄蜂女现身", "preShow": false, "sc": 8.9, "globalReleased": true, "wish": 319327, "star": "保罗·路德,伊万杰琳·莉莉,迈克尔·佩纳", "rt": "2018-08-24", "showInfo": "今天71家影院放映1145场", "showst": 3, "wishst": 0 }, { "id": 1218190, "haspromotionTag": false, "img": "http://p1.meituan.net/w.h/movie/091f305b0a415080d5cb3a0a470d0763431429.jpg", "version": "", "nm": "大师兄", "preShow": false, "sc": 8.8, "globalReleased": true, "wish": 95461, "star": "甄子丹,陈乔恩,喻亢", "rt": "2018-08-24", "showInfo": "今天68家影院放映328场", "showst": 3, "wishst": 0 }, { "id": 341737, "haspromotionTag": false, "img": "http://p0.meituan.net/w.h/movie/53e39ceee7bfbada4dc89bd93bbd334b198786.jpg", "version": "v3d imax", "nm": "碟中谍6：全面瓦解", "preShow": false, "sc": 0, "globalReleased": false, "wish": 209318, "star": "汤姆·克鲁斯,亨利·卡维尔,文·瑞姆斯", "rt": "2018-08-31", "showInfo": "2018-08-31 本周五上映", "showst": 4, "wishst": 0 }, { "id": 1203084, "haspromotionTag": false, "img": "http://p0.meituan.net/w.h/movie/c6b9bfb37fdb6dc01f700bd3f8d383c92054736.jpg", "version": "", "nm": "一出好戏", "preShow": false, "sc": 8.2, "globalReleased": true, "wish": 411582, "star": "黄渤,舒淇,王宝强", "rt": "2018-08-10", "showInfo": "今天66家影院放映249场", "showst": 3, "wishst": 0 }, { "id": 346178, "haspromotionTag": false, "img": "http://p0.meituan.net/w.h/movie/fb91bf43588aecad953d6df0b2b1218e50396.jpg", "version": "v3d imax", "nm": "巨齿鲨", "preShow": false, "sc": 8.8, "globalReleased": true, "wish": 406648, "star": "杰森·斯坦森,李冰冰,雷恩·威尔森", "rt": "2018-08-10", "showInfo": "今天65家影院放映240场", "showst": 3, "wishst": 0 }, { "id": 1216446, "haspromotionTag": false, "img": "http://p1.meituan.net/w.h/movie/012ad8d605f1983543106f9adeab712b2631588.jpg", "version": "", "nm": "快把我哥带走", "preShow": false, "sc": 9, "globalReleased": true, "wish": 171988, "star": "张子枫,彭昱畅,赵今麦", "rt": "2018-08-17", "showInfo": "今天60家影院放映238场", "showst": 3, "wishst": 0 }, { "id": 343070, "haspromotionTag": false, "img": "http://p0.meituan.net/w.h/movie/830459ae19f5cacac0dd21dba56caf031867206.jpg", "version": "v3d", "nm": "精灵旅社3：疯狂假期", "preShow": false, "sc": 8.6, "globalReleased": true, "wish": 133532, "star": "亚当·桑德勒,赛琳娜·戈麦斯,凯瑟琳·哈恩", "rt": "2018-08-17", "showInfo": "今天45家影院放映105场", "showst": 3, "wishst": 0 }, { "id": 1212592, "haspromotionTag": false, "img": "http://p0.meituan.net/w.h/movie/9cf86d0cbd3861c9dbc3f1e3189b32251042527.jpg", "version": "v2d imax", "nm": "西虹市首富", "preShow": false, "sc": 9.2, "globalReleased": true, "wish": 339761, "star": "沈腾,宋芸桦,张一鸣", "rt": "2018-07-27", "showInfo": "今天34家影院放映87场", "showst": 3, "wishst": 0 }, { "id": 439495, "haspromotionTag": false, "img": "http://p0.meituan.net/w.h/movie/bf72eeacc260d6866ab6bb627cfbfcde4691545.jpg", "version": "", "nm": "苏丹", "preShow": false, "sc": 0, "globalReleased": false, "wish": 30483, "star": "萨尔曼·汗,安努舒卡·莎玛,兰迪普·弘达", "rt": "2018-08-31", "showInfo": "2018-08-31 本周五上映", "showst": 4, "wishst": 0 }, { "id": 248907, "haspromotionTag": false, "img": "http://p0.meituan.net/w.h/movie/37b48c6684b585fd837ed4a348d159bc976986.jpg", "version": "", "nm": "新乌龙院之笑闹江湖", "preShow": false, "sc": 7.3, "globalReleased": true, "wish": 402518, "star": "吴孟达,郝劭文,宋小宝", "rt": "2018-08-17", "showInfo": "今天25家影院放映67场", "showst": 3, "wishst": 0 }, { "id": 1218299, "haspromotionTag": false, "img": "http://p1.meituan.net/w.h/movie/14e56351582b639421099f8270a9a2f42068044.jpg", "version": "v3d", "nm": "深海历险记", "preShow": false, "sc": 7.9, "globalReleased": true, "wish": 15448, "star": "张璐,陈红,张云龙", "rt": "2018-08-24", "showInfo": "今天35家影院放映61场", "showst": 3, "wishst": 0 }, { "id": 1207515, "haspromotionTag": false, "img": "http://p0.meituan.net/w.h/movie/2ff9896f0d064dd8d125c08616ddd8c78281624.jpg", "version": "", "nm": "摇滚小子", "preShow": false, "sc": 0, "globalReleased": true, "wish": 1512, "star": "安琥,徐洁儿,苏翊鸣", "rt": "2018-08-28", "showInfo": "今天25家影院放映57场", "showst": 3, "wishst": 0 }] },
    filter_Movie:function(){
      console.log(112312321312313);
    }
  },

  filterMovie:function(){
    // bindTab
    console.log(112312321312313);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // setData 应用问题;  
    // 
    //  深拷贝的第一种:  
    //      暴力执法方案
    var arr = JSON.parse(JSON.stringify(this.data.arr.movieList));
    var WindowWidth = 0;
    wx.getSystemInfo({success(res){
      WindowWidth = res.windowWidth;
    }});
    arr[0].id = 'wyq';
    console.log(arr === this.data.arr.movieList)
    console.log(arr);
    console.log(this.data.arr.movieList);
    
    for(var i = 0,len = arr.length;i< len;i++){
      if (WindowWidth >= 320){
        // 返回值
        arr[i].img = arr[i].img.replace('w.h', '100.100')
      }
    }
    console.log(arr);
    this.setData({
      ['arr.movieList'] : arr
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
    console.log('123123123');

    var arr = this.data.arr.movieList.concat(this.data.Arr.movieList);




    console.log(arr);

    this.setData({
      ['arr.movieList']: arr
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})