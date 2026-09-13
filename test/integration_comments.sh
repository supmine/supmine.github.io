#!/usr/bin/env bash
set -euo pipefail

tmp_dir="$(mktemp -d)"
tmp_override="${tmp_dir}/comments-test-override.yml"
tmp_site="${tmp_dir}/site"
tmp_posts_dir="_posts"
giscus_post="${tmp_posts_dir}/2022-01-01-giscus-comments.md"
disqus_post="${tmp_posts_dir}/2015-01-01-disqus-comments.md"
created_posts_dir=0

cleanup() {
  rm -f "${giscus_post}" "${disqus_post}"
  if [ "${created_posts_dir}" -eq 1 ]; then
    rmdir "${tmp_posts_dir}" 2>/dev/null || true
  fi
  rm -rf "${tmp_dir}"
}
trap cleanup EXIT

if [ ! -d "${tmp_posts_dir}" ]; then
  mkdir -p "${tmp_posts_dir}"
  created_posts_dir=1
fi

cat >"${giscus_post}" <<'MARKDOWN'
---
layout: post
title: "Giscus Comments"
date: 2022-01-01 00:00:00
giscus_comments: true
---
Test post for giscus integration checks.
MARKDOWN

cat >"${disqus_post}" <<'MARKDOWN'
---
layout: post
title: "Disqus Comments"
date: 2015-01-01 00:00:00
disqus_comments: true
---
Test post for disqus integration checks.
MARKDOWN

cat >"${tmp_override}" <<'YAML'
giscus:
  repo: alshedivat/al-folio
  repo_id: R_kgDOExample
  category: Comments
  category_id: DIC_kwDOExample
external_sources: []
YAML

bundle exec jekyll build --config "_config.yml,${tmp_override}" -d "${tmp_site}" >/dev/null

giscus_page="${tmp_site}/blog/2022/giscus-comments/index.html"
disqus_page="${tmp_site}/blog/2015/disqus-comments/index.html"

grep -q 'https://giscus.app/client.js' "${giscus_page}"
if grep -q 'giscus comments misconfigured' "${giscus_page}"; then
  echo "unexpected giscus misconfiguration warning in ${giscus_page}" >&2
  exit 1
fi

grep -q 'id="disqus_thread"' "${disqus_page}"
grep -q '.disqus.com/embed.js' "${disqus_page}"

echo "comments integration checks passed"
