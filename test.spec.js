const firstname = page.locator("//input[@name='firstname']");
await expect(firstname).toHaveId("input-firstname1");