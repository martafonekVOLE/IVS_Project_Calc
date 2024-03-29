/**
 * @file Main JavaScript file for Electron app builder
 * @author Martin Pech <xpechm00@stud.fit.vutbr.cz>
 * @licence : GNU GPL Version 3
 */

const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
//const Menu = electron.Menu

/**
 * @function createWindow Creates application window with given size and content loaded
 * @param set Defines what content is going to be loaded
 * */
function createWindow (set) {
  const win = new BrowserWindow({
    width: 450,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  if(set==1){
    win.loadFile('profiling.html')
    set = 0;
  }
  else if(set==2){
    win.loadFile('help.html')
    set = 0;
  }
  else if(set==3){
    win.loadFile('../dokumentace.pdf')
    set = 0;
  }
  else{
    win.loadFile('index.html')
  }
}
/**
 * app.on Defines what to do when the application is "on". It contains Menu elements
 * */
app.on('ready', function(){
  const template = [
    {
      label: 'Menu',
      submenu: [
        {
          label: 'New Profiling window', click () {
            createWindow(1);
          },
          accelerator: 'CmdOrCtrl+Shift+P'
        },
        {
          label: 'New Calculator window', click () {
            createWindow(0);
          },
          accelerator: 'CmdOrCtrl+Shift+C'
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          click () {app.quit()},
          accelerator: 'CmdOrCtrl+Q'
        }
      ],
    },
    {
      label: 'Window',
      submenu: [
        { role: "togglefullscreen"},
        { role: 'minimize' },
        { role: 'reload' },
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Display Help', click(){
            createWindow(2);
          },
          accelerator: 'CmdOrCtrl+H'
        },
        {
          type: 'separator'
        },
        {
          label: 'Read Documentation', click(){
            var pdf ="dokumentace.pdf";
            createWindow(3);
          },
        },
        {
          label: 'Find More on GitHub',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://github.com/martafonekVOLE/IVS_Project_Calc')
          }
        }
      ]
    },
    /*{
      label: '    ', click(){
        console.log('Secret section found. Only for TRUE developers :-)');
      },
      submenu: [
        { role: 'toggleDevTools' },
      ]
    },*/
  ];
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
});

/**
 * app.whenReady Does something when application is ready to be loaded
 * */
app.whenReady().then(() => {
  createWindow(0)

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})