import React, { forwardRef } from "react";
import '../styles/OurStory.css'

const OurStory = forwardRef<HTMLDivElement>((props, ref) => (
  <div className="story-card" ref={ref}>
    <h2 className="story-heading">
      Our Story
    </h2>
    <p className="text-slate-300 max-w-2xl text-lg leading-relaxed">
      <b className="noi">The Polyglot Lab</b> was born out of frustration. Frustration with bloated platforms,
      endless meetings, and feature creep. We wanted to build fast, build smart, and build
      real tools that actually help people — not impress investors.
    </p>
    <p className="text-slate-400 max-w-2xl text-base">
      Today, we're a small team of makers, dreamers, and doers. We believe in clean code,
      honest conversations, and products that ship fast and evolve with feedback.
      If that resonates with you, you're already one of us.
    </p>
    <p className="text-slate-400 max-w-2xl text-base">
      We're <b className="noi">Alessandra</b> and <b className="noi">Yor</b> — two humans building tools for other humans. Marketing, code, vision and action — everything you see here is crafted by us, with no fluff and no middlemen.
    </p>
    <br/>
    <div className="our-story-bottom">
      <div className="bg-[#0f172a] p-6 rounded-lg shadow-md border border-slate-800">
        <h4 className="text-teal-300 font-semibold mb-2">🚀 Built to Move Fast</h4>
        <p className="text-slate-400 text-sm">
          We launch MVPs quickly and improve based on real-world feedback — not committee decisions.
        </p>
      </div>

      <div className="bg-[#0f172a] p-6 rounded-lg shadow-md border border-slate-800">
        <h4 className="text-teal-300 font-semibold mb-2">🔒 Privacy First</h4>
        <p className="text-slate-400 text-sm">
          Your data stays yours. We design with respect for users and zero tolerance for shady tactics.
        </p>
      </div>

      <div className="bg-[#0f172a] p-6 rounded-lg shadow-md border border-slate-800">
        <h4 className="text-teal-300 font-semibold mb-2">🤝 Human by Default</h4>
        <p className="text-slate-400 text-sm">
          Behind the tools are real people who care. We listen, iterate, and support the communities we serve.
        </p>
      </div>

      <div className="bg-[#0f172a] p-6 rounded-lg shadow-md border border-slate-800">
        <h4 className="text-teal-300 font-semibold mb-2">💡 Indie Spirit</h4>
        <p className="text-slate-400 text-sm">
          No VCs. No bloated teams. Just independent builders with a shared vision and clear focus.
        </p>
      </div>
    </div>
  </div>
));

export default OurStory;