#  Food Ordering Web Application

A modern, fully responsive food ordering web application built with React.js and Vite. Features a clean, professional design with smooth animations and an attractive UI.

![FoodHub](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.3.1-purple)
![License](https://img.shields.io/badge/License-MIT-green)

##  Features

- **Premium Design**: Modern UI with gradient backgrounds, glassmorphism effects, and smooth animations
- ** Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- ** Shopping Cart**: Add items, update quantities, and manage your order
- ** Search Functionality**: Find your favorite dishes quickly
- ** Category Filtering**: Browse by food categories (Burgers, Pizza, Sushi, etc.)
- ** Product Ratings**: See ratings for each dish
- ** Checkout Flow**: Complete order process with delivery fee calculation
- ** Smooth Animations**: Fade-in, slide-in, and hover effects throughout
- ** Custom Design System**: Consistent colors, typography, and spacing

##  Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd d:/food_project-react
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Project Structure

```
food_project-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with cart badge
│   │   ├── Navbar.css
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── Hero.css
│   │   ├── Categories.jsx      # Category filter buttons
│   │   ├── Categories.css
│   │   ├── FoodMenu.jsx        # Food items grid with search
│   │   ├── FoodMenu.css
│   │   ├── Cart.jsx            # Shopping cart sidebar
│   │   ├── Cart.css
│   │   ├── Footer.jsx          # Footer with links
│   │   └── Footer.css
│   ├── App.jsx                 # Main app component
│   ├── App.css
│   ├── index.css               # Design system & global styles
│   └── main.jsx                # App entry point
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Design System

### Color Palette
- **Primary**: `#FF6B35` (Orange gradient)
- **Secondary**: `#4A90E2` (Blue)
- **Accent**: `#F7B731` (Gold)
- **Success**: `#2ECC71` (Green)
- **Danger**: `#E74C3C` (Red)

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Display Font**: Playfair Display (Google Fonts)

### Key Features
- CSS Custom Properties for theming
- Responsive grid system
- Utility classes for common patterns
- Smooth transitions and animations
- Custom scrollbar styling

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.3.1** - Build tool and dev server
- **CSS3** - Styling with modern features
- **Google Fonts** - Inter & Playfair Display
- **ESLint** - Code linting

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 968px
- **Large Desktop**: > 968px

## 🎭 Key Components

### Navbar
- Fixed position with scroll effect
- Mobile hamburger menu
- Cart badge with item count
- Smooth navigation links

### Hero Section
- Animated floating cards
- Gradient backgrounds
- Call-to-action buttons
- Statistics display

### Categories
- Dynamic color theming
- Active state management
- Responsive grid layout

### Food Menu
- Search functionality
- Category filtering
- Add to cart feature
- Rating display

### Shopping Cart
- Slide-in sidebar
- Quantity controls
- Price calculation
- Delivery fee logic
- Checkout button

### Footer
- Social media links
- Quick navigation
- Contact information
- Responsive grid

## 🌟 Features Highlights

1. **Premium Aesthetics**: Vibrant gradients, smooth shadows, and modern design
2. **Micro-animations**: Hover effects, slide-ins, and fade-ins for better UX
3. **Glassmorphism**: Modern frosted glass effects on cards and overlays
4. **Smart Cart**: Auto-shows when items are added, calculates delivery fees
5. **Free Delivery**: Automatic free delivery on orders over $30
6. **Accessibility**: ARIA labels and semantic HTML

## 🔧 Customization

### Adding New Menu Items
Edit `src/components/FoodMenu.jsx` and add items to the `menuItems` array:

```javascript
{
  id: 17,
  name: 'Your Dish',
  category: 'Category',
  price: 12.99,
  rating: 4.8,
  image: '🍔',
  description: 'Description here'
}
```

### Changing Colors
Modify CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #FF6B35;
  --secondary-color: #4A90E2;
  /* ... more variables */
}
```

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ for food lovers

## 🙏 Acknowledgments

- Google Fonts for typography
- React team for the amazing library
- Vite team for the blazing-fast build tool

---

**Enjoy your food ordering experience! 🍔🍕🍣**
