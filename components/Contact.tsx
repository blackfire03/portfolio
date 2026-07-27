"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Clock, ChevronDown, Check, CheckCircle2, AlertCircle, X } from "lucide-react";

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

export function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedCountry, setSelectedCountry] = useState<CountryCode>(COUNTRY_CODES[0]);
    const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState("");
    const [mobile, setMobile] = useState("");
    const [workType, setWorkType] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalState, setModalState] = useState<"none" | "success" | "error">("none");

    const dropdownRef = useRef<HTMLDivElement>(null);
    const countryDropdownRef = useRef<HTMLDivElement>(null);

    const workOptions = ["Designing Work", "Development Work"];

    // Filter country codes by search
    const filteredCountries = COUNTRY_CODES.filter(c => 
        c.name.toLowerCase().includes(countrySearch.toLowerCase()) || 
        c.dialCode.includes(countrySearch) ||
        c.code.toLowerCase().includes(countrySearch.toLowerCase())
    );

    // Close dropdowns on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
            if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
                setCountryDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: fullName,
                    email,
                    countryCode: selectedCountry.dialCode,
                    mobile,
                    workType: workType || "Not selected"
                })
            });

            if (response.ok) {
                const resData = await response.json();
                if (resData.success) {
                    setModalState("success");
                    setFullName("");
                    setEmail("");
                    setMobile("");
                    setWorkType("");
                } else {
                    setModalState("error");
                }
            } else {
                setModalState("error");
            }
        } catch (error) {
            console.error("Contact form error:", error);
            setModalState("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative z-20 bg-[#08090d] py-24 md:py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20 text-left"
                >
                    <span className="block text-[14px] font-semibold text-[#9d8cff] tracking-[0.14em] uppercase mb-3">
                        Get in touch
                    </span>
                    <h2 className="text-4xl md:text-[56px] font-extrabold text-white tracking-[-0.02em] leading-tight mb-4">
                        Contact Form
                    </h2>
                    <p className="text-lg md:text-[20px] text-[#9a9ba3] font-light max-w-2xl leading-relaxed">
                        Have a project in mind? Tell me a bit about it and I'll get back to you soon.
                    </p>
                </motion.div>

                {/* Two-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-[64px] items-start">
                    
                    {/* LEFT Column: Editorial Note Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Eyebrow label */}
                        <span className="block text-[13px] font-semibold text-[#6f707a] tracking-[0.12em] uppercase">
                            Why reach out
                        </span>

                        {/* Bold Quote Line */}
                        <h3 className="text-2xl md:text-[32px] font-semibold text-white leading-[1.35]">
                            Every great project{" "}
                            <span className="text-[#9d8cff]">starts with a simple message.</span>
                        </h3>

                        {/* Body Paragraph */}
                        <p className="text-[16px] text-[#9a9ba3] leading-[1.7] max-w-[420px] font-normal">
                            Whether you're starting from zero — a complete brand identity paired with a website designed and developed end-to-end — or you already have a brand identity and a content plan and just need it visualised, this is where it begins. You bring the content and direction; turning it into scroll-stopping single posts or carousels is on me.
                        </p>

                        {/* Two Small Info Rows */}
                        <div className="space-y-4 pt-2">
                            {/* Row 1: Reply Time */}
                            <div className="flex items-center gap-3.5">
                                <div className="w-[34px] h-[34px] rounded-[8px] bg-[#181a22] border border-[#252836] flex items-center justify-center shrink-0">
                                    <Mail className="w-4 h-4 text-[#9d8cff]" />
                                </div>
                                <p className="text-[14.5px] text-[#9a9ba3] leading-snug">
                                    Will reply in <strong className="font-bold text-white">2 hours</strong>
                                </p>
                            </div>

                            {/* Row 2: Work Availability */}
                            <div className="flex items-center gap-3.5">
                                <div className="w-[34px] h-[34px] rounded-[8px] bg-[#181a22] border border-[#252836] flex items-center justify-center shrink-0">
                                    <Clock className="w-4 h-4 text-[#9d8cff]" />
                                </div>
                                <p className="text-[14.5px] text-[#9a9ba3] leading-snug">
                                    Open to <strong className="font-bold text-white">freelance & contractual</strong> work
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT Column: Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="rounded-[20px] bg-gradient-to-b from-[#11131a] to-[#0d0e13] border border-[#a88cff]/35 shadow-[0_0_40px_-10px_rgba(157,140,255,0.15)] p-7 md:p-[44px]">
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                
                                {/* Top Row: Full Name & Email Address */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullName" className="block text-[13px] font-semibold text-[#9a9ba3] mb-[9px]">
                                            Full name
                                        </label>
                                        <input
                                            id="fullName"
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
                                        <label htmlFor="email" className="block text-[13px] font-semibold text-[#9a9ba3] mb-[9px]">
                                            Email address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@email.com"
                                            className="w-full bg-[#15171f] border border-white/10 rounded-[10px] px-4 py-3.5 text-[15px] text-white placeholder-[#555761] focus:border-[#9d8cff] focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Mobile Number with Country Code Dropdown */}
                                <div>
                                    <label className="block text-[13px] font-semibold text-[#9a9ba3] mb-[9px]">
                                        Mobile number
                                    </label>
                                    <div className="grid grid-cols-[130px_1fr] sm:grid-cols-[150px_1fr] gap-3">
                                        {/* Country Code Dropdown */}
                                        <div className="relative" ref={countryDropdownRef}>
                                            <button
                                                type="button"
                                                onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                                                className={`w-full bg-[#15171f] border ${countryDropdownOpen ? "border-[#9d8cff]" : "border-white/10"} rounded-[10px] px-3 sm:px-3.5 py-3.5 text-[15px] flex items-center justify-between transition-colors focus:outline-none text-white`}
                                            >
                                                <span className="flex items-center gap-2 font-medium truncate">
                                                    <span className="text-base leading-none">{selectedCountry.flag}</span>
                                                    <span className="text-sm text-zinc-200">{selectedCountry.dialCode}</span>
                                                </span>
                                                <ChevronDown className={`w-4 h-4 text-[#9a9ba3] shrink-0 transition-transform duration-200 ${countryDropdownOpen ? "rotate-180 text-[#9d8cff]" : ""}`} />
                                            </button>

                                            {/* Country Options Popup */}
                                            {countryDropdownOpen && (
                                                <div className="absolute top-full left-0 mt-2 w-[260px] sm:w-[280px] bg-[#15171f] border border-[#9d8cff]/40 rounded-[10px] shadow-2xl z-40 overflow-hidden backdrop-blur-xl">
                                                    {/* Search Bar */}
                                                    <div className="p-2 border-b border-white/10 bg-[#0d0e13]">
                                                        <input
                                                            type="text"
                                                            value={countrySearch}
                                                            onChange={(e) => setCountrySearch(e.target.value)}
                                                            placeholder="Search country or code..."
                                                            className="w-full bg-[#181a24] border border-white/10 rounded-[6px] px-3 py-1.5 text-xs text-white placeholder-[#555761] focus:border-[#9d8cff] focus:outline-none"
                                                            autoFocus
                                                        />
                                                    </div>

                                                    {/* Scrollable List */}
                                                    <div className="max-h-[220px] overflow-y-auto py-1 custom-scrollbar">
                                                        {filteredCountries.length > 0 ? (
                                                            filteredCountries.map((c) => (
                                                                <button
                                                                    key={`${c.code}-${c.dialCode}`}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setSelectedCountry(c);
                                                                        setCountryDropdownOpen(false);
                                                                        setCountrySearch("");
                                                                    }}
                                                                    className={`w-full px-3.5 py-2.5 text-xs text-left flex items-center justify-between hover:bg-[#9d8cff]/15 transition-colors ${selectedCountry.code === c.code ? "text-[#9d8cff] font-semibold bg-[#9d8cff]/10" : "text-white"}`}
                                                                >
                                                                    <span className="flex items-center gap-2 truncate">
                                                                        <span className="text-sm">{c.flag}</span>
                                                                        <span className="truncate">{c.name}</span>
                                                                    </span>
                                                                    <span className="font-mono text-zinc-400 shrink-0 ml-2">{c.dialCode}</span>
                                                                </button>
                                                            ))
                                                        ) : (
                                                            <div className="px-4 py-3 text-xs text-zinc-500 text-center">
                                                                No countries found
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Mobile Number Input (Digits Only) */}
                                        <div>
                                            <input
                                                id="mobile"
                                                type="tel"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                value={mobile}
                                                onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                                                placeholder="9876543210"
                                                className="w-full bg-[#15171f] border border-white/10 rounded-[10px] px-4 py-3.5 text-[15px] text-white placeholder-[#555761] focus:border-[#9d8cff] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Custom Dropdown: What's the work related to? */}
                                <div className="relative" ref={dropdownRef}>
                                    <label className="block text-[13px] font-semibold text-[#9a9ba3] mb-[9px]">
                                        What's the work related to?
                                    </label>
                                    
                                    <button
                                        type="button"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className={`w-full bg-[#15171f] border ${isDropdownOpen ? "border-[#9d8cff]" : "border-white/10"} rounded-[10px] px-4 py-3.5 text-[15px] flex items-center justify-between transition-colors text-left focus:outline-none`}
                                    >
                                        <span className={workType ? "text-white" : "text-[#555761]"}>
                                            {workType || "Select an option"}
                                        </span>
                                        <ChevronDown className={`w-4 h-4 text-[#9a9ba3] transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-[#9d8cff]" : ""}`} />
                                    </button>

                                    {/* Dropdown Options Popup */}
                                    {isDropdownOpen && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-[#15171f] border border-[#9d8cff]/40 rounded-[10px] shadow-2xl z-30 overflow-hidden py-1.5 backdrop-blur-xl">
                                            {workOptions.map((option) => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => {
                                                        setWorkType(option);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className={`w-full px-4 py-3 text-[14.5px] text-left flex items-center justify-between hover:bg-[#9d8cff]/15 transition-colors ${workType === option ? "text-[#9d8cff] font-semibold bg-[#9d8cff]/10" : "text-white"}`}
                                                >
                                                    <span>{option}</span>
                                                    {workType === option && <Check className="w-4 h-4 text-[#9d8cff]" />}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#9d8cff] hover:bg-[#b0a2ff] text-[#08090d] font-bold text-[15px] rounded-[10px] py-4 transition-all duration-200 active:scale-[0.99] shadow-[0_0_20px_rgba(157,140,255,0.25)] disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Send message"}
                                    </button>
                                </div>

                                {/* Footnote */}
                                <p className="text-center text-[12.5px] text-[#6f707a] font-normal pt-1">
                                    Your details are only used to get back to you — never shared.
                                </p>
                            </form>

                        </div>
                    </motion.div>

                </div>

            </div>

            {/* Modal Popup (Success / Error) */}
            <AnimatePresence>
                {modalState !== "none" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setModalState("none")}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#13151f] border border-white/15 rounded-3xl p-8 max-w-md w-full relative space-y-6 shadow-2xl text-center"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setModalState("none")}
                                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1c1e2b] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {modalState === "success" ? (
                                <div className="space-y-4 pt-2">
                                    <div className="w-16 h-16 rounded-full bg-[#9d8cff]/15 border border-[#9d8cff]/40 flex items-center justify-center mx-auto text-[#9d8cff]">
                                        <CheckCircle2 className="w-9 h-9" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">
                                        Details Received Successfully!
                                    </h3>
                                    <p className="text-[#9a9ba3] text-sm font-light leading-relaxed">
                                        Thank you for reaching out! Your message has been submitted. I will review your details and contact you in <strong className="text-white font-semibold">maximum 2 hours</strong>.
                                    </p>
                                    <button
                                        onClick={() => setModalState("none")}
                                        className="w-full bg-[#9d8cff] hover:bg-[#b0a2ff] text-[#08090d] font-bold text-sm rounded-xl py-3.5 transition-all duration-200 shadow-[0_0_20px_rgba(157,140,255,0.25)]"
                                    >
                                        Got it
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4 pt-2">
                                    <div className="w-16 h-16 rounded-full bg-rose-500/15 border border-rose-500/40 flex items-center justify-center mx-auto text-rose-400">
                                        <AlertCircle className="w-9 h-9" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">
                                        Submission Failed
                                    </h3>
                                    <p className="text-[#9a9ba3] text-sm font-light leading-relaxed">
                                        Something went wrong while sending your message. Please check your network connection and try again.
                                    </p>
                                    <button
                                        onClick={() => setModalState("none")}
                                        className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm rounded-xl py-3.5 transition-all duration-200 shadow-[0_0_20px_rgba(244,63,94,0.25)]"
                                    >
                                        Try Again
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
