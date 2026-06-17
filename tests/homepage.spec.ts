import { test, expect } from '@playwright/test';

test('Go to shopping cart', async ({ page }) => {

  await page.goto('/');
  await page.getByTitle('Products in cart quantity').click();
  await expect (page.getByRole('button', {name :'CHECKOUT'})).toBeVisible();
  });

  test('Verify Sizes', async ({page}) => {
    await page.goto('/');
    await expect(page.getByRole('heading', {name: 'Sizes:'})).toBeVisible();
    await expect(page.getByLabel('XS', { exact: true })).toBeVisible();
    await expect(page.getByLabel('S',{exact:true})).toBeVisible();
    await expect(page.getByLabel('M', {exact:true})).toBeVisible();
    await expect(page.getByLabel('ML', {exact:true})).toBeVisible();
    await expect(page.getByLabel('L', {exact:true})).toBeVisible();
    await expect(page.getByLabel('XL', {exact:true})).toBeVisible();
    await expect(page.getByLabel('XXL', {exact:true})).toBeVisible();
  });
  
  test('Star link', async ({page})=>{
    await page.goto('/');
    await page.getByRole('link', ({name: 'Star'})).click();
    await expect(page).toHaveURL('https://github.com/jeffersonRibeiro/react-shopping-cart');
    

  });