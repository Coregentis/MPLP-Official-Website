export const flows = [
    {
        id: "flow-01",
        title: "Intent to Plan Transition",
        desc: "The fundamental loop. An agent receives a high-level intent, decomposes it into a structured plan, executes tasks, and verifies the result.",
        goal: "Validate that the runtime can accept a Context with an Intent and produce a valid Plan.",
        keyModules: ["Context", "Plan", "Trace"],
        successCriteria: "Plan is schema-valid and logically addresses the Intent.",
        normativeScope: [
            { module: "Context", constraint: "A valid Context MUST exist and be referenced prior to plan generation." },
            { module: "Plan", constraint: "The generated Plan MUST be schema-valid, dependency-consistent, and logically derived from the Intent." },
            { module: "Trace", constraint: "All transitions and outcomes during this flow MUST be traceable and auditable." }
        ],
        failureConditions: [
            "A valid Context is missing, invalid, or not referenced.",
            "The generated Plan violates schema or dependency constraints.",
            "The Plan does not logically address the originating Intent.",
            "The execution result cannot be verified against the Intent through Trace records."
        ],
        steps: [
            { name: "User Intent", desc: "User submits a high-level goal via Context." },
            { name: "Context Retrieval", desc: "Agent retrieves relevant context and constraints." },
            { name: "Plan Generation", desc: "Agent decomposes intent into a DAG of steps." },
            { name: "Task Execution", desc: "Runtime executes steps in dependency order." },
            { name: "Verification", desc: "Output is validated against the original intent." }
        ]
    },
    {
        id: "flow-02",
        title: "Governed Execution",
        desc: "Ensures every action is checked against policy before execution. The AEL (Action Execution Loop) enforces permissions and constraints.",
        goal: "Validate that the runtime can execute a Plan while respecting Constraints and emitting Trace events.",
        keyModules: ["Plan", "Trace", "Core"],
        successCriteria: "All steps complete, Trace is generated, Constraints are not violated.",
        normativeScope: [
            { module: "Plan", constraint: "The Plan MUST be executed in dependency order with all constraints respected." },
            { module: "Trace", constraint: "All execution events MUST be recorded in the Trace with proper causality." },
            { module: "Core", constraint: "Governance policies MUST be checked before each action execution." }
        ],
        failureConditions: [
            "An action is executed without prior governance policy check.",
            "Trace events are missing, incomplete, or lack proper causality.",
            "A constraint violation occurs and is not detected or reported.",
            "Execution proceeds despite a policy rejection."
        ],
        steps: [
            { name: "Action Proposal", desc: "Agent proposes an action (tool call)." },
            { name: "Policy Check", desc: "Governance engine checks permissions." },
            { name: "Risk Scoring", desc: "Action is scored for risk (High/Medium/Low)." },
            { name: "Execution", desc: "Approved action is executed by the runtime." },
            { name: "Result Validation", desc: "Output is checked and recorded in Trace." }
        ]
    },
    {
        id: "flow-03",
        title: "Multi-Agent Coordination Loop",
        desc: "How multiple agents with different roles collaborate on a shared objective using the Collab and Dialog modules.",
        goal: "Validate that multiple agents can collaborate on a single Project.",
        keyModules: ["Collab", "Role", "Dialog"],
        successCriteria: "Atomic handoffs occur, shared state is maintained, no race conditions.",
        normativeScope: [
            { module: "Collab", constraint: "Task handoffs between agents MUST be atomic and maintain shared state consistency." },
            { module: "Role", constraint: "All agents MUST operate within their assigned role boundaries." },
            { module: "Dialog", constraint: "Inter-agent communication MUST follow the Dialog protocol semantics." }
        ],
        failureConditions: [
            "A task handoff results in inconsistent or lost state.",
            "An agent operates outside its assigned role boundaries.",
            "Race conditions occur during concurrent agent operations.",
            "Inter-agent communication violates Dialog protocol semantics."
        ],
        steps: [
            { name: "Shared Context", desc: "Project state is synchronized across agents." },
            { name: "Role Assignment", desc: "Agents are assigned roles (e.g., Researcher, Writer)." },
            { name: "Task Handoff", desc: "Task is delegated from one agent to another." },
            { name: "Consensus", desc: "Agents agree on the final output." },
            { name: "Result Aggregation", desc: "Partial results are merged into final deliverable." }
        ]
    },
    {
        id: "flow-04",
        title: "Drift Detection & Recovery",
        desc: "Detecting when an agent's execution diverges from the original plan and automatically triggering a recovery or replanning sequence.",
        goal: "Validate that the runtime can detect when the PSG state does not match reality (e.g., file deleted).",
        keyModules: ["Core", "Trace"],
        successCriteria: "DriftDetected event emitted, Recovery Plan generated.",
        normativeScope: [
            { module: "Core", constraint: "The runtime MUST continuously monitor for state divergence from the expected plan." },
            { module: "Trace", constraint: "All drift detection and recovery events MUST be recorded in the Trace." }
        ],
        failureConditions: [
            "State divergence occurs but is not detected by the runtime.",
            "DriftDetected event is not emitted when drift occurs.",
            "Recovery plan is not generated or is invalid.",
            "Drift recovery events are not recorded in the Trace."
        ],
        steps: [
            { name: "State Snapshot", desc: "Periodic snapshot of system state." },
            { name: "Drift Analysis", desc: "Comparison of actual vs. expected state." },
            { name: "Alert Generation", desc: "Drift event triggers system alert." },
            { name: "Recovery Plan", desc: "Agent generates plan to fix drift." },
            { name: "State Rollback", desc: "Optional rollback to last known good state." }
        ]
    },
    {
        id: "flow-05",
        title: "Runtime Integration & External I/O",
        desc: "Connecting the protocol to external systems (IDEs, CI/CD, Tools) via the L4 Integration Layer, ensuring all side-effects are tracked.",
        goal: "Validate that the runtime can safely invoke external tools and handle I/O.",
        keyModules: ["Extension", "Network"],
        successCriteria: "Tool executes successfully, output is captured in PSG, security sandbox holds.",
        normativeScope: [
            { module: "Extension", constraint: "All external tool invocations MUST go through the Extension module interface." },
            { module: "Network", constraint: "External I/O MUST be captured and tracked within the protocol boundary." }
        ],
        failureConditions: [
            "External tool is invoked without going through the Extension interface.",
            "External I/O side-effects are not captured or tracked.",
            "Security sandbox is violated during external interaction.",
            "External system response is not properly converted to protocol format."
        ],
        steps: [
            { name: "External Event", desc: "Webhook or API call triggers agent." },
            { name: "L4 Adapter", desc: "Adapter converts external event to MPLP format." },
            { name: "Protocol Event Handling", desc: "Agent processes event within protocol loop." },
            { name: "State Update", desc: "Internal state is updated." },
            { name: "Response", desc: "Agent sends response back to external system." }
        ]
    }
];
