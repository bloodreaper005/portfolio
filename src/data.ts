// ─────────────────────────────────────────────────────────────
// SHARED DATA
// ─────────────────────────────────────────────────────────────

export const experiences = [
  {
    title: "Racing Upshots",
    role: "Embedded Systems Engineer",
    year: "2024",
    summary:
      "Developed embedded systems for medical devices with real-time cloud data transfer over Bluetooth using ESP32 microcontrollers and Embedded C. Ensured compliance with healthcare data standards.",
    tags: ["Embedded C", "ESP32", "Bluetooth", "IoT"],
  },
  {
    title: "Air India",
    role: "Aviation Engineering Intern",
    year: "2023",
    summary:
      "Specialized in GE90, GEnx, and CFM-56 aircraft engines. Reduced turnaround time by 15% through early fault detection. Ensured 100% DGCA compliance.",
    tags: ["Aircraft Engines", "NDT", "Maintenance", "DGCA"],
  },
  {
    title: "Team Vaayushastra",
    role: "Technical Lead",
    year: "2021-24",
    summary:
      "Led 30 engineers in RC aircraft design and fabrication. Achieved 5th place globally at SAE AeroDesign International 2022. Implemented Just-in-Time inventory management.",
    tags: ["Leadership", "SAE AeroDesign", "SolidWorks", "Ansys"],
  },
];

export const projects = [
  {
    title: "VTOL Tilt Rotor Tricopter",
    year: "2023-24",
    summary:
      "Designed and manufactured a VTOL Tilt Rotor Tricopter using carbon fiber with optimized rotor geometry. Led aerodynamic design, conducted wind tunnel tests, and refined PID control algorithms.",
    tags: ["VTOL", "Carbon Fiber", "PID Control", "Aerodynamics"],
    accent: "#3b82f6",
  },
  {
    title: "Powered Glider with Autonomous Control",
    year: "2022-24",
    summary:
      "Designed a 16-oz powered glider using CFD simulations with Ansys Fluent and XFLR5. Implemented YOLO-v4 vision processing for autonomous landing achieving 90% accuracy.",
    tags: ["CFD", "YOLO-v4", "Raspberry Pi", "Autonomous"],
    accent: "#06b6d4",
  },
  {
    title: "Phishing Detection via Federated Learning",
    year: "2023-24",
    summary:
      "Developed a federated learning model for detecting phishing attacks with over 96% accuracy. Reduced training latency by 25% through adaptive client sampling while preserving user privacy.",
    tags: ["TensorFlow", "Federated Learning", "Python", "Security"],
    accent: "#8b5cf6",
  },
  {
    title: "Fingerprint Image Classification",
    year: "2022-23",
    summary:
      "Built CNN-based classifier for fingerprint patterns using federated learning. Achieved 98% accuracy with Adam optimizer and data augmentation.",
    tags: ["CNN", "Deep Learning", "OpenCV", "Federated"],
    accent: "#f59e0b",
  },
];

export const stats = [
  { value: "4+", label: "Years Engineering", suffix: "" },
  { value: "5", label: "Global Rank SAE", suffix: "th" },
  { value: "12+", label: "Projects Shipped", suffix: "" },
  { value: "30+", label: "Engineers Led", suffix: "" },
];

export const skillCategories = [
  {
    title: "Design & Simulation",
    skills: ["SolidWorks", "CATIA", "Ansys", "XFLR5", "NX Nastran", "MATLAB"],
    icon: "◈",
  },
  {
    title: "Programming",
    skills: ["Python", "Embedded C", "ROS", "R", "TensorFlow", "OpenCV"],
    icon: "⟨/⟩",
  },
  {
    title: "Hardware",
    skills: ["ESP32", "Raspberry Pi", "Arduino", "3D Printing"],
    icon: "⚡",
  },
  {
    title: "Domains",
    skills: ["Aerodynamics", "CFD", "FEA", "SLAM", "Robotics", "HVAC"],
    icon: "∞",
  },
];

export const education = [
  {
    school: "UC San Diego",
    degree: "M.S. Mechanical Engineering",
    period: "2024 - 2026",
    location: "La Jolla, CA",
  },
  {
    school: "University of Mumbai",
    degree: "B.E. Mechanical Engineering, Honors in Robotics",
    period: "2020 - 2024",
    location: "Mumbai, India",
  },
];
