module.exports = {
    tagFormat: "v${version}",
    branches: ["master", "main"],
    plugins: [
        [
            "@semantic-release/commit-analyzer", 
            {
                "preset": "conventionalcommits",
            }
        ],
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        [
            "@semantic-release/git", 
            {
                "assets": "CHANGELOG.md",
            }
        ],
        [
            "@semantic-release/exec", 
            {
                "publishCmd": "git tag -a -f v${nextRelease.version} v${nextRelease.version} -F CHANGELOG.md && \
                git push --force origin v${nextRelease.version} && \
                ${process.env.PUBLISH_COMMAND}",
            }
        ],
        [
            "@semantic-release/github", 
            {
                "assets": process.env.ASSETS_PATH,
            }
        ],
    ]
}