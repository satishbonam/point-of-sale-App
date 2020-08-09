# Point of Sale Application

##### A Billing system for small and medium scale retail bussiness

For a retail bussiness their are employee's who does billing in shop,vendor's who provides stock for the shop and admin who can manage employee's,vendor's and bussiness.

## Features

- [x] stock data
- [x] statistics of stock,sale\(charts\)
- [x] items to order from vendor\(automate using stock data\)
- [x] display all items on home page
- [x] add items to cart
- [x] checkout
- [x] pagination
- [ ] add payment interface
- [ ] add notifications'
- [ ] sorting,filtering

## Overview of POS Application:

1. User login has three roles(employee,vendor,admin)

   ![N|Solid](https://imgur.com/FSh5A0K.png)

2) Employee can access sales dashboard,stats,stocks and orders.Only employee can generate bills.

   ![N|Solid](https://imgur.com/RpyHSrv.png)

3. Visualization of present day bills and bussiness flow.(only employee and admin can access)

   ![N|Solid](https://imgur.com/8zEglPO.png)

4. Vendor can access orders for the stocks.As soon as stock is below certain quantity,that stock is automated for order for the corresponding vendor.

   ![N|Solid](https://imgur.com/lagh4BV.png)

5. All the stocks can be viewed here.

   ![N|Solid](https://imgur.com/oMMY4Gf.png)

## About The Project

### Built With

- Frontend
  - [React](https://reactjs.org/)
  - [Redux](https://redux.js.org/)
  - [Bootstrap](https://getbootstrap.com/)
- Backend
  - [Python](https://www.python.org/)
  - [Flask](https://flask.palletsprojects.com/en/1.1.x/)
  - [MySQL](https://www.mysql.com/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm

```sh
npm install npm@latest -g
```

- pip

```sh
sudo apt install python-pip
sudo pip install virtualenv
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/satishbonam/point-of-sale-App.git
```

2. For Frontend,install NPM packages

```sh
npm install
```

3. For Backend,create virtual environment and install pip packages from requirements.txt

```
virtualenv venv
pip install -r requirements.txt
```
