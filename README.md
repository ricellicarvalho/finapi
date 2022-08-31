<div align="center" id="top"> 
  <img src="./assets/banner.png" alt="Finapi" />

&#xa0;

</div>

<h1 align="center">FinAPI - Financial</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=04D361&labelColor=000000?color=04D361&style=for-the-badge" alt="PRs welcome!" />
<img  alt="Repo size"  src="https://img.shields.io/github/repo-size/ricellicarvalho/finapi?color=04D361&style=for-the-badge">
<img  alt="GitHub top language"  src="https://img.shields.io/github/languages/top/ricellicarvalho/finapi?color=04d361&style=for-the-badge"> <img  alt="GitHub language count"  src="https://img.shields.io/github/languages/count/ricellicarvalho/finapi?color=04d361&style=for-the-badge"><img alt="Licença" src="https://img.shields.io/github/license/ricellicarvalho/finapi?color=04d361&style=for-the-badge">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/ricellicarvalho/finapi?color=04d361&style=for-the-badge" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/ricellicarvalho/finapi?color=04d361&style=for-the-badge" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/ricellicarvalho/finapi?color=04d361&style=for-the-badge" /> -->


</p>



<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#clipboard-requirements">Requirements</a> &#xa0; | &#xa0;  
  <a href="#heavy_check_mark-business-rules">Business Rules</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#warning-prerequisites">Prerequisites</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/ricellicarvalho" target="_blank">Author</a>
</p>

<br>

## :dart: About

Financial control API FinAPI. This application has Account management, being able to create an Account, make Deposits, Transfers, Withdrawals and Inquiries of a specific operation. To perform **requests** in the application, **Insomnia** or **Postman** must be used, importing the [file](insomnia_requests) of requests already existing in this directory.
Pay attention to the necessary parameters in the **Header**.

<p align="right">(<a href="#top">Back to top</a>)</p>

## :clipboard: Requirements

- [x] It must be possible to create an account;
- [x] It must be possible to fetch the customer's bank statement;
- [x] It must be possible to make a deposit;
- [x] It must be possible to make a withdrawal;
- [x] It must be possible to search for the customer's bank statement by date;
- [x] It must be possible to update customer account data;
- [x] It must be possible to obtain a customer's account data by CPF;
- [x] It must be possible to get account data from all customers;
- [x] It must be possible to delete an account;
- [x] It should be possible to return the balance.

<p align="right">(<a href="#top">Back to top</a>)</p>

## :heavy_check_mark: Business rules

- [x] It should not be possible to register an account with an existing CPF.
- [x] It should not be possible to fetch a statement from a non-existing account.
- [x] It should not be possible to deposit to a non-existing account.
- [x] It should not be possible to withdraw from a non-existing account.
- [x] It should not be possible to delete a non-existing account.
- [x] It should not be possible to withdraw when the balance is insufficient.

<p align="right">(<a href="#top">Back to top</a>)</p>

## :rocket: Technologies

The following tools were used in building the project:

- [Node.js](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)

<p align="right">(<a href="#top">Back to top</a>)</p>

## :warning: Prerequisites

Before starting :checkered_flag:, you need to have the [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed on your machine.

<p align="right">(<a href="#top">Back to top</a>)</p>

## :checkered_flag: Starting

```bash
# Clone this repository
$ git clone https://github.com/ricellicarvalho/finapi

# Enter the folder
$ cd finapi

# Install the dependencies
$ yarn

# To start the project
$ yarn start

# The app will launch in <http://localhost:3333>
```

<p align="right">(<a href="#top">Back to top</a>)</p>

## :memo: License

This project is under MIT license. See the [LICENSE](LICENSE.md) file for more details.

Made with :heart: by <a href="https://github.com/ricellicarvalho" target="_blank">Ricelli Carvalho</a>

&#xa0;

<p align="right">(<a href="#top">Back to top</a>)</p>