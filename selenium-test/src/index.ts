// Import the Selenium WebDriver
import { Builder, By, Key, until, WebDriver } from "selenium-webdriver";
import firefox from "selenium-webdriver/firefox";

// Create firefox options with headless mode enabled
const firefoxOptions = new firefox.Options();
// Create a new instance of the WebDriver
const driver: WebDriver = new Builder()
  .forBrowser("firefox")
  .setFirefoxOptions(firefoxOptions) // You can use 'firefox', 'safari', etc. instead of 'chrome'
  .build();

// Navigate to a website
async function navigateToWebsite() {
  await driver.get("https://pub.dev/");
}

// Example function to interact with elements on the webpage
async function interactWithPage() {
  // Find an input element by its CSS selector
  const inputElement = await driver.findElement(By.className("input"));

  // Type something into the input field
  await inputElement.sendKeys("get_cli", Key.RETURN);

  //   // Wait for a specific element to appear on the page
  await driver.wait(until.elementLocated(By.linkText("get_cli")), 5000);

  //   // Get the text of the result element
  const getCli = await driver.findElement(By.linkText("get_cli"));
  await getCli.click();
}

// Function to close the WebDriver session
async function closeBrowser() {
  await driver.quit();
}

// Run the functions in sequence
async function run() {
  try {
    await navigateToWebsite();
    await interactWithPage();
    console.log("SUCCESS");
  } finally {
    await closeBrowser();
  }
}

// Call the run function to start the automation
run();
