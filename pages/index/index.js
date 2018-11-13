
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    start: 0,
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {
    this.loadData()
  },

  loadData() {
    let { start, list } = this.data
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    this.setData({
      loading: true
    })
    wx.request({
      url: `https://www.koocv.com/h5-view/v/movie/list?start=${this.data.start}`,
      success: (res) => {
        // console.log(res)
        start += 20;
        list.push( ...res.data.subjects )
        if (res.data && res.data.subjects) {
          this.setData({
            list: list,
            start,
            loading: false
          })

        }
        wx.hideLoading()
      }
    })
  },

  lower() {
    console.log(111)
    if ( !this.data.loading ) {
      this.loadData();
    }
  },
  //点击列表
  listTap(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`,
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

  }
})