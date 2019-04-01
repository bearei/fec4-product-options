# Scaled and Deployed an existing service - Product Options Service for a site that sells outdoor recreational equipment

This service displays each product’s details and its selection of variations - which includes title, brand, shipment, type of color, size

## Related Projects

  - https://github.com/hrr36-fec4/fec4-reviews
  - https://github.com/hrr36-fec4/fec4-related-items-and-size-chart

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. Ensure that MariaDB is installed and running on your computer (with homebrew - `brew services start mariadb`).
2. [Install the project's dependencies](#installing-dependencies).
3. Open three terminal tabs for each of these processes: `brew services start mariadb`, `npm run dev:react`, and `npm start`.
4. Run tests with `npm run test`.
5. Navigate to `http://localhost:3001` to view the service.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
