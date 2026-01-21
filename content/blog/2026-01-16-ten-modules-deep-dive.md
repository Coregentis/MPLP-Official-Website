# MPLP 十模块架构深解：这不是分类，这是多智能体的"生理系统"

**《MPLP 技术深潜》系列 2/10**

---

## 发布元信息（Publication Metadata）

| 属性 | 值 |
|:---|:---|
| **首次发布日期** | 2026-01-16 |
| **协议版本** | MPLP v1.0.0（已冻结） |
| **文章版本** | v1.1 (Deep Dive) |
| **署名** | MPLP Protocol Governance Committee (MPGC) |
| **版权声明** | © 2026 Bangshi Beijing Network Technology Limited Company |
| **许可** | Apache-2.0 |
| **关键引用** | [Module Interactions Specification](https://docs.mplp.io/docs/specification/modules/module-interactions) |

> 注：本文用于提供可公开引用的概念说明与时间戳归档；协议本体与约束以 MPLP 仓库与规范为准。

---

## 摘要

大多数 Agent 框架的模块化仅停留在代码组织层面（Utils 文件夹、Classes 文件夹）。MPLP v1.0 的**"十模块体系"**不仅仅是功能的分类，而是对 Agent 生命周期的**本体论（Ontological）重构**。

本文深入解析 MPLP 的三个核心架构创新：**"5+5" 双环结构**、**意图与现实的强制分离**（Plan vs Trace），以及**治理的实体化**（Confirm）。这套设计解决了长期困扰 Agent 工程的"状态黑箱"与"协作不可控"问题。

---

## 1. 架构全景："5+5" 双环结构

MPLP 并未"发明" 10 个平等的模块，而是定义了**两个同心圆**。这种分层设计确保了协议既能跑在极简的树莓派单 Agent 上，也能跑在复杂的企业级多 Agent 集群中。

### 1.1 内环：SA Kernel（单体生存核心）

这 5 个模块是任何一个符合 MPLP 标准的 Agent **必须** 具备的"维生系统"：

1.  **Context (上下文)**：**世界的边界**。它不是简单的 K-V 字典，而是定义了"Agent 活在哪里"。必须包含 `root.domain`（业务域）和 `root.environment`（环境）。**创新点**：Context 是所有其他模块的"根锚点"，没有 Context，Plan 和 Trace 都是无根之木。
2.  **Plan (计划)**：**意图的结构化**。前额叶皮层，负责将目标分解为 DAG（有向无环图）。
3.  **Trace (追踪)**：**记忆的证据链**。海马体，负责写入**不可变**的执行历史。
4.  **Role (角色)**：**能力的护照**。定义了 Agent 的权限边界（RBAC）。
5.  **Core (核心)**：**元数据注册表**。运行时的 DNA，记录协议版本和启用的模块。

### 1.2 外环：MAP Extensions（群体协作扩展）

这 5 个模块是为了解决"萨特难题"（他人即地狱）——即多智能体协作中的混乱：

6.  **Collab (协作)**：**会议室**。将"谁在和谁说话"从消息流中抽离出来，变成一个独立的会话状态对象。支持 `round_robin`（轮询）、`broadcast`（广播）等模式。
7.  **Dialog (对话)**：**消息流**。纯粹的通信管道，不承载业务状态。
8.  **Confirm (确认)**：**治理关口**。人机交互的"红绿灯"。
9.  **Network (网络)**：**物理拓扑**。解决"它在哪台服务器上"的问题。
10. **Extension (扩展)**：**工具箱**。外部能力的标准化接口。

---

## 2. 深度设计模式一：意图与现实的强制分离 (Plan vs. Trace)

在 LangChain 或 AutoGen 等框架中，用户的 Prompt（意图）和 Agent 的 Tool Outputs（执行结果）通常混在一个 `messages` 列表里。

MPLP 认为这是一个**架构错误**。它导致了"漂移（Drift）"无法被检测——如果你的意图变了，你的历史也就变了。

**MPLP 的设计：**

*   **Plan 模块**：只存储 **"预期发生什么"**（Intent）。它是静态的、结构化的 DAG。
    *   *Schema 特征*：包含 `steps[]`, `dependencies`, `objective`。
*   **Trace 模块**：只存储 **"实际发生了什么"**（Reality）。它是动态的、Append-only 的日志。
    *   *Schema 特征*：包含 `segments[]`, `timestamps`, `results`。

**带来的价值**：
通过对比 `Plan` 和 `Trace`，运行时可以计算出 **"偏差（Variance）"**。这就是 MPLP 独有的 **Drift Detection（漂移检测）** 能力的基础。

> **Prior Art 声明**：MPLP 首次在 Agent 协议层将 Intent（Plan）与 Execution Log（Trace） 解耦为两个独立的顶级模块。

---

## 3. 深度设计模式二：治理的实体化 (Reification of Governance)

在大多数系统中，"需要人类审批"只是代码里的一个 `await human_input()` 函数调用。这是不可审计的。

MPLP 将"审批"这个行为**实体化**为一个独立对象：**Confirm Module**。

*   当 Agent 需要高危操作（如转账）时，它并不阻塞在函数调用上，而是：
    1.  创建一个 `Confirm` 对象（状态：`pending`）。
    2.  将 `target_id` 指向当前的 Plan 或 Step。
    3.  **挂起**（Suspend）自己的执行。
*   人类（或外部规则引擎）看到这个对象，写入一个 `Decision` 记录（状态：`approved/rejected`）。
*   Agent 监听到状态变更，恢复执行。

**带来的价值**：
审批不再是瞬间的函数调用，而是一条**永久的、可审计的记录**。审计员可以随时查询："上个月谁批准了这个高危操作？" —— 答案就在 `Confirm` 模块的历史数据里（`decided_by_role` 字段）。

---

## 4. 模块间的"引力场"：物理松耦合，语义强一致

这就是用户常问的"互相耦合"设计的精髓。

### 物理松耦合 (Physical Decoupling)
所有模块之间通过 **UUID** 引用。
*   Plan 不包含 Context 的完整 JSON，只包含 `"context_id": "ctx-550..."`。
*   Step 不包含 Role 的完整定义，只包含 `"agent_role": "coder-01"`。

这意味着在存储层（VSL），你可以把 Plan 存在 Redis，把 Trace 存在 S3，物理上完全隔离。

### 语义强一致 (Semantic Consistency)
虽然物理分离，但 MPLP 通过 **Kernel Duties（内核职责）** 强制了逻辑上的紧耦合：

*   **存在性不变量**：你不能创建一个指向不存在 `context_id` 的 Plan。运行时必须拦截并报错。
*   **状态互锁**：
    *   如果 `Context.status == 'suspended'`, 所有的 `Plan` 必须立即停止执行。
    *   如果 `Confirm.status == 'rejected'`, 关联的 `Plan` 必须自动流转为 `cancelled`。

这种**"物理分离，逻辑互锁"**的设计，使得 MPLP 系统既具备微服务的灵活性，又具备单体应用的严谨性。

---

## 5. 结语

MPLP 的十模块体系，不是为了把简单问题复杂化，而是为了把**复杂问题结构化**。

*   通过 **5+5 分层**，它平衡了轻量级与企业级需求。
*   通过 **Plan/Trace 分离**，它把"漂移检测"变成了可能。
*   通过 **Confirm 实体化**，它把"人机治理"写入了基因。

这套"生理系统"的设计，是 MPLP 区别于普通 Agent SDK 的最本质特征。

---

**下一篇**：MPLP 证据包（Evidence Pack）——如何把运行时的"黑盒"变成可审计的"白盒" →
