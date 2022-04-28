// pages/home/home.js
import myrequest from '../../utils/myrequest'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiper:"",
        nav:"",
        floor:""
    },
    // methods
    // 获取轮播数据
    async getswiper(){
        let {data} = await myrequest({url:"/home/swiperdata"})
        console.log(data.message);
        this.setData({
            swiper:data.message
        })
    },
    // 获取导航数据
    async getnav(){
        let {data} = await myrequest({url:"/home/catitems"})
        console.log(data.message);
        this.setData({
            nav:data.message
        })
    },
    // 获取商品数据
    async getfloor(){
        let {data} = await myrequest({url:"/home/floordata"})
        console.log(data.message);
        this.setData({
            floor:data.message
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getswiper()
        this.getnav()
        this.getfloor()
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