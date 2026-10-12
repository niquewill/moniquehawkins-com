// app/insights/the-real-reason-ai-rollouts-fail/page.tsx
// Article: "The Real Reason AI Rollouts Fail Isn't the AI"
// The article text below matches the final Claude Doc (tone pass, October 2026).

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ARTICLES } from '../articles'
import ArticleShell, { H2, P, UL, OL, Cite, Pull } from '../ArticleShell'

const article = ARTICLES.find((a) => a.slug === 'the-real-reason-ai-rollouts-fail')!
const url = `https://moniquehawkins.com/insights/${article.slug}`

export const metadata: Metadata = {
  title: article.title,
  description: article.excerpt,
  alternates: { canonical: url },
  openGraph: {
    type: 'article',
    url,
    title: article.title,
    description: article.excerpt,
    publishedTime: article.isoDate,
    authors: ['Monique Hawkins'],
    images: [{ url: article.shareImage, width: 1200, height: 630, alt: article.imageAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: article.excerpt,
    images: [article.shareImage],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.excerpt,
  image: `https://moniquehawkins.com${article.shareImage}`,
  datePublished: article.isoDate,
  author: { '@type': 'Person', name: 'Monique Hawkins', url: 'https://moniquehawkins.com/about' },
  publisher: { '@type': 'Person', name: 'Monique Hawkins', url: 'https://moniquehawkins.com' },
  mainEntityOfPage: url,
}

const SOURCES = [
  {
    fact: '75% of knowledge workers use AI; 39% of users trained by their company; 78% bring their own AI; 79% of leaders say AI is critical; 60% worry they lack a plan (31,000 people, 31 countries)',
    label: 'Microsoft & LinkedIn, 2024 Work Trend Index',
    href: 'https://blogs.microsoft.com/blog/2024/05/08/microsoft-and-linkedin-release-the-2024-work-trend-index-on-the-state-of-ai-at-work/',
  },
  {
    fact: '36% feel adequately trained; 25% of frontline workers get enough guidance (10,600+ workers, 11 countries)',
    label: 'BCG, AI at Work 2025',
    href: 'https://www.bcg.com/press/26june2025-beyond-ai-adoption-full-potential',
  },
  {
    fact: '74% of companies yet to show tangible value; 10% algorithms / 20% technology and data / 70% people and processes (1,000 executives)',
    label: 'BCG, October 24, 2024',
    href: 'https://bcg.com/ja-jp/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value',
  },
  {
    fact: '60% piloting Copilot; 6% planning large-scale deployment; 73% needed more change management; 87% say users need frequent education (132 IT leaders, June 2024)',
    label: 'Computerworld, reporting Gartner',
    href: 'https://www.computerworld.com/article/3542000/microsoft-365-copilot-rollouts-slowed-by-data-security-roi-concerns.html',
  },
  {
    fact: 'Roughly 95% of enterprise generative AI pilots had not yet produced measurable P&L impact; a "learning gap"; generic tools do not adapt to workflows',
    label: 'Fortune, reporting MIT NANDA, The GenAI Divide 2025',
    href: 'https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/',
  },
  {
    fact: '7,769+ licenses, almost 60 agencies, January to June 2024',
    label: 'Australian DTA, evaluation background',
    href: 'https://www.digital.gov.au/initiatives/copilot-trial/microsoft-365-copilot-evaluation-report-full/appendix-a',
  },
  {
    fact: 'Up to an hour saved on some tasks; 64% of managers saw gains; about a third used Copilot daily',
    label: 'Australian DTA, executive summary',
    href: 'https://www.digital.gov.au/initiatives/copilot-trial/summary-evaluation-findings/cts-executive-summary',
  },
  {
    fact: '75% confidence with 3+ forms of training, 28 points higher than one form; tailored training worked best',
    label: 'Australian DTA, evaluation findings',
    href: 'https://digital.gov.au/initiatives/copilot-trial/summary-evaluation-findings/cts-evaluation-findings',
  },
  {
    fact: 'Microsoft 365 Copilot for enterprise: $30 per user per month, paid yearly, as an add-on to a qualifying Microsoft 365 license',
    label: 'Microsoft, Copilot enterprise pricing',
    href: 'https://www.microsoft.com/en-us/microsoft-365-copilot/enterprise',
  },
  {
    fact: 'Microsoft attributes the July 2026 Microsoft 365 price changes to expanded AI, security and management capabilities',
    label: 'CIO Dive, December 5, 2025',
    href: 'https://www.channeldive.com/news/microsoft-365-ai-tools-higher-price/807203/',
  },
  {
    fact: 'Microsoft 365 business plans up roughly 5% to 33% from July 1, 2026, depending on plan; Business Premium and Office 365 E1 unchanged',
    label: 'Microsoft, 2026 Microsoft 365 pricing updates',
    href: 'https://www.microsoft.com/en-us/licensing/news/2026-M365-Packaging-Pricing-Updates',
  },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleShell article={article} sources={SOURCES} sourcesNote="Every figure was checked against the page listed here in October 2026.">

        <figure className="mh-art-figure">
          <Image src={article.image} alt={article.imageAlt} width={1672} height={941} priority sizes="(max-width: 900px) 100vw, 900px" />
        </figure>

        <P>Hand a seven-year-old a tablet they have never seen, and they will have it figured out before you finish the instructions. They tap everything. They break things. They ask why, then why again, and they are not embarrassed by a single wrong answer.</P>
        <P>Now hand that same tool to a 45-year-old with back-to-back meetings and an inbox that never hits zero. Watch what happens. They wait for someone to show them. They worry about clicking the wrong thing. And eventually they decide they&apos;re &quot;just not a tech person&quot; and go right back to the way they&apos;ve always done it.</P>
        <P>Sound like anyone on your team? Maybe it sounds like you. It definitely sounded like me at times.</P>
        <P>Here&apos;s what I&apos;ve learned from years of teaching everyone from second graders to seasoned educators to busy professionals: that difference has nothing to do with intelligence. It&apos;s the same curiosity. It just got buried under deadlines, disappointments and the simple fact that nobody ever gave the grown-ups time to learn. The curious kid is still in there. They&apos;re just fighting with the exhausted adult for attention.</P>
        <P>And right now, that tug-of-war is exactly where a lot of AI rollouts are being lost. Not in the technology. In the people.</P>
        <P>Copilot happens to be today&apos;s headline, but this story plays out with almost every new system a business brings in: Microsoft 365, a new CRM, a workflow platform, a collaboration tool. Different software, same pattern.</P>
        <H2>They bought the tool. They skipped the people.</H2>
        <P>See if this sounds familiar. An email goes out on Monday morning: &quot;Great news! Everyone now has access to our new AI assistant.&quot; There&apos;s a link. Maybe a 30-minute webinar that half the team watches with their cameras off. Three months later, a handful of people use it regularly, everyone else has forgotten it exists, and someone in leadership is asking why the investment isn&apos;t paying off.</P>
        <P>That&apos;s not a rollout. That&apos;s a purchase.</P>
        <P>And if that&apos;s happening in your building, you&apos;re far from alone.</P>
        <P>When Microsoft and LinkedIn surveyed 31,000 people in 31 countries, three out of four knowledge workers were already using AI at work. But only 39% had gotten any AI training from their company, and 78% were bringing their own AI tools to work. Translation: people are curious and willing. They&apos;re just figuring it out on their own, often on their phones, with tools the company never approved. <Cite href="https://blogs.microsoft.com/blog/2024/05/08/microsoft-and-linkedin-release-the-2024-work-trend-index-on-the-state-of-ai-at-work/">Microsoft Work Trend Index 2024</Cite></P>
        <P>Ask employees how prepared they feel, and the picture gets clearer. In BCG&apos;s survey of more than 10,600 workers, only 36% said they felt adequately trained. On the front line, just 25% said their leaders give them enough guidance. <Cite href="https://www.bcg.com/press/26june2025-beyond-ai-adoption-full-potential">BCG, AI at Work 2025</Cite></P>
        <P>So it&apos;s no surprise leaders are frustrated with the results. In another BCG survey, 74% of companies hadn&apos;t yet shown tangible value from AI. <Cite href="https://bcg.com/ja-jp/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value">BCG, October 2024</Cite> And with Copilot specifically, a Gartner survey reported by Computerworld found that in mid-2024, 60% of IT leaders had started a Copilot pilot, but only 6% were ready to roll it out widely. Most said it took more change management than they expected, and 87% said people need frequent support and education. <Cite href="https://www.computerworld.com/article/3542000/microsoft-365-copilot-rollouts-slowed-by-data-security-roi-concerns.html">Computerworld, reporting Gartner</Cite></P>
        <P>One widely discussed MIT-backed analysis, reported by Fortune, found that roughly 95% of the enterprise generative AI pilots it studied had not yet produced measurable profit-and-loss impact. And here&apos;s the part I find most telling: the researchers didn&apos;t blame the AI. They called it a <strong>learning gap</strong>. <Cite href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/">Fortune, reporting MIT NANDA</Cite></P>
        <Pull>Put it all together and the story is simple. The technology showed up. The learning didn&apos;t.</Pull>
        <H2>Slow down to speed up</H2>
        <P>You&apos;ve probably sat through the vendor demo. The presenter types one sentence and a beautiful report appears in seconds. Everyone in the room nods. Someone says, &quot;We need this.&quot; And a few weeks later, the contract is signed.</P>
        <P>I understand the pull. Nobody wants to be the company that fell behind. In that same Microsoft survey, 79% of leaders said AI is critical to staying competitive, and 60% worried their company didn&apos;t have a real plan to put it in place. When you feel behind and you don&apos;t have a plan, buying something feels like progress.</P>
        <P>But a demo is built to impress, not to match your Tuesday afternoon. It doesn&apos;t show you the spreadsheet your billing team rebuilds every month, or the three systems your front desk toggles between to answer one customer question. The only good reason to buy a tool is that it fits the way your people actually work.</P>
        <P>That&apos;s why I tell clients to slow down so they can speed up. Before you spend another dollar, have someone sit with your team and really look at the work:</P>
        <UL items={[
          <>What eats the most hours every week?</>,
          <>Where are people copying, pasting, retyping and chasing information?</>,
          <>What do your best people do that everyone else doesn&apos;t?</>,
          <>What are you already paying for that nobody is using?</>,
        ]} />
        <P>The companies getting real value already work this way. BCG found they put roughly 10% of their AI effort into algorithms, 20% into technology and data, and <strong>70% into people and processes</strong>. Most companies flip that. They pour money into the license and leave that 70% to chance.</P>
        <P>That MIT-backed analysis lands in the same place. Generic tools stall inside companies because they don&apos;t fit the company&apos;s workflows. The answer isn&apos;t a fancier tool. It&apos;s understanding the work before the tool shows up.</P>
        <H2>Think in years, not launch dates</H2>
        <P>Here&apos;s a meeting I&apos;ve watched happen more than once. About six months after a big rollout, someone from finance looks up from the renewal invoice and asks, &quot;So... is this actually working?&quot; The room goes quiet. Nobody has an answer, because nobody ever decided what &quot;working&quot; would look like.</P>
        <P>Education taught me to ask that question on day one.</P>
        <P>In schools, we never had money to waste. So we never just asked, &quot;What do we need this year?&quot; We asked what it would look like in years two, three and four. Who keeps it running? Who trains the new teacher who shows up in year three?</P>
        <P>And we lived by one rule: give a change four consecutive years before you judge it. Year one is messy. Year two, habits start to form. By years three and four, you finally have real numbers that show whether it helped.</P>
        <P>Businesses rarely think that way about AI. They buy it like a phone upgrade, then judge it after a few months, before anyone has really learned to use it.</P>
        <P>That&apos;s risky, because the bills keep growing. Microsoft lists Microsoft 365 Copilot for enterprise at <a href="https://www.microsoft.com/en-us/microsoft-365-copilot/enterprise" target="_blank" rel="noopener noreferrer">$30 per user, per month</a>, on an annual commitment, and that&apos;s on top of a qualifying Microsoft 365 license. For a 100-person company, the add-on alone is $36,000 a year, or $144,000 over four years, before the base licenses or a dime for training. And starting July 1, 2026, Microsoft raised prices on most Microsoft 365 business plans by <a href="https://www.microsoft.com/en-us/licensing/news/2026-M365-Packaging-Pricing-Updates" target="_blank" rel="noopener noreferrer">roughly 5% to 33%</a>, depending on the plan, pointing to new AI, security and management features. <Cite href="https://www.channeldive.com/news/microsoft-365-ai-tools-higher-price/807203/">CIO Dive</Cite> Spend that on tools nobody uses, and you haven&apos;t just wasted a budget line. You&apos;ve made your business more fragile.</P>
        <P>So plan it like a school district would:</P>
        <UL items={[
          <><strong>Year one:</strong> Pick the workflows that matter most, train people on them in more than one format, and set your baseline numbers.</>,
          <><strong>Year two:</strong> Expand to the next set of tasks and grow champions inside each team.</>,
          <><strong>Years three and four:</strong> Measure the growth. How much time came back? Who uses it every week? What got better for your customers?</>,
        ]} />
        <P>Technology investments should be judged over years, not months. Then, when finance asks if it&apos;s working, you&apos;ll have an answer: keep it, change it or cut it.</P>
        <H2>Adults still learn. They just learn differently.</H2>
        <P>Quick question: how much of Outlook do you actually use? Not what it can do. What you use. If you&apos;re like most people, it&apos;s the same handful of buttons you learned years ago.</P>
        <P>I&apos;ve spent most of my career working with Microsoft products. Outlook, Word, Excel, Teams, SharePoint—the same tools millions of people use every day.</P>
        <P>Looking back, I realize that for years I was using many of them just well enough to get through the day. I knew the basics. I could do my job. But I wasn&apos;t using them efficiently, and I certainly wasn&apos;t taking advantage of many of the features designed to make my work easier.</P>
        <P>That&apos;s not because I wasn&apos;t capable of learning them. It&apos;s because, like most professionals, I was busy. I learned what I needed to survive and moved on to the next deadline.</P>
        <P>That&apos;s exactly what happens in businesses today. Employees aren&apos;t resisting technology. They&apos;re trying to keep up with their work.</P>
        <P>Here&apos;s the thing about adults: they haven&apos;t lost the ability to learn. They&apos;ve lost the permission. Somewhere between the first job and the fortieth deadline, being wrong started to feel expensive. So people stop experimenting where anyone can see them.</P>
        <P>Think about the last training you sat through that actually stuck. Chances are it explained why it mattered, respected what you already knew, and solved a problem sitting on your desk that week. That&apos;s what adults need. A generic &quot;Intro to Copilot&quot; session, with someone clicking through every menu while you think about the 40 emails piling up, misses all three.</P>
        <P>People also take in information in different ways. Some need to watch you do it. Some want written steps so they can try it on their own later. Some need to ask ten questions before they touch a key. Good training doesn&apos;t pick one of those and hope for the best. It offers several, and it gives people the time and the safety to be a beginner again.</P>
        <P>That&apos;s how you wake the curious kid back up. Not with a mandate. With relevance, repetition and room to get it wrong.</P>
        <H2>What 7,700 public servants taught us about Copilot</H2>
        <P>Ever wonder what would happen if thousands of people got the exact same tool on the exact same day? Australia found out. From January to June 2024, its government handed out more than 7,700 Microsoft 365 Copilot licenses across almost 60 agencies. Then it did something most companies never do: it published an honest review of how it went. <Cite href="https://www.digital.gov.au/initiatives/copilot-trial/microsoft-365-copilot-evaluation-report-full/appendix-a">Digital Transformation Agency</Cite></P>
        <P>The tool worked. People said it saved them up to an hour on things like summarizing information and writing first drafts, and 64% of managers saw better, faster work from their teams. <Cite href="https://www.digital.gov.au/initiatives/copilot-trial/summary-evaluation-findings/cts-executive-summary">DTA executive summary</Cite></P>
        <P>But only about a third of people used it every day. Same tool. Same license. Very different results. If you&apos;ve ever rolled out software and watched half the team quietly ignore it, that should sound familiar.</P>
        <P>So what made the difference? Look at the training. Of the people who got three or more kinds of training, 75% felt confident using Copilot. That&apos;s 28 points higher than people who got just one kind. And training worked best when it was built around each agency&apos;s own work. It wasn&apos;t a controlled experiment, but the pattern is hard to ignore. <Cite href="https://digital.gov.au/initiatives/copilot-trial/summary-evaluation-findings/cts-evaluation-findings">DTA evaluation findings</Cite></P>
        <P>Think about that. Not a better license. Not a newer model. More than one way to learn, tied to the work people actually do.</P>
        <H2>What to do instead</H2>
        <P>If you&apos;re rolling out Copilot, or any AI tool, this year, here&apos;s where I&apos;d start:</P>
        <OL items={[
          <><strong>Study the work before you buy.</strong> Spend a couple of weeks watching how your teams really do their jobs. Find the five tasks that eat the most time. This is where many organizations benefit from outside help. Someone needs to step back, study how the work actually gets done, identify where time is being lost, and build a practical adoption plan before another license is purchased.</>,
          <><strong>Buy for your workflow, not the headlines.</strong> If a tool doesn&apos;t help with those five tasks, it doesn&apos;t matter who else bought it.</>,
          <><strong>Budget for people, not just licenses.</strong> Training, practice time and support belong in the same budget as the software, every year.</>,
          <><strong>Teach tasks, not features.</strong> &quot;Here&apos;s how to turn a 40-message email thread into a one-page summary&quot; beats a tour of every button.</>,
          <><strong>Teach it more than one way.</strong> Live demos, short videos, written steps, office hours and coworker coaching. People need to see it, hear it and try it.</>,
          <><strong>Make it safe to be a beginner.</strong> Put practice time on the calendar and give people permission to get it wrong.</>,
          <><strong>Measure use, not licenses.</strong> Set a baseline now, then track who uses it, for what, and where people get stuck. Go back and teach that.</>,
          <><strong>Give it time before you judge it.</strong> Plan for three to four years, look at the growth, then decide what stays.</>,
        ]} />
        <H2>Your people are the investment</H2>
        <P>Every business owner I talk to wants what AI promises. More time. Better work. Lower costs. Fewer late nights fixing the same spreadsheet. Very few have set aside anything for the part that actually delivers it. And whether it&apos;s Copilot, a new CRM or a collaboration platform, the pattern is the same.</P>
        <P>The most valuable thing in your building isn&apos;t the software. It&apos;s the people who decide, every single morning, whether to open it. Investing in them means time, training that fits their work, patience, and someone who knows how adults learn. That isn&apos;t the soft side of your AI strategy. It is your AI strategy.</P>
        <P>So before your next purchase, ask yourself a different question. Not &quot;What can this tool do?&quot; but &quot;What do my people need to do their best work, and how are we going to help them learn it?&quot; Answer that honestly, and you&apos;ll spend less, waste less, and get a lot more out of every dollar.</P>


        <aside className="mh-art-cta">
          <p className="mh-art-cta-label">Let&apos;s talk</p>
          <P>If you&apos;re considering Copilot, AI tools, or any major technology investment, start by understanding the work before buying another license.</P>
          <P>If you&apos;d like a second set of eyes on your workflows, training strategy, or technology adoption plan, I&apos;d be happy to talk. Grab a coffee and let&apos;s discuss what&apos;s working, what&apos;s not, and where your team may be leaving value on the table.</P>
          <P><em>(Coffee is on you.)</em></P>
          <div className="mh-art-cta-links">
            <Link href="/consulting" className="mh-art-btn mh-art-btn-solid">Book a conversation →</Link>
            <Link href="/contact" className="mh-art-btn">Contact me</Link>
          </div>
          <P>If your organization is evaluating AI, Copilot, or other workplace technologies, start by mapping the work before buying another license. The companies seeing the strongest returns aren&apos;t necessarily buying better tools&mdash;they&apos;re helping their people learn to use them well.</P>
        </aside>

        <p className="mh-art-bio">
          Monique Hawkins helps small and midsize organizations evaluate technology, identify high-impact workflows, and create practical training programs that help employees confidently adopt new tools.{' '}
          <Link href="/consulting">Work with Monique →</Link>
        </p>
      </ArticleShell>
    </>
  )
}
