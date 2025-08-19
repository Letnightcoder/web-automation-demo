import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Go to the page
  await page.goto("https://www.w3schools.com/howto/howto_css_login_form.asp");

  // Click the blue "Login" button to open popup
  await page.click(
    "button[onclick=\"document.getElementById('id01').style.display='block'\"]"
  );

  // Wait for the login modal to appear
  await page.waitForSelector('input[placeholder="Enter Username"]');

  // Type into username and password fields
  await page.type('input[placeholder="Enter Username"]', "myusername");
  await page.type('input[placeholder="Enter Password"]', "mytestpassword");

  // Click the green "Login" button
  await page.click('button.w3-button.w3-green');

  // Wait a bit so you can see result
  await new Promise((r) => setTimeout(r, 5000));

  // Go to another page with dropdown (W3Schools dropdown demo)
  await page.goto(
    "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select"
  );
  await page.waitForSelector("iframe"); // wait for iframe

  // Switch to iframe (W3Schools demo runs inside iframe)
  const frame = page.frames().find((f) => f.name() === "iframeResult");

  await new Promise((r) => setTimeout(r, 2000));

  // Select an option from dropdown
  await frame.select("select", "saab"); // selects "Saab"

  await new Promise((r) => setTimeout(r, 3000));

  await browser.close();
})();
