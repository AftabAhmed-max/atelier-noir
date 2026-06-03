"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import CollectionCard from "@/components/CollectionCard";
import { collectionCategories, collections } from "@/data/content";

export default function CollectionsGrid() {
  const [active, setActive] =
    useState<(typeof collectionCategories)[number]>("All");

  const filtered =
    active === "All"
      ? collections
      : collections.filter((c) => c.category === active);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {collectionCategories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="relative pb-2 font-body text-[12px] uppercase tracking-[0.18em] no-underline transition-colors duration-300"
            >
              <span
                className={isActive ? "text-ink" : "text-ink/40 hover:text-ink/70"}
              >
                {cat}
              </span>
              {isActive && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute bottom-0 left-0 h-px w-full bg-clay"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Divider — sits clearly below the (possibly wrapped) filter row */}
      <div className="mt-5 border-t border-rule" />

      {/* Grid */}
      <LayoutGroup>
        <motion.div
          layout
          className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <CollectionCard key={item.id} item={item} priority={i < 3} />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
