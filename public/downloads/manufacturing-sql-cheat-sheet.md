# Manufacturing SQL Cheat Sheet

## Downtime by equipment

```sql
SELECT
  equipment,
  SUM(downtime_minutes) AS total_downtime_minutes,
  COUNT(*) AS stoppage_count
FROM stoppage_events
WHERE event_start >= '2026-01-01'
GROUP BY equipment
ORDER BY total_downtime_minutes DESC;
```

## MTBF starter query

```sql
SELECT
  equipment,
  SUM(operating_hours) / NULLIF(COUNT(failure_id), 0) AS mtbf_hours
FROM reliability_events
GROUP BY equipment;
```

## Quality average by day

```sql
SELECT
  CAST(sample_time AS DATE) AS sample_date,
  AVG(blaine) AS avg_blaine,
  AVG(residue) AS avg_residue
FROM lab_samples
GROUP BY CAST(sample_time AS DATE)
ORDER BY sample_date;
```
