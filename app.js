const { app,BrowserWindow }  = require('electron');
const path = require('path');
var mainWindow;
app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        webPreferences:{
            contextIsolation:false,
            nodeIntegration:true,
        }
    });
    mainWindow.loadFile(path.join(__dirname,'html','index.html'));
});

app.on('quit',()=>{
    if(process.platform!='darwin')
        app.quit();
});



