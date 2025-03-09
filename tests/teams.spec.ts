import { test, expect } from "@playwright/test";
import { login } from "../support/commands";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

test.describe("Kaizo Team Creation and Deletion", () => {
  let page;
  let iframeLocator;

  // Define test variables
  const teamName = "Team";
  const teamDescription = "Description";

  // Define test locators
  const teamTabButtonLocator = 'button[role="tab"]:has-text("Teams")';
  const createTeamButtonLocator = 'button:has-text("Create team")';
  const nameInputLocator =
    '.Modal_content__yBmFf label:has-text("Name") + input';
  const descriptionInputLocator =
    '.Modal_content__yBmFf label:has-text("Description") + input';
  const saveButtonLocator = 'button:has-text("Save")';
  const parentDivLocator = "div.manage-users-table.manage-users-table--team";
  const firstRowLocator = `${parentDivLocator} div.manage-users-table__row:first-of-type`;
  const trashIconLocator = "i.fa.fa-trash-can";
  const deleteButtonLocator = 'button:has-text("Delete")';

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();

    // Login, open Kaizo settings/people
    await page.goto(process.env.BASE_URL);
    await login(page);
    await page.click("button[title='Kaizo']");
    await page.goto(`${process.env.BASE_URL}agent/apps/kaizo/settings/people`);

    // Ensure Kaizo iframe is available for interaction
    iframeLocator = page.locator(
      'iframe[title="Kaizo"][name^="app_Kaizo_nav_bar"][src^="/apps/installations/33228091274129/iframe_redirect"]'
    );
    await iframeLocator.waitFor({ state: "attached" });
  });

  test("should create a team, delete it and verify", async () => {
    // Switch to the iframe content to interact with elements in iframe
    const iframe = await iframeLocator.contentFrame();

    // Open Teams tab
    await iframe.locator(teamTabButtonLocator).click();

    // Create a new team
    await iframe.locator(createTeamButtonLocator).click();
    await iframe.locator(nameInputLocator).fill(teamName);
    await iframe.locator(descriptionInputLocator).fill(teamDescription);
    await iframe.locator(saveButtonLocator).click();

    // Locate the first table row and assert the team name and description
    const firstRow = await iframe.locator(firstRowLocator);
    await expect(firstRow).toHaveText(`${teamName}${teamDescription}`);

    // Delete first team
    const firstTrashIcon = await iframe.locator(trashIconLocator).first();
    await firstTrashIcon.click();
    const deleteButton = await iframe.locator(deleteButtonLocator);
    await deleteButton.click();
  });
});
