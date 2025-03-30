export default function SaltPage() {
  return (
    <div className="bg-[#111] text-[#eee] font-mono px-4 py-10 leading-7">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl text-red-500 uppercase text-center mb-10">
          [NSC-S-0001] How SALT Works
        </h1>

        <Section title="I. What is SALT?">
          <p>
            Originally issued by the Chun-Hwa Republic Central Planning Bureau, SALT stood for <strong>Strategic Assets for Lunar Trade</strong>.<br/><br/>
            Revived by New SALT Corp, it now means <strong>Survivors’ Autonomous Ledger Token</strong>.<br/>
            It is not a smart contract. It is not on-chain. It is not mined.<br/>
            SALT is a signed transaction chain — where every unit carries its own unique lineage.
          </p>
        </Section>

        <Section title="II. Signature Chain">
          <p>
            Every <strong>OG SALT</strong> unit begins as a genesis output issued by SALT Corp — an entity that no longer exists.<br/>
            Its private key is lost forever, but verification is still possible using the original public key:<br/>
            <span className="bg-black text-black px-2 py-0.5 rounded">[REDACTED]</span>
          </p>
          <p>
            Each transfer is a signed message:<br/>
            <code>
              “I, [address], transfer SALT #[ID] to [receiver] at [timestamp].”
            </code><br/>
            The chain is self-contained and verifiable.
          </p>
            <pre className="bg-black text-green-400 text-xs p-4 rounded overflow-x-auto mt-4 leading-relaxed whitespace-pre-wrap">
{`[MSG 1] FROM: SALT_CORP       → TO: PK_A
        TIME: 2137-04-01T10:00Z
  └── signed by SALT_CORP     → SIG_1
        TIME: 2137-04-01T10:01Z
        ↓
[MSG 2] FROM: PK_A            → TO: PK_B
        TIME: 2137-04-01T14:32Z
  └── signed by PK_A          → SIG_2
        TIME: 2137-04-01T14:33Z
        ↓
[MSG 3] FROM: PK_B            → TO: PK_C
        TIME: 2137-04-02T09:47Z
  └── signed by PK_B          → SIG_3
        TIME: 2137-04-02T09:48Z`}
            </pre>
        </Section>

        <Section title="III. No Blockchain">
          <p>
            SALT uses no blocks, no consensus, and no mining.<br/>
            It is delay-tolerant, offline-capable, and scalable through memory.<br/>
            History is carried by the coin itself — not recorded in any central state.
          </p>
        </Section>

        <Section title="IV. Philosophy">
          <p>
            SALT is not designed to scale. It is designed to survive.<br/>
            Built for collapse, SALT assumes disconnection, scarcity, and distrust.<br/>
            It is not for markets. It is for wastelands.
          </p>
        </Section>

        <Section title="V. Double-Spending">
          <p>
            SALT does not prevent double-spending — it exposes it.<br/>
            If a unit forks, both paths are visible. Players choose which one to trust.<br/>
            Forks are signals, not bugs.
          </p>
          <pre className="bg-black text-yellow-400 text-xs p-4 rounded overflow-x-auto mt-4 leading-relaxed whitespace-pre">
{`MAIN CHAIN                                    FORKED CHAIN
─────────────                                 ───────────────
[MSG 1] FROM: SALT_CORP       → TO: PK_A
        TIME: 2137-04-01T10:00Z
  └── SIG_1 (by SALT_CORP)
        ↓
[MSG 2] FROM: PK_A            → TO: PK_B
        TIME: 2137-04-01T14:32Z
  └── SIG_2 (by PK_A)
        ↓
[MSG 3] FROM: PK_B            → TO: PK_C              [MSG 3'] FROM: PK_B       → TO: PK_X
        TIME: 2137-04-02T09:47Z                        TIME: 2137-04-02T09:49Z
  └── SIG_3 (by PK_B)                                  └── SIG_3' (by PK_B)
        ↓                                                    ↓
[MSG 4] FROM: PK_C            → TO: PK_D              [MSG 4'] FROM: PK_X       → TO: PK_Y
        TIME: 2137-04-03T11:00Z                        TIME: 2137-04-03T10:59Z
  └── SIG_4 (by PK_C)                                  └── SIG_4' (by PK_X)`}
          </pre>
          <p className="italic text-center text-sm text-gray-400 mt-4">
            “In SALT, we do not prevent dishonesty — we expose it.”
          </p>
        </Section>

        <Section title="VI. Master Node and Witnesses">
          <p>
            <strong>Master Node (NSC-MASTER)</strong>: Stores full signature records, verifies forks, serves the public API.<br/>
            <strong>Witness Nodes (NSC-WIT-X)</strong>: Community observers that detect and report inconsistencies.<br/><br/>
            These nodes do not control SALT. They observe it. Reputation replaces consensus.
          </p>
        </Section>

        <Section title="VII. Uploading Transactions">
          <p>
            Transactions can be offline. Uploading to a node anchors them in time.<br/>
            When uploaded, they become discoverable, timestamped, and part of history.
          </p>
          <p className="italic text-center text-sm text-gray-400 mt-4">
            “If you hold SALT, upload it. Let the wasteland remember you.”
          </p>
        </Section>

        <Section title="VIII. Summary">
          <p>
            SALT is not stored on-chain. <strong>SALT is the chain</strong>.<br/>
            It is an experiment in distributed trust and survival cryptography.<br/>
            You are not a user. You are a signatory. You are the chain.
          </p>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg text-red-400 mt-10 mb-2 uppercase tracking-wide">{title}</h2>
      <div className="text-sm text-gray-300 space-y-4">
        {children}
      </div>
    </section>
  )
}

