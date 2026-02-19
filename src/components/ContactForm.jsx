import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Loader2, Send, Clock, AlertCircle, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactForm({ appointmentSlot }) {
  const navigate = useNavigate();

  useEffect(() => {
    emailjs.init("bSKPnyBqd_yyl8YAN");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carMake: "",
    carModel: "",
    carYear: "",
    sessionType: "",
    message: "",
    terms: false,
    hp_field: "", // Honeypot anti-spam
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Formateo de teléfono: "618 325 3693"
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/[^\d]/g, "");
    const len = phoneNumber.length;
    if (len < 4) return phoneNumber;
    if (len < 7) return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 10)}`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "phone") {
      setFormData((prev) => ({ ...prev, [name]: formatPhoneNumber(value) }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.hp_field !== "") return; // Bloqueo de bot

    if (!appointmentSlot) {
      toast({ variant: "destructive", title: "⚠️ Selecciona fecha/hora en el calendario" });
      return;
    }

    const cleanPhone = formData.phone.replace(/\s/g, "");
    if (cleanPhone.length !== 10) {
      toast({ variant: "destructive", title: "⚠️ WhatsApp debe tener 10 dígitos" });
      return;
    }

    if (!formData.terms) {
      toast({ variant: "destructive", title: "⚠️ Debes aceptar el contacto por WhatsApp" });
      return;
    }

    // Validación lógica del año si es número
    if (formData.carYear && formData.carYear !== "No estoy seguro") {
      const currentYear = new Date().getFullYear();
      const year = parseInt(formData.carYear);

      // Si tiene 4 dígitos pero es un año imposible (ej. 3000 o 1200)
      if (year < 1920 || year > currentYear + 1) {
        toast({
          variant: "destructive",
          title: "⚠️ Año no válido",
          description: `Por favor ingresa un año entre 1920 y ${currentYear + 1}`,
        });
        return;
      }
    }

    setIsSubmitting(true);

    const fullDetails = `
VEHÍCULO:
• Marca/Modelo: ${formData.carMake || "N/A"} ${formData.carModel || "N/A"}
• Año: ${formData.carYear || "No especificado"}

SESIÓN:
• Tipo: ${formData.sessionType}
• WhatsApp: ${formData.phone}
• HORARIO: ${appointmentSlot}

PROYECTO:
${formData.message}
    `.trim();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: fullDetails,
    };

    emailjs
      .send("service_5emt1mc", "template_l7l1am8", templateParams, "bSKPnyBqd_yyl8YAN")
      .then(() => {
        toast({ title: "✅ Solicitud enviada con éxito" });
        setTimeout(() => {
          navigate("/");
          window.scrollTo(0, 0);
        }, 3000);
      })
      .catch(() => {
        toast({ variant: "destructive", title: "❌ Error al enviar. Intenta por Instagram." });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 md:p-8 space-y-5 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-md"
    >
      <input
        type="text"
        name="hp_field"
        value={formData.hp_field}
        onChange={handleChange}
        className="hidden"
      />

      {/* Alerta de Horario */}
      <div
        className={`p-4 rounded-2xl flex items-center gap-3 border transition-all ${appointmentSlot ? "bg-orange-500/10 border-orange-500/30" : "bg-red-500/10 border-red-500/20"}`}
      >
        {appointmentSlot ? (
          <Clock className="text-orange-500" size={18} />
        ) : (
          <AlertCircle className="text-red-500" size={18} />
        )}
        <p
          className={`text-[10px] font-black uppercase tracking-widest ${appointmentSlot ? "text-white" : "text-red-400"}`}
        >
          {appointmentSlot ? `Cita: ${appointmentSlot}` : "Selecciona horario en el calendario"}
        </p>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre Completo *"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none font-bold placeholder:text-gray-600 transition-all"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none font-bold placeholder:text-gray-600 transition-all"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="WhatsApp *"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none font-bold placeholder:text-gray-600 transition-all"
          />
        </div>

        {/* Datos del Auto */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="text"
            name="carMake"
            value={formData.carMake}
            onChange={handleChange}
            placeholder="Marca"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-orange-500 outline-none font-bold placeholder:text-gray-600 transition-all"
          />
          <input
            type="text"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            placeholder="Modelo"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-orange-500 outline-none font-bold placeholder:text-gray-600 transition-all"
          />

          {/* Campo de Año Mejorado */}
          <div className="relative">
            <input
              type="text"
              name="carYear"
              value={formData.carYear}
              onChange={(e) => {
                const val = e.target.value;
                // 1. Permitir "No estoy seguro" si se activó por el botón
                // 2. Si es manual, solo permitir números y máximo 4 caracteres
                if (val === "No estoy seguro") {
                  setFormData((prev) => ({ ...prev, carYear: val }));
                } else {
                  const onlyNums = val.replace(/[^\d]/g, ""); // Borra letras
                  if (onlyNums.length <= 4) {
                    setFormData((prev) => ({ ...prev, carYear: onlyNums }));
                  }
                }
              }}
              placeholder="Año"
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-white text-sm focus:border-orange-500 outline-none font-bold placeholder:text-gray-600 transition-all"
            />
            <button
              type="button"
              onClick={() => setFormData((p) => ({ ...p, carYear: "No estoy seguro" }))}
              title="¿No sabes el año?"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500 transition-colors"
            >
              <HelpCircle size={18} />
            </button>
          </div>
        </div>

        <select
          name="sessionType"
          value={formData.sessionType}
          onChange={handleChange}
          required
          className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none font-bold appearance-none cursor-pointer"
        >
          <option value="">Tipo de Sesión *</option>
          <option value="Moody">Moody (Noche/Frío)</option>
          <option value="Golden Hour">Golden Hour (Cálido)</option>
          <option value="Reel">Video Reel / TikTok</option>
        </select>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Háblanos de tu proyecto... *"
          rows="3"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none resize-none font-bold placeholder:text-gray-600 transition-all"
        />
      </div>

      <label className="flex items-center gap-3 cursor-pointer group">
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
          className="w-4 h-4 accent-orange-500 rounded border-white/10 bg-white/5"
        />
        <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest group-hover:text-gray-300 transition-colors">
          Acepto contacto vía WhatsApp
        </span>
      </label>

      <Button
        type="submit"
        disabled={isSubmitting || !appointmentSlot}
        className={`w-full py-7 rounded-2xl italic font-black uppercase tracking-[0.2em] transition-all ${!appointmentSlot ? "bg-gray-800 text-gray-600 cursor-not-allowed" : "bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-900/20"}`}
      >
        {isSubmitting ? (
          <Loader2 className="animate-spin" />
        ) : (
          <>
            <Send size={18} className="mr-2" /> Enviar Solicitud
          </>
        )}
      </Button>
    </form>
  );
}

export default ContactForm;
