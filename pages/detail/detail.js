// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    loading: true
  },
  onLoad: function (options) {
    // options.id = '1292720';
    this.loadDetail(options.id);

  },
  loadDetail(id) {
    wx.showLoading({
      title: '加载详情...',
    })
    wx.request({
      url: `https://www.koocv.com/h5-view/v/movie/detail/?id=${id}`,
      success: (res) => {
        this.setData({
          detail: res.data,
          loading: false
        });
        wx.setNavigationBarTitle({
          title: res.data.title,
        })
        wx.hideLoading();
      }
    })
  }
})