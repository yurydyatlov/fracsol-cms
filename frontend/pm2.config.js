let pm2config = {
    "apps": [
      {
        "name": "NuxtApp",
        "exec_mode": "cluster",
        "instances": "max",
        "autorestart": true,
        "args": 'start',
        "env": {
          "API_URL": "https://dev-strapi.onyxconnects.io/"
        }
      }
    ]
};

module.exports = pm2config;
