// @ts-check
const { test, expect } = require('@playwright/test');
const { default: newActions } = require('../tests/spec/actions/newActions');

test('PMO weekend - Complete E2E Flow', async ({ page }) => {
    const objActions = new newActions(page);
    await objActions.goto();
    await objActions.inputLogin();
    await objActions.addProductsToCart();
    await objActions.proceedToCheckout();
    await objActions.fillCheckoutInformation();
    await objActions.continueCheckout();
    await objActions.completeCheckout();
    await objActions.successCheckout();
    
});
