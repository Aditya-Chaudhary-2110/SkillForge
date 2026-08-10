const osTopics = [
  // ============================================================
  // 1. OPERATING SYSTEM FUNDAMENTALS
  // ============================================================

  {
    module: "os-fundamentals",
    topics: [
      {
        name: "Introduction to Operating Systems",
        slug: "introduction-to-operating-systems",
        description:
          "Understand what an operating system is, its purpose, major responsibilities, and how it acts as an interface between users and computer hardware.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Types of Operating Systems",
        slug: "types-of-operating-systems",
        description:
          "Learn about batch, multiprogramming, multitasking, multiprocessing, distributed, real-time, and network operating systems.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "Operating System Services",
        slug: "operating-system-services",
        description:
          "Understand the major services provided by an operating system, including program execution, I/O operations, file management, communication, and protection.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "System Calls",
        slug: "system-calls",
        description:
          "Learn how applications interact with the operating system through system calls and understand common system call categories.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Kernel",
        slug: "kernel",
        description:
          "Understand the role of the kernel, kernel responsibilities, user mode, kernel mode, and how the operating system manages hardware resources.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "User Mode & Kernel Mode",
        slug: "user-mode-kernel-mode",
        description:
          "Understand privilege levels, protected execution, mode switching, and why operating systems separate user and kernel execution.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "Interrupts",
        slug: "interrupts",
        description:
          "Learn hardware and software interrupts, interrupt handling, interrupt service routines, and their role in operating systems.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 7,
        isPublished: true,
      },

      {
        name: "Booting Process",
        slug: "booting-process",
        description:
          "Understand the computer boot process including BIOS or UEFI, bootloader, kernel loading, and operating system initialization.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 8,
        isPublished: true,
      },
    ],
  },

  // ============================================================
  // 2. PROCESS MANAGEMENT
  // ============================================================

  {
    module: "process-management",
    topics: [
      {
        name: "Process Concept",
        slug: "process-concept",
        description:
          "Understand what a process is, how it differs from a program, and how operating systems manage processes.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Process States",
        slug: "process-states",
        description:
          "Learn the different process states and understand transitions between new, ready, running, waiting, and terminated states.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "Process Control Block",
        slug: "process-control-block",
        description:
          "Understand the Process Control Block and the information the operating system stores to manage a process.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "Process Creation & Termination",
        slug: "process-creation-termination",
        description:
          "Learn how processes are created, executed, and terminated and understand parent-child process relationships.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Context Switching",
        slug: "context-switching",
        description:
          "Understand how the operating system switches the CPU between processes and the overhead involved in context switching.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Process Scheduling",
        slug: "process-scheduling",
        description:
          "Understand CPU scheduling objectives, scheduling criteria, and how operating systems select the next process for execution.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "Threads",
        slug: "threads",
        description:
          "Learn the concept of threads, benefits of multithreading, user-level threads, kernel-level threads, and multithreaded processes.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 7,
        isPublished: true,
      },
    ],
  },

  // ============================================================
  // 3. CPU SCHEDULING
  // ============================================================

  {
    module: "cpu-scheduling",
    topics: [
      {
        name: "FCFS Scheduling",
        slug: "fcfs-scheduling",
        description:
          "Learn First Come First Serve scheduling and solve scheduling problems using waiting time, turnaround time, and completion time.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 1,
        isPublished: true,
      },

      {
        name: "SJF Scheduling",
        slug: "sjf-scheduling",
        description:
          "Understand Shortest Job First scheduling and calculate completion, waiting, and turnaround times.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "SRTF Scheduling",
        slug: "srtf-scheduling",
        description:
          "Learn Shortest Remaining Time First preemptive scheduling and solve related CPU scheduling problems.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "Priority Scheduling",
        slug: "priority-scheduling",
        description:
          "Understand preemptive and non-preemptive priority scheduling and calculate scheduling performance metrics.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Round Robin Scheduling",
        slug: "round-robin-scheduling",
        description:
          "Learn time-slice based Round Robin scheduling and solve problems involving different time quantum values.",
        estimatedTime: 45,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Scheduling Criteria",
        slug: "scheduling-criteria",
        description:
          "Compare CPU scheduling algorithms using CPU utilization, throughput, turnaround time, waiting time, and response time.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "CPU Scheduling Numericals",
        slug: "cpu-scheduling-numericals",
        description:
          "Practice interview and competitive-exam problems involving Gantt charts, waiting time, turnaround time, response time, and scheduling algorithms.",
        estimatedTime: 60,
        difficulty: "Advanced",
        order: 7,
        isPublished: true,
      },
    ],
  },

  // ============================================================
  // 4. PROCESS SYNCHRONIZATION
  // ============================================================

  {
    module: "process-synchronization",
    topics: [
      {
        name: "Introduction to Process Synchronization",
        slug: "introduction-to-process-synchronization",
        description:
          "Understand why processes need synchronization when accessing shared resources.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 1,
        isPublished: true,
      },

      {
        name: "Critical Section Problem",
        slug: "critical-section-problem",
        description:
          "Learn the critical section problem and the requirements for a correct synchronization solution.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "Race Condition",
        slug: "race-condition",
        description:
          "Understand race conditions, how they occur, and how synchronization mechanisms prevent inconsistent results.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "Mutex",
        slug: "mutex",
        description:
          "Understand mutual exclusion locks and how mutexes protect shared resources from concurrent access.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Semaphores",
        slug: "semaphores",
        description:
          "Learn binary and counting semaphores and understand their use in process synchronization.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Classical Synchronization Problems",
        slug: "classical-synchronization-problems",
        description:
          "Study the Producer-Consumer, Readers-Writers, and Dining Philosophers synchronization problems.",
        estimatedTime: 50,
        difficulty: "Advanced",
        order: 6,
        isPublished: true,
      },
    ],
  },

  // ============================================================
  // 5. DEADLOCKS
  // ============================================================

  {
    module: "deadlocks",
    topics: [
      {
        name: "Introduction to Deadlocks",
        slug: "introduction-to-deadlocks",
        description:
          "Understand what deadlocks are, why they occur, and their impact on operating systems.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 1,
        isPublished: true,
      },

      {
        name: "Necessary Conditions for Deadlock",
        slug: "necessary-conditions-for-deadlock",
        description:
          "Learn the four necessary conditions for deadlock: mutual exclusion, hold and wait, no preemption, and circular wait.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "Resource Allocation Graph",
        slug: "resource-allocation-graph",
        description:
          "Understand resource allocation graphs and use them to identify possible deadlocks.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "Deadlock Prevention",
        slug: "deadlock-prevention",
        description:
          "Learn techniques for preventing deadlocks by eliminating one or more necessary conditions.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Deadlock Avoidance",
        slug: "deadlock-avoidance",
        description:
          "Understand safe states and deadlock avoidance using resource allocation strategies.",
        estimatedTime: 35,
        difficulty: "Advanced",
        order: 5,
        isPublished: true,
      },

      {
        name: "Banker's Algorithm",
        slug: "bankers-algorithm",
        description:
          "Learn and solve Banker's Algorithm problems for determining safe and unsafe system states.",
        estimatedTime: 50,
        difficulty: "Advanced",
        order: 6,
        isPublished: true,
      },

      {
        name: "Deadlock Detection & Recovery",
        slug: "deadlock-detection-recovery",
        description:
          "Learn how operating systems detect deadlocks and recover resources after deadlock occurs.",
        estimatedTime: 35,
        difficulty: "Advanced",
        order: 7,
        isPublished: true,
      },
    ],
  },

  // ============================================================
  // 6. MEMORY MANAGEMENT
  // ============================================================

  {
    module: "memory-management",
    topics: [
      {
        name: "Introduction to Memory Management",
        slug: "introduction-to-memory-management",
        description:
          "Understand how operating systems manage main memory and allocate memory to processes.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Logical vs Physical Address",
        slug: "logical-vs-physical-address",
        description:
          "Understand logical and physical addresses and how the Memory Management Unit translates addresses.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "Contiguous Memory Allocation",
        slug: "contiguous-memory-allocation",
        description:
          "Learn fixed and variable partitioning and understand memory allocation strategies.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "Fragmentation",
        slug: "fragmentation",
        description:
          "Understand internal and external fragmentation and how different allocation techniques cause fragmentation.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Paging",
        slug: "paging",
        description:
          "Learn paging, pages, frames, page tables, address translation, and paging-related numericals.",
        estimatedTime: 50,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Segmentation",
        slug: "segmentation",
        description:
          "Understand segmentation, segment tables, logical addresses, and differences between segmentation and paging.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "Virtual Memory",
        slug: "virtual-memory",
        description:
          "Understand virtual memory, demand paging, page faults, and how operating systems execute processes larger than physical memory.",
        estimatedTime: 45,
        difficulty: "Intermediate",
        order: 7,
        isPublished: true,
      },

      {
        name: "Page Replacement Algorithms",
        slug: "page-replacement-algorithms",
        description:
          "Learn FIFO, Optimal, LRU, and other page replacement algorithms and solve page fault numericals.",
        estimatedTime: 60,
        difficulty: "Advanced",
        order: 8,
        isPublished: true,
      },

      {
        name: "Thrashing",
        slug: "thrashing",
        description:
          "Understand thrashing, its causes, working set concept, and techniques to control excessive paging.",
        estimatedTime: 30,
        difficulty: "Advanced",
        order: 9,
        isPublished: true,
      },
    ],
  },

  // ============================================================
  // 7. FILE SYSTEM
  // ============================================================

  {
    module: "file-system",
    topics: [
      {
        name: "File Concept",
        slug: "file-concept",
        description:
          "Understand files, file attributes, file operations, and how operating systems organize persistent data.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "File Access Methods",
        slug: "file-access-methods",
        description:
          "Learn sequential, direct, and indexed file access methods.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "Directory Structure",
        slug: "directory-structure",
        description:
          "Understand single-level, two-level, tree-structured, and graph-based directory structures.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "File Allocation Methods",
        slug: "file-allocation-methods",
        description:
          "Learn contiguous, linked, and indexed file allocation techniques and compare their advantages and disadvantages.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Free Space Management",
        slug: "free-space-management",
        description:
          "Understand bitmaps, linked lists, grouping, and counting methods for managing free disk space.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "File Protection",
        slug: "file-protection",
        description:
          "Learn file access permissions, protection mechanisms, and access control concepts.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },
    ],
  },

  // ============================================================
  // 8. DISK MANAGEMENT
  // ============================================================

  {
    module: "disk-management",
    topics: [
      {
        name: "Disk Structure",
        slug: "disk-structure",
        description:
          "Understand disk organization including tracks, sectors, cylinders, and disk access operations.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Disk Scheduling",
        slug: "disk-scheduling",
        description:
          "Understand how operating systems schedule disk requests to reduce seek time and improve performance.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "FCFS Disk Scheduling",
        slug: "fcfs-disk-scheduling",
        description:
          "Learn First Come First Serve disk scheduling and calculate total head movement.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "SSTF Disk Scheduling",
        slug: "sstf-disk-scheduling",
        description:
          "Learn Shortest Seek Time First scheduling and solve disk head movement problems.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "SCAN & C-SCAN",
        slug: "scan-cscan",
        description:
          "Understand elevator-based SCAN and Circular SCAN disk scheduling algorithms and solve related numericals.",
        estimatedTime: 40,
        difficulty: "Advanced",
        order: 5,
        isPublished: true,
      },

      {
        name: "LOOK & C-LOOK",
        slug: "look-clook",
        description:
          "Learn LOOK and C-LOOK disk scheduling algorithms and compare them with SCAN and C-SCAN.",
        estimatedTime: 35,
        difficulty: "Advanced",
        order: 6,
        isPublished: true,
      },

      {
        name: "Disk Scheduling Numericals",
        slug: "disk-scheduling-numericals",
        description:
          "Practice disk scheduling problems involving total head movement, seek time, and algorithm comparison.",
        estimatedTime: 50,
        difficulty: "Advanced",
        order: 7,
        isPublished: true,
      },
    ],
  },

  // ============================================================
  // 9. ADVANCED OPERATING SYSTEM CONCEPTS
  // ============================================================

  {
    module: "advanced-operating-system-concepts",
    topics: [
      {
        name: "Inter-Process Communication",
        slug: "inter-process-communication",
        description:
          "Learn how processes communicate using shared memory, message passing, pipes, and other IPC mechanisms.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 1,
        isPublished: true,
      },

      {
        name: "Multiprocessing",
        slug: "multiprocessing",
        description:
          "Understand systems with multiple CPUs or cores and how operating systems manage parallel execution.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "Distributed Systems",
        slug: "distributed-systems",
        description:
          "Understand operating system concepts related to distributed systems, coordination, and resource sharing.",
        estimatedTime: 30,
        difficulty: "Advanced",
        order: 3,
        isPublished: true,
      },

      {
        name: "Real-Time Operating Systems",
        slug: "real-time-operating-systems",
        description:
          "Learn hard and soft real-time systems, scheduling requirements, and common real-time operating system concepts.",
        estimatedTime: 30,
        difficulty: "Advanced",
        order: 4,
        isPublished: true,
      },

      {
        name: "Operating System Security",
        slug: "operating-system-security",
        description:
          "Understand authentication, authorization, access control, protection, and basic operating system security mechanisms.",
        estimatedTime: 35,
        difficulty: "Advanced",
        order: 5,
        isPublished: true,
      },

      {
        name: "Operating System Interview Preparation",
        slug: "operating-system-interview-preparation",
        description:
          "Revise important operating system concepts, common interview questions, and numerical problem-solving patterns.",
        estimatedTime: 60,
        difficulty: "Advanced",
        order: 6,
        isPublished: true,
      },
    ],
  },

  // ============================================================
  // 10. I/O MANAGEMENT
  // ============================================================

  {
    module: "io-management",
    topics: [
      {
        name: "Introduction to I/O Management",
        slug: "introduction-to-io-management",
        description:
          "Understand the role of I/O management and how operating systems coordinate communication between applications and hardware devices.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "I/O Hardware",
        slug: "io-hardware",
        description:
          "Learn about I/O devices, device controllers, device registers, and the basic hardware involved in I/O operations.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "Programmed I/O",
        slug: "programmed-io",
        description:
          "Understand programmed I/O and how the CPU communicates with I/O devices through polling and direct control.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "Interrupt-Driven I/O",
        slug: "interrupt-driven-io",
        description:
          "Learn how interrupt-driven I/O allows devices to notify the CPU when an I/O operation requires attention.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Direct Memory Access",
        slug: "direct-memory-access",
        description:
          "Understand DMA and how data can be transferred between I/O devices and main memory with reduced CPU involvement.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "I/O Techniques & Device Management",
        slug: "io-techniques-device-management",
        description:
          "Understand buffering, caching, spooling, device drivers, and other techniques used by operating systems for efficient I/O management.",
        estimatedTime: 40,
        difficulty: "Advanced",
        order: 6,
        isPublished: true,
      },
    ],
  },

  // ============================================================
  // 11. OS SECURITY & SYSTEM CONCEPTS
  // ============================================================

  {
    module: "os-security-system-concepts",
    topics: [
      {
        name: "Operating System Protection",
        slug: "operating-system-protection",
        description:
          "Understand protection mechanisms that control access to system resources and prevent unauthorized operations.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 1,
        isPublished: true,
      },

      {
        name: "Access Control",
        slug: "access-control",
        description:
          "Learn access control concepts, permissions, protection domains, and mechanisms used to restrict resource access.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "Authentication & Authorization",
        slug: "authentication-authorization",
        description:
          "Understand authentication, authorization, user identities, permissions, and their role in operating system security.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "Operating System Security",
        slug: "operating-system-security",
        description:
          "Understand common operating system security threats, security mechanisms, and methods used to protect system resources.",
        estimatedTime: 40,
        difficulty: "Advanced",
        order: 4,
        isPublished: true,
      },

      {
        name: "System Boot & Startup",
        slug: "system-boot-startup",
        description:
          "Understand the complete system startup sequence from firmware initialization and bootloader execution to kernel loading and operating system initialization.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Important OS System Concepts",
        slug: "important-os-system-concepts",
        description:
          "Revise important operating system concepts frequently asked in interviews and competitive examinations.",
        estimatedTime: 45,
        difficulty: "Advanced",
        order: 6,
        isPublished: true,
      },
    ],
  },
];

export default osTopics;
