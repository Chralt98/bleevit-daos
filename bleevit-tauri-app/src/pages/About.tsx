import profile from "../../chris_profile.jpg"; // Vite will copy from public/

export default function About() {
  return (
    <section className="grid items-start gap-8 md:grid-cols-[200px_1fr]">
      <div className="overflow-hidden rounded-xl border border-white/10">
        <img src={profile} alt="Your Name" className="h-[200px] w-[200px] object-cover" />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="text-neutral-300">
          I’m <strong>Christopher Maximilian Altmann</strong>, a systems engineer passionate about innovation in blockchain governance.
          Since 2017, I’ve been gaining experience in software engineering, driven by an idealistic vision.
          I continue to refine my skills to engineer systems that improve decision-making to ultimately find social consensus in decentralized autonomous organizations. 
          I believe in the power of collective wisdom and swarm intelligence to solve problems on a global scale.
        </p>
        <div className="rounded-lg border border-white/10 p-4 text-sm text-neutral-300">
          <div className="font-medium">Profile</div>
          <ul className="mt-2 space-y-1 text-neutral-400">
            <li>• Role: DAO Systems Engineer</li>
            <li>• Top skills: Decentralized Autonomous Organizations, Systems Engineering, Blockchain, Polkadot SDK, Futarchy</li>
            <li>• Interests: Truth-Seeking, Decision-Making</li>
          </ul>
        </div>
      </div>
    </section>
  );
}