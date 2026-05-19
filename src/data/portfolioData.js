export const portfolioData = {
  name: 'Prudhvi Raj Medikonduri',
  title: 'Senior Software Engineer · Security Engineer · AI Engineer · SDET · Backend Engineer',
  location: 'San Jose, CA',
  email: 'prudhvi.medikonduri@gmail.com',
  linkedin: 'https://linkedin.com/in/prudhvi-raj-medikonduri',
  github: 'https://github.com/PrudhviRaj143',
  phone: '(669) 499-6998',

  summary:
    'Software and Security Engineer with 5+ years of experience building production-grade backend systems, IAM platforms, and AI-powered data pipelines. Deep hands-on background in Java, Spring Boot, and cloud infrastructure across Goldman Sachs, Credit Karma, and Intuit. Also pursuing a Google Cloud certification and active in AI tooling using MCP, Claude Code, and Amazon Textract.',

  skills: [
    { category: 'Languages',          items: ['Java 8/11/17/21', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'PowerShell', 'BeanShell'] },
    { category: 'Backend',            items: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'GraphQL', 'Microservices', 'Event-Driven Architecture', 'Node.js', 'FastAPI'] },
    { category: 'Frontend',           items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'] },
    { category: 'Cloud',              items: ['AWS (EC2, S3, Lambda, SQS, RDS, IAM)', 'GCP (Cloud Run, Cloud Asset API, GCS, GKE, Workload Identity)', 'Azure (working knowledge)'] },
    { category: 'DevOps & Infra',     items: ['Terraform', 'Docker', 'Kubernetes (GKE)', 'GitHub Actions', 'CircleCI', 'Jenkins', 'HashiCorp Vault', 'GitOps'] },
    { category: 'Databases',          items: ['Oracle SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'BigQuery'] },
    { category: 'Messaging',          items: ['AWS SQS', 'Apache Kafka', 'RabbitMQ'] },
    { category: 'Identity & Security', items: ['SailPoint IIQ', 'Okta', 'OAuth 2.0', 'OIDC', 'SAML', 'JWT', 'RBAC', 'Zero Trust', 'SOX Compliance', 'Active Directory'] },
    { category: 'AI & Dev Tools',     items: ['MCP (Model Context Protocol)', 'Amazon Textract', 'NLP', 'Claude Code', 'GitHub Copilot', 'Cursor', 'Qodo', 'FastAPI'] },
    { category: 'Testing',            items: ['JUnit 5', 'Mockito', 'TestContainers', 'TDD', 'Integration Testing', 'Postman', 'SoapUI'] },
  ],

  experience: [
    {
      company: 'Credit Karma / Intuit',
      role: 'Security Engineer',
      location: 'San Jose, CA',
      period: 'Nov 2024 – Present',
      current: true,
      tags: ['Java', 'Spring Boot', 'SailPoint IIQ', 'AWS SQS', 'GCP', 'Terraform', 'MCP', 'IAM'],
      bullets: [
        'Built JML (Joiner, Mover, Leaver) lifecycle workflows in Java on the SailPoint IIQ platform covering provisioning on hire, entitlement updates on role change, and automated revocation on exit. Now governs 3,000 identities across 10 connected applications and replaced a fully manual operations process.',
        'Built a custom SailPoint IIQ connector from scratch using Java, BeanShell, and SailPoint XML with full account aggregation, provisioning operations, and role mapping against a SQL database. Took it from POC to production and gave an internal team governance visibility they previously did not have.',
        'Built a Java and Spring Boot integration combining REST APIs with an SQS event pipeline for the client\'s Google Workspace migration to the parent org. The service publishes access request events to an enterprise SQS queue, processes acknowledgments from downstream platforms, and syncs SailPoint entitlement records to close the provisioning loop.',
        'Designed and built an org-wide IAM data pipeline in Java, Docker, and CircleCI that runs as scheduled Cloud Run Jobs on GCP. It resolves IAM bindings via the Cloud Asset API, joins them with SailPoint entitlement exports, and publishes structured access catalog reports to GCS, replacing a fully manual quarterly audit.',
        'Architected the data layer feeding an MCP-based GenAI on-call agent. The structured access catalog is consumed by the agent over MCP, letting on-call engineers resolve GCP IAM access questions in natural language instead of parsing raw binding files. Owned data modeling, catalog schema design, and the ingestion pipeline.',
        'Automated GCP IAM provisioning by committing Terraform HCL through a Terraform Enterprise GitOps workflow, enforcing least-privilege controls with a full git audit trail. Integrated HashiCorp Vault into non-prod pipelines to eliminate hardcoded credentials across the org.',
        'Built a Slack notification service that pushes real-time access request alerts to requesters, approvers, and waiting teams. Added a Forward Approvals QuickLink letting managers self-route requests when the primary approver is out. Together these cut access request SLA by over 90%, from 2 to 3 days down to a few hours.',
        'Shipped several SailPoint automations: an Okta-to-SailPoint identity correlation rule for contractor JML gaps, a PagerDuty integration granting time-bound on-call access on demand, and a Google Workspace enforcement script applying security defaults to 5,000 groups via the Admin SDK.',
        'Use Cursor, Claude Code, GitHub Copilot, Qodo, and MCP daily for code generation, refactoring Java codebases, writing JUnit and Mockito tests, and debugging production issues.',
        'Wrote JUnit 5, Mockito, and TestContainers test suites covering JML workflows, custom connector logic, and SQS event handlers. Recognized internally for delivering the IAM data pipeline and JML rollout ahead of schedule.',
      ],
    },
    {
      company: 'Diadem Capital',
      role: 'Engineering Lead',
      location: 'New York, NY',
      period: 'May 2024 – Nov 2024',
      current: false,
      tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'AWS', 'Salesforce'],
      bullets: [
        'Led full-stack engineering on a 9-person team building a FinTech investor-founder matching platform for 1,700 investors. Owned design and delivery of Java and Spring Boot microservices and React dashboards across all three user roles.',
        'Designed and built the matching engine evaluating 100+ variables per startup to generate ranked investor recommendations across 5 investor types: VC, family office, corporate VC, venture debt, and angel. Each type got a role-specific deal-flow view built with a modular RBAC layer.',
        'Built Salesforce CRM and document-processor integrations using REST webhooks and batch jobs that automated back-office onboarding operations and eliminated manual data entry across the investor pipeline.',
        'Set up AWS-based CI/CD pipelines with automated build, test, and deploy stages that reduced deployment effort by 40% across the engineering team.',
        'Worked across the full stack: Java and Spring Boot REST services, PostgreSQL schema design, AWS deployment on EC2, S3, and RDS, and a React frontend. Conducted code reviews and enforced design standards across the team.',
        'Collaborated directly with founders, PMs, and investors on architecture decisions and delivery milestones.',
      ],
    },
    {
      company: 'SJSU King Library',
      role: 'Rapid Prototyping Lab Student Assistant',
      location: 'San Jose, CA',
      period: 'Sep 2022 – Aug 2023',
      current: false,
      tags: ['Prototyping', '3D Printing', 'Teaching', 'Project Management'],
      bullets: [
        'Led students in building real-time applications and engineering projects using lab equipment including 3D printers, laser cutters, and embedded systems tooling.',
        'Collaborated with faculty and staff to support students on course projects, research initiatives, and prototyping assignments.',
        'Scheduled, coordinated, and facilitated training sessions on lab equipment and software tools for incoming student cohorts.',
      ],
    },
    {
      company: 'Goldman Sachs',
      role: 'Senior Software Engineer',
      location: 'Bengaluru, India',
      period: 'Jul 2019 – Sep 2022',
      current: false,
      tags: ['Java', 'Spring Boot', 'Oracle SQL', 'Jenkins', 'JUnit', 'TDD'],
      bullets: [
        'Built an automated reconciliation system in Java and Spring Boot processing millions of financial records daily from multiple upstream trading platforms, replacing a largely manual workflow and cutting reconciliation effort by 75%. The rule-based engine handles discrepancy detection, audit trail generation, and exception management through a configurable rule set.',
        'Designed Oracle SQL schemas for reconciliation state management, wrote complex queries and stored procedures, and reduced query execution time by 40% through targeted indexing and query plan analysis.',
        'Wrote 200+ unit and integration tests using JUnit 5, Mockito, and TestContainers, reaching 85% coverage. Applied TDD practices across the team and drove test discipline through code reviews.',
        'Built Spring Boot REST APIs and batch jobs for upstream and downstream integrations following SOLID principles, design patterns, and microservice architecture best practices.',
        'Provided L3 production support resolving high-priority financial incidents under strict SLAs. Debugged complex distributed-system issues across Java services, Oracle, and messaging layers.',
        'Recognized by peers in 2021 for the reconciliation system delivery that cut manual effort by 75% and reduced query latency by 40%.',
      ],
    },
  ],

  projects: [
    {
      name: 'Automatic Grader',
      period: '2023 – 2024',
      tech: ['Python', 'FastAPI', 'Amazon Textract', 'React', 'MongoDB', 'AWS Lambda', 'S3'],
      description:
        'AI-powered exam grading platform used in production by SJSU professors. Professors upload batches of handwritten exams through a React frontend. An Amazon Textract pipeline extracts the content, assigns scans to individual students, grades each submission against a rubric, and generates per-student feedback reports automatically. Backend runs on Python and FastAPI with MongoDB, deployed on AWS Lambda and S3.',
      highlight: 'Live at SJSU',
      category: 'AI / ML',
    },
    {
      name: 'SQL-GPT',
      period: '2023',
      tech: ['Python', 'NLP', 'React', 'Custom SQL Parser', 'FastAPI'],
      description:
        'Natural-language-to-SQL system where users query a database in plain English through a React interface. The backend combines NLP models with a custom schema-aware SQL parser that understands table relationships and column types. Achieved 20% faster query processing and 30% lower response time compared to a baseline rule-based approach.',
      highlight: '30% faster responses',
      category: 'AI / ML',
    },
    {
      name: 'NFT Trader',
      period: 'Nov 2022 – Dec 2022',
      tech: ['Blockchain', 'Smart Contracts', 'React', 'Web3.js', 'Solidity'],
      description:
        'Decentralized NFT marketplace built as a capstone project at SJSU. Users can create, buy, and sell NFTs using BTC and ETH, either directly from the owner or through live auctions. The platform supports wallet deposits and withdrawals, and each newly minted NFT generates a distinct token ID on-chain to guarantee uniqueness.',
      highlight: 'SJSU Capstone',
      category: 'Blockchain',
    },
    {
      name: 'Bike Rental Demand Prediction',
      period: 'May 2019 – Jun 2019',
      tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'Data Analysis'],
      description:
        'Machine learning model that predicts bike rental demand based on day of week, time of day, season, and location temperature. Trained on historical rental records to forecast future rental volume. The model reached 80% accuracy and was validated against held-out test data.',
      highlight: '80% accuracy',
      category: 'ML',
    },
    {
      name: 'Augmented Reality Restaurant Menu',
      period: 'Dec 2018 – Mar 2019',
      tech: ['AR', 'Unity', '3D Modeling', 'C#', 'Vuforia'],
      description:
        'AR application that renders food items as 3D models viewable from any angle on a mobile device. Customers can inspect accurate portion sizes and ingredient composition before ordering. The goal was to reduce menu confusion and help customers make better-informed selections.',
      highlight: '360 degree 3D view',
      category: 'AR / Mobile',
    },
    {
      name: 'Smart Agriculture using IoT',
      period: 'Jan 2018 – Nov 2018',
      tech: ['IoT', 'Arduino', 'Sensors', 'Python', 'Embedded Systems'],
      description:
        'IoT system using piezometers and auxiliary sensors to monitor soil water content in real time. When soil moisture drops below a threshold the system automatically triggers irrigation. Built to address agricultural areas with unreliable electricity infrastructure, providing low-power autonomous farming support.',
      highlight: 'Autonomous irrigation',
      category: 'IoT',
    },
  ],

  education: [
    {
      degree: 'M.S. Software Engineering',
      school: 'San Jose State University',
      location: 'San Jose, CA',
      period: 'Aug 2022 – May 2024',
      specializations: ['Enterprise Software Development and Testing', 'Security Engineering'],
      note: 'Dual specialization',
    },
    {
      degree: 'B.Tech. Computer Science and Engineering',
      school: 'V.R. Siddhartha Engineering College',
      location: 'India',
      period: 'Jul 2015 – May 2019',
      specializations: [],
      note: '',
    },
  ],

  certifications: [
    {
      name: 'SailPoint IdentityIQ Platform Training',
      issuer: 'SailPoint / Credit Karma Internal',
      status: 'Completed',
      year: '2024',
    },
    {
      name: 'Google Cloud Associate Cloud Engineer',
      issuer: 'Google Cloud',
      status: 'In Progress',
      year: '2026 target',
    },
  ],

  achievements: [
    {
      title: 'Internal Recognition at Credit Karma',
      year: '2025',
      detail: 'Recognized for delivering the org-wide IAM data pipeline and JML automation rollout ahead of schedule.',
    },
    {
      title: 'Peer Recognition at Goldman Sachs',
      year: '2021',
      detail: 'Recognized for the reconciliation system that cut manual effort by 75% and reduced query latency by 40%.',
    },
  ],
}
