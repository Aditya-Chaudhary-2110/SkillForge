const cnTopics = [
  {
    module: "computer-network-basics",
    topics: [
      {
        name: "Introduction to Computer Networks",
        slug: "introduction-to-computer-networks",
        description:
          "Understand computer networks, their purpose, components, types, and how devices communicate with each other.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Network Types",
        slug: "network-types",
        description:
          "Learn LAN, MAN, WAN, PAN, and other common network classifications based on geographical coverage.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "Network Topologies",
        slug: "network-topologies",
        description:
          "Understand bus, star, ring, mesh, tree, and hybrid network topologies and compare their advantages and disadvantages.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "Network Devices",
        slug: "network-devices",
        description:
          "Learn the purpose and working of hubs, switches, bridges, routers, gateways, repeaters, and access points.",
        estimatedTime: 35,
        difficulty: "Beginner",
        order: 4,
        isPublished: true,
      },

      {
        name: "Network Protocols",
        slug: "network-protocols",
        description:
          "Understand network protocols and their role in communication between devices.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 5,
        isPublished: true,
      },

      {
        name: "OSI Model",
        slug: "osi-model",
        description:
          "Learn all seven layers of the OSI model, their responsibilities, protocols, and devices associated with each layer.",
        estimatedTime: 45,
        difficulty: "Beginner",
        order: 6,
        isPublished: true,
      },

      {
        name: "TCP/IP Model",
        slug: "tcp-ip-model",
        description:
          "Understand the TCP/IP networking model, its layers, protocols, and differences from the OSI model.",
        estimatedTime: 40,
        difficulty: "Beginner",
        order: 7,
        isPublished: true,
      },

      {
        name: "OSI vs TCP/IP",
        slug: "osi-vs-tcp-ip",
        description:
          "Compare the OSI and TCP/IP models, their layers, design principles, and practical usage.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 8,
        isPublished: true,
      },
    ],
  },

  {
    module: "physical-layer",
    topics: [
      {
        name: "Physical Layer",
        slug: "physical-layer",
        description:
          "Understand the responsibilities of the physical layer and how raw bits are transmitted over communication media.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Transmission Media",
        slug: "transmission-media",
        description:
          "Learn guided and unguided transmission media including twisted pair, coaxial cable, fiber optics, radio waves, and microwaves.",
        estimatedTime: 35,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "Analog vs Digital Signals",
        slug: "analog-vs-digital-signals",
        description:
          "Understand analog and digital signals, their characteristics, and differences in data communication.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "Bandwidth & Data Rate",
        slug: "bandwidth-data-rate",
        description:
          "Understand bandwidth, bit rate, baud rate, and the relationship between transmission capacity and data transfer.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Multiplexing",
        slug: "multiplexing",
        description:
          "Learn frequency division, time division, wavelength division, and statistical multiplexing techniques.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Switching Techniques",
        slug: "switching-techniques",
        description:
          "Understand circuit switching, packet switching, and message switching and compare their characteristics.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },
    ],
  },

  {
    module: "data-link-layer",
    topics: [
      {
        name: "Data Link Layer",
        slug: "data-link-layer",
        description:
          "Understand the responsibilities of the data link layer including framing, error control, and flow control.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "Framing",
        slug: "framing",
        description:
          "Learn character count, byte stuffing, bit stuffing, and other framing techniques used in data communication.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "Error Detection",
        slug: "error-detection",
        description:
          "Understand parity, checksum, and cyclic redundancy check techniques for detecting transmission errors.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "CRC",
        slug: "crc",
        description:
          "Learn cyclic redundancy check calculations and solve CRC-based error detection problems.",
        estimatedTime: 45,
        difficulty: "Advanced",
        order: 4,
        isPublished: true,
      },

      {
        name: "Error Correction",
        slug: "error-correction",
        description:
          "Understand error correction techniques and learn how Hamming codes are used to detect and correct errors.",
        estimatedTime: 45,
        difficulty: "Advanced",
        order: 5,
        isPublished: true,
      },

      {
        name: "Flow Control",
        slug: "flow-control",
        description:
          "Learn how flow control prevents a fast sender from overwhelming a slower receiver.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "Stop-and-Wait Protocol",
        slug: "stop-and-wait-protocol",
        description:
          "Understand Stop-and-Wait flow control and reliable data transmission.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 7,
        isPublished: true,
      },

      {
        name: "Sliding Window Protocol",
        slug: "sliding-window-protocol",
        description:
          "Learn sliding window flow control and understand how multiple frames can be transmitted before acknowledgment.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 8,
        isPublished: true,
      },

      {
        name: "ARQ Protocols",
        slug: "arq-protocols",
        description:
          "Understand Automatic Repeat reQuest protocols including Stop-and-Wait ARQ, Go-Back-N, and Selective Repeat.",
        estimatedTime: 45,
        difficulty: "Advanced",
        order: 9,
        isPublished: true,
      },

      {
        name: "MAC Sublayer",
        slug: "mac-sublayer",
        description:
          "Understand the Medium Access Control sublayer and how multiple devices share a common communication medium.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 10,
        isPublished: true,
      },

      {
        name: "Ethernet",
        slug: "ethernet",
        description:
          "Learn Ethernet architecture, frames, MAC addresses, standards, and basic Ethernet communication.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 11,
        isPublished: true,
      },

      {
        name: "CSMA/CD",
        slug: "csma-cd",
        description:
          "Understand Carrier Sense Multiple Access with Collision Detection and its role in traditional Ethernet networks.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 12,
        isPublished: true,
      },
    ],
  },

  {
    module: "network-layer",
    topics: [
      {
        name: "Network Layer",
        slug: "network-layer",
        description:
          "Understand the responsibilities of the network layer including logical addressing, routing, and packet forwarding.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "IPv4 Addressing",
        slug: "ipv4-addressing",
        description:
          "Learn IPv4 addresses, network and host portions, address classes, and basic addressing concepts.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "Subnetting",
        slug: "subnetting",
        description:
          "Learn subnet masks, CIDR notation, subnet calculations, network addresses, broadcast addresses, and usable host ranges.",
        estimatedTime: 60,
        difficulty: "Advanced",
        order: 3,
        isPublished: true,
      },

      {
        name: "IPv6",
        slug: "ipv6",
        description:
          "Understand IPv6 addressing, notation, address types, advantages, and differences from IPv4.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "ARP",
        slug: "arp",
        description:
          "Understand Address Resolution Protocol and how IP addresses are mapped to MAC addresses within a local network.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "ICMP",
        slug: "icmp",
        description:
          "Learn Internet Control Message Protocol and understand how it is used for network diagnostics and error reporting.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "Routing",
        slug: "routing",
        description:
          "Understand routing, forwarding, routing tables, and how packets travel between different networks.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 7,
        isPublished: true,
      },

      {
        name: "Routing Algorithms",
        slug: "routing-algorithms",
        description:
          "Learn distance vector, link state, and path vector routing approaches and their characteristics.",
        estimatedTime: 45,
        difficulty: "Advanced",
        order: 8,
        isPublished: true,
      },

      {
        name: "RIP",
        slug: "rip",
        description:
          "Understand Routing Information Protocol, hop count, routing updates, and its limitations.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 9,
        isPublished: true,
      },

      {
        name: "OSPF",
        slug: "ospf",
        description:
          "Learn Open Shortest Path First, link-state routing, areas, and shortest path calculation.",
        estimatedTime: 40,
        difficulty: "Advanced",
        order: 10,
        isPublished: true,
      },

      {
        name: "BGP",
        slug: "bgp",
        description:
          "Understand Border Gateway Protocol, autonomous systems, path vector routing, and Internet-scale routing.",
        estimatedTime: 40,
        difficulty: "Advanced",
        order: 11,
        isPublished: true,
      },
    ],
  },

  {
    module: "transport-layer",
    topics: [
      {
        name: "Transport Layer",
        slug: "transport-layer",
        description:
          "Understand the role of the transport layer in end-to-end communication, reliability, multiplexing, and flow control.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "TCP",
        slug: "tcp",
        description:
          "Learn Transmission Control Protocol, reliable delivery, connection-oriented communication, sequencing, acknowledgments, and retransmission.",
        estimatedTime: 50,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "TCP Three-Way Handshake",
        slug: "tcp-three-way-handshake",
        description:
          "Understand SYN, SYN-ACK, and ACK messages and how TCP establishes a connection.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "TCP Connection Termination",
        slug: "tcp-connection-termination",
        description:
          "Learn how TCP connections are terminated using FIN and ACK messages.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "UDP",
        slug: "udp",
        description:
          "Understand User Datagram Protocol, connectionless communication, low overhead, and common use cases.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 5,
        isPublished: true,
      },

      {
        name: "TCP vs UDP",
        slug: "tcp-vs-udp",
        description:
          "Compare TCP and UDP based on reliability, connection setup, speed, overhead, ordering, and practical use cases.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "Flow Control & Congestion Control",
        slug: "flow-control-congestion-control",
        description:
          "Understand TCP flow control, congestion control, sliding windows, slow start, congestion avoidance, and related mechanisms.",
        estimatedTime: 50,
        difficulty: "Advanced",
        order: 7,
        isPublished: true,
      },
    ],
  },

  {
    module: "application-layer",
    topics: [
      {
        name: "Application Layer",
        slug: "application-layer",
        description:
          "Understand the application layer and how network applications use protocols to provide services to users.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "DNS",
        slug: "dns",
        description:
          "Learn Domain Name System architecture, name resolution, DNS records, caching, and recursive queries.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "HTTP",
        slug: "http",
        description:
          "Understand HTTP requests, responses, methods, status codes, headers, and stateless communication.",
        estimatedTime: 40,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "HTTPS",
        slug: "https",
        description:
          "Learn how HTTPS secures HTTP communication using TLS encryption, certificates, authentication, and secure connections.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "FTP",
        slug: "ftp",
        description:
          "Understand File Transfer Protocol, its operation, modes, and common use cases.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 5,
        isPublished: true,
      },

      {
        name: "SMTP",
        slug: "smtp",
        description:
          "Learn Simple Mail Transfer Protocol and understand how email messages are transmitted between mail servers.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 6,
        isPublished: true,
      },

      {
        name: "POP3 & IMAP",
        slug: "pop3-imap",
        description:
          "Understand how POP3 and IMAP retrieve email and compare their approaches to mailbox synchronization.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 7,
        isPublished: true,
      },

      {
        name: "DHCP",
        slug: "dhcp",
        description:
          "Learn Dynamic Host Configuration Protocol and understand how devices automatically receive network configuration.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 8,
        isPublished: true,
      },
    ],
  },

  {
    module: "network-security",
    topics: [
      {
        name: "Introduction to Network Security",
        slug: "introduction-to-network-security",
        description:
          "Understand fundamental network security concepts, threats, vulnerabilities, and security goals.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 1,
        isPublished: true,
      },

      {
        name: "CIA Triad",
        slug: "cia-triad",
        description:
          "Learn confidentiality, integrity, and availability as the three fundamental goals of information security.",
        estimatedTime: 25,
        difficulty: "Beginner",
        order: 2,
        isPublished: true,
      },

      {
        name: "Encryption",
        slug: "encryption",
        description:
          "Understand encryption, decryption, plaintext, ciphertext, and the role of cryptography in secure communication.",
        estimatedTime: 30,
        difficulty: "Beginner",
        order: 3,
        isPublished: true,
      },

      {
        name: "Symmetric vs Asymmetric Encryption",
        slug: "symmetric-vs-asymmetric-encryption",
        description:
          "Compare symmetric and asymmetric cryptography, including their keys, performance, and common applications.",
        estimatedTime: 40,
        difficulty: "Intermediate",
        order: 4,
        isPublished: true,
      },

      {
        name: "Digital Signatures",
        slug: "digital-signatures",
        description:
          "Understand digital signatures, authentication, integrity, non-repudiation, and their relationship with public-key cryptography.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },

      {
        name: "Firewalls",
        slug: "firewalls",
        description:
          "Learn how firewalls monitor and control network traffic based on security rules and policies.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 6,
        isPublished: true,
      },

      {
        name: "Common Network Attacks",
        slug: "common-network-attacks",
        description:
          "Understand common network attacks such as DoS, DDoS, spoofing, sniffing, and man-in-the-middle attacks.",
        estimatedTime: 40,
        difficulty: "Advanced",
        order: 7,
        isPublished: true,
      },
    ],
  },

  {
    module: "network-performance",
    topics: [
      {
        name: "Network Performance Metrics",
        slug: "network-performance-metrics",
        description:
          "Understand bandwidth, throughput, latency, delay, jitter, packet loss, and their impact on network performance.",
        estimatedTime: 35,
        difficulty: "Intermediate",
        order: 1,
        isPublished: true,
      },

      {
        name: "Transmission Delay",
        slug: "transmission-delay",
        description:
          "Learn how to calculate transmission delay based on packet size and link transmission rate.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 2,
        isPublished: true,
      },

      {
        name: "Propagation Delay",
        slug: "propagation-delay",
        description:
          "Understand propagation delay and calculate the time required for a signal to travel across a communication link.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 3,
        isPublished: true,
      },

      {
        name: "Total Network Delay",
        slug: "total-network-delay",
        description:
          "Learn transmission, propagation, processing, and queuing delays and solve network delay numericals.",
        estimatedTime: 45,
        difficulty: "Advanced",
        order: 4,
        isPublished: true,
      },

      {
        name: "Network Throughput",
        slug: "network-throughput",
        description:
          "Understand throughput and goodput and learn how network conditions affect effective data transfer.",
        estimatedTime: 30,
        difficulty: "Intermediate",
        order: 5,
        isPublished: true,
      },
    ],
  },

  {
    module: "network-interview-preparation",
    topics: [
      {
        name: "Computer Networks Interview Basics",
        slug: "computer-networks-interview-basics",
        description:
          "Revise fundamental computer networking concepts commonly asked in technical interviews.",
        estimatedTime: 45,
        difficulty: "Intermediate",
        order: 1,
        isPublished: true,
      },

      {
        name: "Networking Scenario Questions",
        slug: "networking-scenario-questions",
        description:
          "Practice practical networking scenarios involving protocols, devices, addressing, routing, and troubleshooting.",
        estimatedTime: 50,
        difficulty: "Advanced",
        order: 2,
        isPublished: true,
      },

      {
        name: "Computer Networks Numericals",
        slug: "computer-networks-numericals",
        description:
          "Practice subnetting, CRC, Hamming code, transmission delay, propagation delay, and other networking numericals.",
        estimatedTime: 60,
        difficulty: "Advanced",
        order: 3,
        isPublished: true,
      },

      {
        name: "Computer Networks Interview Preparation",
        slug: "computer-networks-interview-preparation",
        description:
          "Revise important computer networking concepts, frequently asked interview questions, and problem-solving patterns.",
        estimatedTime: 60,
        difficulty: "Advanced",
        order: 4,
        isPublished: true,
      },
    ],
  },
];

export default cnTopics;
