import { useState } from "react";
import { CheckCircle2, ExternalLink, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import SectionHeading from "./SectionHeading";

export default function RSVPSection() {
  const [clicked, setClicked] = useState(false);
  const invitationUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <section id="rsvp" className="luxury-pattern">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <SectionHeading center={false} eyebrow="RSVP" title="Reserve Your Blessing Seat" text="RSVP uses a Google Form link only, so there is no backend setup or paid API required." />
          <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel rounded-[2rem] p-6 sm:p-8">
            {weddingData.forms.embedForms ? (
              <iframe title="RSVP form" src={weddingData.forms.rsvpGoogleFormLink} className="h-[520px] w-full rounded-2xl bg-white" />
            ) : (
              <>
                <a
                  href={weddingData.forms.rsvpGoogleFormLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setClicked(true)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-secondary)] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white"
                >
                  <ExternalLink size={18} /> {weddingData.buttonTexts.rsvp}
                </a>
                {clicked && (
                  <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} className="mt-5 rounded-2xl border border-[var(--color-primary)]/25 bg-white p-5 text-center">
                    <CheckCircle2 className="mx-auto mb-3 text-[var(--color-primary)]" />
                    <h3 className="font-display text-3xl font-semibold">Thank you for responding</h3>
                    <p className="mt-2 text-sm leading-6">Your RSVP form opened in a new tab.</p>
                  </motion.div>
                )}
              </>
            )}
            <div className="mt-7 flex items-center gap-4 rounded-2xl bg-white p-4">
              <QRCodeSVG value={invitationUrl || "https://wedify.in"} size={104} fgColor="#2c2620" bgColor="transparent" />
              <div>
                <p className="flex items-center gap-2 text-sm font-bold"><QrCode size={16} /> Invitation QR</p>
                <p className="mt-1 text-xs leading-5 text-[color-mix(in_srgb,var(--color-ink),transparent_35%)]">Guests can scan this to open the invitation URL.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
