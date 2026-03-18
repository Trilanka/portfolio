"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaUser, FaEnvelope, FaBlog } from "react-icons/fa";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

function Section({
  title,
  children,
  noImage,
}: {
  title: string;
  children: React.ReactNode;
  noImage?: boolean;
}) {
  return (
    <motion.section
      className={noImage ? "mb-14" : "mb-16"}
      {...fadeIn}
    >
      <h2 className="text-xl font-semibold text-white border-b border-white/20 pb-2 mb-6">
        {title}
      </h2>
      <div className="text-neutral-300 leading-relaxed space-y-4">
        {children}
      </div>
    </motion.section>
  );
}

function ImageBlock({
  src,
  alt,
  caption,
  children,
}: {
  src: string;
  alt: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div className="mb-10" {...fadeIn}>
      <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden mb-4">
        <div className="relative w-full aspect-[4/3] max-h-[480px] min-h-[280px]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 896px"
            unoptimized
          />
        </div>
      </div>
      <p className="text-sm text-neutral-500 italic mb-4">{caption}</p>
      <div className="text-neutral-300 leading-relaxed space-y-3">{children}</div>
    </motion.div>
  );
}

export default function ExtendedProjectPage() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const img = (name: string) => `${base}/projects/embedded-sensor-hub/${name}`;

  return (
    <main className="relative bg-black min-h-screen overflow-hidden">
      <FloatingNav
        navItems={[
          { name: "Home", link: "/", icon: <FaHome /> },
          { name: "Blog", link: "/blog", icon: <FaBlog /> },
          { name: "About", link: "/about", icon: <FaUser /> },
          { name: "Contact", link: "/contact", icon: <FaEnvelope /> },
        ]}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-1/4 w-full h-96 bg-gradient-to-b from-white/5 via-white/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-l from-white/4 via-white/2 to-transparent rounded-full blur-3xl" />
      </div>

      <article className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        {/* Title (top of page) */}
        <motion.header className="mb-16" {...fadeIn}>
          <Link
            href="/#journey"
            className="text-sm text-violet-400 hover:text-violet-300 mb-6 inline-block"
          >
            ← Back to Journey
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Embedded Sensor Hub & ROS2-Ready Autonomous Robot Platform
          </h1>
          <p className="text-lg text-neutral-400">
            Reliable MCU–SBC Communication, Edge Data Processing, and Scalable
            Robotics Architecture
          </p>
        </motion.header>

        {/* Section 1 — Project Overview */}
        <Section title="1. Project Overview" noImage>
          <p>
            This project focuses on designing a reliable embedded sensing and
            communication platform that connects a microcontroller-based sensor
            module with a Linux Single-Board Computer (SBC) for autonomous
            robotic applications.
          </p>
          <p>
            The system collects environmental data, validates communication
            using CRC-based protocols, logs structured telemetry on the SBC,
            and ensures long-term deployment through automated Linux services.
            The platform was further extended into a ROS2-ready indoor delivery
            robot architecture integrating LiDAR navigation, IMU localization, and
            camera-based perception.
          </p>
        </Section>

        {/* Section 2 — Key Challenges */}
        <Section title="2. Key Challenges" noImage>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-white">Real-Time Embedded Communication:</strong>{" "}
              Designing a fault-tolerant UART protocol between MCU and SBC with
              error detection and recovery.
            </li>
            <li>
              <strong className="text-white">Linux Edge Reliability:</strong>{" "}
              Building a non-blocking data pipeline capable of running
              continuously without crashes or manual intervention.
            </li>
            <li>
              <strong className="text-white">Scalable Robotics Integration:</strong>{" "}
              Creating a modular system compatible with ROS2 navigation,
              localization, and autonomous control stacks.
            </li>
          </ul>
        </Section>

        {/* Section 3 — System Architecture + image_01 */}
        <motion.section className="mb-16" {...fadeIn}>
          <h2 className="text-xl font-semibold text-white border-b border-white/20 pb-2 mb-6">
            3. System Architecture
          </h2>
          <ImageBlock
            src={img("image_01.png")}
            alt="High-level system integration: MCU and SBC with environment and user inputs"
            caption="High-level architecture showing ESP32 sensor module communicating with the SBC for processing, logging, and robotic control."
          >
            <p>The system is divided into two cooperative layers:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="text-white">Embedded Layer (ESP32):</strong>{" "}
                Sensor acquisition, actuator control, EEPROM storage, and UART
                transmission.
              </li>
              <li>
                <strong className="text-white">Edge Layer (Linux SBC):</strong>{" "}
                Data validation, logging, monitoring, and robotics-level
                decision making.
              </li>
            </ul>
            <p className="pt-2">
              This separation mirrors real-world industrial embedded
              architectures.
            </p>
          </ImageBlock>
        </motion.section>

        {/* Section 4 — Embedded Firmware Design */}
        <Section title="4. Embedded Firmware Design" noImage>
          <p>
            The MCU firmware was developed as a deterministic control system
            responsible for reliable sensing, actuation, and communication with
            the edge processor.
          </p>
          <p>Key responsibilities of the firmware include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Periodic acquisition of environmental sensor data</li>
            <li>Interrupt-driven handling of user input and bump detection</li>
            <li>Local EEPROM storage to retain critical values across power cycles</li>
            <li>Structured UART packet transmission to the SBC</li>
            <li>Error detection and recovery handling for stable operation</li>
          </ul>
          <p className="pt-2">
            The firmware ensures predictable timing and robustness required for
            long-running embedded deployments.
          </p>
        </Section>

        {/* Section 5 — Edge Data Processing + image_02 */}
        <motion.section className="mb-16" {...fadeIn}>
          <h2 className="text-xl font-semibold text-white border-b border-white/20 pb-2 mb-6">
            5. Edge Data Processing on Linux SBC
          </h2>
          <ImageBlock
            src={img("image_02.png")}
            alt="SBC communication: MCU data publisher, CRC validation, ROS2 topic"
            caption="C++ application performing packet validation, CRC verification, and structured telemetry logging."
          >
            <p>A custom C++ application runs on the SBC to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Receive UART packets using non-blocking serial communication</li>
              <li>Validate packet integrity using CRC-8</li>
              <li>Parse structured sensor data fields</li>
              <li>Log timestamped telemetry for diagnostics</li>
              <li>Automatically recover from disconnections</li>
            </ul>
            <p className="pt-2">
              The application is designed to run continuously in unattended
              environments.
            </p>
          </ImageBlock>
        </motion.section>

        {/* Section 6 — Automation & Reliability */}
        <Section title="6. Automation & Reliability Engineering" noImage>
          <p>
            The system is deployed as a Linux systemd service, enabling:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Automatic startup on boot</li>
            <li>Restart on failure</li>
            <li>Log rotation to prevent storage overflow</li>
            <li>Remote monitoring through Linux journal logs</li>
            <li>Minimal human maintenance</li>
          </ul>
          <p className="pt-2">
            This approach transforms the prototype into a deployable edge
            system.
          </p>
        </Section>

        {/* Section 7 — Robotics Extension + image_03 */}
        <motion.section className="mb-16" {...fadeIn}>
          <h2 className="text-xl font-semibold text-white border-b border-white/20 pb-2 mb-6">
            7. Robotics Extension
          </h2>
          <ImageBlock
            src={img("image_03.png")}
            alt="Robot physical layout: Orange Pi, ESP32, power, navigation, motor control"
            caption="Conceptual indoor delivery robot integrating LiDAR, IMU, camera, and differential drive system."
          >
            <p>
              The validated sensing platform was integrated into a mobile robot
              concept including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>LiDAR for SLAM-based navigation</li>
              <li>IMU for motion fusion and odometry correction</li>
              <li>USB camera for QR-based localization</li>
              <li>Differential drive motors with encoder feedback</li>
              <li>MCU handling low-level control while SBC runs autonomy stack</li>
            </ul>
          </ImageBlock>
        </motion.section>

        {/* Section 8 — ROS2 Architecture + image_04 */}
        <motion.section className="mb-16" {...fadeIn}>
          <h2 className="text-xl font-semibold text-white border-b border-white/20 pb-2 mb-6">
            8. ROS2 Architecture
          </h2>
          <ImageBlock
            src={img("image_04.png")}
            alt="ROS2 node architecture: sensor fusion, MCU interface, navigation"
            caption="ROS2-ready node architecture for sensor fusion, MCU interfacing, and autonomous navigation."
          >
            <p>The system is designed for seamless ROS2 integration:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>MCU publishes structured sensor data to ROS topics</li>
              <li>Localization stack fuses LiDAR + IMU + odometry</li>
              <li>Modular nodes allow future expansion into full autonomy</li>
              <li>Architecture supports SLAM, mapping, and remote diagnostics</li>
            </ul>
          </ImageBlock>
        </motion.section>

        {/* Section 9 — Testing & Verification */}
        <Section title="9. Testing & Verification" noImage>
          <p>A structured validation strategy was implemented:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Sensor calibration in static and dynamic environments</li>
            <li>EEPROM persistence verification across power cycles</li>
            <li>UART packet validation using simulated error injection</li>
            <li>Stress testing for communication reliability</li>
            <li>Long-duration logging for behavioral analysis</li>
          </ul>
        </Section>

        {/* Section 10 — Technologies & Skills */}
        <Section title="10. Technologies & Skills" noImage>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-medium mb-2">Embedded Systems</h3>
              <p className="text-sm">ESP32 • UART • Interrupt Systems • EEPROM</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Edge Computing</h3>
              <p className="text-sm">C++ • Linux • systemd • Serial Communication</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Reliability Engineering</h3>
              <p className="text-sm">CRC Validation • Fault Recovery • Logging Pipelines</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Robotics & Integration</h3>
              <p className="text-sm">ROS2 Concepts • LiDAR • IMU Fusion • Differential Drive</p>
            </div>
          </div>
        </Section>

        {/* Section 11 — Key Outcomes */}
        <Section title="11. Key Outcomes" noImage>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✔</span>
              <span>Built a complete MCU-to-Linux embedded data pipeline</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✔</span>
              <span>Achieved industrial-style communication reliability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✔</span>
              <span>Designed a self-recovering edge application</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✔</span>
              <span>Developed a ROS2-compatible robotics architecture</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✔</span>
              <span>Demonstrated full-stack embedded + robotics integration</span>
            </li>
          </ul>
        </Section>

        {/* Complete project document */}
        <motion.div
          className="mt-12 p-6 rounded-xl border border-white/10 bg-white/5"
          {...fadeIn}
        >
          <p className="text-white font-medium mb-2">
            Refer to the complete project document
          </p>
          <p className="text-neutral-400 text-sm mb-4">
            Full report with detailed design, implementation, and verification.
          </p>
          <a
            href={`${base || ""}/projects/embedded-sensor-hub/document_01.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
          >
            Open full project document (PDF)
          </a>
        </motion.div>

        <motion.div className="pt-8 border-t border-white/10 mt-8" {...fadeIn}>
          <Link
            href="/#journey"
            className="text-violet-400 hover:text-violet-300"
          >
            ← Back to Journey
          </Link>
        </motion.div>
      </article>
    </main>
  );
}
