"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "เสียงเบสที่ทรงพลัง",
    description:
      "โฟกัสที่ไลน์เบสหนักแน่นและการวางจังหวะที่เป็นเอกลักษณ์ สร้างบรรยากาศที่ลุ่มลึกเหมือนภาพยนตร์."
  },
  {
    title: "แฟชั่นและซิลลูเอต",
    description:
      "ภาพลักษณ์ที่โดดเด่นและรายละเอียดในแต่ละลุค กลายเป็นภาษาภาพที่จำได้ทันที."
  },
  {
    title: "พลังบนเวที",
    description:
      "การแสดงสดที่อัดแน่นด้วยอารมณ์ ถ่ายทอดความเงียบสงบและความดุดันได้พร้อมกัน."
  }
];

const memories = [
  {
    year: "2002",
    title: "กำเนิดเส้นทาง",
    detail: "เริ่มต้นบทใหม่ของดนตรี Visual Kei ที่กล้าทดลองและสร้างสัญลักษณ์ใหม่."
  },
  {
    year: "2010",
    title: "อัลบั้มที่ทุกคนจดจำ",
    detail: "สร้างผลงานที่รวมทั้งความหม่น เงียบ และความยิ่งใหญ่ในซาวด์." 
  },
  {
    year: "2024",
    title: "ตำนานยังคงอยู่",
    detail: "แรงบันดาลใจยังคงสะท้อนในแฟนเพลงและศิลปินรุ่นใหม่." 
  }
];

const gallery = [
  {
    label: "Ambient Light",
    tone: "from-amber-400/20 via-white/5 to-transparent"
  },
  {
    label: "Stage Aura",
    tone: "from-fuchsia-400/20 via-white/5 to-transparent"
  },
  {
    label: "Silent Pulse",
    tone: "from-blue-400/20 via-white/5 to-transparent"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-mesh-gradient opacity-80" />
      <div className="pointer-events-none absolute inset-0 noise opacity-20" />

      <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25" />
          <div className="absolute inset-0 bg-hero-texture" />
        </motion.div>

        <motion.div
          className="relative z-10 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-glow/80">Visual Driven Tribute</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
            REITA<br />
            <span className="text-ember">เสียงที่ส่องสว่างในความมืด</span>
          </h1>
          <p className="mt-6 text-lg text-white/75">
            ประสบการณ์การเล่าเรื่องผ่านภาพ แสง และการเคลื่อนไหว
            ที่สะท้อนจังหวะของดนตรีและอารมณ์ในทุกบทเพลง.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-ink shadow-aura transition hover:scale-[1.02]">
              เริ่มต้นการเดินทาง
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60">
              สำรวจไทม์ไลน์
            </button>
          </div>
        </motion.div>
      </section>

      <section className="relative px-6 py-20">
        <motion.div
          className="mx-auto max-w-6xl"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" variants={item}>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Essence</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">องค์ประกอบที่สร้างภาพจำ</h2>
            </div>
            <p className="max-w-xl text-white/70">
              เติมความลึกผ่านแสงเงา และสร้างพื้นที่ที่ให้ผู้ชมรู้สึกถึงแรงสั่นสะเทือน
              ของเสียงดนตรีในแบบ Visual Kei.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((card) => (
              <motion.div
                key={card.title}
                className="glass rounded-2xl p-6 shadow-glass"
                variants={item}
              >
                <h3 className="text-xl font-semibold text-ember">{card.title}</h3>
                <p className="mt-4 text-sm text-white/70">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative px-6 py-20">
        <motion.div
          className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="glass rounded-3xl p-10" variants={item}>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Timeline</p>
            <h2 className="mt-3 text-3xl font-semibold">เส้นทางแห่งแรงบันดาลใจ</h2>
            <div className="mt-8 space-y-6">
              {memories.map((memory) => (
                <div key={memory.year} className="border-l border-white/10 pl-6">
                  <p className="text-sm text-ember">{memory.year}</p>
                  <h3 className="mt-2 text-lg font-semibold">{memory.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{memory.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="space-y-6" variants={item}>
            <div className="glass rounded-3xl p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Soundscape</p>
              <h2 className="mt-3 text-2xl font-semibold">การเคลื่อนไหวที่มีจังหวะ</h2>
              <p className="mt-4 text-sm text-white/70">
                ใช้ Framer Motion สร้างการเคลื่อนไหวที่นุ่มนวล
                เพื่อให้ทุกส่วนของหน้าเว็บเหมือนถูกขับเคลื่อนด้วยเสียงดนตรี.
              </p>
              <div className="mt-6 flex gap-4">
                <div className="h-12 w-12 rounded-full bg-ember/20" />
                <div className="h-12 w-20 rounded-full bg-white/10" />
              </div>
            </div>
            <div className="glass rounded-3xl p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Message</p>
              <h2 className="mt-3 text-2xl font-semibold">เสียงสะท้อนจากแฟนเพลง</h2>
              <p className="mt-4 text-sm text-white/70">
                "ขอบคุณที่ทำให้เราได้เห็นความงามของความเงียบในบทเพลง"
              </p>
              <p className="mt-3 text-xs text-white/40">- Fan Memory</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative px-6 py-20">
        <motion.div
          className="mx-auto max-w-6xl"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="flex items-center justify-between" variants={item}>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Gallery</p>
              <h2 className="mt-3 text-3xl font-semibold">Visual Moments</h2>
            </div>
            <span className="text-sm text-white/50">03 Frames</span>
          </motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {gallery.map((frame) => (
              <motion.div
                key={frame.label}
                variants={item}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-carbon p-6"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${frame.tone}`}
                />
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {frame.label}
                  </p>
                  <div className="mt-20 h-32 rounded-2xl border border-white/10 bg-white/5" />
                  <p className="mt-4 text-sm text-white/70">
                    แสง เงา และความรู้สึกที่เคลื่อนผ่านอย่างช้า ๆ
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative px-6 pb-24">
        <motion.div
          className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-10 text-center shadow-glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Legacy</p>
          <h2 className="mt-4 text-3xl font-semibold">ให้เสียงยังคงส่องสว่าง</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70">
            ร่วมสร้างพื้นที่ที่เต็มไปด้วยภาพจำ แสง และเสียง เพื่อระลึกถึง
            REITA ในแบบที่สื่อสารกับหัวใจของทุกคน.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink">
              แชร์ความทรงจำ
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80">
              เข้าสู่โหมดค่ำคืน
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
