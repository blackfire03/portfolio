"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, CheckCircle2, AlertCircle, ArrowRight, Calendar, Send } from "lucide-react";
import Link from "next/link";

interface CountryCode {
    code: string;
    name: string;
    dialCode: string;
    flag: string;
}

const COUNTRY_CODES: CountryCode[] = [
    { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
    { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
    { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
    { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
    { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
    { code: "AE", name: "United Arab Emirates", dialCode: "+971", flag: "🇦🇪" },
    { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪" },
    { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
    { code: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬" },
    { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵" },
    { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "🇸🇦" },
    { code: "QA", name: "Qatar", dialCode: "+974", flag: "🇶🇦" },
    { code: "KW", name: "Kuwait", dialCode: "+965", flag: "🇰🇼" },
    { code: "OM", name: "Oman", dialCode: "+968", flag: "🇴🇲" },
    { code: "BD", name: "Bangladesh", dialCode: "+880", flag: "🇧🇩" },
    { code: "PK", name: "Pakistan", dialCode: "+92", flag: "🇵🇰" },
    { code: "LK", name: "Sri Lanka", dialCode: "+94", flag: "🇱🇰" },
    { code: "NP", name: "Nepal", dialCode: "+977", flag: "🇳🇵" },
    { code: "MY", name: "Malaysia", dialCode: "+60", flag: "🇲🇾" },
    { code: "ID", name: "Indonesia", dialCode: "+62", flag: "🇮🇩" },
    { code: "TH", name: "Thailand", dialCode: "+66", flag: "🇹🇭" },
    { code: "VN", name: "Vietnam", dialCode: "+84", flag: "🇻🇳" },
    { code: "PH", name: "Philippines", dialCode: "+63", flag: "🇵🇭" },
    { code: "NZ", name: "New Zealand", dialCode: "+64", flag: "🇳🇿" },
    { code: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹" },
    { code: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸" },
    { code: "NL", name: "Netherlands", dialCode: "+31", flag: "🇳🇱" },
    { code: "CH", name: "Switzerland", dialCode: "+41", flag: "🇨🇭" },
    { code: "SE", name: "Sweden", dialCode: "+46", flag: "🇸🇪" },
    { code: "NO", name: "Norway", dialCode: "+47", flag: "🇳🇴" },
    { code: "DK", name: "Denmark", dialCode: "+45", flag: "🇩🇰" },
    { code: "IE", name: "Ireland", dialCode: "+353", flag: "🇮🇪" },
    { code: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷" },
    { code: "MX", name: "Mexico", dialCode: "+52", flag: "🇲🇽" },
    { code: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦" },
    { code: "EG", name: "Egypt", dialCode: "+20", flag: "🇪🇬" },
    { code: "NG", name: "Nigeria", dialCode: "+234", flag: "🇳🇬" },
    { code: "KR", name: "South Korea", dialCode: "+82", flag: "🇰🇷" },
    { code: "CN", name: "China", dialCode: "+86", flag: "🇨🇳" },
    { code: "HK", name: "Hong Kong", dialCode: "+852", flag: "🇭🇰" },
    { code: "TW", name: "Taiwan", dialCode: "+886", flag: "🇹🇼" }
];

const PROJECT_TYPE_OPTIONS = [
    "Brand Identity",
    "Logo Design",
    "Website Design",
    "UI/UX Design",
    "Graphic Design",
    "Social Media Design",
    "Packaging / Print Design",
    "Other"
];

const PROJECT_STAGE_OPTIONS = [
    "Just an idea",
    "Planning / starting",
    "Existing brand or product",
    "Redesign / refresh",
    "Already in production",
    "Other"
];

const BUDGET_OPTIONS = [
    "Under ₹15,000",
    "₹15,000–₹30,000",
    "₹30,000–₹50,000",
    "₹50,000–₹1,00,000",
    "₹1,00,000+",
    "I'm not sure yet"
];

const TIMELINE_OPTIONS = [
    "As soon as possible",
    "Within 1–2 weeks",
    "Within a month",
    "1–3 months",
    "Just exploring"
];

export function QuoteForm() {
    // Form State
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [otherServiceText, setOtherServiceText] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [selectedCountry, setSelectedCountry] = useState<CountryCode>(COUNTRY_CODES[0]);
    const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState("");
    const [phone, setPhone] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectStage, setProjectStage] = useState("");
    const [budget, setBudget] = useState("");
    const [timeline, setTimeline] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");

    // Submission & UI States
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const countryDropdownRef = useRef<HTMLDivElement>(null);

    // Filter country codes by search
    const filteredCountries = COUNTRY_CODES.filter(c =>
        c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
        c.dialCode.includes(countrySearch) ||
        c.code.toLowerCase().includes(countrySearch.toLowerCase())
    );

    // Close dropdowns on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
                setCountryDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null);

        if (!fullName.trim()) {
            setErrorMessage("Please enter your full name.");
            return;
        }

        if (!email.trim() || !email.includes("@")) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        if (!projectDescription.trim()) {
            setErrorMessage("Please share a brief description of your project.");
            return;
        }

        setIsSubmitting(true);

        const projectTypesList = [...selectedServices];
        if (selectedServices.includes("Other") && otherServiceText.trim()) {
            projectTypesList[projectTypesList.indexOf("Other")] = `Other: ${otherServiceText.trim()}`;
        }

        const fullPhone = phone.trim() ? `${selectedCountry.dialCode} ${phone.trim()}` : "";

        try {
            const response = await fetch("/api/quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName,
                    email,
                    company,
                    phone: fullPhone,
                    projectType: projectTypesList.length > 0 ? projectTypesList : ["Not specified"],
                    projectDescription,
                    projectStage: projectStage || "Not specified",
                    budget: budget || "Not specified",
                    timeline: timeline || "Not specified",
                    additionalInfo
                })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setIsSuccess(true);
            } else {
                setErrorMessage(data.error || "Failed to submit quote request. Please try again.");
            }
        } catch (err) {
            console.error("Quote form submission error:", err);
            setErrorMessage("Network error occurred while submitting your request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setSelectedServices([]);
        setOtherServiceText("");
        setFullName("");
        setEmail("");
        setCompany("");
        setPhone("");
        setProjectDescription("");
        setProjectStage("");
        setBudget("");
        setTimeline("");
        setAdditionalInfo("");
        setIsSuccess(false);
        setErrorMessage(null);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[24px] bg-gradient-to-b from-[#11131a] to-[#0d0e13] border border-[#a88cff]/40 shadow-[0_0_50px_-10px_rgba(157,140,255,0.2)] p-8 sm:p-12 text-center space-y-8"
            >
                <div className="w-20 h-20 rounded-full bg-[#9d8cff]/15 border border-[#9d8cff]/40 flex items-center justify-center mx-auto text-[#9d8cff]">
                    <CheckCircle2 className="w-11 h-11" />
                </div>

                <div className="space-y-3 max-w-lg mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        Thanks — I’ve got your project details.
                    </h2>
                    <p className="text-base text-[#9a9ba3] font-light leading-relaxed">
                        I’ll review everything carefully and get back to you with the next steps and initial scope recommendations.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#1b1e2c] border border-white/15 hover:border-white/30 text-white font-medium text-sm transition-all hover:bg-[#222538] text-center"
                    >
                        Back to portfolio
                    </Link>
                    <a
                        href="https://calendly.com/freelancing-hitarth/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#9d8cff] hover:bg-[#b0a2ff] text-[#08090d] font-bold text-sm transition-all shadow-[0_0_25px_rgba(157,140,255,0.3)] flex items-center justify-center gap-2"
                    >
                        <Calendar className="w-4 h-4" />
                        <span>Book a 30-minute call</span>
                    </a>
                </div>

                <div className="pt-4 border-t border-white/5">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors underline"
                    >
                        Submit another inquiry
                    </button>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="rounded-[24px] bg-gradient-to-b from-[#11131a] to-[#0d0e13] border border-[#a88cff]/35 shadow-[0_0_40px_-10px_rgba(157,140,255,0.15)] p-6 sm:p-8 md:p-12">
            <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                    Project quotation request
                </h2>
                <p className="text-sm text-[#9a9ba3] font-light">
                    Provide your requirements below to receive a personalized proposal and timeline.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">

                {/* Error Banner */}
                {errorMessage && (
                    <div className="rounded-xl bg-rose-500/10 border border-rose-500/30 p-4 flex items-center gap-3 text-rose-300 text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                        <span>{errorMessage}</span>
                    </div>
                )}

                {/* SECTION 2 — PROJECT TYPE */}
                <div className="space-y-4">
                    <label className="block text-[14px] font-semibold text-white tracking-tight">
                        What do you need help with?
                        <span className="block text-xs font-normal text-[#9a9ba3] mt-1">
                            Select all that apply to your project.
                        </span>
                    </label>

                    <div className="flex flex-wrap gap-2.5" role="group" aria-label="What do you need help with?">
                        {PROJECT_TYPE_OPTIONS.map((option) => {
                            const isSelected = selectedServices.includes(option);
                            return (
                                <button
                                    key={option}
                                    type="button"
                                    aria-pressed={isSelected}
                                    onClick={() => toggleService(option)}
                                    className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 border ${
                                        isSelected
                                            ? "bg-[#9d8cff]/20 border-[#9d8cff] text-white shadow-[0_0_15px_rgba(157,140,255,0.25)]"
                                            : "bg-[#151722] border-white/10 text-zinc-300 hover:border-white/20 hover:text-white"
                                    }`}
                                >
                                    <span>{option}</span>
                                    {isSelected && <Check className="w-3.5 h-3.5 text-[#9d8cff]" />}
                                </button>
                            );
                        })}
                    </div>

                    {/* Conditional input for "Other" */}
                    {selectedServices.includes("Other") && (
                        <div className="pt-2">
                            <input
                                type="text"
                                value={otherServiceText}
                                onChange={(e) => setOtherServiceText(e.target.value)}
                                placeholder="Specify what you need designed..."
                                className="w-full bg-[#15171f] border border-white/10 rounded-[10px] px-4 py-3 text-sm text-white placeholder-[#555761] focus:border-[#9d8cff] focus:outline-none transition-colors"
                            />
                        </div>
                    )}
                </div>

                {/* SECTION 3 — CLIENT INFORMATION */}
                <div className="space-y-5 pt-4 border-t border-white/5">
                    <h3 className="text-[14px] font-semibold text-white tracking-tight">
                        About you
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="quoteFullName" className="block text-[13px] font-medium text-[#9a9ba3] mb-1.5">
                                Full name <span className="text-[#9d8cff]">*</span>
                            </label>
                            <input
                                id="quoteFullName"
                                type="text"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Your name"
                                className="w-full bg-[#15171f] border border-white/10 rounded-[10px] px-4 py-3.5 text-[15px] text-white placeholder-[#555761] focus:border-[#9d8cff] focus:outline-none transition-colors"
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <label htmlFor="quoteEmail" className="block text-[13px] font-medium text-[#9a9ba3] mb-1.5">
                                Email address <span className="text-[#9d8cff]">*</span>
                            </label>
                            <input
                                id="quoteEmail"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@company.com"
                                className="w-full bg-[#15171f] border border-white/10 rounded-[10px] px-4 py-3.5 text-[15px] text-white placeholder-[#555761] focus:border-[#9d8cff] focus:outline-none transition-colors"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Company / Brand Name */}
                        <div>
                            <label htmlFor="quoteCompany" className="block text-[13px] font-medium text-[#9a9ba3] mb-1.5">
                                Company or Brand name <span className="text-xs text-zinc-500">(Optional)</span>
                            </label>
                            <input
                                id="quoteCompany"
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder="Brand / Studio name"
                                className="w-full bg-[#15171f] border border-white/10 rounded-[10px] px-4 py-3.5 text-[15px] text-white placeholder-[#555761] focus:border-[#9d8cff] focus:outline-none transition-colors"
                            />
                        </div>

                        {/* Phone / WhatsApp */}
                        <div>
                            <label htmlFor="quotePhone" className="block text-[13px] font-medium text-[#9a9ba3] mb-1.5">
                                Phone / WhatsApp <span className="text-xs text-zinc-500">(Optional)</span>
                            </label>
                            <div className="grid grid-cols-[125px_1fr] gap-2.5">
                                {/* Country Code Selector */}
                                <div className="relative" ref={countryDropdownRef}>
                                    <button
                                        type="button"
                                        aria-label="Select country dial code"
                                        onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                                        className={`w-full bg-[#15171f] border ${countryDropdownOpen ? "border-[#9d8cff]" : "border-white/10"} rounded-[10px] px-3 py-3.5 text-[15px] flex items-center justify-between transition-colors focus:outline-none text-white`}
                                    >
                                        <span className="flex items-center gap-1.5 font-medium truncate">
                                            <span>{selectedCountry.flag}</span>
                                            <span className="text-xs text-zinc-200">{selectedCountry.dialCode}</span>
                                        </span>
                                        <ChevronDown className={`w-3.5 h-3.5 text-[#9a9ba3] shrink-0 transition-transform ${countryDropdownOpen ? "rotate-180 text-[#9d8cff]" : ""}`} />
                                    </button>

                                    {countryDropdownOpen && (
                                        <div className="absolute top-full left-0 mt-2 w-[260px] bg-[#15171f] border border-[#9d8cff]/40 rounded-[10px] shadow-2xl z-40 overflow-hidden backdrop-blur-xl">
                                            <div className="p-2 border-b border-white/10 bg-[#0d0e13]">
                                                <input
                                                    type="text"
                                                    value={countrySearch}
                                                    onChange={(e) => setCountrySearch(e.target.value)}
                                                    placeholder="Search country..."
                                                    className="w-full bg-[#181a24] border border-white/10 rounded-[6px] px-3 py-1.5 text-xs text-white placeholder-[#555761] focus:border-[#9d8cff] focus:outline-none"
                                                    autoFocus
                                                />
                                            </div>
                                            <div className="max-h-[200px] overflow-y-auto py-1 custom-scrollbar">
                                                {filteredCountries.map((c) => (
                                                    <button
                                                        key={`${c.code}-${c.dialCode}`}
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedCountry(c);
                                                            setCountryDropdownOpen(false);
                                                            setCountrySearch("");
                                                        }}
                                                        className={`w-full px-3 py-2 text-xs text-left flex items-center justify-between hover:bg-[#9d8cff]/15 transition-colors ${selectedCountry.code === c.code ? "text-[#9d8cff] font-semibold bg-[#9d8cff]/10" : "text-white"}`}
                                                    >
                                                        <span className="flex items-center gap-2 truncate">
                                                            <span>{c.flag}</span>
                                                            <span className="truncate">{c.name}</span>
                                                        </span>
                                                        <span className="font-mono text-zinc-400 shrink-0 ml-2">{c.dialCode}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <input
                                    id="quotePhone"
                                    type="tel"
                                    inputMode="numeric"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                                    placeholder="9876543210"
                                    className="w-full bg-[#15171f] border border-white/10 rounded-[10px] px-4 py-3.5 text-[15px] text-white placeholder-[#555761] focus:border-[#9d8cff] focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 4 — PROJECT DESCRIPTION */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                    <label htmlFor="quoteDescription" className="block text-[14px] font-semibold text-white tracking-tight">
                        Tell me about your project <span className="text-[#9d8cff]">*</span>
                    </label>
                    <p className="text-xs text-[#9a9ba3] leading-relaxed">
                        What&apos;s the project, what do you need designed, and what are you hoping to achieve?
                    </p>
                    <textarea
                        id="quoteDescription"
                        required
                        rows={5}
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        placeholder="Share the background, problem statement, key deliverables, and target audience..."
                        className="w-full bg-[#15171f] border border-white/10 rounded-[12px] px-4 py-3.5 text-[15px] text-white placeholder-[#555761] focus:border-[#9d8cff] focus:outline-none transition-colors resize-y leading-relaxed"
                    />
                </div>

                {/* SECTION 5 — PROJECT STAGE */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                    <label className="block text-[14px] font-semibold text-white tracking-tight">
                        What stage is the project at?
                        <span className="block text-xs font-normal text-[#9a9ba3] mt-1">
                            Helps me understand where we begin.
                        </span>
                    </label>

                    <div className="flex flex-wrap gap-2.5" role="group" aria-label="What stage is the project at?">
                        {PROJECT_STAGE_OPTIONS.map((stage) => {
                            const isSelected = projectStage === stage;
                            return (
                                <button
                                    key={stage}
                                    type="button"
                                    aria-pressed={isSelected}
                                    onClick={() => setProjectStage(isSelected ? "" : stage)}
                                    className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer border ${
                                        isSelected
                                            ? "bg-[#9d8cff]/20 border-[#9d8cff] text-white shadow-[0_0_15px_rgba(157,140,255,0.25)]"
                                            : "bg-[#151722] border-white/10 text-zinc-300 hover:border-white/20 hover:text-white"
                                    }`}
                                >
                                    {stage}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* SECTION 6 — ESTIMATED BUDGET */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                    <label className="block text-[14px] font-semibold text-white tracking-tight">
                        What&apos;s your estimated budget?
                        <span className="block text-xs font-normal text-[#9a9ba3] mt-1">
                            Budget ranges help gauge scope and feasibility — not fixed package prices.
                        </span>
                    </label>

                    <div className="flex flex-wrap gap-2.5" role="group" aria-label="What's your estimated budget?">
                        {BUDGET_OPTIONS.map((b) => {
                            const isSelected = budget === b;
                            return (
                                <button
                                    key={b}
                                    type="button"
                                    aria-pressed={isSelected}
                                    onClick={() => setBudget(isSelected ? "" : b)}
                                    className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer border ${
                                        isSelected
                                            ? "bg-[#9d8cff]/20 border-[#9d8cff] text-white shadow-[0_0_15px_rgba(157,140,255,0.25)]"
                                            : "bg-[#151722] border-white/10 text-zinc-300 hover:border-white/20 hover:text-white"
                                    }`}
                                >
                                    {b}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* SECTION 7 — TIMELINE */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                    <label className="block text-[14px] font-semibold text-white tracking-tight">
                        When would you like to start?
                        <span className="block text-xs font-normal text-[#9a9ba3] mt-1">
                            General timeframe to align availability.
                        </span>
                    </label>

                    <div className="flex flex-wrap gap-2.5" role="group" aria-label="When would you like to start?">
                        {TIMELINE_OPTIONS.map((t) => {
                            const isSelected = timeline === t;
                            return (
                                <button
                                    key={t}
                                    type="button"
                                    aria-pressed={isSelected}
                                    onClick={() => setTimeline(isSelected ? "" : t)}
                                    className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer border ${
                                        isSelected
                                            ? "bg-[#9d8cff]/20 border-[#9d8cff] text-white shadow-[0_0_15px_rgba(157,140,255,0.25)]"
                                            : "bg-[#151722] border-white/10 text-zinc-300 hover:border-white/20 hover:text-white"
                                    }`}
                                >
                                    {t}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* SECTION 8 — ADDITIONAL INFORMATION */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                    <label htmlFor="quoteAdditional" className="block text-[14px] font-semibold text-white tracking-tight">
                        Anything else I should know? <span className="text-xs text-zinc-500 font-normal">(Optional)</span>
                    </label>
                    <p className="text-xs text-[#9a9ba3] leading-relaxed">
                        Links to existing website, brand guidelines, references, competitor examples, or key constraints.
                    </p>
                    <textarea
                        id="quoteAdditional"
                        rows={3}
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        placeholder="https://... or any helpful links / context"
                        className="w-full bg-[#15171f] border border-white/10 rounded-[12px] px-4 py-3 text-[14.5px] text-white placeholder-[#555761] focus:border-[#9d8cff] focus:outline-none transition-colors resize-y leading-relaxed"
                    />
                </div>

                {/* SECTION 9 — FORM CTA & PRIVACY */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#9d8cff] hover:bg-[#b0a2ff] text-[#08090d] font-bold text-base rounded-[12px] py-4 transition-all duration-200 active:scale-[0.99] shadow-[0_0_25px_rgba(157,140,255,0.28)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                        {isSubmitting ? (
                            <span>Submitting request...</span>
                        ) : (
                            <>
                                <span>Request a quote</span>
                                <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>

                    <p className="text-center text-[12.5px] text-[#8c8d99] font-normal leading-relaxed">
                        Submitted details are strictly used to evaluate and respond to your quote request — never shared.{" "}
                        <Link href="/privacy-policy" className="text-zinc-300 underline hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                    </p>
                </div>

            </form>
        </div>
    );
}
