import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display main elements', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Check header
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByText('Sadaqat.AI')).toBeVisible();
    
    // Check navigation links
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Skills & Experience' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact', exact: true })).toBeVisible();
    
    // Check hero section
    await expect(page.getByRole('heading', { name: 'Sadaqat Ali' })).toBeVisible();
    await expect(page.getByText('AI-First Developer & Problem Solver')).toBeVisible();
    
    // Check CTA buttons
    await expect(page.getByRole('link', { name: 'View Projects' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact Me' })).toBeVisible();
    
    // Check footer
    await expect(page.locator('footer')).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Test mobile menu on smaller viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Mobile menu should be hidden initially
    const mobileMenu = page.locator('nav > div').nth(1);
    await expect(mobileMenu).toHaveClass(/max-h-0/);
    
    // Click hamburger menu
    await page.locator('button[type="button"]').click();
    
    // Mobile menu should be visible
    await expect(mobileMenu).toHaveClass(/max-h-64/);
  });
});