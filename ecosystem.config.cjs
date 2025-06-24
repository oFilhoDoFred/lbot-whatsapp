module.exports = {
  apps: [
    {
      name: "BOT-COGU",
      script: "dist/app.js",
      interpreter: "node",
      instances: 1,
      autorestart: true,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
