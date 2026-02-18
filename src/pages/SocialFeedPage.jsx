import React, { useState, useEffect } from "react";
import { Instagram, Heart, MessageCircle, ExternalLink, Camera } from "lucide-react";
import { motion } from "framer-motion";

const BEHOLD_URL = "https://feeds.behold.so/kGh6CWudx3gC53G2jMiI";

function BMCInstagramFeed() {
  const [feedData, setFeedData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BEHOLD_URL)
      .then((res) => res.json())
      .then((data) => {
        setFeedData(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error cargando feed de BMC:", err));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-600"></div>
          <span className="text-orange-600 font-black italic tracking-widest text-xs uppercase">
            Sincronizando Archivos...
          </span>
        </div>
      </div>
    );

  return (
    <section className="bg-black py-24 md:py-32 px-6 overflow-hidden">
      {/* Contenedor Maestro: Expandido para monitores Pro */}
      <div className="max-w-[1800px] mx-auto">
        {/* Header del Feed: Texto masivo y centrado en la marca */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8 border-b border-white/5 pb-12">
          <div className="w-full md:w-auto text-center md:text-left">
            <h2 className="text-[12vw] md:text-8xl lg:text-9xl font-black italic text-white uppercase tracking-tighter leading-none">
              LATEST <span className="text-orange-600">SHOTS</span>
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-5 mt-8">
              <img
                src={feedData.profilePictureUrl}
                className="w-16 h-16 rounded-full border-2 border-orange-600 shadow-[0_0_15px_rgba(234,88,12,0.4)]"
                alt="BMC Profile"
              />
              <div>
                <p className="text-white font-black text-xl md:text-2xl italic tracking-tight">
                  @{feedData.username}
                </p>
                <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
                  {feedData.followersCount} Followers • Durango, MX
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://breakmycomfort.pixieset.com"
            target="_blank"
            className="group text-white/50 hover:text-orange-600 font-black text-xs md:text-sm transition-all flex items-center gap-3 italic tracking-widest uppercase"
          >
            VER PORTAFOLIO FULL HD{" "}
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </div>

        {/* Grid de Posts: 4 columnas en monitores Pro, 1 en Celular */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {feedData.posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative bg-neutral-950 rounded-[2rem] overflow-hidden border border-white/5 hover:border-orange-600/30 transition-all duration-500"
            >
              {/* Imagen Principal con Aspect Ratio de Instagram (4:5) */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={post.sizes.large.mediaUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Overlay: Estética Moody (Sutil hasta el Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                <div className="flex gap-6 mb-5 text-white">
                  <span className="flex items-center gap-2 font-black text-base">
                    <Heart size={20} className="text-orange-600 fill-orange-600" /> {post.likeCount}
                  </span>
                  <span className="flex items-center gap-2 font-black text-base">
                    <MessageCircle size={20} className="text-white" /> {post.commentsCount}
                  </span>
                </div>

                <p className="text-gray-200 text-sm leading-relaxed line-clamp-3 italic mb-6 font-medium">
                  {post.prunedCaption}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {post.hashtags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full font-black uppercase tracking-widest border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href={post.permalink}
                  target="_blank"
                  className="w-full py-4 bg-orange-600 text-white text-center text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 rounded-xl"
                >
                  Abrir en Instagram
                </a>
              </div>

              {/* Badge de Cámara: Si mencionas tu Canon T7 */}
              {(post.caption.toLowerCase().includes("t7") ||
                post.caption.toLowerCase().includes("canon")) && (
                <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-xl p-3 rounded-2xl border border-white/10 group-hover:border-orange-600/50 transition-colors">
                  <Camera size={20} className="text-orange-600" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer CTA: El puente final al portafolio de alta resolución */}
        <div className="flex flex-col items-center py-24 md:py-32 mt-12 border-t border-white/5">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.5em] mb-10 italic font-bold text-center"
          >
            ¿BUSCAS LA MÁXIMA CALIDAD? EXCLUSIVO EN PIXIESET
          </motion.p>

          <a
            href="https://breakmycomfort.pixieset.com"
            target="_blank"
            className="group relative px-12 py-6 bg-transparent border-2 border-white text-white font-black italic uppercase tracking-tighter overflow-hidden transition-all duration-500 hover:border-orange-600"
          >
            <span className="relative z-10 flex items-center gap-4 text-sm md:text-lg">
              EXPLORAR ARCHIVOS 4K
              <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
            </span>

            {/* Efecto de llenado: Golden Hour vibe */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default BMCInstagramFeed;
