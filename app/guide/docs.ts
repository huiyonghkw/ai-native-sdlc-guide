export type Doc = {slug:string;number:string;title:string;kicker:string;summary:string;sections:{heading:string;paragraphs?:string[];bullets?:string[];code?:string;note?:string}[]};

export const docs:Doc[]=[
{slug:"concepts",number:"00",title:"先理解这次变化",kicker:"CODE IS NO LONGER THE ONLY BOTTLENECK",summary:"AI 原生 SDLC 不是给旧流程加一个代码生成器，而是重新设计六个阶段之间的交接、责任与反馈。",sections:[
{heading:"为什么旧流程开始堵",paragraphs:["传统 SDLC 的很多控制都建立在一个前提上：实现最贵，也最慢。需求、估时、安全评审和逐级批准，都是为了让数周甚至数月的开发工作不要中途返工。","当智能体把实现压缩到更短时间，计划、测试、评审和部署仍按人的速度运行。代码在流动，批准和验证却开始排队。"],bullets:["瓶颈移到计划、测试、评审和部署","逐行人工审查无法跟上变更量","异常仍等待固定会议，治理成本上升"]},
{heading:"先保留一个限定词",paragraphs:["原文没有提供采用前后的独立量化效果数据。不是每个团队都已经失去编码瓶颈。遗留系统、硬件项目和强领域知识任务，仍可能卡在实现本身。"],note:"先记录两周各阶段的处理时间、等待时间和返工次数，再决定改哪里。"},
{heading:"从直线变成循环",paragraphs:["六个阶段没有消失：计划、设计、构建、测试、部署、维护。变化在于，每个阶段都交付一个人和智能体共同可读的版本化产物，前一阶段的提交触发下一阶段。维护中的异常还能写成新的 intent.md，重新进入计划。"]}]},
{slug:"plan",number:"01",title:"计划：捕获 intent.md",kicker:"CAPTURE THE INTENT",summary:"让一个还不完整的想法尽快拥有可审查、可修正、可版本化的形态。",sections:[
{heading:"工作从哪里来",paragraphs:["入口可以是一个人的想法、工单，也可以是生产告警。提出者用自己的话说明现在做不到什么、谁受影响、理想结果是什么，以及哪些内容不在范围内。","智能体继续追问用户、约束、成功条件和未决问题，最后按组织模板生成 intent.md。提出者修正误解，产品负责人决定接受还是拒绝。"]},
{heading:"最小模板",code:"# 问题\n谁在什么场景遇到什么阻碍？\n\n# 期望结果\n完成后，什么行为或结果会改变？\n\n# 影响范围\n涉及哪些用户、系统和数据？\n\n# 约束与排除项\n哪些政策必须遵守？本次不解决什么？\n\n# 未决问题\n还需要谁来回答什么？"},
{heading:"责任门",paragraphs:["智能体可以追问和整理，不能替提出者确认事实，也不能替产品负责人接受问题。被接受并提交的 intent.md 才能进入设计阶段。"],note:"提交记录保存作者、时间和修订历史；合并或关闭评审保存接受与拒绝决定。"}]},
{slug:"design",number:"02",title:"设计：要求与规格",kicker:"REQUIREMENTS AND DESIGN",summary:"在代码出现之前，让品牌、安全、合规、架构和体验约束进入 spec.md。",sections:[
{heading:"从意图到规格",paragraphs:["intent.md 被接受后，智能体根据组织的 Skills 和现行政策生成 spec.md。产品负责人不必从空白开始写规格，但必须确认它是否解决原问题，未决项是否被回答或继续保留。"]},
{heading:"先处理被标出的风险",bullets:["规格是否漏掉受影响用户或系统","品牌、安全、合规和体验规则是否冲突","哪些例外必须交给政策负责人","哪些高风险改动需要技术负责人加入"]},
{heading:"治理不是一句加载 Skill",paragraphs:["规则文件会过期，也可能互相冲突。需要记录这次使用了哪个版本的规则、模型标出了什么、谁对例外作了决定。"],note:"设计评审发生在生成代码之前。此时改变方向仍然只是改文档。"}]},
{slug:"build",number:"03",title:"构建：先审计划，再写代码",kicker:"PLAN MODE BY DEFAULT",summary:"让计划详细到一个没看过聊天记录的工程师也能接手，然后再批准实现。",sections:[
{heading:"plan.md 要回答什么",bullets:["会改哪些文件","工作按什么顺序进行","哪一步风险最高","可能破坏什么","用哪些测试证明结果","放弃了哪些方案，为什么"]},
{heading:"计划也是审查对象",paragraphs:["工程师在 plan mode 中质疑计划、补足验证方法，确认后才允许智能体实现。如果实现偏离计划，plan.md 要和代码在同一次提交中更新。"]},
{heading:"什么时候可以提高自主权",paragraphs:["更高自主级别适合规格紧、爆炸半径小、测试覆盖清楚的例行任务。项目说明、Skills、Hooks、测试、沙箱和回滚路径没有成熟前，不要把自动接受当默认。"],note:"判断依据是护栏是否成熟，不是模型看起来有多聪明。"}]},
{slug:"test",number:"04",title:"测试：代码和智能体都要回归",kicker:"CONTINUOUS EVALUATIONS",summary:"项目规则、Skills 和 Hooks 会改变智能体行为，因此它们也应获得和代码类似的回归检查。",sections:[
{heading:"真实任务才是评测材料",paragraphs:["从近期工作中收集真实任务，保存提示和可接受结果的检查条件：测试通过、lint 干净、行为没有退化、政策得到遵守。Anthropic 建议从 20–50 个任务起步；这是建议范围，不是充分性证明。"]},
{heading:"什么时候运行",bullets:["CLAUDE.md 发生变化","Skill 或 Hook 发生变化","固定周期的离线回归","生产事故转化为永久评测"]},
{heading:"测试指挥系统",paragraphs:["团队常测试智能体写出的代码，却不测试指挥智能体的配置。一条规则改坏，后续所有任务可能一起偏离。"],note:"评测阈值可以阻断配置合并，但失败仍需要人判断是规则退化、样本变化还是检查本身有问题。"}]},
{slug:"deploy",number:"05",title:"部署：智能体可以修，不能自批",kicker:"REVIEW, GATES, AND RELEASE",summary:"把机器擅长的检查交给机器，把行为、风险和生产授权留在人类责任门上。",sections:[
{heading:"PR 里的双向评审",paragraphs:["Claude 可以审查进入仓库的 PR，也可以根据评论修复自己提交的变更。评审者把注意力放在意图、行为和风险，而不是重复格式检查。"]},
{heading:"职责分离",bullets:["写代码的智能体不能批准自己的变更","分支保护仍要求代码所有者批准","智能体没有直推主分支的路径","所有写入都以 PR 和流水线记录留下证据"]},
{heading:"Hooks 是执行门",paragraphs:["Hook 可以在动作发生前允许、询问或阻断。它适合保护迁移文件、基础设施、测试、生产发布和其他受控路径。阻断信息要说明原因，以及应该找谁、补什么证据。"]},
{heading:"CI/CD 从只读开始",paragraphs:["先让智能体分析失败构建、总结不稳定测试和起草变更日志。稳定后再允许它修 lint、更新文档或处理评审意见。运行使用沙箱和短期最小权限令牌，默认不持有生产凭据。"]}]},
{slug:"maintain",number:"06",title:"维护：让生产信号回到计划",kicker:"CLOSE THE LOOP",summary:"检测保持确定性，智能体负责诊断；异常最终写成新的 intent.md，再走一遍受控流程。",sections:[
{heading:"谁负责发现异常",paragraphs:["版本化、可单元测试的确定性脚本观察稳定基线，例如测试失败率、部署后 5xx 比例或 PR 周期。模型不负责凭感觉判断是否异常。"]},
{heading:"分级响应示例",bullets:["1σ：只记录","2σ：调用 Claude 做只读诊断","3σ：只能打开 PR 或调用预批准运行手册"],note:"这些阈值只是原文示例，不能未经校准直接复制到生产。"},
{heading:"重新进入生命周期",paragraphs:["智能体把异常、证据、受影响系统、建议结果和未决问题写成 intent.md。负责人决定立即修、排期或忽略。修复完成后，事故再沉淀为一条评测。"]}]},
{slug:"governance",number:"07",title:"治理：人应该站在哪些门上",kicker:"HUMAN JUDGMENT STAYS CENTRAL",summary:"人不再盯每次编辑，而是对问题、风险、批准和生产结果承担责任。",sections:[
{heading:"六个接管点",bullets:["计划：修正误解，接受或拒绝问题","设计：判断规格是否解决问题，处理例外","构建：接受计划，批准高风险方向","测试：定义什么叫可接受","部署：代码批准和生产授权","维护：选择处置，复核影响，承担结果"]},
{heading:"人类在环不是保证",paragraphs:["批准可能流于形式，评审者也可能过度依赖模型。门禁必须用能命中危险动作的正例和能放过安全动作的反例验证。Git 记录能提供审计材料，但不能自动证明身份、内容和控制都可信。"]},
{heading:"四级自主权",bullets:["手动提示：人启动每一步，智能体只生成候选","只读诊断：可以自动读取，不能写入","通过 PR 写入：可以修复，必须经过分支保护","受限动作：只在确定性触发、沙箱和预批准手册内执行"]}]},
{slug:"templates",number:"08",title:"模板与检查表",kicker:"START SMALL",summary:"从一条低风险的最小产物链开始，用自己的交付数据决定是否继续放权。",sections:[
{heading:"最小产物链",code:"intent.md\n→ spec.md\n→ plan.md\n→ 智能体实现并运行测试\n→ PR 检查 diff 是否符合计划\n→ 代码所有者批准"},
{heading:"升级自主权之前",bullets:["规格是否清楚且范围足够小","测试能否真正分辨对错","Hook 是否有命中与放过两类测试","身份和令牌是否最小权限","回滚是否在真实环境演练过","是否能追溯谁提出、修改和批准"]},
{heading:"试点记录",bullets:["各阶段处理时间与等待时间","需求返工次数","PR 评审轮次","发布回滚率","人工介入次数","错误被发现的最早阶段"],note:"原文没有独立量化效果数据。没有自己的基线和试点记录，就不要宣称效率提升。"}]},
{slug:"sources",number:"09",title:"来源与版权边界",kicker:"VERIFY AGAINST THE SOURCE",summary:"这是一份非官方中文学习手册。需要精确引用时，请返回 Anthropic 英文原文和现行产品文档。",sections:[
{heading:"主要来源",bullets:["Louis Claxton，《The AI-Native SDLC playbook》，Claude by Anthropic，2026-08-21","Claude Code 官方文档：Memory、Skills、Hooks、Code Review、Sandboxing、Security","资料核对日期：2026-08-26"]},
{heading:"哪些是原文事实",paragraphs:["六阶段、版本化产物链、人类判断门、智能体评测、PR 评审、Hooks 门禁、沙箱与分级响应，均来自 Anthropic 官方文章或产品文档。"]},
{heading:"哪些是我们的解释",paragraphs:["“共同交接协议”“测试指挥系统”“四级自主权”等中文概念，是为了帮助理解而做的归纳，不是英文原文逐字术语。"]},
{heading:"版权说明",paragraphs:["本手册没有逐段翻译原文，不复刻原站插图，也不暗示与 Anthropic 存在官方合作。Anthropic、Claude、英文原文及相关商标归原权利人所有。"]}]}
];

export const getDoc=(slug:string)=>docs.find(d=>d.slug===slug);
