# Changelog

All notable changes to `croft` will be documented in this file.

## 0.3.4 - 2025-05-31

- [feat: add new Croft tool to create an MCP resource from a stub](https://github.com/usecroft/croft-laravel/commit/57ca729e3733a3d811ffb0824f7373880720f6a5)

## 0.3.3 - 2025-05-31

- Enable setting of `resources` in the Croft config file: `croft.php`

## 0.3.2 - 2025-05-08

- Allow inertiaJS docs to be included in composer package

## 0.3.1 - 2025-05-08

- Adds InertiaJS docs tool as default tool in config

## 0.3.0 - 2025-05-08

- Adds alpha Inertia JS docs tool as example for other docs tools
- Fixes `screenshot_path` tool not detecting Browsershot support correctly
- Fixes #2 with clients being too likely to try and create a croft tool when not needed
- Adds 'server instructions' support so you can say what the server as a whole is useful for
- Adds 'debug mode' to artisan command

**Full Changelog**: https://github.com/ashleyhindle/croft/compare/0.2.3...0.3.0

## 0.2.3 - 2025-04-26

- Add get current date and time tool

## 0.2.2 - 2025-04-20

- Fix 'result key undefined' error when the client sends us dodgy data

## 0.2.1 - 2025-04-20

### What's Changed

* Create tool using Croft by @JordanDalton in https://github.com/ashleyhindle/croft/pull/1

### New Contributors

* @JordanDalton made their first contribution in https://github.com/ashleyhindle/croft/pull/1

**Full Changelog**: https://github.com/ashleyhindle/croft/compare/0.2.0...0.2.1

## 0.2.0 - 2025-04-20

- Improve error responses

## 0.1.1 - 2025-04-20

- Improve error responses

## 0.1.0 - 2025-04-19

- Changes screenshot tool to 'in-IDE' image viewing now Cursor supports it in their latest version
- Adds Laravel Folio routes to the route list tool (if installed)

## 0.0.11 - 2025-04-18

- Disable 'display_errors' as it can break JSON RPC if a bad tool gets in the way

## 0.0.10 - 2025-04-18

- don't return from `log()`

## 0.0.9 - 2025-04-18

- Improve ping handling

## 0.0.8 - 2025-04-18

- Disable trigger_error log as it can break JSON RPC

## 0.0.7 - 2025-04-18

- add handleresponse to server

## 0.0.6 - 2025-04-18

- Change 'log' to trigger_error

## 0.0.5 - 2025-04-18

- Fix 'log()' in Server

## 0.0.4 - 2025-04-18

- fflush to ensure bytes written
- log to error_log rather than random file
- remove herd dump function

**Full Changelog**: https://github.com/ashleyhindle/croft/compare/0.0.3...0.0.4
