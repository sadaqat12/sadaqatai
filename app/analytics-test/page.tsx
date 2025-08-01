"use client";

import { useAnalytics } from "@/lib/hooks/useAnalytics";

export default function AnalyticsTest() {
  const { trackEvent } = useAnalytics();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Analytics Test Page</h1>
      
      <div className="space-y-4">
        <button
          onClick={() => trackEvent("test_button_click", { button: "test1" })}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Test Event 1
        </button>
        
        <button
          onClick={() => trackEvent("test_button_click", { button: "test2" })}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Test Event 2
        </button>
        
        <p className="mt-8 text-gray-600">
          Click the buttons to test analytics tracking. 
          Check your Vercel Analytics dashboard to see the events.
        </p>
      </div>
    </div>
  );
}