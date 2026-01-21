# PSG — 项目语义图谱：多智能体系统的大脑

**《MPLP 技术深潜》系列 1/10**

---

## 发布元信息（Publication Metadata）

| 属性     | 值                                                         |
| ------ | --------------------------------------------------------- |
| 首次发布日期 | 2026-01-15                                                |
| 协议版本   | MPLP v1.0.0（已冻结）                                          |
| 文章版本   | v1.0                                                      |
| 署名     | MPLP Protocol Governance Committee（MPGC）                  |
| 版权声明   | © 2026 Bangshi Beijing Network Technology Limited Company |
| 许可     | Apache-2.0                                                |
| 关键引用   | [GraphUpdateEvent Schema](https://github.com/AiSg-Coregentis/mplp_prerelease/blob/main/schemas/v2/events/mplp-graph-update-event.schema.json) |
| 对应文档源  | [PSG Guide](https://docs.mplp.io/docs/guides/runtime/psg)  |

> 注：本文是对 MPLP 中 PSG 概念的工程化阐释与传播性整理。协议本体以 MPLP 仓库/规范为准；本文不作为协议条文的唯一来源。

---

## 摘要

**Project Semantic Graph（PSG，项目语义图谱）** 是 MPLP v1.0 中提出的关键运行时概念：它不是数据库、不是日志、也不是框架内部的黑箱状态，而是一个**语义真相层**——把项目中的所有实体、关系与状态迁移都变成可表达、可查询、可追溯、可裁决的结构化图谱。

一句话：**PSG 是多智能体系统的"大脑"；它让系统工程从"靠感觉调 prompt"升级为"用证据管理生命周期"。**

**你会在这些时刻意识到自己缺 PSG：**
- 多个 agent 对同一份需求各写一套"现实"，最后没有人能解释哪个是真的；
- 你能看到日志，但你无法裁决某次变更是否违反了审批/回滚规则；
- 你想复现一次事故，却发现状态早已被覆盖、上下文早已漂移。

---

## 1. 问题：为什么传统做法在多智能体时代必败？

当 AI 从单轮对话走向多智能体协作，真正致命的问题不再是"模型够不够强"，而是：

> **多个智能体如何共享同一份一致、可追溯、可审计的项目状态？**

传统方案的失败模式几乎是确定的：

| 方案              | 为什么会失败                           |
| --------------- | -------------------------------- |
| 线性对话历史          | 只能按时间排队，无法表达依赖、引用、分叉与回滚          |
| 分散缓存 / 内存状态     | 状态碎片化，协作时必然不同步、难以追责              |
| 非结构化日志          | 事后审计像在干草堆找针：能看见"发生过"，却无法裁决"是否正确" |
| 临时 state object | 没有语义约束，没有完整性保障，靠工程师自律            |

MPLP 的回答是：**PSG（Project Semantic Graph）**。

---

## 2. 定义与设计原则

### 2.1 官方定义（概念引用）

> PSG 是 MPLP 运行时的"语义大脑"：它建模项目中的所有实体、关系与状态迁移；并在物理存储（VSL）之上提供干净的图抽象。

### 2.2 核心原则（最重要的一句话）

**PSG 是语义真相；VSL 是物理存储。**

* **PSG 解决"是什么、关系是什么、状态如何演进"**
* **VSL 解决"数据放在哪、怎么落盘、怎么快照"**

这是一种经典的分层：语义层与存储层解耦，才能做到 vendor-neutral、可扩展、可替换。

### 2.3 PSG 的关键职责（工程视角）

PSG 需要建模的对象包括两个层次：
- **L2 十模块产生的项目实体对象**：除 Core（运行时元数据）外，其余模块都会产出可被 PSG 建模的实体（Context、Plan、Trace、Confirm、Role、Dialog、Collab、Extension、Network）。
- **模块内子实体**：如 Plan 内部的 Step、Trace 内部的 Segment 等。

基于此，PSG 承担以下关键职责：

1. **建模协议实体**：既包括顶层 L2 模块对象（Context / Plan / Trace 等），也包括必要的子实体（Step / Segment 等）
2. **强制语义关系**：例如 Plan 必须属于某个 Context，Step 必须属于某个 Plan
3. **记录状态迁移**：每次变更可追溯、有历史
4. **支持图查询**：依赖链、影响分析、跨对象定位
5. **支持漂移检测**：把"预期状态"与"实际状态"做对比，找出 drift

> **注**：这里提到的 Step 不是独立的 L2 模块，而是 Plan 模块内部的子实体。PSG 需要单独建模 Step 是为了表达步骤间的依赖关系（`DEPENDS_ON` 边）。详见第 3 节。

---

## 3. 节点体系：PSG 节点 vs L2 十模块

这是理解 PSG 最重要的区分之一：**PSG 节点类型 不等于 L2 模块**。

### 3.1 什么是 L2 十模块？

MPLP 的 L2 层（Coordination & Governance）定义了 **10 个顶层模块**：

| 模块 | 职责 |
|:---|:---|
| **Context** | 生命周期根对象，定义项目范围 |
| **Plan** | 计划与行动序列（内部包含 `steps[]`） |
| **Confirm** | 人机协作审批流 |
| **Trace** | 不可变执行历史（内部包含 `segments[]`） |
| **Role** | Agent 能力与权限 |
| **Dialog** | 多轮对话管理 |
| **Collab** | 多 Agent 会话编排 |
| **Extension** | 工具/集成插件 |
| **Core** | 运行时元数据管理（模块注册表） |
| **Network** | Agent 拓扑结构 |

注意：**Step 不是独立模块**，它是 Plan 模块内部的子实体（`Plan.steps[]` 数组元素）。

### 3.2 什么是 PSG 节点类型？

PSG 需要在图谱中建模这些对象。但 PSG 节点类型 **不完全等于** L2 模块：

- PSG **需要** 建模 Step 作为独立节点（StepNode），因为需要表达步骤间的依赖关系
- PSG **不需要** 为 Core 模块创建节点（Core 是运行时元数据，不是项目实体）

在 MPLP v1.0 的参考 PSG 模型中，我们使用以下 **10 类节点**来承载核心项目实体；实现可扩展更多节点族，但应保持事件与证据语义兼容：

| PSG 节点类型 | 含义 | 与 L2 模块的关系 | 常见关键字段 |
| --------- | ------- | ------- | -------------------------------------- |
| ContextNode | 生命周期根对象 | = Context 模块 | `context_id`, `source`, `constraints` |
| PlanNode | 计划与行动序列 | = Plan 模块 | `plan_id`, `context_id`, `steps[]` |
| **StepNode** | 原子工作单元 | **是 Plan 模块的子实体** | `step_id`, `plan_id`, `status` |
| TraceNode | 执行记录 | = Trace 模块 | `trace_id`, `context_id`, `segments[]` |
| ConfirmNode | 治理关口 | = Confirm 模块 | `confirm_id`, `target_id`, `status` |
| RoleNode | 角色与能力 | = Role 模块 | `role_id`, `capabilities[]` |
| CollabNode | 协作会话态 | = Collab 模块 | `collab_id`, `participants[]` |
| DialogNode | 对话交换结构 | = Dialog 模块 | `dialog_id`, `turns[]` |
| ExtensionNode | 工具/集成注册 | = Extension 模块 | `extension_id`, `tools[]` |
| NetworkNode | 拓扑与连接 | = Network 模块 | `network_id`, `connections[]` |

### 3.3 为什么 StepNode 需要单独存在？

Step 虽然是 Plan 的子实体，但 PSG 必须将其建模为独立节点，原因如下：

1. **依赖关系建模**：步骤 B 依赖步骤 A 完成（`DEPENDS_ON` 边），这需要两个独立节点才能连边
2. **状态独立追踪**：每个 Step 有自己的状态（示意：`pending -> in_progress -> completed/failed`，具体枚举以 [Plan Schema](https://github.com/AiSg-Coregentis/mplp_prerelease/blob/main/schemas/v2/mplp-plan.schema.json) 为准）
3. **角色分派**：Step 可以通过 `ASSIGNED_TO` 边指向执行它的 Role
4. **细粒度查询**：需要查询"哪些步骤被阻塞了"、"谁执行了这个步骤"

### 3.4 为什么没有 CoreNode？

Core 模块管理的是**运行时元数据**（协议版本、启用的模块列表等），而不是**项目实体**。PSG 建模的是项目生命周期中的对象，Core 的信息属于运行时配置，不需要作为图谱节点存在。

---

## 4. 边体系：语义关系类型（最小可用集）

节点之间通过"带类型的边（typed edges）"连接，用于表达与约束语义关系。

| 边类型（示例）     | 作用                 | 示例                           |
| ----------- | ------------------ | ---------------------------- |
| HAS_CONTEXT | Plan → Context 归属  | `plan.context_id → context`  |
| CONTAINS    | Plan → Step[] 容器关系 | `plan.steps → step[]`        |
| DEPENDS_ON  | Step 依赖关系          | `stepB → stepA`              |
| ASSIGNED_TO | Step 分派给 Role      | `step.agent_role → role`     |
| TRACES      | Trace 对应 Context   | `trace.context_id → context` |
| CONFIRMS    | Confirm 指向目标       | `confirm.target → plan/step` |
| PRODUCES    | Step 产出工件          | `step.outputs → artifact`    |

### 4.1 一个最直观的图（逻辑示意）

```
Context ──(HAS_CONTEXT)──► Plan
                             │
                        (CONTAINS)
                             ▼
                           Step ◄──(DEPENDS_ON)──► Step
                             │
                       (ASSIGNED_TO)
                             ▼
                            Role
```

---

## 5. 参考运行时契约（Reference Contract）

下面给出一个"面向实现者的参考契约"，用于表达 PSG 最小读写能力。它不是协议条文本体，而是一种**工程接口范式**，帮助不同语言/框架实现对齐基本操作面。

```ts
interface ProjectSemanticGraph {
  // Node operations
  getNode<T>(type: string, id: string): Promise<T | null>;
  putNode<T>(type: string, id: string, data: T): Promise<void>;
  deleteNode(type: string, id: string): Promise<void>;

  // Edge operations
  getEdges(fromType: string, fromId: string, edgeType: string): Promise<Edge[]>;
  addEdge(from: NodeRef, to: NodeRef, edgeType: string): Promise<void>;
  removeEdge(from: NodeRef, to: NodeRef, edgeType: string): Promise<void>;

  // Query operations
  query(query: GraphQuery): Promise<Node[]>;
  traverse(startId: string, edgeTypes: string[], depth: number): Promise<Node[]>;
}
```

如果要进入生产级运行时，常见会再扩展：

* 初始化/关闭
* 状态 hash（漂移检测用）
* 事件绑定（便于观测与回放）

---

## 6. 四条"可裁决不变量"（Evaluation Invariants）

PSG 的价值不在"能存图"，而在于它能支持裁决：系统有没有按生命周期规则运行。

这里给出四条在工程上极其关键的不变量（用于评估与审计）：

### 6.1 父对象存在性（Parent Existence）

子对象不应脱离父对象孤立存在：

* Plan 应有 Context
* Step 应有 Plan
* Trace 应有 Context
* Confirm 应指向存在的目标（Plan/Step）

### 6.2 终态不可变（Terminal State Immutability）

进入终态的对象应视为不可变，否则审计与回放无意义：

* Plan：completed / failed / cancelled
* Step：completed / failed / skipped
* Trace：completed

### 6.3 ID 不可变（ID Immutability）

对象 ID 一旦创建，不应被修改；否则所有引用链都会失效。

### 6.4 写后读一致（Read-After-Write）

写入后立即读取应能得到一致结果，否则多智能体协作会产生"分裂现实"。

---

## 7. 可观测性：GraphUpdateEvent（证据的入口）

如果 PSG 是大脑，那么 **GraphUpdateEvent** 是神经信号：任何 PSG 变更都应该能被结构化记录，从而进入证据链。

示例（简化）：

```json
{
  "event_id": "evt-550e8400-e29b-41d4-a716-446655440000",
  "timestamp": "2026-01-15T10:30:00Z",
  "event_family": "graph_update",
  "graph_id": "psg-550e8400-...",
  "update_kind": "node_add",
  "node_delta": 1,
  "edge_delta": 2,
  "source_module": "plan"
}
```

常见 update_kind 包括：
`node_add`, `node_update`, `node_delete`, `edge_add`, `edge_update`, `edge_delete`, `bulk`

你可以把它理解成：**PSG 的每一次突触变化，都要留下可回放的证据片段。**
这也是后续 Validation Lab 能裁决"实现是否符合生命周期不变量"的基础。

---

## 8. PSG 与常见方案的差异（不是比"强"，而是比"可裁决"）

| 维度    | 临时状态 | 框架内置状态 | MPLP PSG（语义真相层）         |
| ----- | ---- | ------ | ----------------------- |
| 结构    | 无    | 私有     | 有：图结构                   |
| 语义完整性 | 无    | 依赖实现/可见性不一  | 可表达关系 + 可约束             |
| 不变量   | 无    | 依赖实现   | 可作为评估目标                 |
| 可观测性  | 日志   | 生态内部   | 结构化事件（GraphUpdateEvent） |
| 漂移检测  | 手工   | 有限     | 支持 hash/diff 思路         |

关键不是"PSG 比别人强"，而是：**PSG 把多智能体系统从"解释型工程"变成"证据型工程"。**

---

## 9. 与 MPLP 其他组件的关系

### 9.1 PSG 与 VSL 的分层

```
┌───────────────────────────────┐
│ PSG（语义层）                 │
│ Nodes / Edges / Queries / 校验 │
├───────────────────────────────┤
│ VSL（存储层）                 │
│ KV / Event Log / Snapshots     │
└───────────────────────────────┘
```

### 9.2 模块与 PSG 的绑定（参考路径）

| 模块      | PSG 路径（示意）                  | 常见操作        |
| ------- | --------------------------- | ----------- |
| Context | `psg.contexts/<context_id>` | CRUD        |
| Plan    | `psg.plans/<plan_id>`       | CRUD + 状态迁移 |
| Trace   | `psg.traces/<trace_id>`     | 追加式段落       |
| Confirm | `psg.confirms/<confirm_id>` | 决策状态        |
| Role    | `psg.roles/<role_id>`       | 能力查询        |

---

## 10. 结语

PSG 不是"又一个图数据库概念"，而是为多智能体系统的生命周期工程而生的语义真相层。

它带来四个直接结果：

1. **结构化语义**：把对象与关系变成图
2. **可裁决完整性**：用不变量评估系统是否正确运行
3. **可观测证据链**：每次变更都有 GraphUpdateEvent
4. **语义与存储解耦**：PSG 管"真相"，VSL 管"落盘"

如果你要构建的是一个真正可交付、可审计、可复现的多智能体系统，那么最终你一定会遇到同一个问题：
**你需要一个 PSG，或者你会在痛苦中发明一个"类 PSG"。**

---

## 参考

1. [MPLP v1.0.0 Specification](https://docs.mplp.io)
2. [PSG Guide（Runtime / PSG）](https://docs.mplp.io/docs/guides/runtime/psg)
3. [GraphUpdateEvent Schema](https://github.com/AiSg-Coregentis/mplp_prerelease/blob/main/schemas/v2/events/mplp-graph-update-event.schema.json)
4. [MPLP Repository](https://github.com/AiSg-Coregentis/mplp_prerelease)

---

**文档历史**

| 版本   | 日期         | 作者   | 变更   |
| ---- | ---------- | ---- | ---- |
| v1.0 | 2026-01-15 | MPGC | 初始发布 |

---

*本文是《MPLP 技术深潜》系列的一部分，用于提供可公开引用的概念说明与时间戳归档；协议本体与约束以 MPLP 仓库与规范为准。*

**下一篇**：MPLP 四层架构（L1–L4）——为什么它决定了协议的可扩展与 vendor-neutral →
