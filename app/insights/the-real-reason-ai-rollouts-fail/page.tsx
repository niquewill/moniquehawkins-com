// app/insights/the-real-reason-ai-rollouts-fail/page.tsx
// Article: "The Real Reason AI Rollouts Fail Isn't the AI"
// The text below is copied from the final Claude Doc. To edit wording, change it here.

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
        <P>Hand the same tool to a 45-year-old professional with a full calendar, and something different happens. They wait to be shown. They worry about breaking something. They quietly decide they are &ldquo;not a tech person&rdquo; and go back to the way they have always done it.</P>
        <P>That difference is not intelligence. After years of teaching everyone from elementary students to educators to working professionals, my view is that it is the same curiosity, buried under deadlines, disappointments and the reality that nobody gave them time to learn. The curious kid is still in there. It is at war with the exhausted adult.</P>
        <P>And that war is exactly where most AI rollouts are being lost right now. Not in the technology. In the people.</P>
        <P>While Copilot is today&apos;s headline technology, the lesson applies to almost every software rollout businesses make: Microsoft 365, AI tools, CRM systems, workflow platforms and collaboration tools alike.</P>

        <H2>They bought the tool. They skipped the people.</H2>
        <P>Across industries, the pattern looks the same. A company signs the license, sends a launch email, maybe runs one webinar, and calls it a rollout. That&apos;s not a rollout. That&apos;s a purchase.</P>
        <P>And I&apos;m not the only one seeing it.</P>
        <P>Microsoft and LinkedIn surveyed 31,000 people in 31 countries. Three out of four knowledge workers were already using AI at work, but only 39% had gotten any AI training from their company. Even more telling, 78% were bringing their own AI tools to work. People want this. They&apos;re just figuring it out alone. <Cite href={SOURCES[0].href}>Microsoft Work Trend Index 2024</Cite></P>
        <P>BCG asked more than 10,600 workers the same kind of question. Only 36% said they feel adequately trained. On the front line, just 25% said their leaders give them enough guidance. <Cite href={SOURCES[1].href}>BCG, AI at Work 2025</Cite></P>
        <P>So it&apos;s no surprise the results are thin. In another BCG survey, 74% of companies hadn&apos;t yet shown tangible value from AI. <Cite href={SOURCES[2].href}>BCG, October 2024</Cite> A Gartner survey reported by Computerworld found that in mid-2024, 60% of IT leaders had started a Copilot pilot, but only 6% were ready to roll it out widely. Most said it took more change management than they expected, and 87% said people need frequent support and education. <Cite href={SOURCES[3].href}>Computerworld, reporting Gartner</Cite></P>
        <P>One widely discussed MIT-backed analysis, reported by Fortune, found that roughly 95% of the enterprise generative AI pilots it studied had not yet produced measurable profit-and-loss impact. What&apos;s interesting is what the researchers blamed. Not the AI. They called it a <strong>learning gap</strong>. <Cite href={SOURCES[4].href}>Fortune, reporting MIT NANDA</Cite></P>
        <Pull>Put it all together and the story is simple. The technology showed up. The learning didn&apos;t.</Pull>

        <H2>Slow down to speed up</H2>
        <P>I get the pressure. In that same Microsoft survey, 79% of leaders said AI is critical to staying competitive, and 60% worried their company didn&apos;t have a real plan to put it in place. When you feel behind and you don&apos;t have a plan, you buy.</P>
        <P>So companies buy what everyone else is buying. A competitor announced it. A vendor gave a great demo. Someone on the board asked about it. None of those are good reasons. The only good reason to buy a tool is that it fits the way your people actually work.</P>
        <P>That&apos;s why I tell clients to slow down so they can speed up. Before you spend another dollar, have someone sit with your team and really look at the work:</P>
        <UL items={[
          'What eats the most hours every week?',
          'Where are people copying, pasting, retyping and chasing information?',
          "What do your best people do that everyone else doesn't?",
          'What are you already paying for that nobody is using?',
        ]} />
        <P>The companies getting real value already think this way. BCG found they put roughly 10% of their AI effort into algorithms, 20% into technology and data, and <strong>70% into people and processes</strong>. Most companies do the opposite. They pour money into the license and leave that 70% to chance.</P>
        <P>That MIT-backed analysis lands in the same place. Generic tools stall inside companies because they don&apos;t fit the company&apos;s workflows. The answer isn&apos;t a fancier tool. It&apos;s understanding the work before the tool shows up.</P>

        <H2>Think in years, not launch dates</H2>
        <P>Education taught me a lot about buying technology.</P>
        <P>In schools, we never had money to waste. So we never just asked, &ldquo;What do we need this year?&rdquo; We asked what it would look like in years two, three and four. Who keeps it running? Who trains the new teacher who shows up in year three?</P>
        <P>And we lived by one rule: give a change four consecutive years before you judge it. Year one is messy. Year two, habits start to form. By years three and four, you finally have real numbers that show whether it helped.</P>
        <P>Businesses rarely think that way about AI. They buy it like a phone upgrade, then judge it after a few months, before anyone has really learned to use it.</P>
        <P>That&apos;s risky, because the bills keep growing. Microsoft lists Microsoft 365 Copilot for enterprise at <a href={SOURCES[8].href} target="_blank" rel="noopener noreferrer">$30 per user, per month</a>, on an annual commitment, and that&apos;s on top of a qualifying Microsoft 365 license. For a 100-person company, the add-on alone is $36,000 a year, or $144,000 over four years, before the base licenses or a dime for training. And starting July 1, 2026, Microsoft raised prices on most Microsoft 365 business plans by <a href={SOURCES[10].href} target="_blank" rel="noopener noreferrer">roughly 5% to 33%</a>, depending on the plan, pointing to new AI, security and management features. <Cite href={SOURCES[9].href}>CIO Dive</Cite> Spend that on tools nobody uses, and you haven&apos;t just wasted a budget line. You&apos;ve made your business more fragile.</P>
        <P>So plan it like a school district would:</P>
        <UL items={[
          <><strong>Year one:</strong> Pick the workflows that matter most, train people on them in more than one format, and set your baseline numbers.</>,
          <><strong>Year two:</strong> Expand to the next set of tasks and grow champions inside each team.</>,
          <><strong>Years three and four:</strong> Measure the growth. How much time came back? Who uses it every week? What got better for your customers?</>,
        ]} />
        <P>Technology investments should be judged over years, not months. Then make the call: keep it, change it or cut it.</P>

        <H2>Adults still learn. They just learn differently.</H2>
        <P>I&apos;ve spent most of my career working with Microsoft products. Outlook, Word, Excel, Teams, SharePoint&mdash;the same tools millions of people use every day.</P>
        <P>Looking back, I realize that for years I was using many of them just well enough to get through the day. I knew the basics. I could do my job. But I wasn&apos;t using them efficiently, and I certainly wasn&apos;t taking advantage of many of the features designed to make my work easier.</P>
        <P>That&apos;s not because I wasn&apos;t capable of learning them. It&apos;s because, like most professionals, I was busy. I learned what I needed to survive and moved on to the next deadline.</P>
        <P>That&apos;s exactly what happens in businesses today. Employees aren&apos;t resisting technology. They&apos;re trying to keep up with their work.</P>
        <P>Here&apos;s the thing about adults: they haven&apos;t lost the ability to learn. They&apos;ve lost the permission. Somewhere between the first job and the fortieth deadline, being wrong started to feel expensive. So people stop experimenting where anyone can see them.</P>
        <P>Anyone who has trained adults knows what they need. They want to know why it matters. They bring years of experience, and they want you to respect it. And they learn fastest when the lesson solves a problem sitting on their desk today. A generic &ldquo;Intro to Copilot&rdquo; session misses all three.</P>
        <P>People also take in information in different ways. Some need to watch you do it. Some want written steps so they can try it alone. Some need to ask ten questions before they touch a key. Good training doesn&apos;t pick one of those and hope for the best. It offers several, and it gives people the time and the safety to be a beginner again.</P>
        <P>That&apos;s how you wake the curious kid back up. Not with a mandate. With relevance, repetition and room to get it wrong.</P>

        <H2>What 7,700 public servants taught us about Copilot</H2>
        <P>If you want to see this play out in real life, look at Australia. From January to June 2024, its government handed out more than 7,700 Microsoft 365 Copilot licenses across almost 60 agencies. Then it did something most companies never do: it published an honest review of how it went. <Cite href={SOURCES[5].href}>Digital Transformation Agency</Cite></P>
        <P>The tool worked. People said it saved them up to an hour on things like summarizing information and writing first drafts, and 64% of managers saw better, faster work from their teams. <Cite href={SOURCES[6].href}>DTA executive summary</Cite></P>
        <P>But only about a third of people used it every day. Same tool. Same license. Very different results.</P>
        <P>So what made the difference? Look at the training. Of the people who got three or more kinds of training, 75% felt confident using Copilot. That&apos;s 28 points higher than people who got just one kind. And training worked best when it was built around each agency&apos;s own work. It wasn&apos;t a controlled experiment, but the pattern is hard to ignore. <Cite href={SOURCES[7].href}>DTA evaluation findings</Cite></P>
        <P>Think about that. Not a better license. Not a newer model. More than one way to learn, tied to the work people actually do.</P>

        <H2>What to do instead</H2>
        <P>If you&apos;re rolling out Copilot, or any AI tool, this year, here&apos;s where I&apos;d start:</P>
        <OL items={[
          <><strong>Study the work before you buy.</strong> Spend a couple of weeks watching how your teams really do their jobs. Find the five tasks that eat the most time. This is where many organizations benefit from outside help. Someone needs to step back, study how the work actually gets done, identify where time is being lost, and build a practical adoption plan before another license is purchased.</>,
          <><strong>Buy for your workflow, not the headlines.</strong> If a tool doesn&apos;t help with those five tasks, it doesn&apos;t matter who else bought it.</>,
          <><strong>Budget for people, not just licenses.</strong> Training, practice time and support belong in the same budget as the software, every year.</>,
          <><strong>Teach tasks, not features.</strong> &ldquo;Here&apos;s how to turn a 40-message email thread into a one-page summary&rdquo; beats a tour of every button.</>,
          <><strong>Teach it more than one way.</strong> Live demos, short videos, written steps, office hours and coworker coaching. People need to see it, hear it and try it.</>,
          <><strong>Make it safe to be a beginner.</strong> Put practice time on the calendar and give people permission to get it wrong.</>,
          <><strong>Measure use, not licenses.</strong> Set a baseline now, then track who uses it, for what, and where people get stuck. Go back and teach that.</>,
          <><strong>Give it time before you judge it.</strong> Plan for three to four years, look at the growth, then decide what stays.</>,
        ]} />

        <H2>Your people are the investment</H2>
        <P>Every business owner I talk to wants what AI promises. More time. Better work. Lower costs. Very few have set aside anything for the part that actually delivers it. And whether it&apos;s Copilot, a new CRM or a collaboration platform, the pattern is the same.</P>
        <P>The most valuable thing in your building isn&apos;t the software. It&apos;s the people who decide, every single morning, whether to open it. Investing in them means time, training that fits their work, patience, and someone who knows how adults learn. That isn&apos;t the soft side of your AI strategy. It is your AI strategy.</P>
        <P>So before your next purchase, ask yourself a different question. Not &ldquo;What can this tool do?&rdquo; but &ldquo;What do my people need to do their best work, and how are we going to help them learn it?&rdquo; Answer that honestly, and you&apos;ll spend less, waste less, and get a lot more out of every dollar.</P>

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
