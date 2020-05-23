---
description: Basic POS application for small scale Business
---

# Point Of Sale Application

## Features 

* [ ] stock data
* [ ] statistics of stock,sale\(charts\)
* [ ] items to order from vendor\(automate using stock data\)
* [ ] display all items on home page
* [ ] add items to cart
* [ ] checkout

## Api-Back-End

### categories:

* Lentils
* Biscuits
* Milk Products
* other-add category from front end

| category | item | price | stock\(kg/items\) |
| :--- | :--- | :--- | :--- |
| Lentils | dal | 200 | 2000 |

{% api-method method="get" host="" path="/home" %}
{% api-method-summary %}
Get All Stock
{% endapi-method-summary %}

{% api-method-description %}
get all stocks from data base
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
[
    {
        "category": "lentils",
        "item": "dal",
        "price": "200",
        "stock": "2000"
    },
    {
        "category": "lentils",
        "item": "dal",
        "price": "200",
        "stock": "2000"
    },
]
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



