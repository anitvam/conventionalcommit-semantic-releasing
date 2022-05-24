# Conventional Commit Semantic Releasing
GitHub action for Semantic Versioning and Releasing following Conventional Commit standard.

The action automatically computes the new version tag from commits and performs the release on the repository

# Usage Example
This action requires a Personal Access Token with permissions to push into the repository. You can pass it to the action as the follow:

```yaml
      - name: semver
        uses: anitvam/conventionalcommit-semantic-releasing
        with:
          token: ${{ secrets.PERSONAL_TOKEN }}
```

# Assets 
The action automatically include inside the new release's assets all the files that are present in a folder named `/assets`

# Release Branch
The action performs the release on the repository's `default` branch.

# Version number
The action publish releases under the name `v<MAJOR>.<MINOR>.<PATCH>`. 

Versions are computed by default from the action when one of the conventional-commit keyword is found inside 
the commit description.

In particular:
 - A commit with `feat:` will trigger the next release with the `MINOR` version number increased.
 - A commit with `fix:` will trigger the next release with the `PATCH` version number increased.
 - A commit with `feat!:` (or with `BREAKING CHANGE!` in the commit body) will trigger the next release with the `MAJOR` version number increased.

With the first `feat` pushed inside the repository, the action will generate the version `v1.0.0`. 

If you want to follow the [ZeroVer](https://0ver.org/) standard, you can publish manually the tag `v0.1.0` and with 
the first pushed `feat` the release will be automatically attached to this tag.

You can publish the tag using:
```bash
  $ git tag -a v0.1.0 -m "Version v0.1.0"
  $ git push origin v0.1.0
```

