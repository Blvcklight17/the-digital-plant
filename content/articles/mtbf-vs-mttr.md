---
title: "MTBF vs MTTR: What Reliability Engineers Need to Know"
description: "A practical explanation of MTBF and MTTR, including formulas, examples, and how to use them in maintenance analysis."
date: "2026-06-25"
category: "Reliability"
readingTime: "8 min read"
---

## Executive summary

MTBF and MTTR are two of the most important reliability metrics.

MTBF measures how long equipment runs between failures.

MTTR measures how long it takes to restore equipment after failure.

Together, they help maintenance and reliability teams understand performance, prioritize problems, and improve availability.

## MTBF formula

MTBF = Total operating time / Number of failures

Example:

If a machine runs for 720 hours and fails 3 times:

MTBF = 720 / 3 = 240 hours

## MTTR formula

MTTR = Total repair time / Number of repairs

Example:

If total repair time is 12 hours across 3 failures:

MTTR = 12 / 3 = 4 hours

## Why both matter

High MTBF means failures are less frequent.

Low MTTR means recovery is faster.

A plant should improve both.

## Practical example

Two machines may have the same downtime but very different failure behavior.

Machine A fails rarely but takes a long time to repair.

Machine B fails often but is repaired quickly.

The improvement strategy is different for each machine.

## Common mistakes

- Counting planned maintenance as failure time
- Mixing operating hours and calendar hours
- Ignoring repeated small stoppages
- Using MTBF without understanding failure modes
- Comparing machines with different operating contexts

## Summary

MTBF helps answer: how often does it fail?

MTTR helps answer: how quickly do we recover?

Both are essential for reliability improvement.
