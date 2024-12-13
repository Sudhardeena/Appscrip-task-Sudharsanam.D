# E-Commerce Product Listing
This project is a Next.js-based e-commerce application ]. The application integrates external product data from the FakeStore API and uses React's Context API for state management.

## How It Works
- Data Fetching: Product and category data are fetched from the FakeStore API.
- State Management: The product data is managed using React's Context API (ProductContext), which provides global state across the app.
- User Interaction: Users can filter products by category and sort them by price using a dropdown. A sidebar is used for additional filtering options.
- Rendering: The ProductList component renders a list of products, while each product is displayed within a ProductCard.
