# "." files

Yeah, you read it right, **.**(dot) files. These files are hidden by default in your window explorer, but if you use them then they might come in handy for you. And also can increase your development productivity by 10-12%.
Seriously?
Yeah, that's what I feel like and I have observed it.

Now let's tell you the use case of all the different types of dotfiles that I have here.

## Usage

### `.php-cs-fixer.dist.php`
If you are building a PHP application or a package then it is always recommended to follow PSR guidelines to structure your code. To use it you first have to install [friendsofphp/php-cs-fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) as a dev dependency.

In your `composer.json` write the following lines
```json
"scripts": {
    "lint": "./vendor/bin/php-cs-fixer fix -vvv --dry-run --show-progress=dots",
    "lint:fix": "./vendor/bin/php-cs-fixer fix -vvv --show-progress=dots"
},
"scripts-descriptions": {
    "lint": "Run the php-cs-fixer script and list all the errors, which voiles defined rules.",
    "lint:fix": "Run the php-cs-fixer script and auto fix all the errors, which voiles defined rules."
}
```

Once added, you can use a command like `composer run-script --timeout=0 lint` to check all the linting issues.

### `.eslintrc.js`
If you are building a NodeJS/Typescript project then you should have this file. It helps you better organise the coding structure and streamline all the contributors to follow the same coding pattern and naming convention.  
It uses one addons namely [eslint-plugin-unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports) along with [eslint](https://www.npmjs.com/package/eslint). 

In your `package.json` write the following lines
```json
"scripts": {
  "lint": "eslint './**/*.{js,ts}' --quiet",
  "lint:fix": "eslint './**/*.{js,ts}' --quiet --fix",
  "lint:windows": "eslint ./**/*.{js,ts} --quiet",
  "lint:windows:fix": "eslint ./**/*.{js,ts} --quiet --fix"
}
```
Once added, you can use a command like `npm run lint` to check all the linting issues.

Please Note: _If you are building an app using ReactJS, etc, then you can also have a `.eslintrc.js` file but the rules might be different. (As I do not belong to that field so, I'm unable to provide the correct rules ATM)_