# rollup_lib_templete
rollup typescript

git提交可参考以下规范：
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动

npm outdated # 查看当前项目中可升级的模块
npm audit [--json]  # 安全漏洞检查；加上--json，以 JSON 格式生成漏洞报告
npm audit fix # 修复存在安全漏洞的依赖包（自动更新到兼容的安全版本）
npm audit fix --force # 将依赖包版本号升级到最新的大版本，而不是兼容的安全版本；尽量避免使用--force


version:
版本格式: [主版本号major.次版本号minor.修订号patch]
先行版本: 内部版本alpha、公测版本beta、Release candiate正式版本的候选版本rc，例如1.0.0-alpha、1.0.0-beta.1

使用npm version进行版本号管理：
npm version 1.0.1  # 显示设置版本号为 1.0.1
npm version major  # major + 1，其余版本号归 0
npm version minor  # minor + 1，patch 归 0
npm version patch  # patch + 1

# 预发布版本
# 当前版本号为 1.2.3
npm version prepatch  # 版本号变为 1.2.4-0，也就是 1.2.4 版本的第一个预发布版本
npm version preminor  # 版本号变为 1.3.0-0，也就是 1.3.0 版本的第一个预发布版本
npm version premajor  # 版本号变为 2.0.0-0，也就是 2.0.0 版本的第一个预发布版本
npm version prerelease  # 版本号变为 2.0.0-1，也就是使预发布版本号加一

# 在git环境下npm version会默认执行git add->git commit->git tag
npm version minor -m "feat(version): upgrade to %s"  # 可自定义commit message；%s 会自动替换为新版本号

# 模块 tag 管理
# 当前版本为1.0.1
npm version prerelease  # 1.0.2-0
npm publish --tag beta # 发布包beta版本，打上beta tag
npm dist-tag ls xxx  # 查看某个包的tag；beta: 1.0.2-0
npm install xxx@beta  # 下载beta版本 1.0.2-0
# 当prerelease版本已经稳定了，可以将prerelease版本设置为稳定版本
npm dist-tag add xxx@1.0.2-0 latest
npm dist-tag ls xxx  # latest: 1.0.2-0

推荐的工作流：
1.改动代码
2.提交这些改动
3.改变package.json中的版本号
4.使用conventional-changelog工具
5.提交 package.json和CHANGELOG.md文件
6.打标签tag
7.push代码

https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html