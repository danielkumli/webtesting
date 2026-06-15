import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://react-shopping-cart-67954.firebaseapp.com/')
});

test('Go to shopping cart', async ({ page }) => {

  await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
  await page.getByTitle('Products in cart quantity').click();
  await expect (page.getByRole('button', {name :'CHECKOUT'})).toBeVisible();
  });

  test('Verify Sizes', async ({page}) => {


  });