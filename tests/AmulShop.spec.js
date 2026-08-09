const {test,expect} = require("@playwright/test")


test('Amul protein order', async ({page}) => {
  //Amul test 
    await page.goto("https://shop.amul.com/en/browse/protein");
    
    await page.waitForLoadState('networkidle');
    await page.locator(".bigLocationBtn").click();
    await page.getByRole('button', { name: 'Apply' }).waitFor();
    await page.getByRole('button', { name: 'Apply' }).click();
    console.log(await page.title());
    await page.locator(".product-caption-top").first().waitFor();
    const product = page.locator(".product-grid-name")
    const productName = await product.locator("a[class*='fw-semibold']").allTextContents();
    console.log(productName);


})