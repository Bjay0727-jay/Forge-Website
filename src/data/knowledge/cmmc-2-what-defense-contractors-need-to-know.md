---
title: "CMMC 2.0: What Defense Contractors Need to Know"
description: "An in-depth look at the CMMC 2.0 framework, compliance requirements, assessment processes, and practical preparation steps for defense contractors."
author: "Forge Cyber Defense"
date: "2026-01-08"
category: "CMMC"
tags: ["CMMC", "Defense", "CUI", "NIST 800-171"]
featured: true
readTime: "6 min read"
---

## Executive Summary

The Cybersecurity Maturity Model Certification (CMMC) 2.0 has transitioned from policy guidance into binding contractual obligation for defense contractors and subcontractors. With the final DFARS rule taking effect on November 10, 2025, CMMC compliance is now a precondition for eligibility to bid on and win Department of Defense contracts involving Federal Contract Information (FCI) or Controlled Unclassified Information (CUI).

Whether your organization handles only basic contract information or processes highly sensitive defense data, understanding CMMC 2.0 is essential to maintaining your position in the defense supply chain.

## Why CMMC Exists: The Threat to the Defense Industrial Base

The Defense Industrial Base (DIB) comprises over 300,000 companies that collectively form the backbone of America's defense manufacturing, technology, and services ecosystem. For years, the Department of Defense relied on a self-attestation model under DFARS 252.204-7012, which required contractors to implement the 110 security requirements outlined in NIST SP 800-171 but provided no mechanism for independent verification.

Assessments by the DoD Inspector General and GAO found that many contractors' self-assessments significantly overstated their actual compliance posture. CMMC 2.0 addresses this gap by introducing a tiered verification system that replaces self-attestation with structured assessments — including, for the most sensitive information, mandatory third-party and government-led evaluations.

## The Three-Level Framework

CMMC 2.0 streamlined the original five-level model into three distinct certification levels, each aligned with specific security standards and verification methods.

### Level 1: Foundational

Level 1 applies to contractors that process, store, or transmit only Federal Contract Information (FCI). FCI is less sensitive than CUI and does not include information available to the public or simple transactional information.

- **Requirements**: 15 basic cybersecurity practices covering fundamental areas such as limiting access to authorized users, sanitizing media before disposal, and identifying and authenticating users
- **Assessment**: Annual self-assessment with senior official affirmation
- **Timeline**: Required in applicable contracts now

### Level 2: Advanced

Level 2 is the most significant tier for the majority of defense contractors. It applies to organizations that process, store, or transmit Controlled Unclassified Information (CUI) — a category encompassing technical data, engineering drawings, personally identifiable information, export-controlled information, and many other sensitive data types.

- **Requirements**: 110 security requirements from NIST SP 800-171 Rev 2 across 14 control families
- **Assessment**: Third-party assessment by C3PAO (for prioritized acquisitions) or self-assessment
- **Timeline**: Being phased into contracts starting 2025

#### The 14 Control Families of NIST SP 800-171

- Access Control (AC): 22 requirements
- Awareness and Training (AT): 3 requirements
- Audit and Accountability (AU): 9 requirements
- Configuration Management (CM): 9 requirements
- Identification and Authentication (IA): 11 requirements
- Incident Response (IR): 3 requirements
- Maintenance (MA): 6 requirements
- Media Protection (MP): 9 requirements
- Personnel Security (PS): 2 requirements
- Physical Protection (PE): 6 requirements
- Risk Assessment (RA): 3 requirements
- Security Assessment (CA): 4 requirements
- System and Communications Protection (SC): 16 requirements
- System and Information Integrity (SI): 7 requirements

### Level 3: Expert

Level 3 is reserved for contractors involved in the most sensitive defense programs, where threats from advanced persistent threat (APT) actors — nation-state adversaries — represent the primary concern. This level requires all 110 controls from NIST SP 800-171 plus an additional subset of enhanced security requirements from NIST SP 800-172.

Level 3 requirements include advanced capabilities such as dual authorization for critical operations, system componentization to limit attack surfaces, threat hunting programs, and comprehensive supply chain risk management.

## Plans of Action and Milestones (POA&Ms)

CMMC 2.0 introduces flexibility through POA&Ms, which allow contractors to receive a Conditional CMMC Status while they remediate identified security gaps. This status is valid for **180 days**, during which all outstanding deficiencies must be fully addressed and verified.

### POA&M Limitations

- Only available for Level 2 and Level 3 assessments, not Level 1
- Certain high-priority requirements cannot be deferred via POA&M
- Organizations must achieve a minimum score threshold to qualify for Conditional status
- Failure to remediate within 180 days results in loss of CMMC status and contract eligibility

Forge Cyber Defense advises clients to approach POA&Ms as a contingency mechanism rather than a compliance strategy.

## False Claims Act Liability

One of the most significant implications of CMMC 2.0 is the intersection with the federal False Claims Act. Contractors must submit an affirmation of continuous compliance in the Supplier Performance Risk System (SPRS) by a senior official. Submitting a false or inaccurate affirmation exposes the organization to significant legal liability.

The Department of Justice has explicitly signaled increased enforcement of cybersecurity-related false claims. Organizations must ensure that their SPRS submissions accurately reflect their actual security implementation.

## Practical Steps for Achieving Compliance

### Step 1: Scope Your CUI Environment

Clearly define the boundaries of your CUI environment. Identify exactly which systems process, store, or transmit CUI, and consider architectural changes that could reduce the scope of your assessment. Proper network segmentation and data flow restriction can significantly reduce compliance costs.

### Step 2: Conduct a Gap Assessment

Perform a thorough gap assessment against NIST SP 800-171 requirements. Document every control's implementation status honestly and identify both technical gaps (missing capabilities) and process gaps (missing policies, procedures, or documentation).

### Step 3: Develop Your System Security Plan

The System Security Plan (SSP) is the primary documentation artifact for CMMC Level 2 assessment. It must accurately describe your security environment, control implementations, and the rationale for any alternative implementations.

### Step 4: Remediate and Validate

Address identified gaps systematically, prioritizing high-value controls and those that underpin multiple requirements. As you implement controls, collect evidence that demonstrates implementation — configuration screenshots, policy documents, test results.

### Step 5: Register and Prepare for Assessment

Register your organization in SPRS and assign CMMC Unique Identifiers (UIDs) for each information system. Select a C3PAO early, as assessment capacity is limited and demand is increasing.

### Step 6: Maintain Continuous Compliance

CMMC is not a point-in-time certification. Organizations must submit annual affirmations of continuous compliance and maintain their security posture throughout the contract period. Establish ongoing monitoring processes, regular internal assessments, and formal change management.

## The Supply Chain Dimension

CMMC requirements flow down to subcontractors based on the type of information they handle. Prime contractors are responsible for verifying subcontractor compliance before award and must include appropriate CMMC requirements in subcontract agreements.

Organizations should begin assessing their subcontractor ecosystem now. Identify which subcontractors handle FCI or CUI, determine their likely CMMC level requirement, and engage in early conversations about their compliance readiness.

## Conclusion

CMMC 2.0 represents the most significant shift in defense contractor cybersecurity requirements in over a decade. The transition from self-attestation to verified compliance demands genuine improvements in security posture, documented processes, and organizational commitment to protecting defense information.

The phased implementation provides a window for preparation, but that window is narrowing. Organizations that begin now will have time to conduct thorough gap assessments, implement sustainable remediation programs, and build the compliance infrastructure needed for long-term success.

Forge Cyber Defense brings veteran-led expertise and deep understanding of the defense compliance landscape to every CMMC engagement. From initial scoping through C3PAO assessment preparation and ongoing compliance management, our team ensures that your organization is positioned to meet CMMC requirements with confidence.
