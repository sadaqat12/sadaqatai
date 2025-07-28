import { test, expect } from '@playwright/test';

test.describe('Basic Portfolio Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should load homepage successfully', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle('Sadaqat Ali | AI-First Developer & Problem Solver');
    
    // Check main heading is visible
    await expect(page.getByRole('heading', { name: 'Sadaqat Ali', level: 1 })).toBeVisible();
  });

  test('should display hero section elements', async ({ page }) => {
    // Check subtitle - use specific selector to avoid duplicate
    const subtitle = page.locator('p.text-xl').filter({ hasText: 'AI-First Developer & Problem Solver' });
    await expect(subtitle).toBeVisible();
    
    // Check navigation buttons exist
    const aboutButton = page.locator('a[href="#about"]');
    await expect(aboutButton).toBeVisible();
    await expect(aboutButton).toContainText('About Me');
    
    const projectsButton = page.locator('a[href="#projects"]');
    await expect(projectsButton).toBeVisible();
    await expect(projectsButton).toContainText('View Projects');
    
    // Check headshot image
    const headshot = page.locator('img[alt="Sadaqat Ali"]');
    await expect(headshot).toBeVisible();
  });

  test('should navigate to sections on button click', async ({ page }) => {
    // Click About Me and wait for scroll
    await page.locator('a[href="#about"]').click();
    await page.waitForTimeout(1000);
    
    // Check About section is visible
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'About Me', level: 2 })).toBeVisible();
  });

  test('should display all main sections', async ({ page }) => {
    // Check all section headings exist
    await expect(page.getByRole('heading', { name: 'About Me', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Featured Projects', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Skills & Experience', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: "Let's Connect", level: 2 })).toBeVisible();
  });

  test('should have working contact form', async ({ page }) => {
    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    // Check form elements exist
    const nameInput = page.locator('input[placeholder="Your name"]');
    const emailInput = page.locator('input[placeholder="Your email"]');
    const messageInput = page.locator('textarea[placeholder="Your message"]');
    const submitButton = page.getByRole('button', { name: 'Send Message' });
    
    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(messageInput).toBeVisible();
    await expect(submitButton).toBeVisible();
    
    // Fill form
    await nameInput.fill('Test User');
    await emailInput.fill('test@example.com');
    await messageInput.fill('This is a test message from Playwright');
    
    // Submit form
    await submitButton.click();
    
    // Wait for success message
    await expect(page.getByText("Thank you for your message")).toBeVisible({ timeout: 10000 });
  });

  test('should display project cards', async ({ page }) => {
    // Scroll to projects
    await page.locator('#projects').scrollIntoViewIfNeeded();
    
    // Check project cards exist
    const projectCards = page.locator('a[href^="/projects/"]');
    const count = await projectCards.count();
    expect(count).toBeGreaterThan(0);
    
    // Check first project has title
    const firstProject = projectCards.first();
    await expect(firstProject).toBeVisible();
    await expect(firstProject.getByRole('heading')).toBeVisible();
  });

  test('should show professional experience', async ({ page }) => {
    // Scroll to skills section
    await page.locator('#skills').scrollIntoViewIfNeeded();
    
    // Check experience section
    await expect(page.getByRole('heading', { name: 'Professional Experience' })).toBeVisible();
    
    // Check at least one company is visible
    const gauntletText = page.locator('p').filter({ hasText: 'Gauntlet AI' });
    await expect(gauntletText.first()).toBeVisible();
  });

  test('should display education with logos', async ({ page }) => {
    // Scroll to about section
    await page.locator('#about').scrollIntoViewIfNeeded();
    
    // Check education heading
    await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible();
    
    // Check university names
    await expect(page.getByText('Georgia Institute of Technology')).toBeVisible();
    await expect(page.getByText('The Ohio State University')).toBeVisible();
    
    // Check logos exist
    const gtLogo = page.locator('img[alt="Georgia Tech"]');
    const osuLogo = page.locator('img[alt="Ohio State"]');
    
    await expect(gtLogo).toBeVisible();
    await expect(osuLogo).toBeVisible();
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Main heading should still be visible
    await expect(page.getByRole('heading', { name: 'Sadaqat Ali', level: 1 })).toBeVisible();
    
    // Navigation buttons should be in grid
    const navGrid = page.locator('.grid').first();
    await expect(navGrid).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // Content should adjust
    await expect(page.getByRole('heading', { name: 'Sadaqat Ali', level: 1 })).toBeVisible();
  });

  test('should have download resume link', async ({ page }) => {
    const resumeLink = page.locator('a[href="/SadaqatAli.pdf"]');
    await expect(resumeLink).toBeVisible();
    await expect(resumeLink).toHaveAttribute('download', '');
    await expect(resumeLink).toContainText('Download Resume');
  });
});