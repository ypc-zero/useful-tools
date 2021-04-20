// pages/dayNews/dayNews.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 预设数组，接收日期和新闻
    newsDay:[],
    newsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //用that先行存储this当前值
    var that=this;
    //向API外部接口发送请求
    wx.request({
      url: 'https://news.topurl.cn/api',
      data:{},
      header:{},
      success: function(res){
        //在控制台预览确认收到内容
        console.log(res.data.data.newsList[0])
        //用newsDay、newsList存储日期和新闻
        that.setData({
          newsDay:res.data.data.calendar,
          newsList:res.data.data.newsList
        })
      }
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

// bindtap="goToNews",跳转新闻
  goToNews(e) {
    var newsid=Number(e.currentTarget.id) //获取当前点击新闻ID
    console.log(this.data.newsList[newsid].url) 
    let dataUrl=this.data.newsList[newsid].url  //获取当前新闻链接
    //传参数dataUrl（当前新闻链接）到externalWeb页面
    wx.navigateTo({
      url: '/pages/externalWeb/externalWeb?dataUrl='+dataUrl,
    })
  }
})