---
name: Prudhvi Raj Medikonduri
title: Senior Software Engineer
location: San Jose, CA
email: prudhvi.medikonduri@gmail.com
linkedin: https://linkedin.com/in/prudhvi-raj-medikonduri
github: https://github.com/prudhvi-raj-medikonduri
phone: (669) 499-6998

summary: >
  Software Engineer with 5 years of experience designing and building
  production backend systems in Java and Spring Boot at Goldman Sachs and
  Credit Karma/Intuit. Built event-driven pipelines on AWS SQS, REST
  microservices, and data pipelines on GCP. On the AI side, shipped an
  Amazon Textract document processing pipeline, built an NLP-to-SQL system,
  and designed the data layer for a GenAI agent built on MCP. Have owned
  work across the full stack — from backend services and infrastructure
  through React frontends.

skills:
  - category: Languages
    items: [Java, Python, JavaScript, TypeScript, SQL, PowerShell, BeanShell]
  - category: Backend
    items: [Spring Boot, Spring Security, Spring Data JPA, REST APIs, Microservices, Event-Driven Architecture, Node.js, FastAPI]
  - category: Frontend
    items: [React, JavaScript, HTML/CSS]
  - category: Cloud & Infra
    items: [AWS, GCP, Terraform, Docker, Kubernetes, GitHub Actions, CircleCI, Jenkins, HashiCorp Vault]
  - category: Databases
    items: [PostgreSQL, MySQL, Oracle SQL, MongoDB, BigQuery]
  - category: Messaging
    items: [Apache Kafka, RabbitMQ, AWS SQS]
  - category: AI / ML
    items: [Amazon Textract, NLP, FastAPI, MCP, GenAI, Data Pipelines]
  - category: Testing
    items: [JUnit 5, Mockito, TestContainers, Integration Testing]
  - category: Auth & Access
    items: [SailPoint IIQ, Okta, OAuth 2.0, OIDC, SAML, RBAC, SOX Compliance]

experience:
  - company: Credit Karma / Intuit
    role: Senior Engineer
    location: San Jose, CA
    period: Nov 2024 – Present
    bullets:
      - Built a Java/Spring Boot event-driven service combining REST APIs with AWS SQS to handle access provisioning during Credit Karma's Google Workspace migration to Intuit — syncing entitlement records and keeping provisioning state consistent.
      - Designed and built an org-wide IAM data pipeline in Java, Docker, and CircleCI running as scheduled Cloud Run Jobs on GCP — resolved IAM bindings via Cloud Asset API and published structured access catalog reports to GCS, replacing a fully manual quarterly audit.
      - Architected the data layer for an MCP-based GenAI agent deployed internally at Credit Karma — on-call engineers used it to answer GCP access questions in natural language instead of parsing IAM binding files manually.
      - Automated GCP IAM provisioning through a Terraform Enterprise GitOps workflow enforcing least-privilege controls with a full git audit trail; integrated HashiCorp Vault into non-prod pipelines to remove hardcoded credentials across the org.
      - Built a Slack notification service in Java that pushed real-time access request alerts with a self-service Forward Approvals flow — cut access request turnaround from 2-3 days to a few hours (90%+ SLA improvement).
      - Designed and delivered JML lifecycle automation covering provisioning on hire, role-change entitlement updates, and automated revocation on exit — brought 3,000 identities across 10 applications under automated governance.
      - Built a custom SailPoint IIQ connector from scratch in Java/BeanShell with full account aggregation, provisioning, and role mapping; also shipped an Okta-to-SailPoint identity correlation rule and a Google Workspace enforcement script covering 5,000 groups.

  - company: Diadem Capital
    role: Engineering Lead
    location: New York, NY
    period: May 2024 – Nov 2024
    bullets:
      - Designed and built a startup-investor matching engine in Java/Spring Boot backed by PostgreSQL — evaluated 100+ variables per startup to generate ranked recommendations across 5 investor types, each with a dedicated React dashboard.
      - Led a 9-person engineering team building a FinTech matching platform for 1,700 investors — owned the microservices architecture, React dashboards, REST API design, and AWS-based CI/CD pipelines that cut deployment effort by 40%.
      - Built Salesforce CRM and document processor integrations via REST webhooks and batch jobs, automating the investor onboarding workflow and eliminating manual back-office data operations.

  - company: Goldman Sachs
    role: Senior Software Engineer
    location: Bengaluru, India
    period: Jul 2019 – Sep 2022
    bullets:
      - Built an automated financial reconciliation system in Java/Spring Boot processing millions of records daily from multiple upstream trading platforms — replaced a manual workflow and cut reconciliation effort by 75%.
      - Designed Oracle SQL schemas for reconciliation state management and reduced query execution time by 40% through targeted indexing, stored procedure rewrites, and query plan analysis.
      - Maintained 85%+ test coverage across 200+ JUnit 5, Mockito, and TestContainers tests; handled L3 production support for high-priority financial incidents under strict SLAs.

projects:
  - name: Automatic Grader
    tech: [Python, FastAPI, Amazon Textract, React, MongoDB, AWS Lambda]
    description: AI-powered exam grading platform used in production by SJSU professors. Professors uploaded batches of handwritten exams through a React frontend; an Amazon Textract pipeline extracted content, graded submissions against a rubric, and generated per-student feedback reports automatically. Backend in Python/FastAPI with MongoDB, deployed on AWS Lambda and S3.
    highlight: Used in production at SJSU

  - name: SQL-GPT
    tech: [Python, NLP, React, Custom SQL Parser]
    description: Natural-language-to-SQL system where users queried a database in plain English through a React interface. The backend combined NLP models with a custom schema-aware SQL parser. Achieved 20% faster query processing and 30% lower response time compared to the baseline rule-based approach.
    highlight: 30% faster response time

education:
  - degree: M.S. Software Engineering
    school: San Jose State University
    location: San Jose, CA
    period: Aug 2022 – May 2024

  - degree: B.Tech. Computer Science and Engineering
    school: V.R. Siddhartha Engineering College
    location: India
    period: Jul 2015 – May 2019
---

## About

I'm a Senior Software Engineer with 5 years of production experience building scalable backend systems, event-driven architectures, and AI-powered pipelines. I've shipped code used by thousands of engineers and end-users at Goldman Sachs, Credit Karma, and Intuit — and I care deeply about systems that are reliable, observable, and maintainable.
