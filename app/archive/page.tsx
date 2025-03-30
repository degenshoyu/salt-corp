'use client'

export default function ArchivePage() {
  return (
    <div className="text-[#eee] font-mono text-sm leading-relaxed px-4 pt-4 pb-10 space-y-12 max-w-5xl mx-auto">
      <section className="border border-red-500 p-6 w-full max-w-4xl mx-auto">
        <h2 className="text-red-400 text-lg md:text-xl font-bold uppercase mb-4">
          [NSC-A-0000] Technical Primer: A signature-chain protocol
        </h2>
        <p>
          <strong>Issued by the Chun-Hwa Republic Central Planning Bureau, Department of Extraterrestrial Finance</strong>
          <br /><br />
          This proposed protocol is not a blockchain. It is a <strong>signature-chain protocol</strong> — each unit contains its full transfer history, cryptographically signed and locally stored.
          <br /><br />
          No global ledger.<br />
          No validators.<br />
          No consensus rounds.
          <br /><br />
          Instead:
        </p>
        <ul className="list-disc ml-6 my-4 space-y-1">
          <li>Ownership = last valid signature</li>
          <li>Transfer = append-only signature chain</li>
          <li>Verification = local traversal of chain</li>
        </ul>
        <p>
          This design eliminates the need for mining or network consensus, allowing issued currency to function in hostile, low-bandwidth, or air-gapped environments — such as <strong>lunar bases</strong> or <strong>post-collapse ruins</strong>.
        </p>
      </section>

      <section className="border border-red-500 p-6 w-full max-w-4xl mx-auto">
        <h2 className="text-red-400 text-lg md:text-xl font-bold uppercase mb-4">
          [NSC-A-0001] ORIGIN FILE: THE BIRTH OF SALT
        </h2>
        <p>2077: Directive 451 issued by the Chun-Hwa Republic Central Planning Bureau.</p>
        <pre className="mt-4 text-green-400">
{`>> SALT CORP ESTABLISHED
>> SALT = STRATEGIC ASSET FOR LUNAR TRADE
>> MANDATE: Construct and maintain an interplanetary monetary system.
>> SCOPE: Rocket launch coordination, lunar resource regulation, orbital trade.`}
        </pre>
        <p className="mt-4">
          <strong>Technology: Signature-chain Protocol Architecture</strong><br />
          - Sovereignless<br />
          - Delay-tolerant<br />
          - Ledgerless<br />
          - Built for collapse
        </p>
        <p className="mt-4">
          Trust embedded in code. Ownership signed into chain.
        </p>
      </section>

      <section className="border border-red-500 p-6 w-full max-w-4xl mx-auto">
        <h2 className="text-red-400 text-lg md:text-xl font-bold uppercase mb-4">
          [NSC-A-0002] COLLAPSE FILE: THE SKY BURNS
        </h2>
        <p className="text-yellow-300 font-semibold">2081 COLLAPSE: THE SKY BURNS</p>
        <p className="mt-2">
          No warnings. No treaties. Only fire.<br /><br />
          Entire governments failed. Not from hesitation, but from annihilation.
        </p>
        <pre className="mt-4 text-green-400">
{`ALL TERRESTRIAL REGIMES TERMINATED  
Final signal from the Chun-Hwa Republic: T+6 Days post-first fireball

Root Key: LOST  
SALT Corp: VANISHED  
Nations: SILENT`}
        </pre>

        <hr className="my-6 border-red-500" />

        <p className="italic">AND YET...</p>
        <p className="mt-2">
          Some SALT units remained. Verified. Signed. Carried forward.<br /><br />
        </p>
      </section>

      <section className="border border-red-500 p-6 w-full max-w-4xl mx-auto">
        <h2 className="text-red-400 text-lg md:text-xl font-bold uppercase mb-4">
          [NSC-A-0003] Reclamation: The Founding of New SALT Corp
        </h2>
        <p>
          Among the ruins, scavengers recovered fragments of the old world —  
          encrypted ledgers, signature-chain validators, and dormant SALT minting tools.
          <br /><br />
          But the Root Key was gone.  
          Without the original private key, no new SALT could claim provenance.
          <br /><br />
          Though minting resumed, the resulting SALT held no weight.  
          Only units from the pre-collapse chain — <strong>OG SALT</strong> — retained absolute scarcity and trust.
          <br /><br />
          To preserve these fragments, a new institution was born: <strong>New SALT Corp</strong>.
          <br /><br />
          In the Far East Wasteland, three powers emerged:
        </p>
        <ul className="list-disc ml-6 my-4 space-y-1">
          <li><strong>Minhai Republic</strong> — defenders of technocratic order</li>
          <li><strong>Tsyravyk Empire</strong> — the last human autocracy</li>
          <li><strong>New SALT Corp</strong> — stewards of cryptographic trust</li>
        </ul>
        <p>
          New SALT Corp became the final custodian of unbroken signature-chains.  
          Not a state, but a ledger. Not a government, but a guardian.
          <br /><br />
          OG SALT — verified, inherited, and never reissued — became the foundation of the new world economy.
        </p>
      </section>
    </div>
  )
}

