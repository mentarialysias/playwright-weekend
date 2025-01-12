// @ts-check
const { test, expect} = require('@playwright/test');

test ('locator dan assertins', async({page}) => {
    await page.goto('https://www.saucedemo.com');

    const inputUsername = page.locator('#user-name');
    await inputUsername.fill('standard_user');
    await expect(inputUsername).toHaveValue('standard_user');

    const inputPassword = page.locator('#password');
    await inputPassword.fill('secret_sauce');
    await expect(inputPassword).toHaveValue('secret_sauce');

    const loginButton = page.locator('#login-button');
    await loginButton.click(); 
    // await page.waitForURL('https://www.saucedemo.com/inventory.html'); 
    // await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 

    const addBackPack = page.locator('#add-to-cart-sauce-labs-backpack');
    await addBackPack.click();
    const removeBackPack = page.locator('#remove-sauce-labs-backpack'); 
    await expect(removeBackPack).toHaveText('Remove');

    const addBikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');
    await addBikeLight.click();
    const removeBikeLight = page.locator('#remove-sauce-labs-bike-light'); 
    await expect(removeBikeLight).toHaveText('Remove');

    const addFleeceJacket = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
    await addFleeceJacket.click();
    const removeFleeceJacket = page.locator('#remove-sauce-labs-fleece-jacket'); 
    await expect(removeFleeceJacket).toHaveText('Remove');

    const cartIcon = page.locator('#shopping_cart_container > a');
    await cartIcon.click();
    // const pageTitle = page.locator('#header_container > div.header_secondary_container > span');
    // await expect(pageTitle).toBeVisible();
    // await expect(pageTitle).toHaveValue('Your Cart');

    const removeFleeceJacketfromCart = page.locator('#remove-sauce-labs-fleece-jacket');
    await removeFleeceJacketfromCart.click();
    
    const checkoutButton = page.locator('#checkout');
    await checkoutButton.click();

    // const checkoutInfo = page.locator('#checkout_info');
    // await expect(checkoutInfo).toBeVisible();

    const inputFirstName = page.locator('#first-name');
    const placeholderFirstName = await inputFirstName.getAttribute('placeholder');
    await expect(placeholderFirstName).toBe('First Name');    
    await inputFirstName.fill('Mentari');
    await expect(inputFirstName).toHaveValue('Mentari');

    const inputLastName = page.locator('#last-name');
    const placeholderLastName = await inputLastName.getAttribute('placeholder');
    await expect(placeholderLastName).toBe('Last Name');    
    await inputLastName.fill('Sudrajat');
    await expect(inputLastName).toHaveValue('Sudrajat');

    const inputZipCode = page.locator('#postal-code');
    const placeholderZip = await inputZipCode.getAttribute('placeholder');
    await expect(placeholderZip).toBe('Zip/Postal Code');
    await inputZipCode.fill('4212');
    await expect(inputZipCode).toHaveValue('4212');

    const continueButton = page.locator('#continue');
    await expect(continueButton).toHaveText('Continue');
    await continueButton.click();
    // await expect(pageTitle).toBeVisible();
    // await expect(pageTitle).toHaveValue('Checkout: Overview');

    const finishButton = page.locator('#finish');
    await expect(finishButton).toHaveText('Finish');
    await finishButton.click();

    const completeCheckout = page.locator('#checkout_complete_container');
    await expect(completeCheckout).toBeEnabled();
    
    const backHomeButtom = page.locator('#back-to-products');
    await expect(backHomeButtom).toHaveText('Back Home');
    await backHomeButtom.click();

    

})