const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Multi Select List of Country', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    const countrySelectorLoc = page.locator("#multi-select");
    await countrySelectorLoc.selectOption(["California", "Florida", "New Jersey"]);
    await expect(countrySelectorLoc).toHaveValues([/California/, /Florida/, /New Jersey/]);
});