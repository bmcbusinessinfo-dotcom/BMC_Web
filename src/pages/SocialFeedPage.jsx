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
      <div className="flex justify-center items-center h-96 bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-600"></div>
      </div>
    );

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header del Feed con Info Real de tu Perfil */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-black italic text-white uppercase tracking-tighter">
              LATEST <span className="text-orange-600">SHOTS</span>
            </h2>
            <div className="flex items-center gap-4 mt-4">
              <img
                src={feedData.profilePictureUrl}
                className="w-12 h-12 rounded-full border-2 border-orange-600"
                alt="BMC Profile"
              />
              <div>
                <p className="text-white font-bold">@{feedData.username}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">
                  {feedData.followersCount} Followers • Durango, MX
                </p>
              </div>
            </div>
          </div>
          <a
            href="https://breakmycomfort.pixieset.com"
            target="_blank"
            className="text-orange-600 font-bold text-sm hover:underline flex items-center gap-2 italic"
          >
            VER PORTAFOLIO COMPLETO <ExternalLink size={14} />
          </a>
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedData.posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-neutral-900 rounded-3xl overflow-hidden border border-white/5"
            >
              {/* Imagen Principal */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={post.sizes.large.mediaUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlay con Info del Post */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-8 flex flex-col justify-end">
                <div className="flex gap-4 mb-4 text-white">
                  <span className="flex items-center gap-1 font-bold text-sm">
                    <Heart size={18} className="text-orange-600 fill-orange-600" /> {post.likeCount}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-sm">
                    <MessageCircle size={18} /> {post.commentsCount}
                  </span>
                </div>

                <p className="text-white text-xs leading-relaxed line-clamp-3 italic mb-4">
                  {post.prunedCaption}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.hashtags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-orange-600 text-white px-2 py-1 rounded font-black uppercase"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href={post.permalink}
                  target="_blank"
                  className="mt-6 w-full py-3 bg-white text-black text-center text-xs font-black uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-colors"
                >
                  Ver en Instagram
                </a>
              </div>

              {/* Badge de Cámara (Si mencionas tu Canon T7) */}
              {post.caption.toLowerCase().includes("t7") && (
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10">
                  <Camera size={16} className="text-orange-600" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col items-center py-12 bg-black">
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-6 italic">
            ¿Quieres ver el trabajo final?
          </p>

          <a
            href="https://breakmycomfort.pixieset.com"
            target="_blank"
            className="group relative px-8 py-4 bg-transparent border border-orange-600 text-white font-black italic uppercase tracking-tighter overflow-hidden transition-all duration-300 hover:text-black"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explorar Galerías Full HD
              <ExternalLink size={18} />
            </span>

            {/* Efecto de llenado al pasar el mouse */}
            <div className="absolute inset-0 bg-orange-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default BMCInstagramFeed;
