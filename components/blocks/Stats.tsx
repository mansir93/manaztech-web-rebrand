// Path: components/blocks/Stats.tsx
'use client';
import { motion } from 'motion/react';

const stats = [
  { value: '15+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
  { value: '5+', label: 'Years Experience' },
];

export default function Stats() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="max-w-7xl mx-auto p-4 g border rounded-3xl flex justify-between items-center"
      >
        {stats.map((s) => (
          <div key={s.label} className='flex flex-col items-center'>
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-xl font-semibold tracking-tight">
              {s.value}
            </dd>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
