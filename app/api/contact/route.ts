import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, countryCode, mobile, workType } = body;

        const googleSheetWebhookUrl = 
            process.env.GOOGLE_SHEET_WEBHOOK_URL || 
            "https://script.google.com/macros/s/AKfycbyS48eoy7VZVi0kr08T4tLVOJz235Df-t4cTBiNQuosPFr8AoPM9nok5VcPEOIu3gEZ/exec";

        // Send submission to Google Apps Script Webhook (Appends to Google Sheet + sends email notification)
        try {
            await fetch(googleSheetWebhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    countryCode,
                    mobile,
                    workType,
                    timestamp: new Date().toISOString()
                })
            });
        } catch (err) {
            console.error("Google Apps Script webhook delivery error:", err);
        }

        return NextResponse.json({ 
            success: true, 
            message: "Submission processed successfully" 
        });
    } catch (error) {
        console.error("Contact API Handler Error:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" }, 
            { status: 500 }
        );
    }
}
