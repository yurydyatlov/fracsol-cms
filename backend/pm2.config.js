let pm2config = {
    "apps": [
        {
            "name": "StrapiApp",
            "exec_mode": "cluster",
            "instances": "max",
            "autorestart": true,
            "args": 'start',
            "script": 'npm',
            "env": {
                "NODE_ENV": 'production',
            },
            "exp_backoff_restart_delay": 100,
        }
    ]
};
module.exports = pm2config;
