import loginLocators from "../locators/loginLocators";
import productLocators from "../locators/productLocators";
import cartLocators from "../locators/cartLocators";
import checkoutLocators from "../locators/checkoutLocators";
import checkoutOverviewLocators from "../locators/checkoutOverviewLocators";
import completeCheckoutLocators from "../locators/completeCheckoutLocators";
import { expect } from '@playwright/test';
import { time } from "console";

export default class newActions {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        // Initialization
        this.loginLocators = new loginLocators();
        this.productLocators = new productLocators();
        this.cartLocators = new cartLocators();
        this.checkoutLocators = new checkoutLocators();
        this.checkoutOverviewLocators = new checkoutOverviewLocators();
        this.completeCheckoutLocators = new completeCheckoutLocators();

        // Login Locators
        this.inputUsername = page.locator(this.loginLocators.inputUsername);
        this.inputPassword = page.locator(this.loginLocators.inputPassword);
        this.clickLoginButton = page.locator(this.loginLocators.clickLoginButton);

        // Product Locators
        this.addBackPack = page.locator(this.productLocators.addBackPack);
        this.addBikeLight = page.locator(this.productLocators.addBikeLight);
        this.addFleeceJacket = page.locator(this.productLocators.addFleeceJacket);
        this.removeBackPack = page.locator(this.productLocators.removeBackPack);
        this.removeBikeLight = page.locator(this.productLocators.removeBikeLight);
        this.removeFleeceJacket = page.locator(this.productLocators.removeFleeceJacket);
        this.cartIcon = page.locator(this.productLocators.cartIcon);

        // Cart Locators
        this.removeFleeceJacketfromCart = page.locator(this.cartLocators.removeFleeceJacket);
        this.checkoutButton = page.locator(this.cartLocators.checkoutButton);

        // Checkout Locators
        this.inputFirstName = page.locator(this.checkoutLocators.inputFirstName);
        this.inputLastName = page.locator(this.checkoutLocators.inputLastName);
        this.inputZipCode = page.locator(this.checkoutLocators.inputZipCode);
        this.cancelCheckoutButton = page.locator(this.checkoutLocators.cancelCheckoutButton);
        this.continueButton = page.locator(this.checkoutLocators.continueButton);


        // Checkout Overview Locators
        this.cancelButton = page.locator(this.checkoutOverviewLocators.cancelButton);
        this.finishButton = page.locator(this.checkoutOverviewLocators.finishButton);
        
        // Complete Checkout Locators
        this.completeCheckoutButton = page.locator(this.completeCheckoutLocators.completeCheckout);
        this.backHomeButton = page.locator(this.completeCheckoutLocators.backHomeButton);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async inputLogin() {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickLoginButton.click();
    }

    async addProductsToCart() {
        await this.addBackPack.click();
        await expect(this.removeBackPack).toHaveText('Remove');
        await this.addBikeLight.click();
        await expect(this.removeBikeLight).toHaveText('Remove');
        await this.addFleeceJacket.click();
        await expect(this.removeFleeceJacket).toHaveText('Remove');
        await this.cartIcon.click();
    }
    

    async proceedToCheckout() {
        await this.removeFleeceJacketfromCart.click();
        await this.checkoutButton.click();
    }

    async fillCheckoutInformation() {
        await this.inputFirstName.fill('Mentari');
        await expect(this.inputFirstName).toHaveValue('Mentari');
        await this.inputLastName.fill('Sudrajat');
        await expect(this.inputLastName).toHaveValue('Sudrajat');
        await this.inputZipCode.fill('4212');
        await expect(this.inputZipCode).toHaveValue('4212');
    }

    async continueCheckout(){
        await expect(this.cancelCheckoutButton).toBeVisible();
        await expect(this.continueButton).toBeVisible();
        await expect(this.cancelCheckoutButton).toHaveText('Cancel');
        await expect(this.continueButton).toHaveText('Continue');
        await this.continueButton.click();
    }


    async completeCheckout() {
        await expect(this.cancelButton).toBeVisible();
        await expect(this.cancelButton).toHaveText('Cancel')
        await expect(this.finishButton).toBeVisible();
        await expect(this.finishButton).toHaveText('Finish');
        await this.finishButton.click();
    }

    async successCheckout(){
        await expect(this.completeCheckoutButton).toBeVisible();
        await this.backHomeButton.click();
    }
}
