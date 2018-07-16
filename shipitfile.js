module.exports = function (shipit) {
    require('shipit-deploy')(shipit);
    shipit.initConfig({
        default: {
            workspace: '/Users/yaoyixiang/Documents/workspace/shipit-test',
            deployTo: '/root/apps',
            repositoryUrl: 'https://github.com/CRAZYFAKE/shipit-test.git',
            ignores: ['.git', 'node_modules'],
            keepReleases: 2,
            deleteOnRollback: false,
            key: '/path/to/key',
            shallowClone: true
        },
        staging: {
            servers: ['user@'],
            branch: 'master'
        }
    });
}