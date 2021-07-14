let pm2config = {
    "apps": [
      {
        "name": "NuxtApp",
        "exec_mode": "cluster",
        "instances": "max",
        "autorestart": true,
        "args": 'start',
        "script": './node_modules/nuxt/bin/nuxt.js',
        "env": {
          "API_URL": "http://dev2-api.digitweb.online"
        }
      }
    ]
};

module.exports = pm2config;
