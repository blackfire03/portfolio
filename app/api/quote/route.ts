import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            fullName,
            email,
            phone,
            company,
            projectType,
            projectDescription,
            projectStage,
            budget,
            timeline,
            additionalInfo
        } = body;

        // Basic server-side validation
        if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
            return NextResponse.json(
                { success: false, error: "Full name is required" },
                { status: 400 }
            );
        }

        if (!email || typeof email !== "string" || !email.includes("@")) {
            return NextResponse.json(
                { success: false, error: "A valid email address is required" },
                { status: 400 }
            );
        }

        if (!projectDescription || typeof projectDescription !== "string" || !projectDescription.trim()) {
            return NextResponse.json(
                { success: false, error: "Project description is required" },
                { status: 400 }
            );
        }

        const quotePayload = {
            timestamp: new Date().toISOString(),
            fullName: fullName.trim(),
            email: email.trim(),
            phone: phone ? String(phone).trim() : "",
            company: company ? String(company).trim() : "",
            projectType: Array.isArray(projectType) ? projectType.join(", ") : (projectType || "Not specified"),
            projectDescription: projectDescription.trim(),
            projectStage: projectStage || "Not specified",
            budget: budget || "Not specified",
            timeline: timeline || "Not specified",
            additionalInfo: additionalInfo ? String(additionalInfo).trim() : "",
            source: "Website — Request a Quote",
            status: "New"
        };

        // Separate Google Sheets Webhook URL for Quote Requests
        // Distinct from process.env.GOOGLE_SHEET_WEBHOOK_URL (which is for general contact)
        const quoteWebhookUrl = process.env.GOOGLE_SHEET_QUOTE_WEBHOOK_URL;

        if (quoteWebhookUrl) {
            try {
                await fetch(quoteWebhookUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(quotePayload)
                });
            } catch (err) {
                console.error("Quote Google Apps Script webhook delivery error:", err);
            }
        } else {
            console.log(
                "GOOGLE_SHEET_QUOTE_WEBHOOK_URL not configured. Quote request received and processed locally:",
                quotePayload
            );
        }

        return NextResponse.json({
            success: true,
            message: "Quote request received successfully"
        });
    } catch (error) {
        console.error("Quote API Handler Error:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
