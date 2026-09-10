# Reading room editorial policy

The site owner prefers actual publications from established industrial AI and digitalization organizations over invented article topics. Add verified publisher sources to `data/publications.json`. Keep the existing GitHub / Vercel deployment workflow.

- Read the primary publisher page before adding an entry. Preserve the original publication title, publisher, and publication date. Set `verifiedOn` to the date it was actually checked; never use that as the publication date.
- Write a concise original summary and a distinct practical editorial takeaway. Link to the original; do not republish full articles, PDFs, logos, or images without appropriate rights.
- State when the summary is based on a report overview rather than the full report. Identify vendor-sponsored research, customer-reported outcomes, and forward-looking announcements. Do not turn reported or projected results into promises.
- Use a unique stable id and canonical HTTPS publisher URL. Check existing entries for duplicates before adding another. Keep related site links valid.
- Dates and sources need verification on each addition. Do not auto-update verification dates or label all material as new.
- Run `node --test tests/publications.test.mjs`, the existing preflight script, and a production build before publishing. No recurring schedule is configured by this feature.
