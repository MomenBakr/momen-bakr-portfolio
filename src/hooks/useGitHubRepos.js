import { useState, useEffect } from 'react'
import { FALLBACK_REPOS, LANGUAGE_COLORS } from '../data/repos'

const KNOWN_DESCRIPTIONS = {
  flutter_gemma:
    "On-device Large Language Models (LLMs) in Flutter using Google's Gemma model for offline AI inference.",
  native_picture_in_picture:
    'Flutter plugin integrating native Android/iOS Picture-in-Picture video playback mode via platform channels.',
}

export function useGitHubRepos() {
  const [repos, setRepos] = useState(FALLBACK_REPOS)
  const [isLiveSync, setIsLiveSync] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/MomenBakr/repos?sort=updated&per_page=12')
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API response not ok')
        return res.json()
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const parsed = data
            .filter((r) => r.name !== 'MomenBakr' && !r.fork)
            .map((r) => ({
              id: r.id,
              name: r.name,
              desc:
                r.description ||
                KNOWN_DESCRIPTIONS[r.name] ||
                "Public open-source repository by Mo'men Bakr on GitHub.",
              language: r.language || 'Dart',
              langColor: LANGUAGE_COLORS[r.language] || '#00D2FF',
              stars: r.stargazers_count,
              forks: r.forks_count,
              url: r.html_url,
            }))

          if (parsed.length > 0) {
            setRepos(parsed)
            setIsLiveSync(true)
          }
        }
      })
      .catch((err) => {
        console.info('Live GitHub fetch fallback to cache:', err.message)
      })
  }, [])

  return { repos, isLiveSync }
}
