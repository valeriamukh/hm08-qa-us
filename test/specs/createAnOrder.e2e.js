const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    
    
    it('should wait for the taxi driver', async () => {
        //Call the taxi to the address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

    }),

        it('should select Supportive Plan', async () => {
        //Select Supportive plan 
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        await expect(supportivePlanButton).toHaveElementClass;

        }),

        it('should input phone number', async () => {
        //Input phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();

        }),

        it('should add a payment card', async () => {
        //Adding a payment card 
        await page.addPaymentMethodCard();

        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();

        await browser.pause(2000);

        }),

        it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();

        await browser.pause(2000)
    }),

    it('should writing a message for the driver', async () => {
        //Writing message for the driver 

        const messageForDriverField = await $('//input[@name="comment"]');
        await messageForDriverField.setValue("Get some whiskey");

        await browser.pause(2000)
    }),
   
    it('ordering a blancket and handkerchiefs', async () => {
         //Ordering a blancket and handkerchiefs
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();

        const blancketAndHandkerchiefsButton = await $(page.blancketAndHandkerchiefsButton);
        await blancketAndHandkerchiefsButton.waitForDisplayed();
        await blancketAndHandkerchiefsButton.click();
        
        await expect(await $(blancketAndHandkerchiefsButton)).toBeExisting();

        await browser.pause(5000)
    }),
    
    it('ordering two ice-creams', async () => {
        //Ordering two ice-creams
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        const iceCreamPlusButton = await $(page.iceCreamPlusButton);
        await iceCreamPlusButton.waitForDisplayed();
        await iceCreamPlusButton.click();
        await iceCreamPlusButton.click();
        const iceCreamValue = await iceCreamPlusButton.getText();
        await expect($(`div=${2}`)).toBeExisting();

        await browser.pause(2000)
    }),

        it('the car search modal appears', async () => {
            //The car search modal appears
            await browser.url(`/`)
            await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
            const supportivePlanButton = await $(page.supportivePlanButton);
            await supportivePlanButton.waitForDisplayed();
            await supportivePlanButton.click();

            const orderButton = await $(page.orderButton);
            await orderButton.waitForDisplayed();
            await orderButton.click();

            await browser.pause(2000)

        })

 });
