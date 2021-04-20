// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeInfo:[],  //存放时间信息
    cityInfo:[],  //存放当前城市信息
    nowWeather:[],  //存放实时天气信息
    f1:[],  //存放当天天气信息
    f2:[],  //存放明天天气信息
    f3:[] //存放后天天气信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this //备份this，用于后续setData
    var begin=options //备份初始option信息，用于刷新页面
    wx.getLocation({  //获取当前坐标
      type:"wgs84",  //wgs84返回GPS坐标，gcj02返回wx.openLocation坐标
      success (res){
        var lat=res.latitude  //接收当前坐标经纬度
        var lng=res.longitude
        //发送请求，提交当前位置信息获得天气信息，接口：阿里易源数据https://market.aliyun.com/products/57096001/cmapi010812.html?spm=5176.12901015.0.i12901015.5681525cNTpCSy#sku=yuncode481200005
        wx.request({
          url: 'https://ali-weather.showapi.com/gps-to-weather?from=1&lat='+lat+'&lng='+lng+'&need3HourForcast=0&needAlarm=1&needHourData=0&needIndex=1&needMoreDay=0', //提交请求信息
          data:{},
          header:{'Authorization':'AppCode 94442cd9da5440a89128182d2e236536'},
          success: function(res){
            that.setData({  //接收返回信息
                cityInfo:res.data.showapi_res_body.cityInfo,
                nowWeather:res.data.showapi_res_body.now,
                f1:res.data.showapi_res_body.f1,
                f2:res.data.showapi_res_body.f2,
                f3:res.data.showapi_res_body.f3,
            })
          }
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

  //刷新页面
  refresh(){
    this.onLoad(this.begin);  //利用begin重新加载
  }
})