const roleSettings = {
  ops: { order: ['events', 'handbook', 'procurement'], note: '当前重点：活动策划、跨部门协调与内容执行', intro: '从活动组织到跨部门执行，展示我如何推进具体事务。' },
  admin: { order: ['handbook', 'procurement', 'events'], note: '当前重点：流程规范、台账管理与资料归档', intro: '从制度建设到采购台账，展示我如何让日常事务清晰可追踪。' },
  hr: { order: ['handbook', 'events', 'procurement'], note: '当前重点：组织协作、人员排班与沟通执行', intro: '从组织交接与人员协作切入，展示可迁移到人力资源工作的能力。' }
};

const projectDetails = {
  handbook: {
    category: '组织建设 / 2025—2026', title: '团委／学生会工作手册与流程模板',
    lead: '把依赖口头传递的经验，整理成可执行、可交接的工作规则。',
    context: '团学工作涉及多个部门，活动策划、经费预算和资料归档等工作缺少统一的执行口径，换届后也容易断档。',
    actions: ['主导整理团委章程、部门职能、四大中心工作细则和考评制度。', '明确策划审批、物资采购、通知与新闻稿、材料建档、排班等职责边界。', '配套学期工作计划、年度进度安排表及三类可复用模板。'],
    result: '手册与模板体系覆盖 4 个学生组织、200+ 名团学干部。任职期间，学院学生会以总评分第二名获评 2025 年宁波大学卓越学生会。',
    caveat: '工作手册公开版保留可分享章节与工作表格，省略人员名单、联系方式和校内系统账号等内容；集体荣誉按组织成果表述。',
    files: [['团委工作手册公开版', 'evidence/handbook-full.html', '在线查看']]
  },
  events: {
    category: '活动运营 / 2025—2026', title: '院级活动统筹与执行',
    lead: '将活动从策划案推进到现场，并留下可复用的执行资料。',
    context: '文化节、毕业集市、读书沙龙和全员大会涉及不同的参与对象、物资、人员与宣传节点，需要持续协调。',
    actions: ['撰写活动策划、通知和宣传文案，制作排班与任务安排。', '协调相关部门的截止节点，并负责食品材料、工具和活动物资采购。', '跟进现场执行、物资清点、租借归还、复盘和材料归档。'],
    result: '累计主持落地 9+ 场院级活动，产出 30+ 篇通讯稿与推送文案、12 篇活动策划案；文化节单场实际到场 200+ 人。',
    caveat: '以上为作品集记录的整体量化口径；不同活动的执行日期以最终通知与推送为准。',
    files: [
      ['文化节策划案', 'evidence/culture-plan.html', '在线查看'],
      ['毕业集市策划案', 'evidence/graduation-plan.html', '在线查看'],
      ['文化节原文件', 'evidence/culture-festival-plan.docx', 'Word 下载'],
      ['毕业集市原文件', 'evidence/graduation-market-plan.docx', 'Word 下载']
    ]
  },
  procurement: {
    category: '运营管理 / 2025—2026', title: '物资采购与费用台账体系',
    lead: '让预算、采购、分发和报销资料形成可追踪的流程。',
    context: '多场活动需要持续采购物资并处理经费，若只依靠聊天记录和零散表格，容易遗漏状态与凭证。',
    actions: ['编制需求清单与预算，执行下单采购、到货验收和现场分发。', '维护 Excel 物资及报销台账，登记商品、数量、单价、平台与订单信息。', '按活动整理发票、支付说明、验收和报销材料。'],
    result: '负责学生会／团委活动物资采购，并将“规范物资采购与报销管理”写入部门工作计划，明确计划、审批、落实三个阶段。',
    caveat: '采购表在线节选保留商品、数量和金额，省略订单号；报销凭证不在网页展示。',
    files: [
      ['采购表公开节选', 'evidence/procurement-excerpt.html', '在线查看'],
      ['部门工作计划', 'evidence/office-plan.html', '在线查看']
    ]
  },
  internship: {
    category: '企业实习 / 2025 夏', title: '龙利达实习：项目资料整理',
    lead: '把不同供应商的报价材料整理为便于比较的清单。',
    context: '比亚迪巴西工厂搬运项目的供应商报价口径不同，往来附件分散，影响方案比选。',
    actions: ['统一报价维度，整理供应商资料与比价清单。', '完成中英合同翻译及归档。', '参与规章制度修订、公司简介与产品 PPT 制作、会议记录和来访接待。'],
    result: '将分散的报价资料收敛为一份可比对清单，供方案确认使用。',
    caveat: '现有实习证明覆盖 2025 年 7 月 1 日至 8 月 1 日；项目经历按作品集记录表述。',
    files: [['实习证明', 'evidence/internship-certificate.pdf', 'PDF 查看']]
  },
  uni: {
    category: '数字化项目 / 2026.10—11', title: 'UNI 保研申请全流程管理工作台',
    lead: '用一个可搜索、可备份的工具管理长期申请任务。',
    context: '院校投递状态、面试题和英语积累散落在表格、备忘录与聊天记录中，不便追踪和迁移。',
    actions: ['独立完成产品设计、架构、开发、测试与上线。', '搭建仪表盘、待办、项目看板、面试资料、专业问题和专业英语六大板块。', '支持云端与本地离线运行，以及 JSON 备份恢复和附件打包导出。'],
    result: '经过 5 次迭代，形成 3600+ 行单文件应用；线上冒烟 20/20、交互 12/12、本地 13/13 测试通过。',
    caveat: '这是个人数字化项目，体现信息组织与工具搭建能力。',
    files: [
      ['项目经历说明', 'evidence/uni-project-summary.html', '在线查看'],
      ['单文件应用', 'evidence/uni-source.html', '打开应用']
    ]
  },
  engineering: {
    category: '课程设计 / 2026.09—11', title: 'AI 辅助食品工厂工程设计',
    lead: '以统一参数模型协调两条食品生产线的说明书、数据表与 CAD 图纸。',
    context: '食品机械与设备课程设计要求独立完成两条生产线设计。多份交付文件并行修改时，得率、设备数量、功率和房间布置等参数容易不一致。',
    actions: ['使用 Claude Code 辅助前期物料衡算、设备选型与说明书初稿，使用 Codex 重绘图纸并进行工程校核。', '将关键参数整理为 JSON 修订模型，驱动说明书、数据表和图纸同步更新。', '识别并修正 17 项工程问题，涵盖设备布局、卫生分区、包装能力、电热负荷和标准版本等。'],
    result: '完成年产 200 t 烤鱼片与年产 2000 t 中式香肠两条产线；交付两份各 31 页说明书、6 张 A1 图纸及配套数据表，DXF 审计 0 errors。',
    caveat: '这是课程设计，不等同于实际工厂建设。结构、消防、制冷负荷及部分工艺条件仍需专项验证；AI 输出经过人工校核。',
    files: [
      ['烤鱼片设计说明书', 'evidence/fish-manual.pdf', 'PDF 查看'],
      ['烤鱼片三张图纸', 'evidence/fish-drawings.pdf', 'PDF 查看'],
      ['中式香肠设计说明书', 'evidence/sausage-manual.pdf', 'PDF 查看'],
      ['中式香肠三张图纸', 'evidence/sausage-drawings.pdf', 'PDF 查看'],
      ['烤鱼片 AI 使用记录', 'evidence/fish-ai-record.html', '在线查看'],
      ['中式香肠 AI 使用记录', 'evidence/sausage-ai-record.html', '在线查看']
    ]
  },
  shrimp: {
    category: '校级一般 SRIP / 2026.03—至今', title: '冻干哈氏仿对虾品质提升研究',
    lead: '负责项目申报与推进，围绕复水品质建立阶段性评价材料。',
    context: '项目研究金属离子复水介质对冻干虾仁复水品质的影响，需要协调文献、方案、检测与数据整理。',
    actions: ['主持立项申报、文献检索、实验方案设计和进度统筹。', '组织复水率、质构、水分分布、表面疏水性、挥发性风味和色度等指标检测。', '汇总阶段性数据、图表及分析文本，支持中期检查。'],
    result: '阶段性成果附件记录了 6 类指标数据、2 幅综合图表和论文初稿相关材料；项目仍在推进。',
    caveat: '阶段数据中的部分样本量有限，趋势按探索性结果表述，不预设结题结论。',
    files: [['SRIP 阶段性成果附件', 'evidence/shrimp-stage.pdf', 'PDF 查看']]
  },
  gel: {
    category: '校级重点 SRIP / 2026.03—至今', title: '虾糜凝胶综合质量评价',
    lead: '参与多指标实验测定与数据整理。',
    context: '项目考察磁场与微晶纤维素协同作用下的虾糜凝胶结构、消化和风味。',
    actions: ['承担消化特性与抗氧化能力测定。', '参与低场核磁共振实验与数据整理。', '为项目多指标评价提供测定数据支撑。'],
    result: '形成实验设计与阶段性测定记录，项目仍在推进。',
    caveat: '实验设计为项目组材料，此处仅按本人作品集记录的分工作说明。',
    files: [['项目实验设计', 'evidence/gel-experiment-design.pdf', 'PDF 查看']]
  },
  academic: {
    category: '学术成果 / 2025', title: 'SCI 论文与软件著作权',
    lead: '参与论文研究与软件成果登记。',
    context: '在食品科学相关科研合作中，参与论文和软件成果的形成。',
    actions: ['以第 4 作者参与发表 International Journal of Food Microbiology 论文。', '作为共同完成人登记“高效抗真菌肽的机器学习预测软件 V1.0”。'],
    result: '论文发表于 International Journal of Food Microbiology，2025 年第 441 卷，文章编号 111329；软件著作权登记号 2025SR0468357。',
    caveat: '论文首页截图显示文章编号 111329，与原作品集中的 113329 不同；网页以原始截图为准。完整出版社论文未在本站复制。',
    files: [
      ['论文首页截图', 'evidence/paper-first-page.png', '图片查看'],
      ['软件著作权证书', 'evidence/software-registration.pdf', 'PDF 查看']
    ]
  }
};

const grid = document.querySelector('#project-grid');
const roleButtons = document.querySelectorAll('.role-button');
function applyRole(role, updateUrl = true) {
  const setting = roleSettings[role] || roleSettings.ops;
  roleButtons.forEach(button => {
    const active = button.dataset.role === role;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  setting.order.forEach(key => grid.appendChild(grid.querySelector(`[data-project="${key}"]`)));
  document.querySelector('#role-note').textContent = setting.note;
  document.querySelector('#project-intro').textContent = setting.intro;
  if (updateUrl) {
    const url = new URL(location.href);
    url.searchParams.set('role', role);
    history.replaceState(null, '', url);
  }
}
roleButtons.forEach(button => button.addEventListener('click', () => applyRole(button.dataset.role)));
const initialRole = new URLSearchParams(location.search).get('role');
applyRole(roleSettings[initialRole] ? initialRole : 'ops', false);

const dialog = document.querySelector('#project-dialog');
const closeButton = document.querySelector('#dialog-close');
let previousFocus = null;
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => {
  const detail = projectDetails[button.dataset.open];
  if (!detail) return;
  previousFocus = button;
  document.querySelector('#dialog-category').textContent = detail.category;
  document.querySelector('#dialog-title').textContent = detail.title;
  document.querySelector('#dialog-lead').textContent = detail.lead;
  document.querySelector('#dialog-context').textContent = detail.context;
  document.querySelector('#dialog-result').textContent = detail.result;
  document.querySelector('#dialog-caveat').textContent = detail.caveat;
  document.querySelector('#dialog-actions').replaceChildren(...detail.actions.map(action => {
    const item = document.createElement('li'); item.textContent = action; return item;
  }));
  document.querySelector('#dialog-files').replaceChildren(...detail.files.map(([label, path, type]) => {
    const link = document.createElement('a');
    link.className = 'file-link'; link.href = path; link.target = '_blank'; link.rel = 'noopener noreferrer';
    if (type.includes('下载')) link.download = '';
    const name = document.createElement('span'); name.textContent = label;
    const format = document.createElement('small'); format.textContent = type + ' ↗';
    link.append(name, format); return link;
  }));
  dialog.showModal();
  closeButton.focus();
}));
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => previousFocus?.focus());

const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('#mobile-nav');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? '打开导航菜单' : '关闭导航菜单');
  mobileNav.hidden = expanded;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', '打开导航菜单');
}));
