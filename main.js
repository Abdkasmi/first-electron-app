const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path");

// Hot reload implementation
const electronReload = require('electron-reload');

electronReload(__dirname);

if (module.hot) {
    module.hot.accept();
 }


 // Creating and rendering window view
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })

    win.loadFile('templates/index.html');
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
    createWindow();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})
