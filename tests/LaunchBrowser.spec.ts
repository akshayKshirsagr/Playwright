const { test, expect } = require("@playwright/test");
const exp = require("constants");

test("01_batch2_verify the successful sumbission of details", async ({ browser }) => {

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // visiting the given url
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    //verify the heading text 
    await expect(page).toHaveTitle("WebDriver | Contact Us")
    //enter firstname 
    await page.locator('input[name="first_name"]').fill("Siddhant")
    //verify the value enetred in firstname 
    await expect(page.locator('input[name="first_name"]')).toHaveValue("Siddhant")
    //enter lastname 
    await page.locator('input[name="last_name"]').fill("gadakh")
    //verify the value enetred in lastname 
    await expect(page.locator('input[name="last_name"]')).toHaveValue("gadakh")
    //enter emial 
    await page.locator('input[name="email"]').fill("sidgadakh@gmail.com")
    //verify the value enetred in emial 
    await expect(page.locator('input[name="email"]')).toHaveValue("sidgadakh@gmail.com")
    //enter firstname 
    await page.locator('[name="message"]').fill("text123")
    //verify the value enetred in commnet 
    await expect(page.locator('[name="message"]')).toHaveValue("text123")
    //click on the btn submit
    await page.locator('input[type="submit"]').click()
    //verify the sumbit message 
   let sumbittext= await page.locator('[id="contact_reply"] h1').textContent()
   console.log(sumbittext)
    await expect(sumbittext).toEqual("Thank You for your Message!")
})


