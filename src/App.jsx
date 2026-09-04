import { useState } from "react";

/* ═══════════════════════════════════════════
   DESIGN TOKENS — grounded in QA/test-report vernacular
   instead of generic violet/cyan/pink gradient glass
═══════════════════════════════════════════ */
const C = {
  bg:          "#0B132B",   // Deep Midnight Navy — 60% base
  surface:     "#1C2541",   // Platinum navy — 30% cards/borders
  surfaceAlt:  "#232C4D",
  border:      "rgba(244,245,247,0.08)",
  borderHi:    "rgba(244,245,247,0.16)",
  textMain:    "#F4F5F7",   // Ice White — 30% text
  textMuted:   "#A9B1C6",
  textFaint:   "#6B7394",
  pass:        "#00F5D4",   // Electric Cyan/Cyber Mint — 10% accent (CTA, pass states)
  passDim:     "rgba(0,245,212,0.12)",
  warn:        "#38BDF8",   // secondary accent — links, in-progress
  warnDim:     "rgba(56,189,248,0.12)",
  fail:        "#FF6B6B",   // used sparingly, as a report stripe not an error
  failDim:     "rgba(255,107,107,0.12)",
  info:        "#38BDF8",
  infoDim:     "rgba(56,189,248,0.12)",
};

const FONT_MONO = "'JetBrains Mono', 'Fira Code', monospace";
const FONT_SANS = "'Inter', -apple-system, sans-serif";

const PERSONAL_INFO = {
  name: "Rezwanul Islam",
  title: "SQA Engineer",
  location: "Dhaka, Bangladesh",
  phone: "+8801600005412",
  email: "rezwanul.rimel97@gmail.com",
  linkedin: "https://linkedin.com/in/rezwanulrimel",
  github: "https://github.com/rezwanulislamrimel",
  cvLink: "#",
  education: "B.Sc. in Computer Science & Engineering — AIICT (National University), 2026",
  certification: "Ostad (6 Months) — Manual & Automation Testing",
};

const STACK_ITEMS = [
  "PLAYWRIGHT", "POSTMAN + NEWMAN", "K6", "JMETER", "OWASP ZAP",
  "JIRA", "GITHUB ACTIONS", "JENKINS", "APPIUM", "SQL",
];

const EXPERIENCES = [
  {
    role: "Jnr SQA Engineer",
    company: "unidevGO Software Solutions Ltd.",
    location: "Remote, Dhaka, Bangladesh",
    period: "Feb 2026 — Present",
    status: "active",
    points: [
      "Read through SRS documents and built test plans covering every requirement without gaps.",
      "Wrote and ran functional and regression test cases; caught several critical bugs pre-release.",
      "Tracked bugs in Jira with clear reproduction steps, re-testing after each fix was deployed.",
      "Ran API tests in Postman and Newman, validating response data, status codes, and schemas.",
      "Built end-to-end automation scripts in Playwright using a Page Object Model structure.",
    ],
  },
  {
    role: "Founder & Lead ICT Instructor",
    company: "ICT Success Academy",
    location: "Dhaka, Bangladesh",
    period: "Ongoing",
    status: "active",
    points: [
      "Run ICT courses for SSC, HSC/Inter, and Honors-level students.",
      "Teach hands-on Office Applications, Basic Computer Use, and Web Fundamentals.",
      "Manage the academy's own web portal and run quality testing on it end to end.",
    ],
  },
];

const PROJECTS = [
  { title: "ICT Success Academy Web Portal", status: "pass", tag: "React + QA", desc: "Institutional web portal built in React with student-portal workflows and cross-browser testing.", tech: ["React", "UI Testing", "Tailwind"] },
  { title: "Drivers Lesson — Performance Suite", status: "pass", tag: "K6 + CI/CD", desc: "Load, stress, spike, and soak tests in K6, wired into GitHub Actions and Jenkins pipelines.", tech: ["K6", "GitHub Actions", "Jenkins"] },
  { title: "Web Automation Framework", status: "pass", tag: "Playwright", desc: "Full E2E framework using the Page Object Model, async/await, and Playwright's auto-wait handling.", tech: ["Playwright", "TypeScript", "POM"] },
  { title: "Restful-Booker API Suite", status: "pass", tag: "API QA", desc: "20+ automated cases across CRUD endpoints, with JSON schema checks and Newman HTML reports.", tech: ["Postman", "Newman", "JSON Schema"] },
  { title: "Evershop E-commerce QA", status: "pass", tag: "Manual QA", desc: "Full functional, UI, and regression coverage, with every defect logged in Jira with repro steps.", tech: ["Jira", "Manual", "Regression"] },
  { title: "Local Merchant Checkout QA", status: "pass", tag: "Local Work", desc: "End-to-end manual validation of payment checkout flows for local merchant platforms.", tech: ["Functional QA", "Payment QA"] },
];

const LOCAL_CLIENTS = [
  { name: "Avian BPO", category: "BPO & Operations" },
  { name: "Deqlo", category: "Software & Web Tech" },
  { name: "Cyber Bit Bite", category: "IT & Cybersecurity" },
  { name: "Rent Yard", category: "Real Estate & Rentals" },
  { name: "Khagrachori Protidin", category: "News & Digital Media" },
];

const SKILL_CATEGORIES = [
  { category: "Testing fundamentals", skills: ["Manual Testing", "Functional Testing", "Regression", "API Testing", "DB Testing", "SDLC / STLC", "Agile Scrum", "Bug Life Cycle"] },
  { category: "Automation & performance", skills: ["Playwright (JS/TS)", "Selenium", "K6", "JMeter", "OWASP ZAP", "Appium"] },
  { category: "Tooling & CI/CD", skills: ["Postman", "Newman CLI", "Jira", "TestRail", "GitHub Actions", "Jenkins", "Git", "SQL"] },
];

/* ═══════════════════════════════════════════
   BLOG — three original posts, written in Rezwanul's voice
═══════════════════════════════════════════ */
const BLOG_POSTS = [
  {
    id: "manual-still-matters",
    tag: "MANUAL",
    tagColor: C.info,
    title: "Why manual testing still earns its place",
    date: "Aug 2026",
    readTime: "4 min",
    excerpt: "Automation gets the attention, but the bugs that actually embarrass a team are usually the ones no script was written to look for.",
    body: [
      "Every QA conversation I have lately starts with automation coverage numbers, and I get why — they're easy to report on. But most of the bugs that made it to production on projects I've worked on weren't missing from a test suite. They were missing from anyone's imagination.",
      "Manual testing is where exploratory thinking happens. You click somewhere you weren't supposed to, resize a window at an awkward moment, paste an emoji into a phone number field — the kind of behavior no one writes a Playwright script for on day one, because no one thought of it yet.",
      "On the unidevGO projects I test, I still run a full manual pass before I even think about automating a flow. It tells me which parts of the app are fragile, which error states are missing, and which edge cases are worth locking into a script. Automation without that first pass just automates your blind spots.",
      "The honest framing I use with junior testers I mentor at ICT Success Academy: automation checks that what you already know works keeps working. Manual testing is how you find out what you didn't know to check in the first place. You need both, and the order matters.",
    ],
  },
  {
    id: "playwright-framework",
    tag: "AUTOMATION",
    tagColor: C.pass,
    title: "Building a Playwright framework that doesn't rot",
    date: "Jul 2026",
    readTime: "5 min",
    excerpt: "Most automation suites don't fail because Playwright is bad. They fail because nobody planned for the framework to still be alive in six months.",
    body: [
      "The first automation suite I built was fast to write and painful to maintain — locators scattered across test files, no shared setup, and a single failing selector that broke twelve unrelated tests. That suite taught me more than any tutorial did.",
      "What actually holds up over time is boring: a strict Page Object Model, one source of truth per locator, and test data that's generated rather than hardcoded. When a button's selector changes, I want to fix it in exactly one file, not grep the whole repo.",
      "Playwright's auto-wait handling removes a lot of the flakiness that used to plague Selenium suites, but it doesn't remove bad test design. I still see teams add arbitrary sleep() calls out of habit, which just hides timing issues instead of fixing them.",
      "The other habit that pays off: wiring the suite into CI early, even before coverage is high. A five-test suite that runs on every GitHub Actions push catches more regressions than a two-hundred-test suite that only runs manually before a release.",
      "A framework doesn't rot because the tool is wrong. It rots because nobody treated the test code with the same discipline as the product code.",
    ],
  },
  {
    id: "ai-in-qa",
    tag: "AI + QA",
    tagColor: C.warn,
    title: "What AI actually helps with in QA — and what it doesn't",
    date: "Jun 2026",
    readTime: "4 min",
    excerpt: "AI tools are genuinely useful for parts of a QA job. They are not yet a substitute for judgment about what's actually worth testing.",
    body: [
      "I use AI tools daily now — mostly to draft test case skeletons from an SRS document, generate boilerplate Playwright locators, and summarize long bug threads in Jira before a standup. All three save real time.",
      "Where it consistently falls short is risk judgment: deciding which ten test cases actually matter out of the two hundred a model can generate for you. That's a product-and-context call, and I haven't found a tool that reliably knows what's fragile in this specific codebase versus what's textbook coverage.",
      "It's also unreliable for exploratory testing. The value of exploratory testing is the tester's curiosity and memory of past failures — 'this form broke last time someone pasted in a long string' — which isn't something a prompt reproduces without being told the history first.",
      "My current workflow treats AI as a fast first draft, never the final review. I'll ask it to draft a regression checklist from a ticket, then cut it down by hand based on what I actually know is likely to break. That combination is faster than doing it manually, and more accurate than trusting the draft as-is.",
      "The teams I've seen get burned by AI in QA are the ones that skipped that second step — shipping the model's checklist instead of a tester's judgment on top of it.",
    ],
  },
];

const NAV = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

/* small helpers -------------------------------------------------- */
function SectionTag({ children }) {
  return (
    <div style={{ fontFamily: FONT_MONO, fontSize: 12.5, color: C.textFaint, marginBottom: 10 }}>
      {children}
    </div>
  );
}

function StatusDot({ color = C.pass }) {
  return <span style={{ width: 7, height: 7, borderRadius: "50%", background: color, display: "inline-block", boxShadow: `0 0 8px ${color}` }} />;
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
export default function Portfolio() {
  const [submitted, setSubmitted] = useState(false);
  const [openPost, setOpenPost] = useState(null);

  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ fontFamily: FONT_SANS, color: C.textMain, background: C.bg, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
        * { box-sizing: border-box; }
        a { color: inherit; }
        .row-card {
          background: ${C.surface};
          border: 1px solid ${C.border};
          border-left: 3px solid transparent;
          transition: border-color .18s ease, background .18s ease;
        }
        .row-card:hover { border-color: ${C.borderHi}; background: ${C.surfaceAlt}; }
        .status-strip-pass { border-left-color: ${C.pass}; }
        .nav-btn { transition: color .15s ease; }
        .nav-btn:hover { color: ${C.textMain} !important; }
        .cta-primary { transition: transform .15s ease, box-shadow .15s ease; }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(61,220,132,0.25); }
        input, textarea { font-family: ${FONT_SANS}; }
        input:focus, textarea:focus { border-color: ${C.pass} !important; }
        @media (max-width: 860px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <header style={{ position: "sticky", top: 0, zIndex: 200, background: "rgba(10,13,16,0.9)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: "auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => goto("home")}>
            <div style={{ width: 30, height: 30, borderRadius: 6, background: C.surfaceAlt, border: `1px solid ${C.border}`, display: "grid", placeItems: "center", fontFamily: FONT_MONO, fontSize: 13, fontWeight: 700, color: C.pass }}>R</div>
            <span style={{ fontSize: 15, fontWeight: 700 }}>{PERSONAL_INFO.name}</span>
          </div>
          <nav style={{ display: "flex", gap: 22, alignItems: "center" }}>
            {NAV.map((n) => (
              <button key={n.id} className="nav-btn" onClick={() => goto(n.id)} style={{ border: 0, background: "transparent", color: C.textMuted, padding: 0, fontSize: 13.5, fontWeight: 500, cursor: "pointer" }}>
                {n.label}
              </button>
            ))}
            <a href={PERSONAL_INFO.cvLink} download className="cta-primary" style={{ textDecoration: "none", background: C.pass, color: "#0B132B", padding: "8px 16px", borderRadius: 6, fontSize: 13, fontWeight: 700 }}>
              Download CV
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <div id="home" className="hero-grid" style={{ padding: "80px 24px 60px", maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", alignItems: "center", gap: 48 }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <StatusDot color={C.pass} />
            <span style={{ fontFamily: FONT_MONO, fontSize: 12.5, color: C.textMuted }}>status: employed · unidevGO</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.3rem,4.4vw,3.6rem)", lineHeight: 1.12, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 20 }}>
            I find the bugs before your users do.
          </h1>

          <p style={{ fontSize: 16, color: C.textMuted, lineHeight: 1.7, maxWidth: 500, marginBottom: 30 }}>
            {PERSONAL_INFO.name} — {PERSONAL_INFO.title} in Dhaka. Manual and automated testing across web, mobile, and API layers, with Playwright, K6, and Postman doing the heavy lifting.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
            <a href={PERSONAL_INFO.cvLink} download className="cta-primary" style={{ textDecoration: "none", background: C.pass, color: "#0B132B", padding: "13px 24px", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>
              Download CV
            </a>
            <button onClick={() => goto("blog")} style={{ border: `1px solid ${C.border}`, cursor: "pointer", background: "transparent", color: C.textMain, padding: "13px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600 }}>
              Read the blog
            </button>
          </div>

          <div style={{ display: "flex", gap: 18, fontSize: 13, color: C.textFaint, fontFamily: FONT_MONO }}>
            <span>{PERSONAL_INFO.location}</span>
            <span>{PERSONAL_INFO.phone}</span>
          </div>
        </div>

        {/* Terminal / test-run card */}
        <div style={{ background: "#0D1013", border: `1px solid ${C.border}`, borderRadius: 12, padding: 0, fontFamily: FONT_MONO, overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", borderBottom: `1px solid ${C.border}`, background: C.surface }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F56" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27C93F" }} />
            <span style={{ marginLeft: 8, fontSize: 12, color: C.textFaint }}>test-run.log</span>
          </div>
          <div style={{ padding: 22, fontSize: 12.5, lineHeight: 2.1 }}>
            <div style={{ color: C.textFaint }}>$ run --suite regression --env prod</div>
            <div><span style={{ color: C.pass }}>✓ PASS</span> <span style={{ color: C.textMuted }}>Jnr SQA Engineer · unidevGO Software Solutions</span></div>
            <div><span style={{ color: C.pass }}>✓ PASS</span> <span style={{ color: C.textMuted }}>Founder · ICT Success Academy</span></div>
            <div><span style={{ color: C.pass }}>✓ PASS</span> <span style={{ color: C.textMuted }}>Playwright automation · POM structure</span></div>
            <div><span style={{ color: C.pass }}>✓ PASS</span> <span style={{ color: C.textMuted }}>Performance · K6, JMeter, OWASP ZAP</span></div>
            <div><span style={{ color: C.warn }}>⚠ RUNNING</span> <span style={{ color: C.textMuted }}>CI/CD · GitHub Actions, Jenkins</span></div>
            <div style={{ marginTop: 10, color: C.textFaint }}>5 passed, 1 running, 0 failed</div>
          </div>
        </div>
      </div>

      {/* stack strip */}
      <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "16px 24px", overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "10px 22px", justifyContent: "center", fontFamily: FONT_MONO, fontSize: 11.5, color: C.textFaint }}>
          {STACK_ITEMS.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto", scrollMarginTop: 64 }}>
        <SectionTag>// experience.log</SectionTag>
        <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: 36 }}>Where I've worked</h2>

        <div style={{ position: "relative", paddingLeft: 24 }}>
          <div style={{ position: "absolute", left: 3, top: 6, bottom: 6, width: 1, background: C.border }} />
          {EXPERIENCES.map((exp, i) => (
            <div key={i} style={{ position: "relative", marginBottom: i === EXPERIENCES.length - 1 ? 0 : 36 }}>
              <span style={{ position: "absolute", left: -24, top: 6, width: 8, height: 8, borderRadius: "50%", background: C.pass, boxShadow: `0 0 0 3px ${C.bg}, 0 0 0 4px ${C.border}` }} />
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700 }}>{exp.role}</h3>
                  <div style={{ fontSize: 14, color: C.textMuted, marginTop: 2 }}>{exp.company} · {exp.location}</div>
                </div>
                <span style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.textFaint, whiteSpace: "nowrap" }}>{exp.period}</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, padding: 0, margin: 0 }}>
                {exp.points.map((p, j) => (
                  <li key={j} style={{ fontSize: 14, color: C.textMuted, display: "flex", gap: 10, lineHeight: 1.6 }}>
                    <span style={{ color: C.pass, fontFamily: FONT_MONO, flexShrink: 0 }}>›</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto", scrollMarginTop: 64 }}>
        <SectionTag>// projects.log</SectionTag>
        <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: 36 }}>Projects & work</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14, marginBottom: 56 }}>
          {PROJECTS.map((proj, i) => (
            <div key={i} className="row-card status-strip-pass" style={{ borderRadius: 8, padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.pass, display: "flex", alignItems: "center", gap: 6 }}>
                  <StatusDot color={C.pass} /> {proj.tag}
                </span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{proj.title}</h3>
              <p style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.6, marginBottom: 16 }}>{proj.desc}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {proj.tech.map((t, j) => (
                  <span key={j} style={{ fontFamily: FONT_MONO, fontSize: 10.5, background: C.surfaceAlt, border: `1px solid ${C.border}`, padding: "3px 8px", borderRadius: 4, color: C.textMuted }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <SectionTag>// local & freelance network</SectionTag>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
            {LOCAL_CLIENTS.map((client, idx) => (
              <div key={idx} className="row-card" style={{ borderRadius: 8, padding: "18px 16px" }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{client.name}</div>
                <div style={{ fontSize: 12, color: C.textFaint, marginTop: 3 }}>{client.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS & EDUCATION ── */}
      <section id="skills" className="grid-2" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, scrollMarginTop: 64 }}>
        <div>
          <SectionTag>// skills.json</SectionTag>
          <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: 30 }}>What I work with</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i}>
                <h4 style={{ fontSize: 13, fontWeight: 700, color: C.textMuted, marginBottom: 10 }}>{cat.category}</h4>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {cat.skills.map((skill, j) => (
                    <span key={j} style={{ fontSize: 12.5, background: C.surface, border: `1px solid ${C.border}`, padding: "6px 12px", borderRadius: 6, color: C.textMain }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="row-card" style={{ padding: 22, borderRadius: 8 }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.info, marginBottom: 8 }}>education</div>
            <p style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.5 }}>{PERSONAL_INFO.education}</p>
          </div>
          <div className="row-card" style={{ padding: 22, borderRadius: 8 }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.warn, marginBottom: 8 }}>certification</div>
            <p style={{ fontSize: 14, fontWeight: 600 }}>{PERSONAL_INFO.certification}</p>
          </div>
          <div className="row-card" style={{ padding: 22, borderRadius: 8 }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.pass, marginBottom: 8 }}>founder · ICT Success Academy</div>
            <p style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.6 }}>
              Teaching ICT courses for SSC, HSC/Inter, and Honors students, plus hands-on Basic Computer Training and web-development workshops.
            </p>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto", scrollMarginTop: 64 }}>
        <SectionTag>// blog.log</SectionTag>
        <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: 8 }}>Notes on testing</h2>
        <p style={{ fontSize: 14, color: C.textMuted, marginBottom: 36, maxWidth: 520, lineHeight: 1.6 }}>
          Short write-ups on manual testing, automation, and where AI tools actually fit into QA work.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {BLOG_POSTS.map((post) => {
            const isOpen = openPost === post.id;
            return (
              <div key={post.id} className="row-card" style={{ borderRadius: 8, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenPost(isOpen ? null : post.id)}
                  style={{ width: "100%", textAlign: "left", background: "transparent", border: 0, cursor: "pointer", padding: 22, color: C.textMain, display: "flex", flexDirection: "column", gap: 10 }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: post.tagColor, border: `1px solid ${post.tagColor}55`, padding: "3px 9px", borderRadius: 4 }}>{post.tag}</span>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 11.5, color: C.textFaint }}>{post.date} · {post.readTime} read</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700 }}>{post.title}</h3>
                  <p style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>{post.excerpt}</p>
                  <span style={{ fontSize: 12.5, color: post.tagColor, fontWeight: 600, marginTop: 4 }}>{isOpen ? "Collapse ↑" : "Read post ↓"}</span>
                </button>

                {isOpen && (
                  <div style={{ padding: "0 22px 26px", borderTop: `1px solid ${C.border}` }}>
                    <div style={{ paddingTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
                      {post.body.map((para, k) => (
                        <p key={k} style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.75, margin: 0 }}>{para}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "80px 24px", maxWidth: 680, margin: "0 auto", scrollMarginTop: 64 }}>
        <SectionTag>// contact.log</SectionTag>
        <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: 36 }}>Get in touch</h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
          <div className="row-card" style={{ padding: 18, borderRadius: 8 }}>
            <div style={{ fontSize: 11.5, color: C.textFaint, marginBottom: 4 }}>Email</div>
            <a href={`mailto:${PERSONAL_INFO.email}`} style={{ color: C.pass, fontWeight: 600, fontSize: 13, textDecoration: "none" }}>{PERSONAL_INFO.email}</a>
          </div>
          <div className="row-card" style={{ padding: 18, borderRadius: 8 }}>
            <div style={{ fontSize: 11.5, color: C.textFaint, marginBottom: 4 }}>Phone / WhatsApp</div>
            <a href={`tel:${PERSONAL_INFO.phone}`} style={{ fontWeight: 600, fontSize: 13, textDecoration: "none" }}>{PERSONAL_INFO.phone}</a>
          </div>
          <div className="row-card" style={{ padding: 18, borderRadius: 8 }}>
            <div style={{ fontSize: 11.5, color: C.textFaint, marginBottom: 4 }}>Location</div>
            <div style={{ fontWeight: 600, fontSize: 13 }}>{PERSONAL_INFO.location}</div>
          </div>
          <div className="row-card" style={{ padding: 18, borderRadius: 8 }}>
            <div style={{ fontSize: 11.5, color: C.textFaint, marginBottom: 4 }}>Profiles</div>
            <div style={{ display: "flex", gap: 10 }}>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" style={{ color: C.info, fontSize: 12.5, fontWeight: 700, textDecoration: "none" }}>LinkedIn</a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" style={{ color: C.info, fontSize: 12.5, fontWeight: 700, textDecoration: "none" }}>GitHub</a>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="row-card status-strip-pass" style={{ textAlign: "center", padding: 32, borderRadius: 8 }}>
            <div style={{ color: C.pass, fontFamily: FONT_MONO, fontSize: 13, marginBottom: 8 }}>✓ message sent</div>
            <p style={{ color: C.textMuted, fontSize: 14 }}>Thanks for reaching out — I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="row-card" style={{ display: "flex", flexDirection: "column", gap: 12, padding: 24, borderRadius: 8 }}>
            <input required placeholder="Your name" style={{ padding: "12px 14px", borderRadius: 6, border: `1px solid ${C.border}`, background: C.surfaceAlt, color: C.textMain, fontSize: 14, outline: "none" }} />
            <input required type="email" placeholder="Your email" style={{ padding: "12px 14px", borderRadius: 6, border: `1px solid ${C.border}`, background: C.surfaceAlt, color: C.textMain, fontSize: 14, outline: "none" }} />
            <textarea required rows={4} placeholder="Message" style={{ padding: "12px 14px", borderRadius: 6, border: `1px solid ${C.border}`, background: C.surfaceAlt, color: C.textMain, fontSize: 14, outline: "none", resize: "vertical" }} />
            <button type="submit" className="cta-primary" style={{ padding: 13, borderRadius: 6, border: 0, background: C.pass, color: "#0B132B", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
              Send message
            </button>
          </form>
        )}
      </section>

      <footer style={{ padding: "28px 24px", borderTop: `1px solid ${C.border}`, textAlign: "center", fontSize: 12.5, color: C.textFaint }}>
        {PERSONAL_INFO.name} — {PERSONAL_INFO.title} @ unidevGO · Founder, ICT Success Academy
      </footer>
    </div>
  );
}
