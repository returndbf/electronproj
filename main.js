/*
 * @Author: dabenfeng
 * @Date: 2021-07-31 15:09:05
 * @LastEditTime: 2021-08-01 15:20:39
 * @LastEditors: Please set LastEditors
 * @Description: 主进程
 * @FilePath: \electrondemo\main.js
 */
//引入相应模块
const { electron, app, BrowserWindow, globalShortcut, Notification } = require('electron')
// 保持一个对于 window 对象的全局引用，不然，当 JavaScript 被 GC，
// window 会被自动地关闭
let mainWindow = null;
//警告窗口
function error() {
    electron.dialog.showErrorBox('title', 'content')
}
//系统通知
function showNotification() {
    new Notification({ title: 'NOTIFICATION_TITLE', body: 'NOTIFICATION_BODY' }).show()
}
// 当 Electron 完成了初始化并且准备创建浏览器窗口的时候
// 这个方法就被调用
app.on('ready', function () {
    //注册快捷键
    globalShortcut.register('ctrl+q', () => {
        app.exit()
    })
    // 创建浏览器窗口。
    mainWindow = new BrowserWindow({
        width: 200,
        height: 150,
        webPreferences: { nodeIntegration: true, contextIsolation: false },
        //禁止缩放窗口
        resizable: false,
        //去除边框
        frame:false
        
    });
    //需要在主进程注册菜单才可使用
    require('./render/menu.js')
    // 加载应用的 index.html
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    // 当 window 被关闭，这个事件会被发出
    mainWindow.on('closed', function () {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 但这次不是。
        mainWindow = null;
    });
});