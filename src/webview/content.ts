import * as vscode from 'vscode';

export function getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Panel</title>
  <style>
    body {
      font-family: var(--vscode-font-family);
      padding: 20px;
      color: var(--vscode-foreground);
      background-color: var(--vscode-editor-background);
    }
    h1 {
      color: var(--vscode-textLink-foreground);
      border-bottom: 1px solid var(--vscode-panel-border);
      padding-bottom: 10px;
    }
    button {
      background-color: var(--vscode-button-background);
      color: var(--vscode-button-foreground);
      border: none;
      padding: 8px 16px;
      cursor: pointer;
      border-radius: 2px;
    }
    button:hover {
      background-color: var(--vscode-button-hoverBackground);
    }
    .card {
      background-color: var(--vscode-editor-inactiveSelectionBackground);
      padding: 16px;
      border-radius: 4px;
      margin-top: 16px;
    }
  </style>
</head>
<body>
  <h1>Welcome to Custom Panel</h1>
  <div class="card">
    <p>This is a custom webview panel built with HTML, CSS, and JavaScript.</p>
    <button onclick="sendMessage()">Click Me</button>
  </div>
  <script>
    const vscode = acquireVsCodeApi();
    function sendMessage() {
      vscode.postMessage({ command: 'alert', text: 'Button clicked!' });
    }
  </script>
</body>
</html>`;
}