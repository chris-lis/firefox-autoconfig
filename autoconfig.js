const github = {
    username: 'chris-lis',
    reponame: 'firefox-autoconfig',
    branch:   'main',
    filepath: 'config.js',
}

pref("autoadmin.global_config_url", `https://github.com/chris-lis/firefox-autoconfig/raw/main/config.js`);
pref("general.config.obscure_value", 0);
pref("general.config.sandbox_enabled", false);