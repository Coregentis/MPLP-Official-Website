import { DOCS_URLS, REPO_URLS } from "@/lib/site-config";

/**
 * Website Golden Flows Projection Layer
 *
 * This file is a Website-local aggregate projection for `/golden-flows*`.
 * It is NOT protocol truth and it is NOT the authoritative Golden Flow registry.
 *
 * Source model:
 * - Actual page source: `MPLP_website/lib/content/flows.ts`
 * - Upstream provenance: `tests/golden/flows/registry.ts` for IDs, titles, and
 *   compliance-boundary classification
 * - Upstream provenance: per-flow `tests/golden/flows/<flow>/README.md` assets for
 *   scenario detail summarized by Website
 * - Docs flow pages remain secondary reference projections, not primary truth
 */

const WEBSITE_FLOW_PROJECTION_PATH = "MPLP_website/lib/content/flows.ts" as const;
const FLOW_REGISTRY_PATH = "tests/golden/flows/registry.ts" as const;

function repoTreeUrl(path: string): string {
    return `${REPO_URLS.root}/tree/main/${path}`;
}

function repoBlobUrl(path: string): string {
    return `${REPO_URLS.root}/blob/main/${path}`;
}

export type FlowCategory = "core" | "sa-profile" | "map-profile";

export interface GoldenFlowSourceModel {
    projectionType: "aggregate_projection";
    actualSourcePath: typeof WEBSITE_FLOW_PROJECTION_PATH;
    upstreamRegistryPath: typeof FLOW_REGISTRY_PATH;
    upstreamRegistryUrl: string;
    upstreamScenarioPath: string;
    upstreamScenarioUrl: string;
    upstreamReadmePath: string;
    upstreamReadmeUrl: string;
    docsReferenceUrl: string;
}

export interface GoldenFlow {
    id: string;
    title: string;
    category: FlowCategory;
    complianceBoundary: boolean;
    desc: string;
    goal: string;
    keyModules: string[];
    successCriteria: string;
    normativeScope: { module: string; constraint: string }[];
    failureConditions: string[];
    steps: { name: string; desc: string }[];
    sourceModel: GoldenFlowSourceModel;
}

interface FlowSeed extends Omit<GoldenFlow, "sourceModel"> {
    docsReferenceUrl: string;
    upstreamScenarioPath: string;
}

function buildSourceModel(
    upstreamScenarioPath: string,
    docsReferenceUrl: string,
): GoldenFlowSourceModel {
    const upstreamReadmePath = `${upstreamScenarioPath}/README.md`;

    return {
        projectionType: "aggregate_projection",
        actualSourcePath: WEBSITE_FLOW_PROJECTION_PATH,
        upstreamRegistryPath: FLOW_REGISTRY_PATH,
        upstreamRegistryUrl: repoBlobUrl(FLOW_REGISTRY_PATH),
        upstreamScenarioPath,
        upstreamScenarioUrl: repoTreeUrl(upstreamScenarioPath),
        upstreamReadmePath,
        upstreamReadmeUrl: repoBlobUrl(upstreamReadmePath),
        docsReferenceUrl,
    };
}

function defineFlow({ docsReferenceUrl, upstreamScenarioPath, ...flow }: FlowSeed): GoldenFlow {
    return {
        ...flow,
        sourceModel: buildSourceModel(upstreamScenarioPath, docsReferenceUrl),
    };
}

export const flows: GoldenFlow[] = [
    defineFlow({
        id: "flow-01",
        title: "Single Agent – Happy Path",
        category: "core",
        complianceBoundary: true,
        desc: "The baseline single-agent workflow. Agent receives context, generates a minimal 2-step plan, executes, and produces trace.",
        goal: "Validate that the runtime can accept a Context with an Intent and produce a valid Plan.",
        keyModules: ["Context", "Plan", "Trace"],
        successCriteria: "Plan is schema-valid and logically addresses the Intent.",
        normativeScope: [
            { module: "Context", constraint: "A valid Context MUST exist and be referenced prior to plan generation." },
            { module: "Plan", constraint: "The generated Plan MUST be schema-valid, dependency-consistent, and logically derived from the Intent." },
            { module: "Trace", constraint: "All transitions and outcomes during this flow MUST be traceable and auditable." },
        ],
        failureConditions: [
            "A valid Context is missing, invalid, or not referenced.",
            "The generated Plan violates schema or dependency constraints.",
            "The Plan does not logically address the originating Intent.",
            "The execution result cannot be verified against the Intent through Trace records.",
        ],
        steps: [
            { name: "Context Creation", desc: "Context established with domain and environment." },
            { name: "Plan Generation", desc: "2-step plan created with deterministic UUIDs." },
            { name: "Task Execution", desc: "Steps executed in dependency order." },
            { name: "Trace Recording", desc: "All state transitions recorded." },
            { name: "Verification", desc: "Output validated against expected fixtures." },
        ],
        upstreamScenarioPath: "tests/golden/flows/flow-01-single-agent-plan",
        docsReferenceUrl: `${DOCS_URLS.home}/docs/evaluation/golden-flows/gf-01`,
    }),
    defineFlow({
        id: "flow-02",
        title: "Single Agent – Large Plan",
        category: "core",
        complianceBoundary: true,
        desc: "Volumetric validation with 20+ steps. Tests protocol handling of large execution plans.",
        goal: "Validate that the runtime can execute a Plan with 20+ steps while maintaining invariants.",
        keyModules: ["Context", "Plan", "Trace"],
        successCriteria: "All 20+ steps complete, Trace is generated, no performance degradation.",
        normativeScope: [
            { module: "Context", constraint: "Context MUST remain stable across volumetric execution." },
            { module: "Plan", constraint: "Large plans (20+ steps) MUST preserve dependency order and step integrity." },
            { module: "Trace", constraint: "Trace events MUST be ordered correctly despite volume." },
        ],
        failureConditions: [
            "Plan cannot handle 20+ steps without schema violations.",
            "Step ordering is not preserved during execution.",
            "Performance degrades unacceptably with large plans.",
            "Trace event ordering becomes incorrect.",
        ],
        steps: [
            { name: "Large Context", desc: "Context framing batch processing scenario." },
            { name: "Multi-Step Plan", desc: "20-30 heterogeneous steps with dependencies." },
            { name: "Volumetric Execution", desc: "Steps processed with wildcard invariant validation." },
            { name: "Trace Verification", desc: "Events ordered correctly despite volume." },
        ],
        upstreamScenarioPath: "tests/golden/flows/flow-02-single-agent-large-plan",
        docsReferenceUrl: `${DOCS_URLS.home}/docs/evaluation/golden-flows/gf-02`,
    }),
    defineFlow({
        id: "flow-03",
        title: "Single Agent – With Tools",
        category: "core",
        complianceBoundary: true,
        desc: "Tool integration via agent_role field. Validates protocol semantics for tool-enabled workflows.",
        goal: "Validate that the runtime can handle tool-based steps with proper agent_role semantics.",
        keyModules: ["Context", "Plan", "Trace", "Extension"],
        successCriteria: "Tool steps execute via agent_role, outputs captured in trace.",
        normativeScope: [
            { module: "Plan", constraint: "Steps with tool roles MUST use agent_role field (not fictional tool_name)." },
            { module: "Extension", constraint: "Tool invocations MUST go through protocol-defined extension points." },
            { module: "Trace", constraint: "Tool execution results MUST be captured in trace events." },
        ],
        failureConditions: [
            "Tool invocations bypass the agent_role mechanism.",
            "Tool outputs are not captured in trace.",
            "Security sandbox violations during tool execution.",
            "Non-deterministic tool behavior in golden tests.",
        ],
        steps: [
            { name: "Tool Context", desc: "Context for API testing workflow." },
            { name: "Tool Steps", desc: "Steps with agent_role: curl_executor, jq_processor." },
            { name: "Role-Based Execution", desc: "Each role handles specific tool type." },
            { name: "Result Capture", desc: "Tool outputs recorded in trace." },
        ],
        upstreamScenarioPath: "tests/golden/flows/flow-03-single-agent-with-tools",
        docsReferenceUrl: `${DOCS_URLS.home}/docs/evaluation/golden-flows/gf-03`,
    }),
    defineFlow({
        id: "flow-04",
        title: "Single Agent with LLM Enrichment",
        category: "core",
        complianceBoundary: true,
        desc: "AEL (Action Execution Loop) integration. Validates LLM-enriched plan generation.",
        goal: "Validate that the runtime can integrate LLM reasoning in plan generation.",
        keyModules: ["Context", "Plan", "Trace", "Core"],
        successCriteria: "LLM-enriched plan is schema-valid and traceable.",
        normativeScope: [
            { module: "Core", constraint: "AEL enrichment MUST produce schema-conformant plans." },
            { module: "Plan", constraint: "LLM-generated plans MUST be fully traceable." },
            { module: "Trace", constraint: "Enrichment reasoning MUST be captured in trace." },
        ],
        failureConditions: [
            "LLM-generated plan violates schema.",
            "Enrichment reasoning is not traceable.",
            "Non-deterministic output in golden test context.",
            "Context-plan binding is incorrect after enrichment.",
        ],
        steps: [
            { name: "Initial Context", desc: "Context with high-level intent." },
            { name: "LLM Enrichment", desc: "AEL generates enriched plan from intent." },
            { name: "Plan Validation", desc: "Enriched plan passes schema validation." },
            { name: "Execution", desc: "Plan executed with full traceability." },
        ],
        upstreamScenarioPath: "tests/golden/flows/flow-04-single-agent-llm-enrichment",
        docsReferenceUrl: `${DOCS_URLS.home}/docs/evaluation/golden-flows/gf-04`,
    }),
    defineFlow({
        id: "flow-05",
        title: "Single Agent with Confirm Required",
        category: "core",
        complianceBoundary: true,
        desc: "Multi-round approval workflow. Validates Confirm module integration.",
        goal: "Validate that the runtime handles multi-round confirmation correctly.",
        keyModules: ["Context", "Plan", "Confirm", "Trace"],
        successCriteria: "Plan transitions through approval states, Confirm records auditable.",
        normativeScope: [
            { module: "Confirm", constraint: "Confirmation requests MUST block execution until resolved." },
            { module: "Plan", constraint: "Plan status transitions MUST respect Confirm decisions." },
            { module: "Trace", constraint: "All confirmation decisions MUST be recorded in trace." },
        ],
        failureConditions: [
            "Plan executes without required confirmation.",
            "Confirmation decisions are not recorded.",
            "Approval timestamps are not captured.",
            "Rejected plans proceed to execution.",
        ],
        steps: [
            { name: "Plan Creation", desc: "Plan requiring confirmation before execution." },
            { name: "Confirm Request", desc: "Confirmation request created with approver_role." },
            { name: "Approval/Rejection", desc: "Decision captured with timestamp and notes." },
            { name: "Conditional Execution", desc: "Plan proceeds only if approved." },
        ],
        upstreamScenarioPath: "tests/golden/flows/flow-05-single-agent-confirm-required",
        docsReferenceUrl: `${DOCS_URLS.home}/docs/evaluation/golden-flows/gf-05`,
    }),
    defineFlow({
        id: "sa-flow-01",
        title: "SA Basic Execution",
        category: "sa-profile",
        complianceBoundary: false,
        desc: "Single-Agent (SA) profile baseline. Single-step execution with full lifecycle.",
        goal: "Validate SA profile initialization through completion.",
        keyModules: ["Context", "Plan"],
        successCriteria: "SA lifecycle: initialize -> load_context -> execute_step -> complete.",
        normativeScope: [
            { module: "Context", constraint: "SA profile MUST load Context before execution." },
            { module: "Plan", constraint: "SA MUST execute steps with valid agent_role." },
        ],
        failureConditions: [
            "SA lifecycle does not complete cleanly.",
            "Context is not loaded before execution.",
            "Step execution skips agent_role validation.",
        ],
        steps: [
            { name: "SA Initialize", desc: "SA profile initialization." },
            { name: "Load Context", desc: "Context loaded with SA-specific fields." },
            { name: "Execute Step", desc: "Single step executed with agent_role." },
            { name: "Complete", desc: "SA lifecycle completed cleanly." },
        ],
        upstreamScenarioPath: "tests/golden/flows/sa-flow-01-basic",
        docsReferenceUrl: `${DOCS_URLS.home}/docs/evaluation/golden-flows/sa-flow-01`,
    }),
    defineFlow({
        id: "sa-flow-02",
        title: "SA Multi-Step Evaluation",
        category: "sa-profile",
        complianceBoundary: false,
        desc: "SA profile with multi-step plan. Validates step sequencing in SA mode.",
        goal: "Validate SA can execute multiple steps in order.",
        keyModules: ["Context", "Plan"],
        successCriteria: "All steps execute in order_index sequence.",
        normativeScope: [
            { module: "Plan", constraint: "Steps MUST execute in order_index sequence." },
            { module: "Context", constraint: "Context MUST remain stable across multi-step execution." },
        ],
        failureConditions: [
            "Steps execute out of order.",
            "Step status not updated correctly.",
            "Context mutates during execution.",
        ],
        steps: [
            { name: "Multi-Step Plan", desc: "Plan with multiple ordered steps." },
            { name: "Sequential Execution", desc: "Steps processed by order_index." },
            { name: "State Tracking", desc: "Each step status updated correctly." },
        ],
        upstreamScenarioPath: "tests/golden/flows/sa-flow-02-step-evaluation",
        docsReferenceUrl: `${DOCS_URLS.home}/docs/evaluation/golden-flows/sa-flow-02`,
    }),
    defineFlow({
        id: "map-flow-01",
        title: "MAP Turn-Taking Session",
        category: "map-profile",
        complianceBoundary: false,
        desc: "Multi-Agent Protocol with turn-taking. Two agents collaborate with role rotation.",
        goal: "Validate MAP round_robin mode with sequential turn execution.",
        keyModules: ["Context", "Plan", "Collab", "Role"],
        successCriteria: "Turns execute sequentially, roles rotate correctly.",
        normativeScope: [
            { module: "Collab", constraint: "Collab mode MUST be round_robin for turn-taking." },
            { module: "Role", constraint: "Roles MUST rotate correctly between participants." },
            { module: "Plan", constraint: "Steps MUST respect turn order from Collab." },
        ],
        failureConditions: [
            "Turns do not execute sequentially.",
            "Role rotation is incorrect.",
            "Concurrent execution in round_robin mode.",
            "Collab participant binding fails.",
        ],
        steps: [
            { name: "Session Init", desc: "MAP session with round_robin mode." },
            { name: "Role Assignment", desc: "Agent A (planner), Agent B (reviewer)." },
            { name: "Turn 1: Plan", desc: "Planner creates initial plan." },
            { name: "Turn 2: Review", desc: "Reviewer evaluates plan." },
            { name: "Turn 3: Revise", desc: "Planner revises based on feedback." },
        ],
        upstreamScenarioPath: "tests/golden/flows/map-flow-01-turn-taking",
        docsReferenceUrl: `${DOCS_URLS.home}/docs/evaluation/golden-flows/map-flow-01`,
    }),
    defineFlow({
        id: "map-flow-02",
        title: "MAP Broadcast Fan-out",
        category: "map-profile",
        complianceBoundary: false,
        desc: "Multi-Agent Protocol with broadcast. Parallel dispatch to multiple agents.",
        goal: "Validate MAP broadcast mode with parallel agent execution.",
        keyModules: ["Context", "Plan", "Collab", "Role"],
        successCriteria: "All participants receive broadcast, results aggregated.",
        normativeScope: [
            { module: "Collab", constraint: "Collab mode MUST be broadcast for parallel dispatch." },
            { module: "Role", constraint: "All registered participants MUST receive the broadcast." },
            { module: "Plan", constraint: "Results from all participants MUST be aggregated." },
        ],
        failureConditions: [
            "Broadcast does not reach all participants.",
            "Parallel execution fails.",
            "Result aggregation is incomplete.",
            "Participant responses are lost.",
        ],
        steps: [
            { name: "Broadcast Init", desc: "MAP session with broadcast mode." },
            { name: "Multi-Participant", desc: "3+ agents registered." },
            { name: "Parallel Dispatch", desc: "Task broadcast to all participants." },
            { name: "Result Collection", desc: "Responses collected from all agents." },
            { name: "Aggregation", desc: "Results merged into final output." },
        ],
        upstreamScenarioPath: "tests/golden/flows/map-flow-02-broadcast-fanout",
        docsReferenceUrl: `${DOCS_URLS.home}/docs/evaluation/golden-flows/map-flow-02`,
    }),
];

export function getFlowsByCategory(category: FlowCategory): GoldenFlow[] {
    return flows.filter((flow) => flow.category === category);
}

export function getCoreFlows(): GoldenFlow[] {
    return getFlowsByCategory("core");
}

export function getSAFlows(): GoldenFlow[] {
    return getFlowsByCategory("sa-profile");
}

export function getMAPFlows(): GoldenFlow[] {
    return getFlowsByCategory("map-profile");
}

export function getProfileFlows(): GoldenFlow[] {
    return flows.filter((flow) => !flow.complianceBoundary);
}

export function getFlowById(id: string): GoldenFlow | undefined {
    return flows.find((flow) => flow.id === id);
}
