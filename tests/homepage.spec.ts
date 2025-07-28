import { test, expect } from '@playwright/test';

test.describe('Sadaqat Ali Portfolio - Single Page App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should display hero section with correct content', async ({ page }) => {
    // Check hero heading and subtitle
    await expect(page.getByRole('heading', { name: 'Sadaqat Ali' })).toBeVisible();
    await expect(page.getByText('AI-First Developer & Problem Solver')).toBeVisible();
    
    // Check navigation buttons
    await expect(page.getByRole('button', { name: 'About Me' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Projects' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Skills & Experience' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Contact' })).toBeVisible();
    
    // Check Download Resume button
    await expect(page.getByRole('link', { name: 'Download Resume' })).toBeVisible();
    
    // Check headshot image
    await expect(page.locator('img[alt="Sadaqat Ali - Professional Headshot"]')).toBeVisible();
  });

  test('should have smooth scrolling navigation', async ({ page }) => {
    // Click About Me button
    await page.getByRole('button', { name: 'About Me' }).click();
    await expect(page.locator('#about')).toBeInViewport();
    
    // Click Projects button
    await page.getByRole('button', { name: 'Projects' }).click();
    await expect(page.locator('#projects')).toBeInViewport();
    
    // Click Skills & Experience button
    await page.getByRole('button', { name: 'Skills & Experience' }).click();
    await expect(page.locator('#skills')).toBeInViewport();
    
    // Click Contact button
    await page.getByRole('button', { name: 'Contact' }).click();
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('should display about section with timeline', async ({ page }) => {
    await page.locator('#about').scrollIntoViewIfNeeded();
    
    // Check section heading
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
    
    // Check personal introduction
    await expect(page.getByText(/Current AI Engineer at Gauntlet AI/)).toBeVisible();
    
    // Check journey timeline
    await expect(page.getByRole('heading', { name: 'My Journey' })).toBeVisible();
    
    // Check education section
    await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible();
    await expect(page.getByText('The Ohio State University')).toBeVisible();
    await expect(page.getByText('Georgia Institute of Technology')).toBeVisible();
  });

  test('should display projects section', async ({ page }) => {
    await page.locator('#projects').scrollIntoViewIfNeeded();
    
    // Check section heading
    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
    
    // Check that project cards are displayed
    const projectCards = page.locator('[href^="/projects/"]');
    await expect(projectCards).toHaveCount(3); // We have 3 featured projects
    
    // Check first project
    await expect(page.getByRole('heading', { name: 'AI-Powered Task Manager' })).toBeVisible();
  });

  test('should display skills section with grid layout', async ({ page }) => {
    await page.locator('#skills').scrollIntoViewIfNeeded();
    
    // Check section heading
    await expect(page.getByRole('heading', { name: 'Skills & Experience' })).toBeVisible();
    
    // Check professional experience
    await expect(page.getByRole('heading', { name: 'Professional Experience' })).toBeVisible();
    await expect(page.getByText('Gauntlet AI')).toBeVisible();
    await expect(page.getByText('Nationwide')).toBeVisible();
    
    // Check skills grid
    await expect(page.getByRole('heading', { name: 'Technical Skills' })).toBeVisible();
    const skillCards = page.locator('.grid > div').filter({ hasText: /Python|JavaScript|React|AWS/ });
    await expect(skillCards.first()).toBeVisible();
  });

  test('should have functional contact form', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    // Check section heading
    await expect(page.getByRole('heading', { name: "Let's Connect" })).toBeVisible();
    
    // Check contact cards
    await expect(page.getByText('Available for Opportunities')).toBeVisible();
    await expect(page.getByText('Ready to Innovate')).toBeVisible();
    
    // Check form fields
    await expect(page.getByPlaceholder('Your Name')).toBeVisible();
    await expect(page.getByPlaceholder('Your Email')).toBeVisible();
    await expect(page.getByPlaceholder('Your Message')).toBeVisible();
    
    // Check send button
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
  });

  test('should validate contact form inputs', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    // Try to submit empty form
    await page.getByRole('button', { name: 'Send Message' }).click();
    
    // Check for validation messages
    await expect(page.locator('input:invalid')).toHaveCount(2); // Name and email
    await expect(page.locator('textarea:invalid')).toHaveCount(1); // Message
    
    // Fill invalid email
    await page.getByPlaceholder('Your Name').fill('Test User');
    await page.getByPlaceholder('Your Email').fill('invalid-email');
    await page.getByPlaceholder('Your Message').fill('Test');
    await page.getByRole('button', { name: 'Send Message' }).click();
    
    // Email input should be invalid
    const emailInput = page.getByPlaceholder('Your Email');
    const isValid = await emailInput.evaluate((el: HTMLInputElement) => el.validity.valid);
    expect(isValid).toBe(false);
  });

  test('should have responsive design', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('.grid.grid-cols-1.md\\:grid-cols-2')).toBeVisible();
    
    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('.grid')).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    // On mobile, grids should be single column
    const heroButtons = page.locator('.flex.flex-wrap.gap-4').first();
    await expect(heroButtons).toBeVisible();
  });

  test('should load all images', async ({ page }) => {
    // Check headshot
    const headshot = page.locator('img[alt="Sadaqat Ali - Professional Headshot"]');
    await expect(headshot).toBeVisible();
    await expect(headshot).toHaveAttribute('src', '/images/headshot.jpg');
    
    // Check university logos
    const osuLogo = page.locator('img[alt="The Ohio State University"]');
    await expect(osuLogo).toBeVisible();
    
    const gtLogo = page.locator('img[alt="Georgia Institute of Technology"]');
    await expect(gtLogo).toBeVisible();
  });

  test('should have working external links', async ({ page }) => {
    // Check resume download link
    const resumeLink = page.getByRole('link', { name: 'Download Resume' });
    await expect(resumeLink).toHaveAttribute('href', '/SadaqatAli.pdf');
    await expect(resumeLink).toHaveAttribute('download', '');
    
    // Check project links exist
    const projectLinks = page.locator('[href^="/projects/"]');
    const count = await projectLinks.count();
    expect(count).toBeGreaterThan(0);
  });
});