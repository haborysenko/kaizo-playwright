import { Page } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export async function login(page: Page) {
  await page.fill("#user_email", process.env.USERNAME as string);
  await page.fill("#user_password", process.env.PASSWORD as string);
  await page.click("#sign-in-submit-button");
}

