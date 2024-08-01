<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TextUtils README</title>
    <style>
        .code-box {
            position: relative;
            background-color: #f5f5f5;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-family: Consolas, "Courier New", monospace;
            font-size: 14px;
        }
        .copy-button {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 5px 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        .copy-button:active {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
<h1>TextUtils</h1>

<p style="font-size: 18px;">TextUtils is a versatile text manipulation tool built with React. It offers features like converting text to uppercase or lowercase, clearing text, removing extra spaces, copying text, counting words and characters, and providing a real-time preview of the modified text.</p>
Features
<ul style="font-size: 16px;">
  <li><strong>Case Conversion</strong>: Switch between uppercase and lowercase effortlessly.</li>
  <li><strong>Clear Text</strong>: Clear the text area with a single click.</li>
  <li><strong>Remove Extra Spaces</strong>: Trim extra spaces from your text.</li>
  <li><strong>Copy Text</strong>: Copy the entire text to your clipboard with ease.</li>
  <li><strong>Word and Character Count</strong>: Get instant counts of words and characters.</li>
  <li><strong>Live Preview</strong>: See real-time updates of your text as you type or modify it.</li>
</ul>
Demo
<p style="font-size: 16px;">![TextUtils Demo](https://path-to-your-demo-gif-or-image)</p>
Getting Started
<p style="font-size: 18px;">These instructions will help you set up and run the project on your local machine.</p>
Prerequisites
<p style="font-size: 16px;">
  <ul>
    <li>Node.js</li>
    <li>npm (Node Package Manager) or yarn</li>
  </ul>
</p>
Installation
<p style="font-size: 16px;">
  <ol>
    <li><strong>Clone the repository:</strong></li>
  </ol>
</p>
<div class="code-box">
        <pre id="code-example">
npm install
# or
yarn install
        </pre>
        <button class="copy-button" onclick="copyToClipboard()">Copy</button>
    </div>
     <script>
        function copyToClipboard() {
            var code = document.getElementById("code-example");
            var range = document.createRange();
            range.selectNode(code);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            alert("Code copied to clipboard!");
        }
    </script>
</body>
</html>
