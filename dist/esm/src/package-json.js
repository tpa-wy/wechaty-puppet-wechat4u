export const packageJson = {
    "name": "wechaty-puppet-wechat4u",
    "version": "1.14.1",
    "description": "Wechat4u Puppet for Wechaty",
    "type": "module",
    "exports": {
        ".": {
            "import": "./dist/esm/src/mod.js",
            "require": "./dist/cjs/src/mod.js"
        }
    },
    "types": "./dist/esm/src/mod.d.ts",
    "engines": {
        "node": ">=16",
        "npm": ">=7"
    },
    "scripts": {
        "build": "tsc && tsc -p tsconfig.cjs.json",
        "clean": "shx rm -fr dist/*",
        "dist": "npm-run-all clean build dist:commonjs",
        "dist:commonjs": "jq -n \"{ type: \\\"commonjs\\\" }\" > dist/cjs/package.json",
        "lint": "npm-run-all lint:es lint:ts lint:md",
        "lint:md": "markdownlint README.md",
        "lint:ts": "tsc --isolatedModules --noEmit",
        "lint:es": "eslint \"src/**/*.ts\" \"tests/**/*.spec.ts\" --ignore-pattern tests/fixtures/",
        "start": "cross-env NODE_OPTIONS=\"--no-warnings --loader=ts-node/esm\" node examples/ding-dong-bot.ts",
        "test": "npm run lint && npm run test:unit",
        "test:pack": "bash -x scripts/npm-pack-testing.sh",
        "test:unit": "cross-env NODE_OPTIONS=\"--no-warnings --loader=ts-node/esm\" tap \"src/**/*.spec.ts\" \"tests/**/*.spec.ts\""
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/wechaty/wechaty-puppet-wechat4u.git"
    },
    "keywords": [
        "chatie",
        "wechaty",
        "wechat",
        "chatbot",
        "bot",
        "sdk",
        "puppet",
        "wechat4u"
    ],
    "author": "Huan LI <zixia@zixia.net>",
    "license": "Apache-2.0",
    "bugs": {
        "url": "https://github.com/wechaty/wechaty-puppet-wechat4u/issues"
    },
    "devDependencies": {
        "@chatie/eslint-config": "^1.0.4",
        "@chatie/git-scripts": "^0.6.2",
        "@chatie/semver": "^0.4.7",
        "@chatie/tsconfig": "^4.6.2",
        "@types/promise-retry": "^1.1.3",
        "@types/xml2js": "^0.4.11",
        "memory-card": "^1.0.3"
    },
    "peerDependencies": {
        "wechaty-puppet": "^1.18.3"
    },
    "homepage": "https://github.com/wechaty/wechaty-puppet-wechat4u#readme",
    "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "fast-xml-parser": "^3.21.1",
        "promise-retry": "^2.0.1",
        "wechat4u": "^0.7.12",
        "xml2js": "^0.4.23"
    },
    "publishConfig": {
        "access": "public",
        "tag": "next"
    },
    "files": [
        "bin/",
        "dist/",
        "src/"
    ],
    "tap": {
        "check-coverage": false
    },
    "git": {
        "scripts": {
            "pre-push": "npx git-scripts-pre-push"
        }
    }
};
//# sourceMappingURL=package-json.js.map