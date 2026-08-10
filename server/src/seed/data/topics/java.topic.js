const javaTopics = [
  {
    module: "core-java",
    topics: [
      {
        name: "Introduction to Java",
        slug: "introduction-to-java",
        description:
          "Understand Java, its history, features, architecture, and real-world applications.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "JDK, JRE & JVM",
        slug: "jdk-jre-jvm",
        description:
          "Learn the Java Development Kit, Runtime Environment, JVM architecture, and execution flow.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "Java Installation & IDE Setup",
        slug: "java-installation-ide-setup",
        description:
          "Install Java, configure environment variables, and set up IntelliJ IDEA or VS Code.",
        estimatedTime: 15,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "Java Program Structure",
        slug: "java-program-structure",
        description:
          "Understand classes, main method, packages, imports, compilation, and execution.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 4,
        isPublished: true,
      },

      {
        name: "Variables & Data Types",
        slug: "variables-data-types",
        description:
          "Learn primitive data types, variables, literals, constants, and memory allocation.",
        estimatedTime: 35,
        difficulty: "Beginner",
        order: 5,
        isPublished: true,
      },

      {
        name: "Operators",
        slug: "operators",
        description:
          "Master arithmetic, relational, logical, assignment, unary, ternary, and bitwise operators.",
        estimatedTime: 35,
        difficulty: "Beginner",
        order: 6,
        isPublished: true,
      },

      {
        name: "User Input",
        slug: "user-input",
        description:
          "Read user input using Scanner and understand console interaction.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 7,
        isPublished: true,
      },

      {
        name: "Conditional Statements",
        slug: "conditional-statements",
        description:
          "Learn if, if-else, nested if, switch, and switch expressions.",
        estimatedTime: 40,
        difficulty: "Beginner",
        order: 8,
        isPublished: true,
      },

      {
        name: "Loops",
        slug: "loops",
        description:
          "Master for, while, do-while, enhanced for loop, break, continue, and nested loops.",
        estimatedTime: 45,
        difficulty: "Beginner",
        order: 9,
        isPublished: true,
      },

      {
        name: "Methods",
        slug: "methods",
        description:
          "Understand method declaration, parameters, return types, scope, and recursion basics.",
        estimatedTime: 45,
        difficulty: "Beginner",
        order: 10,
        isPublished: true,
      },

      {
        name: "Method Overloading",
        slug: "method-overloading",
        description:
          "Learn compile-time polymorphism through overloaded methods.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 11,
        isPublished: true,
      },

      {
        name: "Arrays",
        slug: "arrays",
        description:
          "Work with one-dimensional and multidimensional arrays and common operations.",
        estimatedTime: 50,
        difficulty: "Beginner",
        order: 12,
        isPublished: true,
      },

      {
        name: "Strings",
        slug: "strings",
        description:
          "Learn String creation, immutability, methods, comparison, and manipulation.",
        estimatedTime: 45,
        difficulty: "Beginner",
        order: 13,
        isPublished: true,
      },

      {
        name: "StringBuilder & StringBuffer",
        slug: "stringbuilder-stringbuffer",
        description: "Understand mutable strings and performance differences.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 14,
        isPublished: true,
      },

      {
        name: "Command Line Arguments",
        slug: "command-line-arguments",
        description: "Pass and process arguments through the main method.",
        estimatedTime: 15,
        difficulty: "Beginner",
        order: 15,
        isPublished: true,
      },

      {
        name: "Packages",
        slug: "packages",
        description: "Organize Java code using packages and imports.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 16,
        isPublished: true,
      },

      {
        name: "Wrapper Classes",
        slug: "wrapper-classes",
        description:
          "Learn wrapper classes, autoboxing, unboxing, and utility methods.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 17,
        isPublished: true,
      },

      {
        name: "Enums",
        slug: "enums",
        description:
          "Understand enumeration types, constants, constructors, and methods.",
        estimatedTime: 20,
        difficulty: "Intermediate",
        order: 18,
        isPublished: true,
      },

      {
        name: "Type Casting",
        slug: "type-casting",
        description: "Perform implicit and explicit type conversions safely.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 19,
        isPublished: true,
      },

      {
        name: "Coding Best Practices",
        slug: "coding-best-practices",
        description:
          "Follow Java coding standards, clean code principles, and interview-friendly practices.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 20,
        isPublished: true,
      },
    ],
  },

  {
    module: "object-oriented-programming",
    topics: [
      {
        name: "Introduction to OOP",
        slug: "introduction-to-oop",
        description:
          "Understand object-oriented programming, its principles, benefits, and why Java is an object-oriented language.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Classes & Objects",
        slug: "classes-and-objects",
        description:
          "Learn how to create classes, instantiate objects, and understand object lifecycle.",
        estimatedTime: 40,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "Constructors",
        slug: "constructors",
        description:
          "Understand default, parameterized, constructor overloading, and constructor chaining.",
        estimatedTime: 35,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "this Keyword",
        slug: "this-keyword",
        description:
          "Learn different uses of the this keyword including constructor chaining and variable reference.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 4,
        isPublished: true,
      },

      {
        name: "Static Members",
        slug: "static-members",
        description:
          "Understand static variables, methods, blocks, nested classes, and memory allocation.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 5,
        isPublished: true,
      },

      {
        name: "Encapsulation",
        slug: "encapsulation",
        description:
          "Learn data hiding, getters, setters, and writing secure object-oriented code.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 6,
        isPublished: true,
      },

      {
        name: "Inheritance",
        slug: "inheritance",
        description:
          "Understand code reusability through inheritance and different inheritance types in Java.",
        estimatedTime: 45,
        difficulty: "Intermediate",
        order: 7,
        isPublished: true,
      },

      {
        name: "Method Overriding",
        slug: "method-overriding",
        description:
          "Learn runtime polymorphism by overriding inherited methods.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 8,
        isPublished: true,
      },

      {
        name: "super Keyword",
        slug: "super-keyword",
        description:
          "Use the super keyword to access parent class constructors, methods, and variables.",
        estimatedTime: 20,
        difficulty: "Intermediate",
        order: 9,
        isPublished: true,
      },

      {
        name: "Polymorphism",
        slug: "polymorphism",
        description:
          "Understand compile-time and runtime polymorphism with practical examples.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 10,
        isPublished: true,
      },

      {
        name: "Abstraction",
        slug: "abstraction",
        description:
          "Learn abstraction using abstract classes and understand real-world design principles.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 11,
        isPublished: true,
      },

      {
        name: "Abstract Classes",
        slug: "abstract-classes",
        description:
          "Explore abstract methods, abstract classes, and their practical use cases.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 12,
        isPublished: true,
      },

      {
        name: "Interfaces",
        slug: "interfaces",
        description:
          "Understand interfaces, multiple inheritance, default methods, and static methods.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 13,
        isPublished: true,
      },

      {
        name: "Object Class",
        slug: "object-class",
        description:
          "Learn the methods inherited from Object including equals(), hashCode(), toString(), and clone().",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 14,
        isPublished: true,
      },

      {
        name: "Inner Classes",
        slug: "inner-classes",
        description:
          "Understand member, local, anonymous, and static nested classes.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 15,
        isPublished: true,
      },

      {
        name: "Association, Aggregation & Composition",
        slug: "association-aggregation-composition",
        description:
          "Learn object relationships and identify when to use each design approach.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 16,
        isPublished: true,
      },

      {
        name: "Object Cloning",
        slug: "object-cloning",
        description:
          "Understand shallow copy, deep copy, Cloneable interface, and cloning best practices.",
        estimatedTime: 30,
        difficulty: "Advanced",
        order: 17,
        isPublished: true,
      },

      {
        name: "SOLID Principles (Introduction)",
        slug: "solid-principles-introduction",
        description:
          "Get introduced to SOLID principles and writing maintainable object-oriented software.",
        estimatedTime: 45,
        difficulty: "Advanced",
        order: 18,
        isPublished: true,
      },
    ],
  },

  {
    module: "exception-handling",
    topics: [
      {
        name: "Introduction to Exception Handling",
        slug: "introduction-to-exception-handling",
        description:
          "Understand what exceptions are, why they occur, and how Java handles runtime errors.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Exception Hierarchy",
        slug: "exception-hierarchy",
        description:
          "Explore the Throwable class, Error, Exception, checked exceptions, and unchecked exceptions.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "try-catch Block",
        slug: "try-catch-block",
        description:
          "Learn how to handle exceptions using try and catch blocks with practical examples.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "Multiple Catch Blocks",
        slug: "multiple-catch-blocks",
        description:
          "Handle different exception types efficiently using multiple catch blocks.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 4,
        isPublished: true,
      },

      {
        name: "finally Block",
        slug: "finally-block",
        description:
          "Ensure cleanup code executes regardless of whether an exception occurs.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 5,
        isPublished: true,
      },

      {
        name: "throw Keyword",
        slug: "throw-keyword",
        description:
          "Learn how to explicitly throw exceptions in Java applications.",
        estimatedTime: 20,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "throws Keyword",
        slug: "throws-keyword",
        description:
          "Understand exception propagation and declaring exceptions using throws.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 7,
        isPublished: true,
      },

      {
        name: "Checked vs Unchecked Exceptions",
        slug: "checked-vs-unchecked-exceptions",
        description:
          "Differentiate between compile-time and runtime exceptions with real-world examples.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 8,
        isPublished: true,
      },

      {
        name: "Custom Exceptions",
        slug: "custom-exceptions",
        description:
          "Create your own exception classes to represent application-specific errors.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 9,
        isPublished: true,
      },

      {
        name: "try-with-resources",
        slug: "try-with-resources",
        description:
          "Automatically manage resources using the try-with-resources statement.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 10,
        isPublished: true,
      },

      {
        name: "Best Practices for Exception Handling",
        slug: "exception-handling-best-practices",
        description:
          "Write clean, maintainable exception handling code and avoid common mistakes.",
        estimatedTime: 30,
        difficulty: "Advanced",
        order: 11,
        isPublished: true,
      },
    ],
  },

  {
    module: "collections-framework",
    topics: [
      {
        name: "Introduction to Collections Framework",
        slug: "introduction-to-collections-framework",
        description:
          "Understand the purpose, architecture, and advantages of the Java Collections Framework.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Collection Interface",
        slug: "collection-interface",
        description:
          "Learn the root Collection interface and the common operations supported by collection implementations.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "List Interface",
        slug: "list-interface",
        description:
          "Understand ordered collections, duplicate elements, and implementations of the List interface.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "ArrayList",
        slug: "arraylist",
        description:
          "Learn dynamic arrays, internal working, resizing mechanism, and common operations.",
        estimatedTime: 40,
        difficulty: "Beginner",
        order: 4,
        isPublished: true,
      },

      {
        name: "LinkedList",
        slug: "linkedlist",
        description:
          "Understand doubly linked lists, insertion, deletion, traversal, and performance characteristics.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Vector & Stack",
        slug: "vector-stack",
        description:
          "Explore legacy collection classes including Vector and Stack and their use cases.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "Queue Interface",
        slug: "queue-interface",
        description:
          "Understand queues, priority queues, deque, and common queue implementations.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 7,
        isPublished: true,
      },

      {
        name: "Set Interface",
        slug: "set-interface",
        description:
          "Learn collections that store unique elements and understand different Set implementations.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 8,
        isPublished: true,
      },

      {
        name: "HashSet",
        slug: "hashset",
        description:
          "Understand hashing, uniqueness, performance, and internal working of HashSet.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 9,
        isPublished: true,
      },

      {
        name: "LinkedHashSet",
        slug: "linkedhashset",
        description:
          "Learn insertion-order preservation and how LinkedHashSet differs from HashSet.",
        estimatedTime: 20,
        difficulty: "Intermediate",
        order: 10,
        isPublished: true,
      },

      {
        name: "TreeSet",
        slug: "treeset",
        description:
          "Understand sorted collections, natural ordering, comparators, and red-black tree implementation.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 11,
        isPublished: true,
      },

      {
        name: "Map Interface",
        slug: "map-interface",
        description:
          "Learn key-value data storage, map operations, and the Map hierarchy.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 12,
        isPublished: true,
      },

      {
        name: "HashMap",
        slug: "hashmap",
        description:
          "Master HashMap internals including hashing, buckets, collisions, resizing, and performance.",
        estimatedTime: 50,
        difficulty: "Intermediate",
        order: 13,
        isPublished: true,
      },

      {
        name: "LinkedHashMap",
        slug: "linkedhashmap",
        description:
          "Understand insertion-order maps and access-order maps using LinkedHashMap.",
        estimatedTime: 20,
        difficulty: "Intermediate",
        order: 14,
        isPublished: true,
      },

      {
        name: "TreeMap",
        slug: "treemap",
        description:
          "Learn sorted maps, natural ordering, custom comparators, and red-black tree implementation.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 15,
        isPublished: true,
      },

      {
        name: "Comparable & Comparator",
        slug: "comparable-comparator",
        description:
          "Sort custom objects using Comparable and Comparator interfaces.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 16,
        isPublished: true,
      },

      {
        name: "Iterators",
        slug: "iterators",
        description:
          "Traverse collections using Iterator, ListIterator, and enhanced for loop.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 17,
        isPublished: true,
      },

      {
        name: "Collections Utility Class",
        slug: "collections-utility-class",
        description:
          "Use utility methods for sorting, searching, reversing, shuffling, and synchronizing collections.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 18,
        isPublished: true,
      },
    ],
  },

  {
    module: "multithreading",
    topics: [
      {
        name: "Introduction to Multithreading",
        slug: "introduction-to-multithreading",
        description:
          "Understand processes, threads, concurrency, parallelism, and why multithreading is important.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Creating Threads",
        slug: "creating-threads",
        description:
          "Learn how to create threads using the Thread class and Runnable interface.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "Thread Lifecycle",
        slug: "thread-lifecycle",
        description:
          "Understand the different states of a thread and transitions between them.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "Thread Methods",
        slug: "thread-methods",
        description:
          "Explore start(), run(), sleep(), join(), yield(), interrupt(), and other commonly used thread methods.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Synchronization",
        slug: "synchronization",
        description:
          "Prevent race conditions using synchronized methods, synchronized blocks, and intrinsic locks.",
        estimatedTime: 45,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Inter-Thread Communication",
        slug: "inter-thread-communication",
        description:
          "Learn wait(), notify(), and notifyAll() for communication between threads.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "Deadlock",
        slug: "deadlock",
        description:
          "Understand deadlocks, their causes, detection, prevention, and avoidance strategies.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 7,
        isPublished: true,
      },

      {
        name: "Executor Framework",
        slug: "executor-framework",
        description:
          "Learn thread pools, ExecutorService, Callable, Future, and efficient task execution.",
        estimatedTime: 45,
        difficulty: "Intermediate",
        order: 8,
        isPublished: true,
      },

      {
        name: "Concurrent Collections",
        slug: "concurrent-collections",
        description:
          "Explore thread-safe collections like ConcurrentHashMap, CopyOnWriteArrayList, and BlockingQueue.",
        estimatedTime: 35,
        difficulty: "Advanced",
        order: 9,
        isPublished: true,
      },

      {
        name: "Java Concurrency Best Practices",
        slug: "java-concurrency-best-practices",
        description:
          "Write scalable, thread-safe applications using modern Java concurrency practices.",
        estimatedTime: 30,
        difficulty: "Advanced",
        order: 10,
        isPublished: true,
      },
    ],
  },

  {
    module: "file-handling",
    topics: [
      {
        name: "Introduction to Java I/O",
        slug: "introduction-to-java-io",
        description:
          "Understand Java Input/Output, streams, readers, writers, and file operations.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "File Class",
        slug: "file-class",
        description:
          "Learn to create, delete, rename, and inspect files and directories using the File class.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "Byte Streams",
        slug: "byte-streams",
        description:
          "Understand InputStream and OutputStream for reading and writing binary data.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "Character Streams",
        slug: "character-streams",
        description:
          "Learn Reader and Writer classes for handling text-based file operations.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Buffered Streams",
        slug: "buffered-streams",
        description:
          "Improve I/O performance using BufferedReader, BufferedWriter, BufferedInputStream, and BufferedOutputStream.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Serialization",
        slug: "serialization",
        description:
          "Learn object serialization, deserialization, Serializable interface, and transient keyword.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "NIO Package",
        slug: "nio-package",
        description:
          "Explore Java NIO, Path, Files, Channels, Buffers, and modern file handling APIs.",
        estimatedTime: 45,
        difficulty: "Advanced",
        order: 7,
        isPublished: true,
      },

      {
        name: "Java I/O Best Practices",
        slug: "java-io-best-practices",
        description:
          "Write efficient, safe, and maintainable file handling code using modern Java APIs.",
        estimatedTime: 25,
        difficulty: "Advanced",
        order: 8,
        isPublished: true,
      },
    ],
  },

  {
    module: "java-8-features",
    topics: [
      {
        name: "Introduction to Java 8",
        slug: "introduction-to-java-8",
        description:
          "Understand the major features introduced in Java 8 and their impact on modern Java development.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Lambda Expressions",
        slug: "lambda-expressions",
        description:
          "Write concise functional code using lambda expressions and understand their syntax and use cases.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "Functional Interfaces",
        slug: "functional-interfaces",
        description:
          "Learn functional interfaces, @FunctionalInterface annotation, and built-in functional interfaces.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "Method References",
        slug: "method-references",
        description:
          "Simplify lambda expressions using method references and constructor references.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Stream API",
        slug: "stream-api",
        description:
          "Process collections efficiently using streams, intermediate operations, and terminal operations.",
        estimatedTime: 60,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Optional Class",
        slug: "optional-class",
        description:
          "Handle null values safely using the Optional class and avoid NullPointerException.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "Date and Time API",
        slug: "date-and-time-api",
        description:
          "Use the modern java.time package including LocalDate, LocalTime, LocalDateTime, and Duration.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 7,
        isPublished: true,
      },

      {
        name: "Java 8 Best Practices",
        slug: "java-8-best-practices",
        description:
          "Write clean, readable, and efficient Java 8 code using functional programming principles.",
        estimatedTime: 30,
        difficulty: "Advanced",
        order: 8,
        isPublished: true,
      },
    ],
  },

  {
    module: "generics",
    topics: [
      {
        name: "Introduction to Generics",
        slug: "introduction-to-generics",
        description:
          "Understand why generics were introduced and how they provide type safety in Java.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Generic Classes",
        slug: "generic-classes",
        description:
          "Learn how to create and use generic classes with type parameters.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "Generic Methods",
        slug: "generic-methods",
        description:
          "Write methods with generic type parameters independent of the class type.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "Bounded Type Parameters",
        slug: "bounded-type-parameters",
        description:
          "Restrict generic types using extends and understand upper bounds.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Wildcards",
        slug: "wildcards",
        description:
          "Learn ?, ? extends, and ? super for writing flexible generic APIs.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Type Erasure",
        slug: "type-erasure",
        description:
          "Understand how Java implements generics at compile time using type erasure.",
        estimatedTime: 35,
        difficulty: "Advanced",
        order: 6,
        isPublished: true,
      },

      {
        name: "Generics Best Practices",
        slug: "generics-best-practices",
        description:
          "Write clean, reusable, and type-safe generic code following Java best practices.",
        estimatedTime: 30,
        difficulty: "Advanced",
        order: 7,
        isPublished: true,
      },
    ],
  },

  {
    module: "jdbc",
    topics: [
      {
        name: "Introduction to JDBC",
        slug: "introduction-to-jdbc",
        description:
          "Understand JDBC architecture, drivers, workflow, and how Java applications communicate with databases.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "JDBC Drivers",
        slug: "jdbc-drivers",
        description:
          "Learn the different types of JDBC drivers and understand when each is used.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "Database Connection",
        slug: "database-connection",
        description:
          "Connect Java applications to relational databases using DriverManager and Connection.",
        estimatedTime: 35,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "Statement Interface",
        slug: "statement-interface",
        description:
          "Execute SQL queries using the Statement interface and understand its limitations.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "PreparedStatement",
        slug: "preparedstatement",
        description:
          "Execute parameterized SQL queries securely using PreparedStatement and prevent SQL injection.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "CallableStatement",
        slug: "callablestatement",
        description:
          "Call stored procedures from Java applications using CallableStatement.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "ResultSet",
        slug: "resultset",
        description:
          "Retrieve and process query results efficiently using the ResultSet interface.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 7,
        isPublished: true,
      },

      {
        name: "Transactions in JDBC",
        slug: "transactions-in-jdbc",
        description:
          "Manage database transactions using commit(), rollback(), savepoints, and auto-commit.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 8,
        isPublished: true,
      },

      {
        name: "Batch Processing",
        slug: "batch-processing",
        description:
          "Improve database performance by executing multiple SQL statements in batches.",
        estimatedTime: 25,
        difficulty: "Advanced",
        order: 9,
        isPublished: true,
      },

      {
        name: "JDBC Best Practices",
        slug: "jdbc-best-practices",
        description:
          "Write efficient, secure, and maintainable JDBC code while managing resources properly.",
        estimatedTime: 30,
        difficulty: "Advanced",
        order: 10,
        isPublished: true,
      },
    ],
  },

  {
    module: "best-practices",
    topics: [
      {
        name: "Java Coding Standards",
        slug: "java-coding-standards",
        description:
          "Follow standard Java naming conventions, formatting rules, and code organization practices.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Clean Code Principles",
        slug: "clean-code-principles",
        description:
          "Write readable, maintainable, and self-documenting Java code by applying clean coding principles.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "SOLID Principles",
        slug: "solid-principles",
        description:
          "Understand the five SOLID principles and build scalable object-oriented applications.",
        estimatedTime: 50,
        difficulty: "Advanced",
        order: 3,
        isPublished: true,
      },

      {
        name: "Design Patterns Overview",
        slug: "design-patterns-overview",
        description:
          "Get introduced to commonly used design patterns such as Singleton, Factory, Builder, and Observer.",
        estimatedTime: 45,
        difficulty: "Advanced",
        order: 4,
        isPublished: true,
      },

      {
        name: "Memory Management",
        slug: "memory-management",
        description:
          "Understand heap, stack, garbage collection, memory leaks, and object lifecycle in Java.",
        estimatedTime: 45,
        difficulty: "Advanced",
        order: 5,
        isPublished: true,
      },

      {
        name: "Performance Optimization",
        slug: "performance-optimization",
        description:
          "Learn techniques for writing efficient Java code, reducing memory usage, and improving execution speed.",
        estimatedTime: 35,
        difficulty: "Advanced",
        order: 6,
        isPublished: true,
      },

      {
        name: "Logging",
        slug: "logging",
        description:
          "Implement application logging using Java logging frameworks and logging best practices.",
        estimatedTime: 25,
        difficulty: "Intermediate",
        order: 7,
        isPublished: true,
      },

      {
        name: "Code Documentation",
        slug: "code-documentation",
        description:
          "Write effective JavaDoc comments and maintain professional project documentation.",
        estimatedTime: 20,
        difficulty: "Beginner",
        order: 8,
        isPublished: true,
      },

      {
        name: "Testing Fundamentals",
        slug: "testing-fundamentals",
        description:
          "Understand unit testing concepts, test-driven development basics, and JUnit introduction.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 9,
        isPublished: true,
      },

      {
        name: "Java Interview Preparation",
        slug: "java-interview-preparation",
        description:
          "Revise frequently asked Java interview topics, coding practices, and problem-solving strategies.",
        estimatedTime: 60,
        difficulty: "Advanced",
        order: 10,
        isPublished: true,
      },
    ],
  },
];

export default javaTopics;
