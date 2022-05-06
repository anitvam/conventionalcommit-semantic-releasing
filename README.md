# Conventional Commit Semantic Releasing
GitHub action for Semantic Versioning and Releasing following Conventional Commit standard.

The action automatically computes the new version tag from commits and performs the release on the repository

# Usage Example
This action requires a Personal Access Token with permissions to push into the repository. You can pass it to the action as the follow:

```yaml
      - name: semver
        uses: anitvam/conventionalcommit-semantic-releasing@v0
        with:
          token: ${{ secrets.PERSONAL_TOKEN }}
```



