// pages/fl/fl.js
import myrequest from '../../utils/myrequest'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cate:"",        // 存放分类数据
        children:"",     // 存放商品数据
        h:0,            // 距离顶部的距离
    },
    // methods
    // 获取分类数据
    async getcate(){
        // 接口请求
        let {data} = await myrequest({url:"/categories"})
        console.log(data.message);
        // 修改data数据
        this.setData({
            cate:data.message,
            children:data.message[0].children
        })
    },
    // 切换徽章事件
    onChange(e){
        let index = e.detail
        this.setData({
            children:this.data.cate[index].children,
            h:0
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getcate()
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