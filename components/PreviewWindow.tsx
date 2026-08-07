'use client'
// Path: components/PreviewWindow.tsx
import { motion } from "motion/react"
import {
  LayoutGrid,
  BarChart3,
  Users,
  Settings,
  Bell,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"

const sidebarIcons = [LayoutGrid, BarChart3, Users, Settings]

const chartBars = [40, 65, 45, 80, 55, 90, 70]

const tasks = [
  { label: "Client onboarding flow", done: true },
  { label: "API integration", done: true },
  { label: "Dashboard redesign", done: false },
]

export default function PreviewWindow() {
  return (
    <div className="w-full 1mx-auto overflow-hidden rounded-xl border bg-card shadow-2xl shadow-primary/10">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b bg-muted/40 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-red-400/70" />
        <span className="size-2.5 rounded-full bg-yellow-400/70" />
        <span className="size-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 text-[11px] text-muted-foreground">
          app.manaztech.com
        </span>
      </div>

      {/* app body */}
      <div className="flex">
        {/* sidebar */}
        <div className="flex w-12 flex-col items-center gap-4 border-r bg-muted/20 py-4">
          {sidebarIcons.map((Icon, i) => (
            <span
              key={i}
              className={`flex size-8 items-center justify-center rounded-lg transition-colors ${
                i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              <Icon className="size-4" strokeWidth={1.75} />
            </span>
          ))}
        </div>

        {/* main content */}
        <div className="flex-1 p-4">
          {/* top bar */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold">Overview</p>
              <p className="text-[10px] text-muted-foreground">Welcome back</p>
            </div>
            <span className="relative flex size-7 items-center justify-center rounded-full bg-muted">
              <Bell className="size-3.5 text-muted-foreground" />
              <motion.span
                className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-red-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            </span>
          </div>

          {/* stat cards */}
          <div className="grid grid-cols-2 gap-2">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-lg bg-primary/10 p-2.5"
            >
              <p className="text-base font-semibold">2.4k</p>
              <div className="mt-0.5 flex items-center gap-1 text-[10px] text-green-600">
                <TrendingUp className="size-3" />
                <span>+12%</span>
              </div>
              <p className="mt-1 text-[9px] text-muted-foreground">Active users</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-lg bg-muted p-2.5"
            >
              <p className="text-base font-semibold">98%</p>
              <div className="mt-0.5 flex items-center gap-1 text-[10px] text-green-600">
                <TrendingUp className="size-3" />
                <span>+4%</span>
              </div>
              <p className="mt-1 text-[9px] text-muted-foreground">Uptime</p>
            </motion.div>
          </div>

          {/* chart */}
          <div className="mt-3 rounded-lg border p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-muted-foreground">
                Weekly growth
              </span>
              <span className="text-[10px] font-medium text-primary">+18.2%</span>
            </div>
            <div className="flex h-16 items-end gap-1.5">
              {chartBars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-sm bg-primary/70"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.06,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </div>

          {/* task list */}
          <div className="mt-3 space-y-1.5">
            {tasks.map((task, i) => (
              <motion.div
                key={task.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 rounded-md bg-muted/40 px-2.5 py-1.5"
              >
                <CheckCircle2
                  className={`size-3.5 shrink-0 ${
                    task.done ? "text-green-600" : "text-muted-foreground/40"
                  }`}
                />
                <span
                  className={`text-[10px] ${
                    task.done ? "text-muted-foreground line-through" : ""
                  }`}
                >
                  {task.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* status bar */}
      <div className="flex items-center justify-between border-t bg-muted/30 px-4 py-2">
        <span className="text-[10px] text-muted-foreground">
          Synced 2s ago
        </span>
        <motion.span
          className="flex items-center gap-1 text-[10px] font-medium text-green-600"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="size-1.5 rounded-full bg-green-500" /> Live
        </motion.span>
      </div>
    </div>
  )
}