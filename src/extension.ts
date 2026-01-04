import * as vscode from 'vscode';
import { WebviewPanel } from './webview/panel';

export function activate(context: vscode.ExtensionContext) {
  console.log('Webview extension is now active!');

  const openWebviewCommand = vscode.commands.registerCommand(
    'extension.openWebview',
    () => {
      WebviewPanel.createOrShow(context.extensionUri);
    }
  );

  context.subscriptions.push(openWebviewCommand);

  if (vscode.window.registerWebviewPanelSerializer) {
    vscode.window.registerWebviewPanelSerializer(WebviewPanel.viewType, {
      async deserializeWebviewPanel(webviewPanel: vscode.WebviewPanel) {
        WebviewPanel.revive(webviewPanel, context.extensionUri);
      }
    });
  }
}

export function deactivate() {}