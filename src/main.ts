"use strict";

import { app, BrowserWindow } from "electron";
import * as path from "path";

// global reference required to prevent garbage collection and
// thus unexpected closure of the window
let mainWindow: Electron.BrowserWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    width: 800,
  });

  mainWindow.loadFile(path.join(__dirname, "../index.html"));
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    // Explicitly dereference the window for garbage collection
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  // on macOS the menu bar stays active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS re-create a window (if no windows found) in the app when the dock icon is clicked
  if (mainWindow === null) {
    createWindow();
  }
});
