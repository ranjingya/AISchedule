async function scheduleHtmlProvider(dom = document) {
    await loadTool('AIScheduleTools')
    const url = "http://jwxt.just.edu.cn/jwglxt/kbcx/xskbcx_cxXskbcxIndex.html?gnmkdm=N2151&layout=default"
    const url2 = "http://jwxt.just.edu.cn/jwglxt/kbcx/xskbcx_cxXskbcxIndex.html?gnmkdm=N253508&layout=default"
    const url_v = "https://client.v.just.edu.cn/http/webvpn12738b7746cb46ff465fb0bca782b8a72738b83605805ff098e4d664058cd8ed/jwglxt/kbcx/xskbcx_cxXskbcxIndex.html?gnmkdm=N2151&layout=default"
    var currentURL = window.location.href

    try {
        if (currentURL === url || currentURL === url_v || currentURL === url2) {
            return  dom.querySelector('#table1').outerHTML;
        } else {
            await AIScheduleAlert({
                titleText: '检查当前页面是否为课表界面', // 标题内容，字体比较大，不传默认为提示
                contentText: `正确路径为：登陆后--菜单栏--信息查询--个人课表查询
                
                              或者：登陆后--菜单栏--选课--个人课表查询`, // 提示信息，字体稍小，支持使用``达到换行效果，具体使用效果建议真机测试
                confirmText: '确认', // 确认按钮文字，可不传默认为确认
            })
            return 'do not continue'
        }
    } catch (error) {
        console.error(error)
        await AIScheduleAlert(error.message + '导入错误，检查当前是否在个人课表界面，其他问题请联系开发者')
        return 'do not continue'
    }
}
