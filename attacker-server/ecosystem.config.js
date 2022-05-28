module.exports = {
  apps: [
    {
      name: 'attacker-server',
      append_env_to_name: true,
      script: 'server.js',
      watch: false,
      force: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
