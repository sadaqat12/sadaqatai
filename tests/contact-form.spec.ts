import { test, expect } from '@playwright/test';

test.describe('Contact Form Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.locator('#contact').scrollIntoViewIfNeeded();
  });

  test('should successfully submit contact form', async ({ page }) => {
    // Fill out the form
    await page.getByPlaceholder('Your Name').fill('Test User');
    await page.getByPlaceholder('Your Email').fill('test@example.com');
    await page.getByPlaceholder('Your Message').fill('This is a test message for the automated test suite.');
    
    // Intercept the API call
    const responsePromise = page.waitForResponse(response => 
      response.url().includes('/api/contact') && response.status() === 200
    );
    
    // Submit the form
    await page.getByRole('button', { name: 'Send Message' }).click();
    
    // Wait for the response
    const response = await responsePromise;
    expect(response.status()).toBe(200);
    
    // Check for success message
    await expect(page.getByText("Thank you for your message. I'll get back to you soon!")).toBeVisible();
    
    // Verify form is reset
    await expect(page.getByPlaceholder('Your Name')).toHaveValue('');
    await expect(page.getByPlaceholder('Your Email')).toHaveValue('');
    await expect(page.getByPlaceholder('Your Message')).toHaveValue('');
  });

  test('should show validation errors for empty fields', async ({ page }) => {
    // Click submit without filling form
    await page.getByRole('button', { name: 'Send Message' }).click();
    
    // Check HTML5 validation
    const nameInput = page.getByPlaceholder('Your Name');
    const emailInput = page.getByPlaceholder('Your Email');
    const messageInput = page.getByPlaceholder('Your Message');
    
    // Check that validation is triggered
    await expect(nameInput).toHaveAttribute('required', '');
    await expect(emailInput).toHaveAttribute('required', '');
    await expect(messageInput).toHaveAttribute('required', '');
  });

  test('should validate email format', async ({ page }) => {
    // Fill form with invalid email
    await page.getByPlaceholder('Your Name').fill('Test User');
    await page.getByPlaceholder('Your Email').fill('invalid-email-format');
    await page.getByPlaceholder('Your Message').fill('This is a test message with invalid email.');
    
    // Try to submit
    await page.getByRole('button', { name: 'Send Message' }).click();
    
    // Email input should be invalid
    const emailInput = page.getByPlaceholder('Your Email');
    const isValid = await emailInput.evaluate((el: HTMLInputElement) => el.validity.valid);
    expect(isValid).toBe(false);
  });

  test('should validate minimum message length', async ({ page }) => {
    // Fill form with short message
    await page.getByPlaceholder('Your Name').fill('Test User');
    await page.getByPlaceholder('Your Email').fill('test@example.com');
    await page.getByPlaceholder('Your Message').fill('Short');
    
    // Message should be too short (minLength is 10)
    const messageInput = page.getByPlaceholder('Your Message');
    await expect(messageInput).toHaveAttribute('minLength', '10');
  });

  test('should disable submit button while sending', async ({ page }) => {
    // Fill out the form
    await page.getByPlaceholder('Your Name').fill('Test User');
    await page.getByPlaceholder('Your Email').fill('test@example.com');
    await page.getByPlaceholder('Your Message').fill('This is a test message for checking button state.');
    
    // Set up request interception to delay response
    await page.route('**/api/contact', async route => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Test success' })
      });
    });
    
    // Submit the form
    const submitButton = page.getByRole('button', { name: 'Send Message' });
    await submitButton.click();
    
    // Button should show "Sending..."
    await expect(submitButton).toContainText('Sending...');
    await expect(submitButton).toBeDisabled();
    
    // Wait for it to complete
    await expect(submitButton).toContainText('Send Message');
    await expect(submitButton).toBeEnabled();
  });

  test('should handle API errors gracefully', async ({ page }) => {
    // Fill out the form
    await page.getByPlaceholder('Your Name').fill('Test User');
    await page.getByPlaceholder('Your Email').fill('test@example.com');
    await page.getByPlaceholder('Your Message').fill('This is a test message for error handling.');
    
    // Mock API error
    await page.route('**/api/contact', route => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal server error' })
      });
    });
    
    // Submit the form
    await page.getByRole('button', { name: 'Send Message' }).click();
    
    // Should show error message
    await expect(page.getByText('Something went wrong. Please try again.')).toBeVisible();
    
    // Form should not be reset on error
    await expect(page.getByPlaceholder('Your Name')).toHaveValue('Test User');
    await expect(page.getByPlaceholder('Your Email')).toHaveValue('test@example.com');
  });

  test('should display contact information cards', async ({ page }) => {
    // Check all contact info cards are visible
    await expect(page.getByText('Available for Opportunities')).toBeVisible();
    await expect(page.getByText('Ready to Innovate')).toBeVisible();
    await expect(page.getByText('Email')).toBeVisible();
    await expect(page.getByText('ali568osu@gmail.com')).toBeVisible();
    await expect(page.getByText('Location')).toBeVisible();
    await expect(page.getByText('Columbus, Ohio')).toBeVisible();
    await expect(page.getByText('LinkedIn')).toBeVisible();
    await expect(page.getByText('GitHub')).toBeVisible();
  });
});