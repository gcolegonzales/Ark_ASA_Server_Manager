const path = require('path') 
const { app, BrowserWindow } = require('electron')

const isMac = process.platform === 'darwin';
const env = process.env.NODE_ENV || 'development'; 
const isDev = env === 'development';

const createWindow = () => {
	const win = new BrowserWindow({
	  width: isDev ? 1700 : 1300,
	  height: 900,
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, 'preload.js')
		}
	})
  
	win.removeMenu();
	win.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
  createWindow()

	// This allows the app to open a new window when closed (minimized) on Mac, 
	// since macOS doesn't "kill" apps on close. This will have no effect on Windows/Linux.
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
});

if (isDev) { 
	try { 
			require('electron-reloader')(module, { 
					debug: true, 
					watchRenderer: true
			})
	} catch (_) { console.log('Error with electron-reloader.'); }     
};