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
      - [Footer.jsx](./frontend/src/components/Footer.jsx)
      - [Header.jsx](./frontend/src/components/Header.jsx)
      - [Loader.jsx](./frontend/src/components/Loader.jsx)
      - [Message.jsx](./frontend/src/components/Header.jsx)
      - [Product.jsx](./frontend/src/components/Product.jsx)
      - [Rating.jsx](./frontend/src/components/Rating.jsx)
    - [sample](./frontend/src/sample)
      - [product.js](./frontend/src/sample/product.js)
      - [user.js](./frontend/src/sample/user.js)
    - [screen](./frontend/src/screen)
      - [HomeScreen.jsx](./frontend/screen/HomeScreen.jsx)
      - [ProductScreen.jsx](./frontend/screen/ProductScreen.jsx)
    - [slices](./frontend/src/slices)
      - [apiSlice.js](./frontend/slices/apiSlice.js)
      - [cartSlice.js](./frontend/slices/cartSlice.js)
      - [productApiSlice.js](./frontend/slices/productApiSlice.js)
    - [utils](./frontend/src/utils)
      - [cartUtils.js](./frontend/utils/cartUtils.js)
    - [app.js](./frontend/src/app.js)
    - [constant.js](./frontend/src/constant.js)
    - [index.js](./frontend/src/index.js)
    - [index.scss](./frontend/src/index.scss)
    - [reportWebVital.js](./frontend/src/reportWebVital.js)
    - [setupTests.js](./frontend/src/setupTests.js)
    - [store.js](./frontend/src/store.js)

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

- @reduxjs/toolkit

```
redux use slicer reducer
```

detail documentation : [Redux/Toolkit ](https://redux-toolkit.js.org/)

- react-redux

```
library use for redux
```

detail documentation : [React Redux ](https://react-redux.js.org/)

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
