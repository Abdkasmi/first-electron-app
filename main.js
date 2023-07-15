const { app, BrowserWindow } = require('electron')

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
        height: 600
    })

    win.loadFile('templates/index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.whenReady().then(() => {
        createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})
