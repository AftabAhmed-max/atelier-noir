"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Collection } from "@/data/content";

export default function CollectionCard({
  item,
  priority = false,
}: {
  item: Collection;
  priority?: boolean;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-taupe/20">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 bg-bone/90 px-3 py-1 font-body text-[10px] uppercase tracking-widest text-ink">
          {item.category}
        </span>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h3 className="font-display text-2xl font-light leading-tight text-ink">
          {item.title}
        </h3>
        <p className="font-body text-sm leading-relaxed text-ink/55">
          {item.caption}
        </p>
      </div>
    </motion.article>
  );
}
