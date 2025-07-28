import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Type for the request body
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate form data
function validateFormData(data: unknown): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  const formData = data as Record<string, unknown>;

  if (!formData.name || typeof formData.name !== "string" || formData.name.trim().length === 0) {
    errors.push("Name is required");
  }

  if (!formData.email || typeof formData.email !== "string" || !isValidEmail(formData.email)) {
    errors.push("Valid email is required");
  }

  if (!formData.message || typeof formData.message !== "string" || formData.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate form data
    const validation = validateFormData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: "Invalid form data", details: validation.errors },
        { status: 400 }
      );
    }

    const { name, email, message } = body as ContactFormData;

    // Send email using Resend
    try {
      const data = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>', // You'll need to verify your domain
        to: ['ali568osu@gmail.com'], // Your email address
        subject: `New Contact Form Submission from ${name}`,
        replyTo: email,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Message:</strong></p>
              <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #666; font-size: 14px;">
              Submitted on: ${new Date().toLocaleString()}
            </p>
          </div>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${name}
          Email: ${email}
          Message: ${message}
          
          Submitted on: ${new Date().toLocaleString()}
        `
      });

      console.log('Email sent successfully:', data);

      // Return success response
      return NextResponse.json(
        { 
          success: true, 
          message: "Thank you for your message. I'll get back to you soon!" 
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      
      // If email fails due to missing API key in development, still log it
      console.log('Contact form submission (email failed):', {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      });
      
      // Return success even if email fails (for development)
      return NextResponse.json(
        { 
          success: true, 
          message: "Thank you for your message. I'll get back to you soon!" 
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}