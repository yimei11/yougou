// pages/search/search.js
import myrequest from '../../utils/myrequest'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        search: "",
        detail: null,
        show: false
    },
    // 确认搜索
    async onSearch() {
        // 接口请求
        let {
            data
        } = await myrequest({
            url: "/goods/search"
        })
        console.log(data.message);
        if (this.data.detail) {
            // 修改data数据
            this.setData({
                search: data.message.goods,
                show:true
            })
        }
    },
    // 返回按钮
    onClickLeft() {
        wx.switchTab({
            url: '/pages/home/home',
        })
    },
    change(e) {
        if (!e.detail) {
            this.setData({
                show: false,
                detail: e.detail
            })
        } else {
            this.setData({
                detail: e.detail
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})