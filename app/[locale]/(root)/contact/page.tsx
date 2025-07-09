import ContactForm from "@/components/forms/ContactForm";
import TopBar from "@/components/shared/TopBar";
import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

function ContectPage() {
  const t = useTranslations();
  return (
    <>
      <TopBar label="contacts" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97677.74313635676!2d64.5669900531775!3d40.08813659391455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5069a7b33e0cd1%3A0x41fdf3e47b26de0e!2sG%E2%80%98ijduvon%2C%20Buxoro%20Viloyati%2C%20O%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1752028099456!5m2!1suz!2s"
        loading="lazy"
        className="w-full h-96"
      ></iframe>

      <div className="container mx-auto max-w-6xl">
        <div className="mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="flex flex-col">
            <h1 className="font-space-grotesk text-4xl font-bold">
              {t("contactTitle")}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {t("contactDescription")}
            </p>

            <div className="mt-12 flex items-center gap-3">
              <Mail className="size-4" />
              <p className="text-sm">info@sammi.ac</p>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <Phone className="size-4" />
              <p className="text-sm">+98 02 296 4902</p>
            </div>
          </div>

          <div>
            <h1 className="mb-2 font-space-grotesk text-4xl font-bold">
              {t("contactForm")}
            </h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContectPage;
