import { test } from '@playwright/test';
import * as path from "path";

const URL = `file:///${path.dirname(__dirname)}/docs/index.html`;

test('basic test', async ({ page }) => {
  await page.goto(URL);
  const email = await page.$('#email');
  await email.type("correo@gmail.com")
  const password = await page.$('#password')
  await password.type('miPassword');
  await page.screenshot({ path: `screenshot-before-login.png`, fullPage: true });
  await page.click('#login-button');
  await page.screenshot({ path: `screenshot-after-login.png`, fullPage: true });
  await page.click('#logout-button');
  await page.screenshot({ path: `screenshot-after-logout.png`, fullPage: true });
});