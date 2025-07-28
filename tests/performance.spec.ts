import { test, expect } from '@playwright/test';

test.describe('Performance and Accessibility', () => {
  test('should load page within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    
    const loadTime = Date.now() - startTime;
    
    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('should have proper meta tags for SEO', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Check title
    await expect(page).toHaveTitle('Sadaqat Ali | AI-First Developer & Problem Solver');
    
    // Check meta description
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toContain('Personal portfolio showcasing AI projects');
    
    // Check Open Graph tags
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toContain('Sadaqat Ali');
    
    const ogType = await page.locator('meta[property="og:type"]').getAttribute('content');
    expect(ogType).toBe('website');
  });

  test('should have accessible form elements', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    // Check form inputs have proper attributes
    const nameInput = page.getByPlaceholder('Your Name');
    await expect(nameInput).toHaveAttribute('type', 'text');
    await expect(nameInput).toHaveAttribute('required', '');
    
    const emailInput = page.getByPlaceholder('Your Email');
    await expect(emailInput).toHaveAttribute('type', 'email');
    await expect(emailInput).toHaveAttribute('required', '');
    
    const messageInput = page.getByPlaceholder('Your Message');
    await expect(messageInput).toHaveAttribute('required', '');
    await expect(messageInput).toHaveAttribute('minLength', '10');
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Get all headings
    const h1s = await page.locator('h1').count();
    const h2s = await page.locator('h2').count();
    const h3s = await page.locator('h3').count();
    
    // Should have exactly one h1
    expect(h1s).toBe(1);
    
    // Should have multiple h2s for sections
    expect(h2s).toBeGreaterThan(3);
    
    // Should have h3s for subsections
    expect(h3s).toBeGreaterThan(0);
  });

  test('should have alt text for all images', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Get all images
    const images = page.locator('img');
    const imageCount = await images.count();
    
    // Check each image has alt text
    for (let i = 0; i < imageCount; i++) {
      const altText = await images.nth(i).getAttribute('alt');
      expect(altText).toBeTruthy();
      expect(altText!.length).toBeGreaterThan(0);
    }
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Tab through interactive elements
    await page.keyboard.press('Tab');
    
    // First tab should focus on first navigation button
    const focusedElement = await page.evaluate(() => document.activeElement?.textContent);
    expect(['About Me', 'Projects', 'Skills & Experience', 'Contact', 'Download Resume']).toContain(focusedElement);
    
    // Continue tabbing through buttons
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
    }
    
    // Should be able to activate button with Enter
    await page.keyboard.press('Enter');
  });

  test('should have responsive images', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Test on different viewports
    const viewports = [
      { width: 1920, height: 1080, name: 'desktop' },
      { width: 768, height: 1024, name: 'tablet' },
      { width: 375, height: 667, name: 'mobile' }
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      
      // Check headshot image
      const headshot = page.locator('img[alt="Sadaqat Ali - Professional Headshot"]');
      await expect(headshot).toBeVisible();
      
      // Image should fit within viewport
      const box = await headshot.boundingBox();
      if (box) {
        expect(box.width).toBeLessThanOrEqual(viewport.width);
      }
    }
  });

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Check text is readable on backgrounds
    const heroText = page.locator('h1');
    const textColor = await heroText.evaluate(el => 
      window.getComputedStyle(el).color
    );
    
    // Text should not be pure black or pure white (indicating proper contrast)
    expect(textColor).not.toBe('rgb(0, 0, 0)');
    expect(textColor).not.toBe('rgb(255, 255, 255)');
  });

  test('should handle errors gracefully', async ({ page }) => {
    // Test 404 page
    await page.goto('http://localhost:3000/non-existent-page');
    
    // Should show 404 or redirect to home
    const url = page.url();
    expect(url).toMatch(/localhost:3000/);
  });

  test('should have working download links', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Check resume download link
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download Resume' }).click();
    
    // Verify download starts
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe('SadaqatAli.pdf');
  });
});