const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/chatBotElement/runtime.js',
        './dist/chatBotElement/polyfills.js',
        './dist/chatBotElement/scripts.js',
        './dist/chatBotElement/main.js',
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/chat-bot.js')

    await fs.copyFile('./dist/chatBotElement/styles.css', 'elements/styles.css')
    await fs.copy('./dist/chatBotElement/assets/', 'elements/assets/' )
})()
