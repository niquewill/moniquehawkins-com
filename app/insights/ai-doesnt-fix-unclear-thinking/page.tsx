// app/insights/ai-doesnt-fix-unclear-thinking/page.tsx
// Article: "AI Doesn't Fix Unclear Thinking. It Mirrors It."
// The article text below matches the final Claude Doc (October 2026).

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ARTICLES } from '../articles'
import ArticleShell, { H2, P, UL, OL, Cite, Prompt } from '../ArticleShell'

const article = ARTICLES.find((a) => a.slug === 'ai-doesnt-fix-unclear-thinking')!
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
    fact: 'The "brilliant but new employee" comparison and the "golden rule" of showing a prompt to a colleague with minimal context',
    label: 'Anthropic, Claude prompting best practices',
    href: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices',
  },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleShell
        article={article}
        sources={SOURCES}
        sourcesNote="Checked October 2026. The scheduling-system prompt is an illustrative example, not a real company. The six-part checklist is my own framework, informed by general prompting practice; it isn't an official Anthropic framework."
      >

        <figure className="mh-art-figure">
          <Image src={article.image} alt={article.imageAlt} width={1672} height={941} priority sizes="(max-width: 900px) 100vw, 900px" />
        </figure>

        <P>Everyone has gotten that assignment. The one that lands in your inbox at 4:45 on a Friday: &quot;Can you pull something together on this for Monday?&quot;</P>
        <P>Pull together what? For who? How long? What does good look like? You spend half the weekend guessing, turn in your best attempt, and on Monday you hear, &quot;That&apos;s not quite what I meant.&quot;</P>
        <P>And if you&apos;ve ever been the one who sent that email, no judgment. You knew exactly what you meant. It just never made it out of your head and onto the page.</P>
        <P>Now think about the last time you asked an AI tool for help and got back... something. Generic. Close, but not quite. Did you walk away thinking the tool just isn&apos;t that smart?</P>
        <P>Here&apos;s the truth: what is ambiguously stated will be ambiguously written. AI doesn&apos;t fix unclear thinking. It mirrors it.</P>
        <H2>The problem starts before the prompt</H2>
        <P>You&apos;ve probably watched a coworker wrestle with AI for twenty minutes. They reword the request. They add &quot;please.&quot; They try it in all caps. They google &quot;best ChatGPT prompts.&quot; And it still comes back wrong.</P>
        <P>Most of the time, the words aren&apos;t the problem. The problem shows up earlier.</P>
        <P>The person asking hasn&apos;t decided what they want yet.</P>
        <P>They haven&apos;t nailed down the goal. They haven&apos;t thought about who&apos;s responsible for what. They haven&apos;t broken the work into the actual steps that need to happen. So they hand that fog to AI, the same way they&apos;d hand it to a new hire, and hope it comes back clear.</P>
        <P>It rarely does. AI is fast, and it will happily fill in the gaps with its own guesses, but it can&apos;t read your mind. It can only work with what you give it. If the thinking isn&apos;t done, no tool on the market is going to do it for you.</P>
        <P>This isn&apos;t a technology skill. It&apos;s a leadership skill. And the good news is that the leaders who already delegate well have a head start.</P>
        <H2>Prompting is delegating</H2>
        <P>Think about the worst assignment you ever got. Vague goal. No idea who else was involved. No deadline until suddenly there was one. You probably redid it twice.</P>
        <P>Now think about the best manager you ever had. When they handed you a project, you walked away knowing three things: what the goal was, what your role was, and exactly what they needed from you.</P>
        <P>Something like: &quot;Here&apos;s our goal. You&apos;re leading the client side of this project. I need you to do X, Y and Z by Thursday, and here&apos;s what good looks like.&quot;</P>
        <P>That&apos;s it. That&apos;s the whole secret. And it&apos;s exactly how you should talk to AI.</P>
        <P>Even the people who build these tools say so. Anthropic, the company behind Claude, tells users to think of its AI as &quot;a brilliant but new employee who lacks context on your norms and workflows.&quot; Its guidance also has a simple test it calls the golden rule: show your prompt to a colleague with minimal context on the task, and ask them to follow it. If they&apos;d be confused, the AI will be too. <Cite href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices">Anthropic, prompting best practices</Cite></P>
        <P>Read that again, because it works both ways. If your instructions would confuse a person, they&apos;ll confuse the AI. And if you learn to write instructions clear enough for AI, your people are going to notice too.</P>
        <H2>What the difference looks like</H2>
        <P>Here&apos;s a prompt I see all the time:</P>
        <Prompt label="The vague version" lines={[
          <>Write an email about the new scheduling system.</>,
        ]} />
        <P>You&apos;ll get an email. It&apos;ll be polite, generic, and almost useless. The AI has no idea who&apos;s reading it, why it matters, or what you want people to do.</P>
        <P>Now here&apos;s the same request from someone who did the thinking first:</P>
        <Prompt label="The clear version" lines={[
          <><strong>Goal:</strong> Get our 25-person front office comfortable switching to the new scheduling system by November 1.</>,
          <><strong>Your role:</strong> You&apos;re writing as the office manager, a friendly, practical voice the team trusts.</>,
          <><strong>Audience:</strong> Busy staff, a few of them nervous about new technology.</>,
          <><strong>What I need:</strong> A short email that (1) explains why we&apos;re switching in two sentences, (2) lists the three things they need to do before November 1, and (3) tells them where to get help.</>,
          <><strong>What good looks like:</strong> Under 200 words, warm, no jargon. Someone should be able to read it in under a minute and know exactly what to do.</>,
          <>Before you write anything, tell me what&apos;s unclear or missing.</>,
        ]} />
        <P>Same tool. Same person. A completely different result. The only thing that changed is that the manager decided what they wanted before they asked.</P>
        <H2>Let AI find the fog for you</H2>
        <P>Let&apos;s be honest: most of us hate asking clarifying questions at work. Nobody wants to look like they weren&apos;t listening in the meeting. So we guess, and we hope.</P>
        <P>Here&apos;s my favorite part about AI, and the one almost nobody uses: it doesn&apos;t have that problem. You don&apos;t have to get the instructions perfect on your own. You can ask AI to help you find what&apos;s missing.</P>
        <P>Before you ask for the finished product, ask questions like these:</P>
        <UL items={[
          <>&quot;What&apos;s ambiguous in what I just asked?&quot;</>,
          <>&quot;What questions do you have before you start?&quot;</>,
          <>&quot;What assumptions are you making that I should confirm?&quot;</>,
        ]} />
        <P>Here&apos;s how I do it myself. Whenever I start a new project in Claude, I give it every instruction I can think of: the goal, the audience, the pieces I already know I need. Then I add one more line: &quot;Now interview me. Ask me questions until you have a clear picture of this project.&quot;</P>
        <P>Every time, it asks something I hadn&apos;t thought about. Who&apos;s going to approve this? What should it never say? What happened the last time we tried something like this? By the time the interview is over, I&apos;m clearer on the project too. And the first draft comes back much closer to what I actually wanted.</P>
        <P>It&apos;s like having a new team member who&apos;s brave enough to say, &quot;Wait, I&apos;m not sure what you mean.&quot; Most people won&apos;t say that to their boss. AI will, if you invite it.</P>
        <P>Ever rolled out a new process and, two weeks later, heard someone say, &quot;Did anybody think about how this affects billing?&quot; That&apos;s where the next step comes in. Take it further with second-order thinking. That just means looking past the first result to what happens next:</P>
        <UL items={[
          <>&quot;If we do this, what could go wrong?&quot;</>,
          <>&quot;Who else will this affect that I haven&apos;t mentioned?&quot;</>,
          <>&quot;What happens six months from now if this works, or if it doesn&apos;t?&quot;</>,
          <>&quot;What am I not considering?&quot;</>,
        ]} />
        <P>These questions don&apos;t replace your judgment, and they don&apos;t just improve the AI&apos;s answer. They improve your thinking. And clearer thinking makes you a better leader whether there&apos;s AI in the room or not.</P>
        <H2>Six things to put in every prompt</H2>
        <P>Ever opened a blank AI chat box, stared at the blinking cursor, and typed the first thing that came to mind? Most of us have. You don&apos;t need a course in prompt engineering to fix that. You need a habit. Before you hit enter, check for these six things:</P>
        <OL items={[
          <><strong>The goal.</strong> What are you trying to accomplish, and why does it matter?</>,
          <><strong>The role.</strong> Who should the AI be? A writer, an analyst, a trainer, a skeptical customer?</>,
          <><strong>The audience.</strong> Who&apos;s going to read or use this?</>,
          <><strong>The tasks.</strong> List the specific things you need, in order. If it would be a checklist for a person, make it a checklist for the AI.</>,
          <><strong>What good looks like.</strong> Length, tone, format and anything it should avoid.</>,
          <><strong>The invitation.</strong> End with: &quot;Before you start, tell me what&apos;s unclear.&quot; For bigger projects, go further: &quot;Interview me until you have a clear picture.&quot;</>,
        ]} />
        <P>Think of it as a checklist, not a rulebook. A quick request might only need a sentence or two. But when the work matters or has several moving parts, a few minutes spelling things out can save you several rounds of rework. Print it out and tape it next to your monitor. Better yet, share it with your team. When everyone writes clearer instructions, for AI and for each other, everything moves faster.</P>
        <H2>Clear in, clear out</H2>
        <P>The companies getting the most out of AI aren&apos;t the ones with the fanciest tools. They&apos;re the ones whose leaders know what they want and can say it plainly.</P>
        <P>That&apos;s good news, because it&apos;s a skill anyone can learn. It starts with slowing down long enough to answer three questions before you ask anyone, person or AI, to do anything: What&apos;s the goal? Who&apos;s doing what? What does done look like?</P>
        <P>Answer those, and you&apos;ll get better work from your tools and from your team. You&apos;ll still need to review what comes back, but you&apos;ll be starting from a much better place.</P>


        <aside className="mh-art-cta">
          <p className="mh-art-cta-label">Let&apos;s talk</p>
          <P>If your team is using AI but the results feel hit-or-miss, the problem may not be the tool. It may be the instructions. I help teams build practical habits for working with AI, from writing clearer prompts to delegating more effectively.</P>
          <P>Grab a coffee and let&apos;s talk about where your team is getting stuck.</P>
          <P><em>(Coffee is on you.)</em></P>
          <div className="mh-art-cta-links">
            <Link href="/consulting" className="mh-art-btn mh-art-btn-solid">Book a conversation →</Link>
            <Link href="/contact" className="mh-art-btn">Contact me</Link>
          </div>
        </aside>

        <p className="mh-art-bio">
          Monique Hawkins helps small and midsize organizations evaluate technology, identify high-impact workflows, and create practical training programs that help employees confidently adopt new tools.{' '}
          <Link href="/consulting">Work with Monique →</Link>
        </p>
      </ArticleShell>
    </>
  )
}
