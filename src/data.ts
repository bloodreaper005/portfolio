// ─────────────────────────────────────────────────────────────
// SHARED DATA
// ─────────────────────────────────────────────────────────────

export const experiences = [
  {
    title: "ARMOR Lab, UC San Diego",
    role: "Graduate Student Researcher",
    year: "Feb 2026 – Present",
    summary:
      "Engineered ESP32 firmware integrating an IMU and ADC, hitting 100 Hz sampling via hardware interrupts. Designed a custom BLE telemetry protocol with 16-byte payloads to reliably stream multi-channel data. Investigating CNT-based piezoresistive sensing skins integrated into composite UAV wing structures for structural health monitoring of flight-critical airframes.",
    tags: ["ESP32", "BLE", "Firmware", "IMU", "ADC", "CNT Sensors", "Structural Health Monitoring"],
  },
  {
    title: "Racing Upshots",
    role: "Embedded Engineering Intern",
    year: "Jun – Sept 2024",
    summary:
      "Developed an embedded medical system using C and ESP32 microcontrollers to transfer real-time data over Bluetooth. Implemented error handling and connection recovery over BLE, eliminating dropped packets during medical data transfers. Designed an encryption and transmission protocol compliant with HIPAA requirements for real-time patient monitoring.",
    tags: ["Embedded C", "ESP32", "BLE", "HIPAA", "Medical Devices"],
  },
  {
    title: "Air India",
    role: "Aviation Engineering Intern",
    year: "Jun – Aug 2023",
    summary:
      "Reduced engine turnaround time by 15% on GE90 and GEnx engines through root cause analysis of recurring faults and proactive overhaul, working to FAA Part 33 and DGCA airworthiness standards. Performed ultrasonic and dye-penetrant NDT on pressure vessels, landing gear, and composite airframe panels, dispositioning non-conformances against airworthiness standards.",
    tags: ["Aircraft Engines", "NDT", "FAA Part 33", "DGCA", "Composites"],
  },
  {
    title: "Team Vaayushastra",
    role: "Materials & Inventory Head — SAE AeroDesign International",
    year: "Jun 2022 – May 2023",
    summary:
      "Led a 30-member team through design-build-fly cycles of three vehicles (PA, PADA, GTV), managing rapid prototyping, CNC vendors, and Just-in-Time inventory to rank 5th globally at SAE 2022. Hand-laid prepreg carbon fiber composite components and fabricated 3D-printed assembly fixtures, applying DFM principles and GD&T-compliant 2D drawings while executing SolidWorks CAD and ANSYS FEA validation.",
    tags: ["Leadership", "SAE AeroDesign", "Composites", "SolidWorks", "ANSYS FEA", "GD&T"],
  },
  {
    title: "CRCE Formula Racing",
    role: "Brakes & Suspension Head — Formula Bharat",
    year: "Jun 2021 – May 2022",
    summary:
      "Engineered high-performance hydraulic braking systems from first principles, performing rigorous component sizing and FEA to ensure structural integrity and thermal stability under peak deceleration and track loading. Optimized vehicle dynamics through track testing, tuning brake bias and pedal ratios to exceed technical scrutineering standards and ensure consistent performance across high-speed dynamic events.",
    tags: ["Hydraulics", "FEA", "Vehicle Dynamics", "Formula SAE", "Brake Design"],
  },
];

export const projects = [
  {
    title: "Robotic Cable Insertion",
    year: "Feb 2026 – Present",
    summary:
      "Developed a ROS2 autonomous insertion framework on a UR5e, fusing real-time force-torque feedback with vision-based optimization to resolve sub-2mm positional uncertainty during contact-rich assembly tasks. Built a Python perception-to-action pipeline with Docker-based deployment, validated in Gazebo simulation before hardware execution across varying cable geometries.",
    tags: ["ROS2", "UR5e", "Force-Torque", "Vision", "Gazebo", "Docker"],
    accent: "#228B22",
  },
  {
    title: "Tilt-Rotor VTOL QuadPlane",
    year: "Jan – Mar 2026",
    summary:
      "Spearheaded ground-up CAD design and structural optimization of a bespoke VTOL from initial BOM through aerodynamic analysis and rapid prototyping. Tuned ArduPlane control loops for hover stability and tilt-rotor transition, executing ground tests and flight envelope expansion while reviewing telemetry logs to validate VTOL-to-forward-flight handoff.",
    tags: ["VTOL", "ArduPlane", "Pixhawk", "CAD", "Flight Testing", "Aerodynamics"],
    accent: "#164A41",
  },
  {
    title: "Multi-Mission Pick-and-Place Robot",
    year: "Jan – May 2024",
    summary:
      "Designed a custom stainless steel chassis and integrated a 6-DOF UR5-style arm via Arduino Mega for inverse kinematics and 1 kg pick-and-place tasks. Maintained full BOM and GD&T-compliant drawings throughout the design and fabrication cycle.",
    tags: ["6-DOF Arm", "Inverse Kinematics", "GD&T", "Arduino", "Mechanical Design"],
    accent: "#9A7D3A",
  },
  {
    title: "Powered Glider with Autonomous Control",
    year: "2022 – 2024",
    summary:
      "Designed a 16-oz powered glider using CFD simulations with ANSYS Fluent and XFLR5. Implemented YOLO-v4 vision processing on a Raspberry Pi for autonomous landing, achieving 90% landing accuracy in flight tests.",
    tags: ["CFD", "ANSYS Fluent", "XFLR5", "YOLO-v4", "Raspberry Pi", "Autonomous Flight"],
    accent: "#5B8C5A",
  },
  {
    title: "Phishing Detection via Federated Learning",
    year: "2023 – 2024",
    summary:
      "Developed a federated learning model for detecting phishing attacks with over 96% accuracy. Reduced training latency by 25% through adaptive client sampling while preserving user privacy across distributed clients.",
    tags: ["TensorFlow", "Federated Learning", "Python", "Security", "Privacy"],
    accent: "#7A5C3A",
  },
  {
    title: "Fingerprint Image Classification",
    year: "2022 – 2023",
    summary:
      "Built a CNN-based classifier for fingerprint patterns using federated learning. Achieved 98% accuracy with the Adam optimizer and data augmentation across distributed training nodes.",
    tags: ["CNN", "Deep Learning", "OpenCV", "Federated Learning", "Image Classification"],
    accent: "#D1B284",
  },
];

export const stats = [
  { value: "5+", label: "Years Engineering", suffix: "" },
  { value: "5", label: "Global Rank SAE", suffix: "th" },
  { value: "15+", label: "Projects Shipped", suffix: "" },
  { value: "30+", label: "Engineers Led", suffix: "" },
];

export const skillCategories = [
  {
    title: "Design & Simulation",
    skills: ["SolidWorks", "CATIA", "ANSYS", "XFLR5", "NX Nastran", "MATLAB"],
    icon: "◈",
  },
  {
    title: "Programming",
    skills: ["Python", "Embedded C", "ROS2", "TensorFlow", "OpenCV", "Docker"],
    icon: "⟨/⟩",
  },
  {
    title: "Hardware",
    skills: ["ESP32", "Raspberry Pi", "Arduino", "Pixhawk", "UR5e", "3D Printing"],
    icon: "⚡",
  },
  {
    title: "Domains",
    skills: ["Aerodynamics", "CFD", "FEA", "Robotics", "Structural Health Monitoring", "HVAC"],
    icon: "∞",
  },
];

export const education = [
  {
    school: "UC San Diego",
    degree: "M.S. Mechanical Engineering",
    period: "2024 – 2026",
    location: "La Jolla, CA",
  },
  {
    school: "University of Mumbai",
    degree: "B.E. Mechanical Engineering, Honors in Robotics",
    period: "2020 – 2024",
    location: "Mumbai, India",
  },
];
