const express = require('express');
const puppeteer = require('puppeteer-core');
const nodemailer = require('nodemailer');
const { promisify } = require('util');

const app = express();
app.use(express.json());

// Capture screenshot of a web page using Puppeteer
async function captureScreenshot(url) {
  const browser = await puppeteer.launch({
    executablePath: 'path/to/your/chrome/executable', // Path to the Chrome executable on your system
    args: ['--no-sandbox'], // Additional arguments to pass to Chrome
  });
  const page = await browser.newPage();
  await page.goto(url);
  const screenshot = await page.screenshot({ type: 'jpeg' });
  await browser.close();
  return screenshot;
}

// Rest of the code remains the same...
