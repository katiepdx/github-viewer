import React from 'react'
import { render } from '@testing-library/react'
import Results from './Results'

describe('<Results/>', () => {
  it('renders the search results', () => {
    const { asFragment } = render(<Results
      username="github"
      followers={0}
      following={0}
      link="https://github.com/github"
      repos={[
        {
          "id": 170876990,
          "node_id": "MDEwOlJlcG9zaXRvcnkxNzA4NzY5OTA=",
          "name": ".github",
          "full_name": "github/.github",
          "private": false,
          "owner": {
            "login": "github",
            "id": 9919,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjk5MTk=",
            "avatar_url": "https://avatars1.githubusercontent.com/u/9919?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/github",
            "html_url": "https://github.com/github",
            "followers_url": "https://api.github.com/users/github/followers",
            "following_url": "https://api.github.com/users/github/following{/other_user}",
            "gists_url": "https://api.github.com/users/github/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/github/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/github/subscriptions",
            "organizations_url": "https://api.github.com/users/github/orgs",
            "repos_url": "https://api.github.com/users/github/repos",
            "events_url": "https://api.github.com/users/github/events{/privacy}",
            "received_events_url": "https://api.github.com/users/github/received_events",
            "type": "Organization",
            "site_admin": false
          },
          "html_url": "https://github.com/github/.github",
          "description": "Community health files for the @GitHub organization",
          "fork": false,
          "url": "https://api.github.com/repos/github/.github",
          "forks_url": "https://api.github.com/repos/github/.github/forks",
          "keys_url": "https://api.github.com/repos/github/.github/keys{/key_id}",
          "collaborators_url": "https://api.github.com/repos/github/.github/collaborators{/collaborator}",
          "teams_url": "https://api.github.com/repos/github/.github/teams",
          "hooks_url": "https://api.github.com/repos/github/.github/hooks",
          "issue_events_url": "https://api.github.com/repos/github/.github/issues/events{/number}",
          "events_url": "https://api.github.com/repos/github/.github/events",
          "assignees_url": "https://api.github.com/repos/github/.github/assignees{/user}",
          "branches_url": "https://api.github.com/repos/github/.github/branches{/branch}",
          "tags_url": "https://api.github.com/repos/github/.github/tags",
          "blobs_url": "https://api.github.com/repos/github/.github/git/blobs{/sha}",
          "git_tags_url": "https://api.github.com/repos/github/.github/git/tags{/sha}",
          "git_refs_url": "https://api.github.com/repos/github/.github/git/refs{/sha}",
          "trees_url": "https://api.github.com/repos/github/.github/git/trees{/sha}",
          "statuses_url": "https://api.github.com/repos/github/.github/statuses/{sha}",
          "languages_url": "https://api.github.com/repos/github/.github/languages",
          "stargazers_url": "https://api.github.com/repos/github/.github/stargazers",
          "contributors_url": "https://api.github.com/repos/github/.github/contributors",
          "subscribers_url": "https://api.github.com/repos/github/.github/subscribers",
          "subscription_url": "https://api.github.com/repos/github/.github/subscription",
          "commits_url": "https://api.github.com/repos/github/.github/commits{/sha}",
          "git_commits_url": "https://api.github.com/repos/github/.github/git/commits{/sha}",
          "comments_url": "https://api.github.com/repos/github/.github/comments{/number}",
          "issue_comment_url": "https://api.github.com/repos/github/.github/issues/comments{/number}",
          "contents_url": "https://api.github.com/repos/github/.github/contents/{+path}",
          "compare_url": "https://api.github.com/repos/github/.github/compare/{base}...{head}",
          "merges_url": "https://api.github.com/repos/github/.github/merges",
          "archive_url": "https://api.github.com/repos/github/.github/{archive_format}{/ref}",
          "downloads_url": "https://api.github.com/repos/github/.github/downloads",
          "issues_url": "https://api.github.com/repos/github/.github/issues{/number}",
          "pulls_url": "https://api.github.com/repos/github/.github/pulls{/number}",
          "milestones_url": "https://api.github.com/repos/github/.github/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/github/.github/notifications{?since,all,participating}",
          "labels_url": "https://api.github.com/repos/github/.github/labels{/name}",
          "releases_url": "https://api.github.com/repos/github/.github/releases{/id}",
          "deployments_url": "https://api.github.com/repos/github/.github/deployments",
          "created_at": "2019-02-15T14:24:07Z",
          "updated_at": "2020-11-01T12:54:54Z",
          "pushed_at": "2020-11-01T00:14:27Z",
          "git_url": "git://github.com/github/.github.git",
          "ssh_url": "git@github.com:github/.github.git",
          "clone_url": "https://github.com/github/.github.git",
          "svn_url": "https://github.com/github/.github",
          "homepage": null,
          "size": 7,
          "stargazers_count": 57,
          "watchers_count": 57,
          "language": null,
          "has_issues": false,
          "has_projects": false,
          "has_downloads": true,
          "has_wiki": false,
          "has_pages": false,
          "forks_count": 200,
          "mirror_url": null,
          "archived": false,
          "disabled": false,
          "open_issues_count": 3,
          "license": null,
          "forks": 200,
          "open_issues": 3,
          "watchers": 57,
          "default_branch": "master"
        }
      ]}
    />)

    expect(asFragment()).toMatchSnapshot()
  })
})
