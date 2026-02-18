import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

// Recibimos onSlotSelect como prop para comunicar la fecha al formulario
function BookingWidget({ onSlotSelect }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1);

  // Generar los próximos 7 días
  const getDates = () => {
    const dates = [];
    for (let i = 1; i <= 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push(d);
    }
    return dates;
  };

  const times = ["10:00 AM", "12:00 PM", "04:00 PM", "06:00 PM"];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) return;

    // Formateamos la fecha de manera legible: "Vie, 21 Feb a las 06:00 PM"
    const dateString = selectedDate.toLocaleDateString("es-ES", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
    const fullSchedule = `${dateString} a las ${selectedTime}`;

    // ENVIAMOS AL PADRE (ContactoPage)
    if (onSlotSelect) {
      onSlotSelect(fullSchedule);
    }

    // Simulamos el proceso visual
    setTimeout(() => {
      setStep(2);
      toast({
        title: "¡Horario Seleccionado!",
        description: `Se ha añadido ${fullSchedule} a tu solicitud. Completa el formulario para finalizar.`,
        duration: 5000,
      });
    }, 500);
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center italic uppercase tracking-tighter">
        <Calendar className="mr-2 text-orange-500" size={20} />
        {step === 1 ? "1. Elige tu Horario" : "¡Pre-Reserva Lista!"}
      </h3>

      {step === 1 ? (
        <div className="space-y-6">
          <div>
            <label className="text-[10px] text-gray-500 mb-3 block uppercase font-black tracking-widest">
              Selecciona una Fecha
            </label>
            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide snap-x">
              {getDates().map((date, idx) => {
                const isSelected =
                  selectedDate && selectedDate.toDateString() === date.toDateString();
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedDate(date)}
                    className={`flex-shrink-0 w-16 h-20 rounded-xl flex flex-col items-center justify-center border transition-all snap-start ${
                      isSelected
                        ? "bg-orange-600 border-transparent text-white shadow-[0_0_15px_rgba(234,88,12,0.4)]"
                        : "bg-black/40 border-white/5 text-gray-500 hover:border-orange-500/30"
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase mb-1">
                      {date.toLocaleDateString("es-ES", { weekday: "short" })}
                    </span>
                    <span className="text-xl font-black italic">{date.getDate()}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="text-[10px] text-gray-500 mb-3 block uppercase font-black tracking-widest">
              Selecciona una Hora
            </label>
            <div className="grid grid-cols-2 gap-3">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-3 px-4 rounded-xl flex items-center justify-center border transition-all text-xs font-bold ${
                    selectedTime === time
                      ? "bg-white/10 border-orange-500 text-orange-500 shadow-[inset_0_0_10px_rgba(234,88,12,0.1)]"
                      : "bg-black/40 border-white/5 text-gray-400 hover:bg-white/5"
                  }`}
                >
                  <Clock size={14} className="mr-2" />
                  {time}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleBooking}
            disabled={!selectedDate || !selectedTime}
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-7 rounded-xl italic uppercase tracking-[0.2em] transition-all disabled:opacity-30"
          >
            Confirmar para el Envío
          </Button>
        </div>
      ) : (
        <div className="text-center py-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle className="w-8 h-8 text-orange-500" />
          </motion.div>
          <h4 className="text-white text-xl font-black italic uppercase mb-2">
            ¡Horario capturado!
          </h4>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Tu preferencia ha sido guardada. <br />
            <span className="text-orange-500 font-bold italic">
              Ahora completa tus datos a la derecha
            </span>{" "}
            para enviarnos la solicitud oficial.
          </p>
          <Button
            onClick={() => setStep(1)}
            variant="outline"
            className="border-white/10 text-gray-400 hover:text-white hover:bg-white/5 text-[10px] font-black tracking-widest uppercase py-4 rounded-xl"
          >
            Cambiar Fecha
          </Button>
        </div>
      )}
    </div>
  );
}

export default BookingWidget;
