// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //首页swiper轮播属性设置
    indicatorDots:true, //面板显示点
    indicatorColor:'#ffffff', //显示点默认白色
    indicatorActiveColor:'#33ccff', //当前显示点蓝色
    autoplay:true,  //是否自动切换
    interval:5000,  //自动切换间隔
    duration:500,  //滑块动画时长
    //轮播图片路径&跳转目标设置
    imgUrls:[
      {
        img:"/images/images_index/day_news.jpg",
        targetPath:"/pages/dayNews/dayNews"
      },{
        img:"/images/images_index/weather.jpg",
        targetPath:"/pages/weather/weather"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
    
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
  // 首页图标跳转天气
  onClickWeather(){
    wx.navigateTo({
      url: '/pages/weather/weather'
    })
  },
  // 首页图标跳转新闻
  onClickNews(){
    wx.navigateTo({
      url: '/pages/dayNews/dayNews'
    })
  }
})