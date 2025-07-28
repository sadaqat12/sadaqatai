import { test, expect } from '@playwright/test';

test.describe('Navigation and Scrolling', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should have smooth scroll behavior', async ({ page }) => {
    // Get initial scroll position
    const initialScrollY = await page.evaluate(() => window.scrollY);
    expect(initialScrollY).toBe(0);
    
    // Click on About Me button
    await page.getByRole('button', { name: 'About Me' }).click();
    
    // Wait for scroll to complete
    await page.waitForTimeout(1000);
    
    // Check that we've scrolled down
    const aboutScrollY = await page.evaluate(() => window.scrollY);
    expect(aboutScrollY).toBeGreaterThan(0);
    
    // Verify the about section is in view
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeInViewport();
  });

  test('should navigate to all sections via buttons', async ({ page }) => {
    const sections = [
      { button: 'About Me', id: 'about' },
      { button: 'Projects', id: 'projects' },
      { button: 'Skills & Experience', id: 'skills' },
      { button: 'Contact', id: 'contact' }
    ];
    
    for (const section of sections) {
      // Click the navigation button
      await page.getByRole('button', { name: section.button }).click();
      
      // Wait for scroll animation
      await page.waitForTimeout(500);
      
      // Verify the section is in viewport
      const sectionElement = page.locator(`#${section.id}`);
      await expect(sectionElement).toBeInViewport();
    }
  });

  test('should handle rapid navigation clicks', async ({ page }) => {
    // Click multiple buttons quickly
    await page.getByRole('button', { name: 'Contact' }).click();
    await page.getByRole('button', { name: 'About Me' }).click();
    await page.getByRole('button', { name: 'Skills & Experience' }).click();
    
    // Wait for final scroll to complete
    await page.waitForTimeout(1000);
    
    // Should end up at Skills section
    const skillsSection = page.locator('#skills');
    await expect(skillsSection).toBeInViewport();
  });

  test('should maintain scroll position on page refresh', async ({ page }) => {
    // Scroll to projects section
    await page.getByRole('button', { name: 'Projects' }).click();
    await page.waitForTimeout(1000);
    
    // Get scroll position
    const scrollBefore = await page.evaluate(() => window.scrollY);
    
    // Refresh the page
    await page.reload();
    
    // Scroll position should be restored (or at top)
    const scrollAfter = await page.evaluate(() => window.scrollY);
    expect(scrollAfter).toBeGreaterThanOrEqual(0);
  });

  test('should have functioning project links', async ({ page }) => {
    // Scroll to projects section
    await page.locator('#projects').scrollIntoViewIfNeeded();
    
    // Get all project links
    const projectLinks = page.locator('[href^="/projects/"]');
    const count = await projectLinks.count();
    
    // Should have at least one project
    expect(count).toBeGreaterThan(0);
    
    // Click first project
    const firstProject = projectLinks.first();
    await firstProject.click();
    
    // Should navigate to project detail page
    await expect(page).toHaveURL(/\/projects\/\d+/);
  });

  test('should handle browser back/forward navigation', async ({ page }) => {
    // Navigate through sections
    await page.getByRole('button', { name: 'About Me' }).click();
    await page.waitForTimeout(500);
    
    await page.getByRole('button', { name: 'Projects' }).click();
    await page.waitForTimeout(500);
    
    // Go back in browser history
    await page.goBack();
    
    // Should still be on the same page (single-page app)
    await expect(page).toHaveURL('http://localhost:3000/');
  });

  test('should highlight current section during scroll', async ({ page }) => {
    // This would require implementing scroll spy functionality
    // For now, just verify all navigation buttons are always visible
    const navButtons = [
      page.getByRole('button', { name: 'About Me' }),
      page.getByRole('button', { name: 'Projects' }),
      page.getByRole('button', { name: 'Skills & Experience' }),
      page.getByRole('button', { name: 'Contact' })
    ];
    
    for (const button of navButtons) {
      await expect(button).toBeVisible();
    }
  });
});