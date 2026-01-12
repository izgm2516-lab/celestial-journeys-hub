import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(30).optional(),
  groupSize: z.string().trim().max(10).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const InquiryForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    groupSize: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrors({});

    const result = inquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    // Create mailto link as fallback (no backend)
    const subject = encodeURIComponent("Eclipse 2026 Inquiry from " + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nGroup Size: ${formData.groupSize || "Not specified"}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:carlos_espada@yahoo.com?subject=${subject}&body=${body}`;
    setStatus("success");
    setFormData({ name: "", email: "", phone: "", groupSize: "", message: "" });
  };

  return (
    <section id="inquiry-form" className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
      <div className="absolute inset-0 star-bg opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              {t("inquiry.title")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("inquiry.subtitle")}
            </p>
          </div>

          {status === "success" ? (
            <div className="text-center py-12 card-gradient rounded-2xl border border-primary/20">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-lg text-foreground">{t("inquiry.success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 card-gradient p-8 rounded-2xl border border-border/50">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    {t("inquiry.name")} *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("inquiry.namePlaceholder")}
                    className={`bg-background/50 border-border/50 ${errors.name ? "border-destructive" : ""}`}
                    required
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    {t("inquiry.email")} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("inquiry.emailPlaceholder")}
                    className={`bg-background/50 border-border/50 ${errors.email ? "border-destructive" : ""}`}
                    required
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    {t("inquiry.phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("inquiry.phonePlaceholder")}
                    className="bg-background/50 border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="groupSize" className="text-sm font-medium text-foreground">
                    {t("inquiry.groupSize")}
                  </label>
                  <Input
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    placeholder={t("inquiry.groupSizePlaceholder")}
                    className="bg-background/50 border-border/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  {t("inquiry.message")} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("inquiry.messagePlaceholder")}
                  className={`bg-background/50 border-border/50 min-h-[150px] ${errors.message ? "border-destructive" : ""}`}
                  required
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="w-5 h-5" />
                  <p className="text-sm">{t("inquiry.error")}</p>
                </div>
              )}

              <Button
                type="submit"
                variant="glow"
                size="lg"
                className="w-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  t("inquiry.sending")
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {t("inquiry.submit")}
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
