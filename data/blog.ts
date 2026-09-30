export const blogs = [
  {
    id: 1,
    title: "Why Cloud Migration Projects Fail (And How to Avoid It)",
    slug: "why-cloud-migration-projects-fail",
    image: "/blog/cloud-migration-fails.png",
    description:
      "Most failed cloud migrations aren't caused by the wrong provider — they're caused by skipping the planning work that makes the move safe. Here's what actually goes wrong.",
    keywords: [
      "cloud migration",
      "AWS migration",
      "Azure migration",
      "infrastructure",
      "DevOps",
    ],
    content: `
        <section>
            <p>Cloud migration is often pitched as a technical project: pick a provider, lift your servers, done. In practice, the technical part is rarely what sinks a migration. The failures we see repeatedly come from decisions made — or skipped — weeks before a single server actually moves.</p>
        </section>

        <section>
            <h2>1. Migrating without a cost model</h2>
            <p>Cloud pricing is granular in a way on-premise hosting never was. Storage, egress bandwidth, API calls, and idle compute all show up as separate line items, and it's common for a team to migrate first and discover the real bill a month later. Before any migration starts, we build a cost model based on actual current usage — not the provider's calculator defaults — so there are no surprises on the first invoice.</p>
        </section>

        <section>
            <h2>2. Treating it as a single cutover</h2>
            <p>A "big bang" migration — moving everything in one weekend — sounds efficient but concentrates all the risk into a single window. If something breaks, you're debugging production issues under pressure with no fallback. A phased migration, moving one service or one environment at a time with a clear rollback plan at each stage, takes longer but means a failure is contained and recoverable.</p>
        </section>

        <section>
            <h2>3. No monitoring until after launch</h2>
            <p>It's common to migrate infrastructure first and add monitoring and alerting afterward, once something has already gone wrong. Observability — logs, metrics, uptime alerts — should exist in the new environment before real traffic hits it, not after. Otherwise, the first sign of a problem is a customer complaint rather than an alert.</p>
        </section>

        <section>
            <h2>4. Underestimating data migration</h2>
            <p>Moving application code is usually the easy part. Moving live databases — especially with minimal downtime — is where most timelines slip. Replication lag, schema differences between managed database services, and data validation after the move all take longer than teams expect. Budgeting real time for a data migration dry run, rather than doing it live for the first time on cutover day, catches most of these issues early.</p>
        </section>

        <section>
            <h2>The pattern behind all four</h2>
            <p>Every one of these failure modes comes from the same root cause: treating migration as an infrastructure task instead of a project with its own risk management. The technical move — copying files, standing up new servers — is genuinely the easy part. The planning, cost modeling, and staged rollout around it is what determines whether the migration is a quiet non-event or a multi-week fire drill.</p>
        </section>
    `,
  },
  {
    id: 2,
    title:
      "The Real Cost of Technical Debt (And When It's Actually Worth Taking On)",
    slug: "real-cost-of-technical-debt",
    image: "/blog/technical-debt.png",
    description:
      "Technical debt isn't always a mistake — sometimes it's the right call. The problem is most teams never decide to take it on; it just accumulates. Here's how to tell the difference.",
    keywords: [
      "technical debt",
      "software architecture",
      "engineering management",
      "code quality",
    ],
    content: `
        <section>
            <p>Technical debt gets talked about like it's always a failure — a sign the team cut corners. That's only half true. Every fast-moving product has some amount of technical debt, and taken on deliberately, it's a legitimate tool. The problem is that most technical debt isn't deliberate. It accumulates from a hundred small decisions nobody consciously made, and by the time it's visible, it's expensive to unwind.</p>
        </section>

        <section>
            <h2>Debt you choose is different from debt you inherit</h2>
            <p>There's a real difference between shipping a simpler version of a feature on purpose, knowing you'll revisit it once you have real usage data — and accumulating debt because nobody had time to write tests, document the data model, or review architecture decisions before the next deadline. The first is a strategy. The second is what eventually makes a codebase too risky to change.</p>
        </section>

        <section>
            <h2>Where the cost actually shows up</h2>
            <p>Technical debt rarely shows up as a single dramatic failure. It shows up as velocity quietly dropping over months: features that used to take a week now take three, because every change requires understanding an increasingly tangled set of dependencies first. New engineers take longer to onboard because the code doesn't reflect how the system actually behaves anymore. Bugs take longer to trace because the failure is three layers away from its actual cause.</p>
            <p>None of this shows up on a roadmap. It shows up as "why is this taking so long" — which is a much harder problem to diagnose and budget for after the fact.</p>
        </section>

        <section>
            <h2>When it's genuinely the right call</h2>
            <ul>
                <li><strong>Validating an unproven idea.</strong> If you don't yet know whether a feature will be used, over-engineering it is its own kind of waste.</li>
                <li><strong>Hitting a real deadline that matters.</strong> A funding milestone or a committed client launch date can be worth a known, tracked shortcut.</li>
                <li><strong>Isolated, low-traffic code paths.</strong> Debt in a rarely-touched admin tool costs far less than debt in your core checkout flow.</li>
            </ul>
        </section>

        <section>
            <h2>Making it visible instead of invisible</h2>
            <p>The single highest-leverage habit here is writing debt down the moment you take it on — a one-line comment, a ticket, anything that survives past the sprint it was created in. Debt that's tracked can be prioritized later. Debt that's invisible just gets rediscovered, usually at the worst possible time, by whoever touches that code next.</p>
        </section>
    `,
  },
  {
    id: 3,
    title:
      "React Native vs. Flutter in 2026: Which One Actually Fits Your Project",
    slug: "react-native-vs-flutter-2026",
    image: "/blog/react-native-vs-flutter.png",
    description:
      "Both frameworks can ship a production-quality app. The real decision isn't about which is 'better' — it's about which fits your team and your product's specific constraints.",
    keywords: [
      "React Native",
      "Flutter",
      "mobile development",
      "cross-platform apps",
    ],
    content: `
        <section>
            <p>React Native and Flutter both reached the point years ago where "can this framework build a serious app" stopped being the real question. Companies ship demanding, high-traffic apps on both. The decision that actually matters for most teams isn't about raw capability — it's about fit: your existing skills, your design requirements, and how your app needs to integrate with the rest of your stack.</p>
        </section>

        <section>
            <h2>Where React Native has the edge</h2>
            <ul>
                <li><strong>Existing JavaScript/React teams.</strong> If your web app is already React, your team's mental model — component structure, hooks, state management — carries over directly.</li>
                <li><strong>Sharing logic with a web app.</strong> Business logic, API clients, and state management can often be shared between a React web app and a React Native app in the same monorepo.</li>
                <li><strong>Native-feeling UI by default.</strong> React Native renders using each platform's actual native UI components, which can mean less custom work to match platform conventions out of the box.</li>
            </ul>
        </section>

        <section>
            <h2>Where Flutter has the edge</h2>
            <ul>
                <li><strong>Pixel-precise, highly custom UI.</strong> Because Flutter draws every pixel itself rather than using native components, a complex custom design system renders identically on both platforms without platform-specific tweaking.</li>
                <li><strong>One codebase, four+ targets.</strong> Flutter's same rendering approach extends more consistently to desktop and web targets alongside mobile, if that's on your roadmap.</li>
                <li><strong>Performance-sensitive animation.</strong> Because Flutter isn't bridging to native UI components, complex custom animations tend to stay smoother with less tuning.</li>
            </ul>
        </section>

        <section>
            <h2>The question that actually settles it</h2>
            <p>In practice, the deciding factor for most of our clients isn't a framework benchmark — it's what their team already knows, and what their design actually demands. A team of React developers building a fairly standard app with native-feeling UI has little reason to add Dart to their stack. A team building a highly custom, animation-heavy interface with no existing JS investment often finds Flutter's rendering model saves real time.</p>
            <p>If you're unsure which applies to you, the fastest way to find out is prototyping the single hardest screen in your app — the most custom or most animation-heavy one — in both, and seeing which one gets there with less friction.</p>
        </section>
    `,
  },
  {
    id: 4,
    title: "What's Actually Worth Automating (And What Isn't)",
    slug: "whats-actually-worth-automating",
    image: "/blog/automation-worth-it.png",
    description:
      "Not every repetitive task is a good automation candidate. Here's a practical way to tell which manual processes are worth the engineering investment — and which aren't.",
    keywords: [
      "automation",
      "workflow automation",
      "AI automation",
      "business process",
    ],
    content: `
        <section>
            <p>"We should automate this" is one of the most common requests we hear, and it's often right — but not always. Automation has a real cost: it needs to be built, tested, monitored, and maintained, and a poorly chosen automation can end up costing more attention than the manual process it replaced. Before automating anything, it's worth running the task through a short set of questions.</p>
        </section>

        <section>
            <h2>Is it actually repetitive, or just recurring?</h2>
            <p>A task that happens every week but requires human judgment each time — deciding how to handle an unusual customer request, for instance — is recurring, not repetitive. Automation works best on tasks where the steps are genuinely the same every time, not ones that merely happen on a schedule.</p>
        </section>

        <section>
            <h2>What does a failure actually cost?</h2>
            <p>Automating a low-stakes task — reformatting a weekly report — is nearly risk-free if it breaks; someone notices and fixes it. Automating a high-stakes task — auto-approving refunds, for instance — needs real error handling, alerting, and a fallback, because a silent failure there costs real money or trust. The build effort should scale with the cost of the automation getting it wrong, not just the frequency of the task.</p>
        </section>

        <section>
            <h2>Where AI genuinely helps</h2>
            <p>Machine learning earns its place in an automation when the task involves judgment on unstructured input: reading a document and extracting key fields, classifying a support ticket by topic, summarizing a long thread. Where the task is really a fixed set of rules — "if status equals X, send email Y" — a plain rule-based workflow is more reliable, cheaper to run, and far easier to debug than an AI model doing the same job less predictably.</p>
        </section>

        <section>
            <h2>A simple way to prioritize</h2>
            <p>The best early automation candidates are usually tasks that are: frequent enough to add up (daily or weekly, not once a quarter), low-risk if something goes briefly wrong, and genuinely rule-based rather than judgment-based. Start there, get the monitoring and alerting habits right on something low-stakes, and only then move toward automating the higher-stakes, higher-judgment processes — with proportionally more care built in.</p>
        </section>
    `,
  },
  {
    id: 5,
    title: "Why AI Study Apps Should Answer From the Student's Own Notes",
    slug: "why-ai-study-apps-should-answer-from-student-notes",
    image: "/blog/why-ai-study-apps-should-answer-from-student-notes.png",
    description:
      "An AI chatbot that answers confidently and wrongly is worse than no AI at all — especially for students who can't tell the difference. Here's how we grounded DuoDemia's tutor in the material it's actually asked about.",
    keywords: [
      "AI grounding",
      "RAG",
      "AI study app",
      "LLM products",
      "education technology",
    ],
    content: `
        <section>
            <p>A language model that answers confidently is a lot of fun — until it's confidently wrong. In most products, a wrong answer is an inconvenience. In a study tool, it's misinformation that a student might carry into an exam. The frustrating part is that you can't design the confidently wrong answer out of a generic chatbot by prompting alone; you have to change where the answer comes from. That decision shaped the biggest product we shipped this year — DuoDemia, an AI study app that turns a student's own lecture notes and past questions into revision materials.</p>
        </section>

        <section>
            <h2>The problem with confident answers</h2>
            <p>Give a generic chatbot a question about a course and it will produce a fluent, well-structured answer — whether or not it's true. Professionals can usually sanity-check a plausible-sounding answer against what they already know or can look up. A student facing a question on, say, the money supply either hasn't covered that topic yet or is actively trying to learn it, which means they have no reliable way to tell a real explanation from an invented one. The failure isn't the model's inaccuracy — it's that inaccuracy is indistinguishable from success to the person who needs the answer most.</p>
        </section>

        <section>
            <h2>Ground the model in a source of truth</h2>
            <p>The fix we settled on is retrieval-augmented generation over the student's own documents. When a student uploads a lecture PDF, a slide deck or a set of notes, we chunk and index the text so the tutor can search it. When the student asks a question, the tutor retrieves only the most relevant passages from that student's uploaded material and constructs the answer from those passages — not from its general knowledge of the internet.</p>
            <p>That part is fairly standard RAG. The part that matters for trust is the rejection path: when a question isn't supported by the uploaded material, the tutor says exactly that instead of inventing an answer. It's a small behavior, but it's the difference between a study tool that quietly fabricates and one a student can actually rely on. This is the approach running live at <a href="https://www.duodemia.com" target="_blank" rel="noopener noreferrer">duodemia.com</a>.</p>
        </section>

        <section>
            <h2>From answer to revision pack</h2>
            <p>Grounding solved the trust problem, but answering questions well is only half of studying. So we turned each uploaded document into a full revision pack: a short summary, the key concepts an examiner would likely ask about, likely exam questions, spaced-repetition flashcards and a practice quiz. As students practise, the system tracks their accuracy topic by topic and feeds that back into a weakness map — so the app points students at what to revise next instead of leaving them to re-read 80-slide decks.</p>
            <p>Practising matters more than reading, so quizzes and timed mock exams are a first-class part of the product rather than an add-on. Students also wanted to study together, which meant adding groups, shared progress and leaderboards on top of the study packs.</p>
        </section>

        <section>
            <h2>What this taught us about building AI products</h2>
            <ul>
                <li><strong>Ground every answer in data you can point to.</strong> If the model can't cite the source, the user shouldn't have to take the answer on faith. The "where did this come from?" question should be answerable every time.</li>
                <li><strong>Design the "I don't know" path as a feature.</strong> Most LLM products treat refusal as a failure mode to hide. We made it visible and deliberate — it's precisely what builds trust with users who can't verify answers themselves.</li>
                <li><strong>Inputs aren't clean.</strong> Lecture decks are scanned, folded, covered in handwriting, occasionally upside down. A chunking and extraction pipeline that tolerates messy real-world documents is a non-trivial chunk of the engineering work.</li>
                <li><strong>Measure outcomes, not just answer quality.</strong> We track quiz accuracy and topic mastery, because the product is judged by whether students perform better, not by whether answers look fluent.</li>
            </ul>
        </section>

        <section>
            <h2>A rule worth borrowing</h2>
            <p>The lesson generalises past education: if a chatbot answer can't be traced to something the person actually owns or verified, treat the invention risk as a product decision, not a model tweak. For any AI feature whose users can't reliably fact-check the output, a grounded, say-so-when-unsure design isn't a nice-to-have — it's the entire value proposition.</p>
        </section>
    `,
  },
];
