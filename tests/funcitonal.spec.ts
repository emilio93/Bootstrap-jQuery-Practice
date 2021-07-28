import { test } from '@playwright/test';
import * as path from "path";

const URL = `file:///${path.dirname(__dirname)}/docs/index.html`;

test('basic test', async ({ page }) => {
  await page.goto(URL);
  await page.screenshot({ path: `screenshot.png`, fullPage: true });
});