export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  startDate: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  headline: string;
  description: string;
  category: 'Infrastructure' | 'Migrations' | 'CI-CD';
  tags: string[];
  technologies: string[];
  problem: string;
  approach: string[];
  stack: string[];
  outcome: string[];
  metrics?: { label: string; value: string }[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface EngineeringNote {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  summary: string;
  tags: string[];
  content: string;
  keyInsights: string[];
}

export interface RunbookSnippet {
  id: string;
  filename: string;
  title: string;
  description: string;
  language: string;
  code: string;
  category: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: string;
  description: string;
  format: string;
  size?: string;
  downloadNote: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  status: 'Active' | 'In Progress' | 'Verified';
  isPendingVerification?: boolean;
  note?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export const profile = {
  name: "Raheeba MK",
  firstName: "Raheeba",
  role: "DevOps Engineer",
  title: "DevOps Engineer | Cloud, CI/CD & Linux Specialist",
  location: "Kerala, India",
  phone: "+91 8157919477",
  rawPhone: "8157919477",
  email: "raheebamk3@gmail.com",
  status: "Systems Operational",
  availabilityText: "Available for new opportunities",
  
  hero: {
    headline: "DevOps Engineer & Cloud Infrastructure Builder.",
    subtitle: "Building reliable, cost-efficient AWS and Kubernetes platforms.",
    ctaWork: "View Work",
    ctaContact: "Get in Touch"
  },

  social: {
    linkedin: "https://linkedin.com/in/raheeba-m",
    email: "mailto:raheebamk3@gmail.com",
    phone: "tel:+918157919477",
    whatsapp: "https://wa.me/918157919477",
    github: "https://github.com/Raheebaa",
    cv: "https://drive.google.com/file/d/1dsrcwlcUUH_C5cN6Vox1AFB8nAKaHXkP/view?usp=sharing",
    emailWeb: "https://mail.google.com/mail/?view=cm&fs=1&to=raheebamk3@gmail.com"
  },

  about: {
    badge: "About me",
    roleLine: "DevOps Engineer | Cloud, CI/CD & Linux Specialist",
    paragraph1: "DevOps Engineer specializing in AWS, Microsoft Azure, Kubernetes, Docker, and CI/CD automation. Delivered zero-downtime cross-region disaster recovery migrations, containerized microservice platforms with Helm & ArgoCD, and automated GitOps release workflows.",
    paragraph2: "Focused on Infrastructure as Code (Terraform), production observability, and high-availability Linux architectures that fail loudly, recover quietly, and eliminate manual intervention.",
    stats: [
      { value: "AWS + Azure", label: "Clouds Managed" },
      { value: "2", label: "Zero-Downtime Migrations" },
      { value: "May 2025", label: "Engineering Since" }
    ],
    ctaPrimary: "Let's build together",
    ctaSecondary: "Explore Selected Work"
  },

  techMarquee: [
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "Kubernetes (K8s)", category: "Orchestration" },
    { name: "Docker", category: "Containers" },
    { name: "Linux", category: "Operating Systems" },
    { name: "Git", category: "Version Control" },
    { name: "GitHub", category: "Version Control" },
    { name: "Bitbucket", category: "Version Control" },
    { name: "ArgoCD", category: "GitOps CD" },
    { name: "Bash Scripting", category: "Scripting" },
    { name: "Terraform", category: "IaC" },
    { name: "MySQL", category: "Databases" },
    { name: "JavaScript", category: "Frontend" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "Prometheus", category: "Monitoring" },
    { name: "Grafana", category: "Monitoring" },
    { name: "AWS CloudWatch", category: "Monitoring" },
    { name: "System Monitoring", category: "Monitoring" },
    { name: "Nginx", category: "Proxy & Web" },
    { name: "Apache", category: "Proxy & Web" }
  ],

  projects: [
    {
      id: "aws-regional-migration",
      slug: "aws-regional-migration-dr",
      title: "AWS Regional Migration & Zero-Downtime DR",
      headline: "Cross-Region Disaster Recovery Migration: UAE (me-central-1) to Ireland (eu-west-1)",
      description: "Architected and executed a zero-downtime cross-region disaster recovery migration to Ireland following a regional AWS outage. Mirrored VPC topologies, Aurora PostgreSQL, Redis, Kafka, and managed live traffic shifting via Cloudflare DNS.",
      category: "Migrations",
      tags: ["AWS", "Disaster Recovery", "Cloudflare", "Aurora PostgreSQL", "Kafka", "Zero-Downtime"],
      technologies: ["AWS VPC", "ALB", "EC2 Auto Scaling", "Aurora PostgreSQL", "ElastiCache Redis", "Apache Kafka", "S3", "Secrets Manager", "Cloudflare DNS"],
      problem: "A critical regional AWS infrastructure outage in UAE (me-central-1) demanded an immediate, zero-downtime disaster recovery failover and workload migration to Ireland (eu-west-1) with zero customer data loss.",
      approach: [
        "Provisioned mirrored multi-AZ VPC in eu-west-1 with isolated subnets, NAT Gateways, and strict Security Groups.",
        "Staged EC2 Auto Scaling Groups behind ALBs with automated health-check endpoints.",
        "Replicated Aurora PostgreSQL, ElastiCache Redis, and Apache Kafka cluster states cross-region.",
        "Executed weighted traffic shifting via Cloudflare DNS and ALB routing while monitoring latencies.",
        "Validated database integrity, Redis session caches, Kafka consumer lag, and background worker queues."
      ],
      stack: ["AWS VPC", "EC2 Auto Scaling", "ALB", "Aurora PostgreSQL", "ElastiCache Redis", "Apache Kafka", "Amazon S3", "Secrets Manager", "Cloudflare"],
      outcome: [
        "100% zero-downtime cross-region migration during peak traffic windows.",
        "Zero transactional data loss across Aurora PostgreSQL and Kafka streams.",
        "Established automated, reusable multi-region DR infrastructure blueprints."
      ],
      metrics: [
        { label: "Downtime", value: "0 min" },
        { label: "Target Region", value: "eu-west-1" },
        { label: "Data Loss", value: "0%" }
      ],
      featured: true,
      githubUrl: "https://github.com/Raheebaa"
    },
    {
      id: "mattermost-kubernetes-migration",
      slug: "mattermost-kubernetes-migration",
      title: "Mattermost Migration & Kubernetes Deployment",
      headline: "Container Modernization: Migrating from Standalone Docker to Kubernetes with GitOps",
      description: "Migrated enterprise collaboration platform from single-host Docker to dedicated Kubernetes with Helm, ArgoCD GitOps pipelines, persistent volume automation, and encrypted secret management.",
      category: "Infrastructure",
      tags: ["Kubernetes", "Helm", "ArgoCD", "GitOps", "Docker Migration", "Persistent Storage"],
      technologies: ["Kubernetes", "Helm", "ArgoCD", "Docker", "Persistent Volume Claims (PVC)", "Nginx Ingress", "Secrets Management", "Bash Automation"],
      problem: "Single-host Docker setup suffered from manual upgrades, configuration drift, lack of automated rollbacks, and single-point-of-failure storage risks.",
      approach: [
        "Architected Kubernetes topology with decoupled pods, worker pools, and dedicated database persistence.",
        "Created modular Helm charts templating deployments, configmaps, persistent volumes, and ingress rules.",
        "Configured ArgoCD GitOps to automate declarative synchronization directly from Git.",
        "Executed zero-downtime cutover and verified WebSocket streaming, file persistence, and channel history."
      ],
      stack: ["Kubernetes", "Helm 3", "ArgoCD", "Docker", "Nginx Ingress", "PostgreSQL", "PVC Storage", "GitOps"],
      outcome: [
        "Zero-downtime production cutover to resilient Kubernetes architecture.",
        "Automated GitOps rollouts and instant 1-click rollbacks via ArgoCD.",
        "Guaranteed data persistence with automated volume backup schedules."
      ],
      metrics: [
        { label: "Deployment", value: "ArgoCD GitOps" },
        { label: "Cutover Downtime", value: "0 min" },
        { label: "Storage", value: "Kubernetes PVC" }
      ],
      featured: true,
      githubUrl: "https://github.com/Raheebaa"
    },
    {
      id: "magento-ecommerce-infrastructure",
      slug: "magento-ecommerce-infrastructure-cicd",
      title: "Magento E-Commerce Infrastructure & CI/CD",
      headline: "High-Availability AWS Architecture, Performance Tuning & Automated Delivery Pipelines",
      description: "Engineered scalable cloud infrastructure for Magento 2.4.6 on AWS/Linux. Optimized Nginx, PHP-FPM, MySQL/Aurora, Varnish cache, and Elasticsearch with Jenkins + Kaniko + ArgoCD pipelines.",
      category: "CI-CD",
      tags: ["AWS", "Magento 2.4.6", "Jenkins", "Kaniko", "ArgoCD", "Varnish", "Performance Tuning"],
      technologies: ["AWS (EC2, RDS/Aurora, S3, CloudFront, IAM, CloudWatch, ALB)", "Nginx", "PHP-FPM", "MySQL/Aurora", "Varnish Cache", "Elasticsearch", "Jenkins", "Kaniko", "Docker", "ArgoCD"],
      problem: "High-traffic e-commerce platform experienced complex dependencies, slow deployments, cache invalidations, and database lock contention.",
      approach: [
        "Engineered AWS infrastructure with EC2, RDS/Aurora multi-AZ clustering, S3 offloading, and CloudFront CDN.",
        "Tuned Nginx, PHP-FPM worker pools, Varnish full-page cache, and Elasticsearch catalog indexing.",
        "Built automated CI/CD pipelines using Jenkins, rootless Kaniko image builds, and ArgoCD synchronization.",
        "Automated database sanitization and restore scripts for rapid UAT developer testing."
      ],
      stack: ["AWS EC2", "AWS RDS/Aurora", "AWS S3 & CloudFront", "Nginx", "PHP-FPM", "Varnish Cache", "Elasticsearch", "Jenkins", "Kaniko", "ArgoCD"],
      outcome: [
        "Accelerated page rendering and checkout response times via Varnish & Aurora query optimization.",
        "Eliminated manual deployment downtime with automated containerized rollouts.",
        "Streamlined developer productivity with 1-command UAT database restore scripts."
      ],
      metrics: [
        { label: "Platform", value: "Magento 2.4.6" },
        { label: "CI/CD", value: "Jenkins + ArgoCD" },
        { label: "Caching", value: "Varnish + Redis" }
      ],
      featured: true,
      githubUrl: "https://github.com/Raheebaa"
    }
  ] as ProjectItem[],

  experience: [
    {
      id: "exp-2cloud",
      company: "2Cloud",
      role: "Junior DevOps Engineer",
      location: "Mananthavady, Wayanad, Kerala",
      period: "Sep 2025 - Present",
      startDate: "Sep 2025",
      isCurrent: true,
      description: "Managing AWS infrastructure, maintaining automated Jenkins and Git CI/CD pipelines, administering production Linux server stacks, and supporting Kubernetes (EKS) microservice workloads.",
      responsibilities: [
        "Manage AWS infrastructure (EC2, S3, RDS, IAM, VPC) for high availability, scalability and cloud security.",
        "Design and maintain Jenkins + Git CI/CD pipelines, automating testing and deployments.",
        "Deploy and manage Magento applications with Docker and Docker Compose in production.",
        "Support Kubernetes (EKS) workloads across containerized microservices.",
        "Automate MySQL backup, restore, and database migration routines with custom Bash scripts.",
        "Monitor production systems with Amazon CloudWatch, proactively catching bottlenecks."
      ],
      technologies: ["AWS", "Amazon EKS", "Kubernetes", "Docker", "Jenkins", "Terraform", "Nginx", "Varnish", "MySQL", "CloudWatch", "Linux"]
    },
    {
      id: "exp-bridgeskill",
      company: "BridgeSkill",
      role: "DevOps Intern",
      location: "Mananthavady, Wayanad, Kerala",
      period: "May 2025 - Sep 2025",
      startDate: "May 2025",
      isCurrent: false,
      description: "Provisioned AWS infrastructure, built automated CI/CD pipelines with Jenkins, managed containerized application deployments, and supported database operations.",
      responsibilities: [
        "Provisioned foundational AWS cloud resources including EC2 instances, S3 storage buckets, and IAM security policies.",
        "Built automated Jenkins CI/CD pipelines for continuous build verification.",
        "Deployed applications using Docker Compose and managed Kubernetes pods and deployments.",
        "Configured automated MySQL backup and restore scripts and verified data replication.",
        "Set up CloudWatch monitoring alarms for system metrics and disk thresholds."
      ],
      technologies: ["AWS", "Docker", "Docker Compose", "Kubernetes", "Jenkins", "MySQL", "CloudWatch", "Bash", "Git"]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "WMO Imam Gazzali Arts & Science College",
      period: "2020 - 2023",
      location: "Wayanad, Kerala"
    }
  ] as EducationItem[],

  certifications: [
    {
      id: "cert-oci-devops",
      name: "Oracle Cloud Infrastructure & DevOps Certifications",
      issuer: "Oracle / DevOps Training Program",
      status: "Active",
      isPendingVerification: true,
      note: "TODO: Specific certification title & verification link to be updated"
    }
  ] as CertificationItem[],

  engineeringNotes: [
    {
      id: "note-k8s-crashloop",
      slug: "kubernetes-troubleshooting-crashloop",
      title: "Troubleshooting Kubernetes CrashLoopBackOff in Production",
      category: "Kubernetes & Containers",
      date: "May 2026",
      readingTime: "4 min read",
      summary: "A systematic diagnostic runbook for debugging CrashLoopBackOff and OOMKilled errors in production Kubernetes clusters, from ephemeral debug containers to cgroup limits.",
      tags: ["Kubernetes", "EKS", "Debugging", "Linux", "Troubleshooting"],
      content: `
### Understanding the CrashLoopBackOff State

When a Kubernetes Pod enters \`CrashLoopBackOff\`, the container has crashed repeatedly, and kubelet applies an exponential backoff delay before restarting it.

\`\`\`bash
# 1. Inspect pod status and restart count
kubectl get pods -n production -o wide

# 2. Check exit code and termination reason
kubectl describe pod <pod-name> -n production | grep -A 10 "Last State:"
\`\`\`

#### Common Exit Codes:
- **Exit Code 137 (OOMKilled)**: Container exceeded configured memory limit. Linux kernel OOM Killer terminated the process.
- **Exit Code 1**: Application-level uncaught exception or bad startup arguments.
- **Exit Code 143 (SIGTERM)**: Pod was terminated by Kubernetes (failed liveness probe).

#### Systematic 4-Step Inspection Workflow:
1. **Previous container logs**: \`kubectl logs <pod-name> --previous\`
2. **Review cluster events**: \`kubectl get events --sort-by='.metadata.creationTimestamp' -n <namespace>\`
3. **Verify ConfigMaps & Secrets**: Check mounted environment variables and permissions.
4. **Attach Ephemeral Debug Container**:
   \`\`\`bash
   kubectl debug -it <pod-name> --image=busybox:latest --target=<container-name>
   \`\`\`
      `,
      keyInsights: [
        "Always check `kubectl logs <pod-name> --previous` before restarting a crashing pod.",
        "Exit code 137 indicates kernel OOMKiller: increase memory limits or profile memory leaks.",
        "Ensure liveness probes allow sufficient initial startup delay (`initialDelaySeconds`)."
      ]
    },
    {
      id: "note-aws-cross-region-dr",
      slug: "aws-cross-region-dr-migration",
      title: "Zero-Downtime AWS Disaster Recovery & Cross-Region Migration",
      category: "Cloud Architecture",
      date: "June 2026",
      readingTime: "5 min read",
      summary: "Key lessons and architectural patterns from moving production workloads from UAE (me-central-1) to Ireland (eu-west-1) with zero customer-facing downtime.",
      tags: ["AWS", "Disaster Recovery", "Cloudflare", "Aurora", "Kafka"],
      content: `
### Architectural Anatomy of a Cross-Region Failover

Cross-region migrations under active production traffic require asynchronous data replication followed by weighted DNS traffic shifting.

#### Key Tenets of Zero-Downtime DR:
1. **Decouple Stateless from Stateful**: Stateless servers spin up rapidly via Terraform IaC modules in the target region.
2. **Database Replication Pre-Seeding**: Configure Aurora cross-region read replicas ahead of time, promoting to primary during the cutover window.
3. **Kafka Consumer Offset Synchronization**: Ensure consumer offsets are synchronized to prevent message loss.
4. **Cloudflare Weighted DNS Routing**: Shift 5% of traffic first to smoke-test target ALB endpoints before full 100% cutover.
      `,
      keyInsights: [
        "Use weighted DNS traffic shifting (Cloudflare / Route 53) rather than an all-or-nothing cutover.",
        "Validate database write replication lag before initiating failover.",
        "Store all IAM policies, Security Groups, and VPC routing tables as modular Terraform code."
      ]
    },
    {
      id: "note-gitops-argocd-jenkins",
      slug: "gitops-argocd-jenkins-pipeline",
      title: "Streamlining CI/CD: Combining Jenkins Automation with ArgoCD GitOps",
      category: "CI/CD & GitOps",
      date: "July 2026",
      readingTime: "4 min read",
      summary: "How to decouple CI build artifact generation from CD cluster deployments using Jenkins, rootless Kaniko image builds, and declarative ArgoCD synchronization.",
      tags: ["CI/CD", "Jenkins", "ArgoCD", "GitOps", "Kaniko"],
      content: `
### The Clean Separation: CI vs. CD

- **CI (Jenkins)**: Compiles code, runs automated test suites, builds container images via Kaniko, and commits new image tags to Git.
- **CD (ArgoCD)**: Continuously observes the Git repository and reconciles the desired Kubernetes state with the live cluster.

#### Pipeline Flow:
1. Developer pushes code to \`main\` branch.
2. Jenkins triggers tests and builds Docker image via rootless Kaniko.
3. Jenkins commits updated image tag to the GitOps config repository.
4. ArgoCD detects the commit and performs an automated rolling deployment on Kubernetes.
      `,
      keyInsights: [
        "Keep application source code and Kubernetes deployment manifests in separate Git repositories.",
        "Use immutable semantic tags or Git commit SHAs instead of mutable `:latest` Docker tags.",
        "ArgoCD ensures drift detection: any manual cluster mutation is automatically reconciled."
      ]
    }
  ] as EngineeringNote[],

  runbooks: [
    {
      id: "rb-k8s-debug",
      filename: "kubernetes.txt",
      title: "Kubectl CrashLoop & Pod Inspection Runbook",
      description: "Standard diagnostic sequence for diagnosing pod crashes, reviewing previous container termination logs, checking memory constraints, and injecting debug containers.",
      category: "Kubernetes",
      language: "bash",
      code: `#!/usr/bin/env bash
NAMESPACE="production"
POD_NAME="magento-app-7b8f958fbc-k9m2x"

# 1. Check Pod Status & Node Placement
kubectl get pod "\${POD_NAME}" -n "\${NAMESPACE}" -o wide

# 2. Inspect Termination Reason & Exit Code
kubectl get pod "\${POD_NAME}" -n "\${NAMESPACE}" -o jsonpath='{range .status.containerStatuses[*]}{"Container: "}{.name}{"\\n  State: "}{.state}{"\\n  Last State: "}{.lastState}{"\\n  Restarts: "}{.restartCount}{"\\n"}{end}'

# 3. Retrieve Previous Container Logs (Pre-Crash)
kubectl logs "\${POD_NAME}" -n "\${NAMESPACE}" --previous --tail=50

# 4. Check Resource Limits & OOM Events
kubectl describe pod "\${POD_NAME}" -n "\${NAMESPACE}" | grep -E "Limits|Requests|OOMKilled|Back-off"`
    },
    {
      id: "rb-argocd-troubleshooting",
      filename: "cicd.txt",
      title: "ArgoCD Sync & Application Troubleshooting",
      description: "Quick commands to inspect sync diffs, resolve stuck finalizers, force refresh application state, and synchronize GitOps applications via CLI.",
      category: "GitOps / CI-CD",
      language: "bash",
      code: `#!/usr/bin/env bash
APP_NAME="mattermost-prod"

# 1. Check ArgoCD Application Sync & Health Status
argocd app get "\${APP_NAME}"

# 2. View Live vs. Git Manifest Diffs
argocd app diff "\${APP_NAME}"

# 3. Hard Refresh Application State from Git
argocd app get "\${APP_NAME}" --hard-refresh

# 4. Trigger Automated Sync with Prune
argocd app sync "\${APP_NAME}" --prune --timeout 300`
    },
    {
      id: "rb-mysql-backup",
      filename: "aws.txt",
      title: "Automated MySQL / Aurora Backup & S3 Archive Script",
      description: "Production Bash script for consistent single-transaction MySQL dumps, gzip compression, automated timestamping, and encrypted upload to AWS S3.",
      category: "AWS / Database",
      language: "bash",
      code: `#!/usr/bin/env bash
set -euo pipefail

DB_HOST="\${DB_HOST:-aurora-cluster.prod.internal}"
DB_USER="\${DB_USER:-dbadmin}"
DB_NAME="\${DB_NAME:-magento_production}"
S3_BUCKET="s3://company-prod-db-backups/mysql"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_FILE="/tmp/\${DB_NAME}_\${TIMESTAMP}.sql.gz"

echo "[$(date)] Starting single-transaction dump for \${DB_NAME}..."
mysqldump --host="\${DB_HOST}" --user="\${DB_USER}" --single-transaction --quick --triggers --routines "\${DB_NAME}" | gzip -c > "\${BACKUP_FILE}"

echo "[$(date)] Uploading encrypted archive to AWS S3..."
aws s3 cp "\${BACKUP_FILE}" "\${S3_BUCKET}/\${DB_NAME}_\${TIMESTAMP}.sql.gz" --sse aws:kms

rm -f "\${BACKUP_FILE}"
echo "[$(date)] Backup completed successfully."`
    }
  ] as RunbookSnippet[],

  resources: [
    {
      id: "res-dr-checklist",
      title: "AWS Disaster Recovery & Cross-Region Migration Checklist",
      type: "PDF Guide",
      format: "PDF",
      size: "2.4 MB",
      description: "Pre-flight checklist for cross-region AWS VPC topologies, database replication verification, and weighted DNS cutover.",
      downloadNote: "Resource blueprint available on request via email"
    },
    {
      id: "res-k8s-baseline",
      title: "Production Kubernetes Helm & Manifest Baseline Template",
      type: "YAML Config",
      format: "YAML / Helm",
      size: "1.1 MB",
      description: "Hardened Helm charts and Kubernetes manifests with resource limits, liveness probes, pod anti-affinity, and ingress rules.",
      downloadNote: "Configuration template repository available on GitHub"
    },
    {
      id: "res-devops-runbook-starter",
      title: "DevOps Incident Response & Production Runbook Starter Kit",
      type: "Runbook Kit",
      format: "Markdown",
      size: "850 KB",
      description: "Standardized templates for Linux host troubleshooting, database deadlock recovery, and CI/CD deployment rollback procedures.",
      downloadNote: "Starter kit documentation available on GitHub"
    },
    {
      id: "res-terraform-skeleton",
      title: "Terraform AWS Multi-Tier Infrastructure Skeleton",
      type: "IaC Module",
      format: "HCL / Terraform",
      size: "1.8 MB",
      description: "Modular Terraform configurations for multi-AZ VPCs, ALB routing, Auto Scaling groups, and RDS/Aurora with remote state locking.",
      downloadNote: "Modular IaC starter code available on GitHub"
    }
  ] as ResourceItem[],

  contact: {
    heading: "Let's build something reliable.",
    subheading: "Have a challenge in cloud infrastructure, Kubernetes orchestration, or automated CI/CD pipelines? Reach out directly or dispatch a message below.",
    formCategories: [
      "Infrastructure",
      "CI-CD",
      "Migration",
      "Cost Optimization",
      "General Inquiry"
    ] as const,
    // Google Sheets Apps Script Web App URL for automatic spreadsheet submission
    // Replace with your Google Apps Script Deployment Web App URL
    googleSheetScriptUrl: import.meta.env.VITE_GOOGLE_SHEET_SCRIPT_URL || "",
    directEmail: "raheebamk3@gmail.com",
    directPhone: "+91 8157919477",
    location: "Kerala, India",
    timezone: "IST (UTC+05:30)"
  },

  footer: {
    tagline: "Engineering resilient cloud systems, automated delivery pipelines, and scalable infrastructure.",
    sitemap: [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Notes", href: "#notes" },
      { name: "Contact", href: "#contact" }
    ],
    connect: [
      { name: "LinkedIn", href: "https://linkedin.com/in/raheeba-m", external: true },
      { name: "GitHub", href: "https://github.com/Raheebaa", external: true },
      { name: "View / Download CV", href: "https://drive.google.com/file/d/1dsrcwlcUUH_C5cN6Vox1AFB8nAKaHXkP/view?usp=sharing", external: true },
      { name: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=raheebamk3@gmail.com", external: true },
      { name: "WhatsApp", href: "https://wa.me/918157919477", external: true },
      { name: "Phone", href: "tel:+918157919477", external: false }
    ],
    copyrightYear: 2026,
    operationalStatus: "Systems Operational"
  }
};
