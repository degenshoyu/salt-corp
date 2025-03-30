export default function RoadmapPage() {
  return (
    <main className="bg-[#111] text-gray-300 font-mono px-4 py-12 max-w-3xl mx-auto leading-relaxed text-sm">
      <div className="relative border-l-2 border-red-700 ml-4 pl-6 space-y-12">
        {roadmapSections.map((section, index) => (
          <div
            key={index}
            className="relative transition-all duration-200 hover:scale-[1.015] hover:bg-[#222] hover:shadow-[0_0_10px_rgba(255,0,0,0.3)] rounded-lg p-1"
          >
            <div className="absolute -left-[30px] top-1 w-4 h-4 bg-red-500 border-2 border-red-700 rounded-full shadow-md" />
            <h2 className="text-red-400 hover:text-red-500 text-xs uppercase tracking-widest mb-2 transition-colors">
              {section.title}
            </h2>
            <p className="whitespace-pre-line text-gray-300">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

const roadmapSections = [
  {
    title: '[NSC-R-0001] Phase I: Bootstrapping the Community',
    content: `Launch mSALT on Pump.fun
All Dev mSALT will be locked for 1 month
Build up early community on Telegram
Snapshot early holders for OG SALT access`,
  },
  {
    title: '[NSC-R-0002] Phase II: SALT Wallet Deployment',
    content: `Launch the SALT Wallet — generate key pairs and store signature chains
Display SALT history and ancestry locally
Import/export via QR code or plaintext backup
Prepare for upcoming SALT distribution`,
  },
  {
    title: '[NSC-R-0003] Phase III: OG SALT Issuance',
    content: `Begin manual issuance of OG SALT — one signature per coin
SALT Corp signs genesis outputs to selected public keys
mSALT staking determines eligibility and order
Transfer history traceable through local chains`,
  },
  {
    title: '[NSC-R-0004] Phase IV: Master Node Infrastructure',
    content: `Deploy SALT master node for public chain verification
Enable transaction upload, chain scanning, ancestry lookup
Detect forks and broadcast conflicting branches
Launch witness node network for double-spend detection`,
  },
  {
    title: '[NSC-R-0005] Phase V: Simulation Launch',
    content: `Deploy wasteland economy as a browser-based simulation
Players trade, fork, and scavenge using real SALT
Integrate reputation system based on transfer history
Enable fork arbitration and memory anchoring`,
  },
  {
    title: '[NSC-R-0006] Phase VI: Collapse-Proof Deployment',
    content: `Develop offline tools: air-gapped wallet, printable signatures
Design paper SALT cards for physical transfer
Create fallback protocols for mesh broadcasting
Launch final SALT archive for long-term civilizational memory`,
  },
  {
    title: '[NSC-R-0007] Protocol Extension (Proposed)',
    content: `Support for cSALT: Community-signed SALT assets
ManualSwap: Peer-to-peer barter and signed exchange protocols
Establish verified exchange flows between mSALT and OG SALT`,
  },
];

