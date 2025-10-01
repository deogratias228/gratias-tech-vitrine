"use client";

import { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
    return <Suspense>
        <ContactForm />
    </Suspense>
}