const { app, BrowserWindow } = require('electron')
const path = require('path')

// 创建浏览器窗口
let mainWindow = null;
const createWindow = () => {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            // preload: path.join(__dirname, 'preload.js')
        }
    });
    /**
       * loadURL 分为两种情况
       *  1.开发环境，指向 react 的开发环境地址
       *  2.生产环境，指向 react build 后的 index.html
       */
    const startUrl =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : path.join(__dirname, "../build/index.html");
    mainWindow.loadURL(startUrl);

    // 打开开发者工具
    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
app.on('ready', createWindow);

app.on('window-all-closed', function () {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (mainWindow === null) createWindow();
});