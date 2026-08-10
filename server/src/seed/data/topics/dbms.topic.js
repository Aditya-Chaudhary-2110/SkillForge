const dbmsTopics = [
  {
    module: "dbms-fundamentals",
    topics: [
      {
        name: "Introduction to DBMS",
        slug: "introduction-to-dbms",
        description:
          "Understand databases, DBMS, its purpose, advantages, and real-world applications.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "DBMS Architecture",
        slug: "dbms-architecture",
        description:
          "Learn the different levels of DBMS architecture including physical, logical, and view levels.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "Database Models",
        slug: "database-models",
        description:
          "Understand hierarchical, network, relational, object-oriented, and other database models.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "Schema & Instance",
        slug: "schema-and-instance",
        description:
          "Understand the difference between database schema, instance, and database state.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 4,
        isPublished: true,
      },

      {
        name: "Data Independence",
        slug: "data-independence",
        description:
          "Learn logical and physical data independence and why it is important in DBMS.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 5,
        isPublished: true,
      },

      {
        name: "DBMS Advantages & Disadvantages",
        slug: "dbms-advantages-disadvantages",
        description:
          "Understand the major benefits, limitations, and use cases of database management systems.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 6,
        isPublished: true,
      },
    ],
  },

  {
    module: "relational-model",
    topics: [
      {
        name: "Introduction to Relational Model",
        slug: "introduction-to-relational-model",
        description:
          "Understand the relational database model and how data is represented using tables.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Relations, Tuples & Attributes",
        slug: "relations-tuples-attributes",
        description:
          "Learn the fundamental components of relational databases including relations, tuples, and attributes.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "Keys in DBMS",
        slug: "keys-in-dbms",
        description:
          "Understand primary key, candidate key, super key, foreign key, alternate key, and composite key.",
        estimatedTime: 35,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "Integrity Constraints",
        slug: "integrity-constraints",
        description:
          "Learn entity integrity, referential integrity, domain constraints, and key constraints.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Relational Algebra",
        slug: "relational-algebra",
        description:
          "Learn selection, projection, union, intersection, difference, Cartesian product, and join operations.",
        estimatedTime: 50,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Relational Calculus",
        slug: "relational-calculus",
        description:
          "Understand tuple relational calculus and domain relational calculus as declarative query languages.",
        estimatedTime: 40,
        difficulty: "Advanced",
        order: 6,
        isPublished: true,
      },
    ],
  },

  {
    module: "database-design",
    topics: [
      {
        name: "Introduction to ER Model",
        slug: "introduction-to-er-model",
        description:
          "Understand entity-relationship modeling and its role in database design.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Entities & Entity Sets",
        slug: "entities-and-entity-sets",
        description:
          "Learn entities, entity sets, attributes, and how real-world objects are represented in databases.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "Attributes",
        slug: "attributes",
        description:
          "Understand simple, composite, single-valued, multi-valued, derived, and key attributes.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "Relationships",
        slug: "relationships",
        description:
          "Learn relationship sets, relationship types, degree, and roles in ER modeling.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 4,
        isPublished: true,
      },

      {
        name: "Cardinality & Participation",
        slug: "cardinality-and-participation",
        description:
          "Understand one-to-one, one-to-many, many-to-one, many-to-many relationships and participation constraints.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Weak Entity Sets",
        slug: "weak-entity-sets",
        description:
          "Understand weak entities, identifying relationships, and partial keys.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "ER Diagram",
        slug: "er-diagram",
        description:
          "Learn how to design ER diagrams and convert real-world requirements into database structures.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 7,
        isPublished: true,
      },
    ],
  },

  {
    module: "normalization",
    topics: [
      {
        name: "Introduction to Normalization",
        slug: "introduction-to-normalization",
        description:
          "Understand database normalization, its purpose, and how it reduces redundancy and anomalies.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Functional Dependencies",
        slug: "functional-dependencies",
        description:
          "Learn functional dependencies and how they are used to analyze and design relational schemas.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "First Normal Form",
        slug: "first-normal-form",
        description:
          "Understand 1NF and how atomic values and elimination of repeating groups improve database design.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "Second Normal Form",
        slug: "second-normal-form",
        description:
          "Learn 2NF and how partial dependencies are removed from relational tables.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Third Normal Form",
        slug: "third-normal-form",
        description:
          "Understand 3NF and how transitive dependencies are eliminated.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Boyce-Codd Normal Form",
        slug: "boyce-codd-normal-form",
        description:
          "Learn BCNF and understand how it provides stronger normalization than 3NF.",
        estimatedTime: 40,
        difficulty: "Advanced",
        order: 6,
        isPublished: true,
      },

      {
        name: "Fourth & Fifth Normal Forms",
        slug: "fourth-and-fifth-normal-forms",
        description:
          "Understand multivalued dependencies, join dependencies, 4NF, and 5NF.",
        estimatedTime: 40,
        difficulty: "Advanced",
        order: 7,
        isPublished: true,
      },

      {
        name: "Normalization Problems",
        slug: "normalization-problems",
        description:
          "Practice identifying functional dependencies, candidate keys, normal forms, and decomposition problems.",
        estimatedTime: 50,
        difficulty: "Advanced",
        order: 8,
        isPublished: true,
      },
    ],
  },

  {
    module: "sql",
    topics: [
      {
        name: "Introduction to SQL",
        slug: "introduction-to-sql",
        description:
          "Understand SQL, its purpose, syntax, and role in relational database management.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "DDL Commands",
        slug: "ddl-commands",
        description:
          "Learn CREATE, ALTER, DROP, and TRUNCATE commands for defining database structures.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "DML Commands",
        slug: "dml-commands",
        description:
          "Learn INSERT, UPDATE, and DELETE commands for modifying database records.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "DQL & SELECT",
        slug: "dql-and-select",
        description:
          "Learn SELECT queries and retrieve specific data from relational tables.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 4,
        isPublished: true,
      },

      {
        name: "WHERE Clause",
        slug: "where-clause",
        description:
          "Filter database records using conditions with the WHERE clause.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 5,
        isPublished: true,
      },

      {
        name: "ORDER BY & DISTINCT",
        slug: "order-by-and-distinct",
        description:
          "Sort query results and remove duplicate records using ORDER BY and DISTINCT.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 6,
        isPublished: true,
      },

      {
        name: "Aggregate Functions",
        slug: "aggregate-functions",
        description:
          "Use COUNT, SUM, AVG, MIN, and MAX to perform calculations on database records.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 7,
        isPublished: true,
      },

      {
        name: "GROUP BY & HAVING",
        slug: "group-by-and-having",
        description:
          "Group records and filter grouped results using GROUP BY and HAVING.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 8,
        isPublished: true,
      },

      {
        name: "Joins",
        slug: "joins",
        description:
          "Understand INNER, LEFT, RIGHT, FULL, CROSS, and SELF joins for combining data from multiple tables.",
        estimatedTime: 50,
        difficulty: "Intermediate",
        order: 9,
        isPublished: true,
      },

      {
        name: "Subqueries",
        slug: "subqueries",
        description:
          "Learn nested queries and use subqueries with SELECT, WHERE, FROM, and other clauses.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 10,
        isPublished: true,
      },

      {
        name: "Set Operations",
        slug: "set-operations",
        description:
          "Learn UNION, UNION ALL, INTERSECT, and EXCEPT for combining query results.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 11,
        isPublished: true,
      },

      {
        name: "Views",
        slug: "views",
        description:
          "Understand database views, their advantages, limitations, and practical use cases.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 12,
        isPublished: true,
      },

      {
        name: "Indexes",
        slug: "indexes",
        description:
          "Learn database indexing, index types, performance benefits, and trade-offs.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 13,
        isPublished: true,
      },
    ],
  },

  {
    module: "transactions-concurrency",
    topics: [
      {
        name: "Introduction to Transactions",
        slug: "introduction-to-transactions",
        description:
          "Understand database transactions and why transaction management is important.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "ACID Properties",
        slug: "acid-properties",
        description:
          "Learn Atomicity, Consistency, Isolation, and Durability with practical database examples.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "Transaction States",
        slug: "transaction-states",
        description:
          "Understand active, partially committed, committed, failed, and aborted transaction states.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "Schedules",
        slug: "schedules",
        description:
          "Learn serial and non-serial schedules and how concurrent transactions are executed.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Serializability",
        slug: "serializability",
        description:
          "Understand conflict serializability, view serializability, and precedence graphs.",
        estimatedTime: 50,
        difficulty: "Advanced",
        order: 5,
        isPublished: true,
      },

      {
        name: "Concurrency Control",
        slug: "concurrency-control",
        description:
          "Learn techniques used to maintain database consistency during concurrent transactions.",
        estimatedTime: 40,
        difficulty: "Advanced",
        order: 6,
        isPublished: true,
      },

      {
        name: "Lock-Based Protocols",
        slug: "lock-based-protocols",
        description:
          "Understand shared locks, exclusive locks, two-phase locking, and locking protocols.",
        estimatedTime: 45,
        difficulty: "Advanced",
        order: 7,
        isPublished: true,
      },

      {
        name: "Deadlocks in DBMS",
        slug: "deadlocks-in-dbms",
        description:
          "Understand transaction deadlocks, detection, prevention, and recovery techniques.",
        estimatedTime: 35,
        difficulty: "Advanced",
        order: 8,
        isPublished: true,
      },
    ],
  },

  {
    module: "storage-recovery",
    topics: [
      {
        name: "Introduction to Database Recovery",
        slug: "introduction-to-database-recovery",
        description:
          "Understand database failures and the importance of recovery mechanisms.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 1,
        isPublished: true,
      },

      {
        name: "Types of Database Failures",
        slug: "types-of-database-failures",
        description:
          "Learn transaction failures, system crashes, disk failures, and other database failure types.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "Log-Based Recovery",
        slug: "log-based-recovery",
        description:
          "Understand transaction logs and recovery using deferred and immediate database modifications.",
        estimatedTime: 40,
        difficulty: "Advanced",
        order: 3,
        isPublished: true,
      },

      {
        name: "Checkpoints",
        slug: "checkpoints",
        description:
          "Learn checkpoint mechanisms and how they reduce database recovery time.",
        estimatedTime: 25,
        difficulty: "Advanced",
        order: 4,
        isPublished: true,
      },

      {
        name: "Shadow Paging",
        slug: "shadow-paging",
        description:
          "Understand shadow paging and how it provides an alternative recovery mechanism.",
        estimatedTime: 30,
        difficulty: "Advanced",
        order: 5,
        isPublished: true,
      },

      {
        name: "Database Backup",
        slug: "database-backup",
        description:
          "Learn database backup strategies and their role in protecting data from failures.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },
    ],
  },

  {
    module: "database-security-advanced",
    topics: [
      {
        name: "Distributed Databases",
        slug: "distributed-databases",
        description:
          "Understand distributed database systems, their architecture, advantages, and challenges.",
        estimatedTime: 40,
        difficulty: "Advanced",
        order: 1,
        isPublished: true,
      },

      {
        name: "Centralized vs Distributed Databases",
        slug: "centralized-vs-distributed-databases",
        description:
          "Compare centralized and distributed database architectures and their use cases.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "Database Fragmentation",
        slug: "database-fragmentation",
        description:
          "Learn horizontal, vertical, and hybrid fragmentation in distributed databases.",
        estimatedTime: 35,
        difficulty: "Advanced",
        order: 3,
        isPublished: true,
      },

      {
        name: "Database Replication",
        slug: "database-replication",
        description:
          "Understand data replication, its types, benefits, and consistency challenges.",
        estimatedTime: 35,
        difficulty: "Advanced",
        order: 4,
        isPublished: true,
      },

      {
        name: "NoSQL Databases",
        slug: "nosql-databases",
        description:
          "Understand NoSQL databases, their characteristics, types, and differences from relational databases.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "CAP Theorem",
        slug: "cap-theorem",
        description:
          "Learn the CAP theorem and understand consistency, availability, and partition tolerance in distributed systems.",
        estimatedTime: 35,
        difficulty: "Advanced",
        order: 6,
        isPublished: true,
      },

      {
        name: "Database Security",
        slug: "database-security",
        description:
          "Understand authentication, authorization, access control, SQL injection, and database security practices.",
        estimatedTime: 40,
        difficulty: "Advanced",
        order: 7,
        isPublished: true,
      },

      {
        name: "DBMS Interview Preparation",
        slug: "dbms-interview-preparation",
        description:
          "Revise important DBMS concepts, frequently asked interview questions, and problem-solving techniques.",
        estimatedTime: 60,
        difficulty: "Advanced",
        order: 8,
        isPublished: true,
      },
    ],
  },
];

export default dbmsTopics;
