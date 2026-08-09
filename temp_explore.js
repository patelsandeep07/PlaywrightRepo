const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  try {
    console.log('Navigating to login page...');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    
    // Wait for page to load and take screenshot for analysis
    await page.waitForLoadState('networkidle');
    console.log('Page loaded, taking screenshot...');
    
    // Let's explore the elements
    await page.screenshot({ path: 'login_page.png' });
    
    // Check for username field
    const usernameSelectors = ['#username', '[name="username"]', 'input[type="text"]'];
    for (const selector of usernameSelectors) {
      try {
        const element = await page.locator(selector).first();
        if (await element.isVisible()) {
          console.log(`Username field found with selector: ${selector}`);
          break;
        }
      } catch (e) {}
    }
    
    // Check for password field
    const passwordSelectors = ['#password', '[name="password"]', 'input[type="password"]'];
    for (const selector of passwordSelectors) {
      try {
        const element = await page.locator(selector).first();
        if (await element.isVisible()) {
          console.log(`Password field found with selector: ${selector}`);
          break;
        }
      } catch (e) {}
    }
    
    // Check for checkbox
    const checkboxSelectors = ['input[type="checkbox"]', '.checkmark', '[type="checkbox"]'];
    for (const selector of checkboxSelectors) {
      try {
        const element = await page.locator(selector).first();
        if (await element.isVisible()) {
          console.log(`Checkbox found with selector: ${selector}`);
          break;
        }
      } catch (e) {}
    }
    
    // Check for sign in button
    const buttonSelectors = ['input[type="submit"]', 'button[type="submit"]', '.btn', 'input[value*="Sign In"]'];
    for (const selector of buttonSelectors) {
      try {
        const element = await page.locator(selector).first();
        if (await element.isVisible()) {
          console.log(`Sign in button found with selector: ${selector}`);
          break;
        }
      } catch (e) {}
    }
    
    console.log('Filling form and submitting...');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.locator('input[type="checkbox"]').check();
    await page.locator('input[type="submit"]').click();
    
    console.log('Waiting for navigation...');
    await page.waitForURL('**/shop**');
    
    await page.screenshot({ path: 'shop_page.png' });
    console.log('Navigated to shop page, taking screenshot...');
    
    // Look for iPhone X
    const products = await page.locator('.card-title').allTextContents();
    console.log('Products found:', products);
    
    const iphoneExists = products.some(product => 
      product.toLowerCase().includes('iphone x')
    );
    console.log('iPhone X present:', iphoneExists);
    
  } catch (error) {
    console.error('Error during exploration:', error);
  } finally {
    await browser.close();
  }
})();