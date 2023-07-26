# ASH SHOP

Project Full Stack E-Commerce

## Structured Projects ASH Shop

- [backend](./backend)

  - [config](./backend/config)
    - [index.js](./backend/config/index.js)
  - [controller](./backend/controller)
    - [productController.js](./backend/controller/productController.js)
  - [data](./backend/data)
    - [product.js](./backend/data/product.js)
    - [user.js](./backend/data/user.js)
  - [database](./backend/database)
    - [index.js](./backend/database/index.js)
  - [middleware](./backend/middleware)
    - [asyncHandler.js](./backend/middleware/asyncHandler.js)
    - [errorMiddleware.js](./backend/middleware/errorMiddleware.js)
  - [model](./backend/model)
    - [productModel.js](./backend/model/productModel.js)
    - [userModel.js](./backend/model/userModel.js)
    - [orderModel.js](./backend/model/orderModel.js)
  - [routes](./backend/routes)
    - [productRouter.js](./backend/routes/productRouter.js)
  - [app.js](./backend/app.js)
  - [seeder.js](./backend/seeder.js)

- [frontend](./frontend)
  - [node_modules](./frontend/node_modules)
  - [public](./frontend/public)
    - [images](./frontend/public/images)
  - [src](./frontend/src)
    - [components](./frontend/src/components)
      - [Header.jsx](./frontend/src/components/Header.jsx)
      - [Footer.jsx](./frontend/src/components/Footer.jsx)
      - [Product.jsx](./frontend/src/components/Product.jsx)
      - [Rating.jsx](./frontend/src/components/Rating.jsx)
    - [sample](./frontend/src/sample)
      - [product.js](./frontend/src/product.js)
      - [user.js](./frontend/src/user.js)
    - [screen](./frontend/src/screen)
      - [HomeScreen.jsx](./frontend/HomeScreend.jsx)
      - [ProductScreen.jsx](./frontend/ProductScreend.jsx)
    - [app.js](./frontend/src/app.js)
    - [app.scss](./frontend/src/app.scss)
    - [index.js](./frontend/src/index.js)
    - [reportWebVital.js](./frontend/src/reportWebVital.js)
    - [setupTests.js](./frontend/src/setupTests.js)
  - [package-lock.json](./frontend/src/package-lock.json)
  - [package.json](./frontend/src/package.json)
- [node_modules](./node_modules)
- [.gitignore](./gitignore)
- [package-lock.json](./package-lock.json)
- [package.json](./package.json)
- [README.md](./README.md)

## Dependencies

### For Front End

- react-bootstrap
- react-icons
- bootstrap
- sass
- react-router-dom

```
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
for more detail look at index.js
```

- react-router-bootstrap

```
This one use for change a into link for bootstrap class
<LinkContainer>
```

### For Backend

- expressjs

```
library of node js
```

- dotenv

```
libraty use for setup environment variable
```

- mongoose

```
mongoose as library at node js to connect to mongo db
```

- bcrypt

```
bcrypt as hash crypt
```

- colors

```
just so terminal have a color
```

### Command Terminal

```
 npm install *Dependencies*
or
 npm i *Dependencies*
```

## Authors

- [@muhafars](https://www.github.com/muhafars)
