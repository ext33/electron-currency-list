const path = require('path');

const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

// set window settings
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 660,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

// configure dev mode
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

// start app
app.whenReady().then(createWindow);

// settings for mac os
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});